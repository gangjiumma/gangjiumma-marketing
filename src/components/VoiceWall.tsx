"use client";

// src/components/VoiceWall.tsx
// 강쥐엄마 소통 창구 — 작성 폼 + 실시간 카드 리스트
// - Supabase Realtime 으로 새 글이 올라오면 카드가 위에서 스르르 떠오름
// - 좋아요(하트): 브라우저 기억(localStorage) 1인 1좋아요 + RPC 원자적 +1 + 실시간 반영
// - 무한스크롤: 20개씩 로드 (IntersectionObserver)
// - 욕설 필터(작성 차단) + 허니팟(스팸 봇 차단)
// - is_visible=false 인 글은 애초에 조회/실시간에서 빠짐 (마음이가 Dashboard에서 숨김)

import { useEffect, useRef, useState, useCallback } from "react";
import { Send, MessageCircleHeart, Sparkles, Heart } from "lucide-react";
import { supabase, type FeedbackEntry } from "@/lib/supabase";

const PAGE_SIZE = 20;
const LIKED_KEY = "gangji_voice_liked"; // localStorage 키

// ─────────────────────────────────────────────────────────────
// 욕설/스팸 필터 — ✏️ 단어 추가/수정은 여기서
// 의도적으로 '보수적'으로 운영: 명백한 욕설/스팸만 차단.
// 반려 커뮤니티 정상어(예: 강아지 "새끼", 펫 이름 "토토")는 일부러 제외.
// 애매한 글은 차단하지 말고, 마음이가 Dashboard에서 직접 숨기는 게 안전.
// ─────────────────────────────────────────────────────────────
const BANNED_WORDS = [
  // 명백한 욕설만
  "씨발", "시발", "씨바알", "씨팔", "병신", "지랄", "존나", "존니",
  "개새끼", "좆", "닥쳐", "엿먹어", "미친놈", "미친년", "죽어버려",
  "fuck", "shit", "bitch", "asshole", "dick",
  // 명백한 스팸
  "카지노", "바카라", "도박사이트", "성인용품", "비아그라", "불법사이트",
];

// 공백만 제거 + 소문자화 (⭐ 한글은 절대 지우지 않음)
function normalize(s: string) {
  return s.replace(/\s+/g, "").toLowerCase();
}

function hasBannedWord(text: string) {
  const n = normalize(text);
  return BANNED_WORDS.some((w) => {
    const nw = normalize(w);
    return nw.length > 0 && n.includes(nw); // 빈 문자열 매칭 방지
  });
}

// ─────────────────────────────────────────────────────────────
// 상대 시간 표기
// ─────────────────────────────────────────────────────────────
function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "방금 전";
  if (m < 60) return `${m}분 전`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}시간 전`;
  const d = Math.floor(h / 24);
  if (d < 7) return `${d}일 전`;
  const date = new Date(iso);
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
}

// ─────────────────────────────────────────────────────────────
// 좋아요 기억 (localStorage) — 이 브라우저에서 누른 글 id 집합
// ─────────────────────────────────────────────────────────────
function readLikedSet(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(LIKED_KEY);
    return new Set<string>(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set();
  }
}

function writeLikedSet(set: Set<string>) {
  try {
    window.localStorage.setItem(LIKED_KEY, JSON.stringify([...set]));
  } catch {
    /* 저장 실패해도 무시 */
  }
}

export default function VoiceWall() {
  const [entries, setEntries] = useState<FeedbackEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());

  const [nickname, setNickname] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [honeypot, setHoneypot] = useState(""); // 봇용 미끼 (사람은 안 채움)

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const seenIds = useRef<Set<string>>(new Set());
  const offsetRef = useRef(0); // 다음에 불러올 시작 위치
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // 새 글을 리스트 맨 위에 추가 (중복 방지)
  const prepend = useCallback((row: FeedbackEntry) => {
    if (seenIds.current.has(row.id)) return;
    seenIds.current.add(row.id);
    setEntries((prev) => [row, ...prev]);
    setTotalCount((c) => c + 1);
  }, []);

  // 한 묶음(20개) 불러오기
  const loadPage = useCallback(async () => {
    const from = offsetRef.current;
    const to = from + PAGE_SIZE - 1;

    const { data, error } = await supabase
      .from("feedback_wall")
      .select("id, nickname, title, content, likes, created_at")
      .eq("is_visible", true)
      .order("created_at", { ascending: false })
      .range(from, to);

    if (error || !data) return false;

    const fresh = (data as FeedbackEntry[]).filter((d) => !seenIds.current.has(d.id));
    fresh.forEach((d) => seenIds.current.add(d.id));
    if (fresh.length > 0) setEntries((prev) => [...prev, ...fresh]);

    offsetRef.current += data.length;
    if (data.length < PAGE_SIZE) setHasMore(false);
    return true;
  }, []);

  // 초기 로드 + 전체 카운트 + 실시간 구독
  useEffect(() => {
    let active = true;
    setLikedIds(readLikedSet());

    (async () => {
      // 전체 글 수 (헤더 표시용)
      const { count } = await supabase
        .from("feedback_wall")
        .select("id", { count: "exact", head: true })
        .eq("is_visible", true);
      if (active && typeof count === "number") setTotalCount(count);

      await loadPage();
      if (active) setLoading(false);
    })();

    const channel = supabase
      .channel("feedback_wall_realtime")
      // 새 글 → 맨 위로 떠오름
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "feedback_wall" },
        (payload) => {
          const row = payload.new as FeedbackEntry & { is_visible?: boolean };
          if (row?.is_visible === false) return;
          offsetRef.current += 1; // 위에 하나 끼었으니 페이지 경계 보정
          prepend({
            id: row.id,
            nickname: row.nickname,
            title: row.title,
            content: row.content,
            likes: row.likes ?? 0,
            created_at: row.created_at,
          });
        }
      )
      // 좋아요 수 변경 → 다른 사람 화면에서도 숫자 갱신
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "feedback_wall" },
        (payload) => {
          const row = payload.new as FeedbackEntry & { is_visible?: boolean };
          setEntries((prev) =>
            prev.map((e) => (e.id === row.id ? { ...e, likes: row.likes ?? e.likes } : e))
          );
        }
      )
      .subscribe();

    return () => {
      active = false;
      supabase.removeChannel(channel);
    };
  }, [prepend, loadPage]);

  // 무한스크롤 — sentinel 보이면 다음 묶음 로드
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || loading) return;

    const io = new IntersectionObserver(
      async (ents) => {
        if (ents[0].isIntersecting && hasMore && !loadingMore) {
          setLoadingMore(true);
          await loadPage();
          setLoadingMore(false);
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [loading, hasMore, loadingMore, loadPage]);

  // 좋아요 누르기 — 브라우저 기억 1인 1좋아요 + RPC 원자적 +1
  const handleLike = useCallback(
    async (id: string) => {
      if (likedIds.has(id)) return; // 이미 누름

      // 낙관적 반영
      setEntries((prev) => prev.map((e) => (e.id === id ? { ...e, likes: e.likes + 1 } : e)));
      const next = new Set(likedIds);
      next.add(id);
      setLikedIds(next);
      writeLikedSet(next);

      const { data, error } = await supabase.rpc("increment_feedback_like", { p_id: id });
      if (error) {
        // 실패 시 롤백
        setEntries((prev) => prev.map((e) => (e.id === id ? { ...e, likes: Math.max(0, e.likes - 1) } : e)));
        const rolled = new Set(next);
        rolled.delete(id);
        setLikedIds(rolled);
        writeLikedSet(rolled);
      } else if (typeof data === "number") {
        // 서버 실제값으로 동기화
        setEntries((prev) => prev.map((e) => (e.id === id ? { ...e, likes: data } : e)));
      }
    },
    [likedIds]
  );

  const handleSubmit = async () => {
    setErrorMsg("");
    setSuccessMsg("");

    // 허니팟 — 봇이면 조용히 성공한 척하고 버림
    if (honeypot.trim() !== "") {
      setSuccessMsg("고마워요! 잘 받았어요 🐾");
      setNickname("");
      setTitle("");
      setContent("");
      return;
    }

    const nn = nickname.trim();
    const tt = title.trim();
    const cc = content.trim();

    if (!nn || !tt || !cc) {
      setErrorMsg("닉네임, 제목, 내용을 모두 채워주세요.");
      return;
    }
    if (nn.length > 20) return setErrorMsg("닉네임은 20자 이내로 부탁해요.");
    if (tt.length > 60) return setErrorMsg("제목은 60자 이내로 부탁해요.");
    if (cc.length > 1000) return setErrorMsg("내용은 1000자 이내로 부탁해요.");

    if (hasBannedWord(`${nn} ${tt} ${cc}`)) {
      setErrorMsg("조금 더 따뜻한 표현으로 부탁드려요 🙏");
      return;
    }

    setSubmitting(true);
    try {
      const { data, error } = await supabase
        .from("feedback_wall")
        .insert({ nickname: nn, title: tt, content: cc })
        .select("id, nickname, title, content, likes, created_at")
        .single();

      if (error) {
        setErrorMsg("잠시 후 다시 시도해주세요. 🥲");
      } else if (data) {
        prepend(data as FeedbackEntry); // 내 글 즉시 반영 (실시간 echo는 중복 제거됨)
        setNickname("");
        setTitle("");
        setContent("");
        setSuccessMsg("고마워요! 소중한 한마디 잘 받았어요 🐾");
      }
    } catch {
      setErrorMsg("잠시 후 다시 시도해주세요. 🥲");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* 떠오르는 카드 애니메이션 (globals.css 안 건드리려고 컴포넌트에 동봉) */}
      <style>{`
        @keyframes voiceFloatIn {
          from { opacity: 0; transform: translateY(-14px) scale(0.985); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .voice-card { animation: voiceFloatIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      {/* ── 작성 폼 ───────────────────────────────────────── */}
      <div className="bg-white rounded-3xl p-6 md:p-9 shadow-card border border-line">
        <div className="flex items-center gap-2 mb-6">
          <MessageCircleHeart className="w-5 h-5 md:w-6 md:h-6 text-brand" strokeWidth={2.2} />
          {/* ✏️ 카피 — 폼 제목 */}
          <h3 className="text-lg md:text-xl font-black text-ink-1">한마디 남기기</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-ink-2 mb-2">닉네임</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              maxLength={20}
              placeholder="강쥐맘"
              className="w-full px-4 py-3 rounded-2xl border border-line bg-surface-subtle text-ink-1 placeholder:text-ink-3/60 focus:outline-none focus:border-brand focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-ink-2 mb-2">제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={60}
              placeholder="이런 기능이 있으면 좋겠어요"
              className="w-full px-4 py-3 rounded-2xl border border-line bg-surface-subtle text-ink-1 placeholder:text-ink-3/60 focus:outline-none focus:border-brand focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-ink-2 mb-2">내용</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              maxLength={1000}
              rows={4}
              placeholder="바라는 점, 아쉬운 점, 응원 무엇이든 편하게 남겨주세요. 제가 다 읽어요!"
              className="w-full px-4 py-3 rounded-2xl border border-line bg-surface-subtle text-ink-1 placeholder:text-ink-3/60 focus:outline-none focus:border-brand focus:bg-white transition-colors resize-none leading-relaxed"
            />
            <p className="text-right text-xs text-ink-3 mt-1">{content.length}/1000</p>
          </div>

          {/* 허니팟 (사람 눈에 안 보임) */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
          />

          {errorMsg && <p className="text-sm font-medium text-brand">{errorMsg}</p>}
          {successMsg && <p className="text-sm font-medium text-lime">{successMsg}</p>}

          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-brand text-white font-extrabold text-base md:text-lg rounded-2xl shadow-brand hover:bg-brand-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" strokeWidth={2.3} />
            <span>{submitting ? "보내는 중..." : "마음 남기기"}</span>
          </button>
        </div>
      </div>

      {/* ── 실시간 리스트 ─────────────────────────────────── */}
      <div className="mt-14 md:mt-20">
        <div className="flex items-center justify-center gap-2 mb-8 md:mb-10">
          <Sparkles className="w-5 h-5 text-brand" strokeWidth={2.2} />
          {/* ✏️ 카피 — 리스트 헤더 */}
          <h3 className="text-xl md:text-2xl font-black text-ink-1">
            지금까지 모인 목소리
            {totalCount > 0 && <span className="text-brand"> {totalCount}</span>}
          </h3>
        </div>

        {loading ? (
          <p className="text-center text-ink-3">불러오는 중...</p>
        ) : entries.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-base md:text-lg text-ink-2 font-medium">
              아직 첫 목소리를 기다리고 있어요.
              <br />
              <span className="text-brand font-bold">가장 먼저 한마디</span> 남겨주실래요?
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {entries.map((e, i) => {
                const liked = likedIds.has(e.id);
                return (
                  <div
                    key={e.id}
                    className="voice-card bg-white rounded-3xl p-6 md:p-7 shadow-card border border-line flex flex-col"
                    style={{ animationDelay: i < 8 ? `${i * 0.06}s` : "0s" }}
                  >
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FFF1EA] text-brand text-sm font-black shrink-0">
                          {e.nickname.slice(0, 1)}
                        </span>
                        <span className="font-bold text-ink-2 text-sm truncate">{e.nickname}</span>
                      </div>
                      <span className="text-xs text-ink-3 shrink-0">{timeAgo(e.created_at)}</span>
                    </div>
                    <h4 className="text-base md:text-lg font-black text-ink-1 mb-2 leading-snug break-words">
                      {e.title}
                    </h4>
                    <p className="text-sm md:text-base text-ink-3 leading-relaxed whitespace-pre-wrap break-words">
                      {e.content}
                    </p>

                    {/* 좋아요 */}
                    <div className="mt-4 pt-3 border-t border-line flex justify-end">
                      <button
                        type="button"
                        onClick={() => handleLike(e.id)}
                        disabled={liked}
                        aria-label="좋아요"
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold transition-all duration-200 ${
                          liked
                            ? "bg-[#FFF1EA] text-brand cursor-default"
                            : "bg-surface-subtle text-ink-3 hover:bg-[#FFF1EA] hover:text-brand active:scale-95"
                        }`}
                      >
                        <Heart
                          className="w-4 h-4"
                          strokeWidth={2.3}
                          fill={liked ? "currentColor" : "none"}
                        />
                        <span>{e.likes}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 무한스크롤 sentinel */}
            <div ref={sentinelRef} className="h-10" />
            {loadingMore && (
              <p className="text-center text-ink-3 text-sm mt-2">더 불러오는 중...</p>
            )}
            {!hasMore && entries.length >= PAGE_SIZE && (
              <p className="text-center text-ink-3 text-sm mt-4">마지막까지 다 봤어요 🐾</p>
            )}
          </>
        )}
      </div>
    </>
  );
}
