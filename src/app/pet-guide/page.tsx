"use client";
// src/app/pet-guide/page.tsx
// 케이펫페어 수원 시즌2 — AI 부스 가이드 (강쥐엄마 제공)
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import {
  Search, Send, MapPin, Globe, Camera, X,
  Sparkles, MessageCircle, Compass, ListFilter, ArrowRight, Loader2, PawPrint,
} from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { ScrollProgressBar } from "@/components/ScrollIndicator";
import { EXHIBITORS, CATEGORIES, FAIR, type Exhibitor } from "@/data/petGuideData";

const DOWNLOAD_URL = "https://gangjiumma.github.io/gangjiumma_app_download/";

const CAT_COLOR: Record<string, string> = {
  "영양제/건강": "#16a34a", "사료": "#d97706", "간식": "#f97316",
  "의류/패션": "#9333ea", "유모차/이동": "#2563eb", "미용/위생": "#0891b2",
  "침대/매트": "#7c3aed", "장난감": "#db2777", "식기/급여": "#0d9488",
  "가전": "#475569", "보험/금융": "#0284c7", "단체/입양": "#dc2626",
  "사진/굿즈": "#ca8a04", "기타": "#6b7280",
};
const catColor = (c: string) => CAT_COLOR[c] || "#6b7280";

const CHIPS = ["강아지 사료", "유모차·카시트", "영양제", "수제간식", "샴푸·미용", "강아지 옷", "펫보험", "장난감"];

// 중앙 행사·시설 박스 (PDF 실제 좌표, 메쎄이상 주최 행사존)
const ZONE_BOXES: { x: number; y: number; w: number; h: number; lines: string[] }[] = [
  { x: 357, y: 427, w: 42, h: 127, lines: ["쉼터1"] },
  { x: 424, y: 427, w: 42, h: 127, lines: ["카페테", "리아"] },
  { x: 491, y: 427, w: 42, h: 127, lines: ["멍드컵", "도기챔프"] },
  { x: 558, y: 427, w: 42, h: 127, lines: ["큐푸드", "식품"] },
  { x: 624, y: 427, w: 42, h: 127, lines: ["쉼터2"] },
];

// 배치도 랜드마크 (PDF 좌표, viewBox 1191x842) — kind: zone(시설) / rest(화장실) / entrance(입구)
const LANDMARKS: { x: number; y: number; label: string; kind: "zone" | "rest" | "entrance" }[] = [
  { x: 305, y: 457, label: "경품지급처", kind: "zone" },
  { x: 716, y: 457, label: "경품지급처", kind: "zone" },
  { x: 631, y: 761, label: "인포데스크", kind: "zone" },
  { x: 502, y: 761, label: "현황판", kind: "zone" },
  { x: 496, y: 226, label: "화장실", kind: "rest" },
  { x: 346, y: 759, label: "화장실", kind: "rest" },
  { x: 773, y: 757, label: "화장실", kind: "rest" },
  { x: 470, y: 812, label: "▲ 금·일 입구", kind: "entrance" },
  { x: 735, y: 812, label: "▲ 토요일 입구", kind: "entrance" },
];

type Msg = { role: "user" | "assistant"; content: string; matches?: Exhibitor[] };

const CSS = `
@keyframes pgPulse { 0%{r:9;opacity:1} 70%{r:26;opacity:0} 100%{r:26;opacity:0} }
.pg-pulse { animation: pgPulse 1.6s ease-out infinite; }
.pg-scroll::-webkit-scrollbar { height:6px; width:6px; }
.pg-scroll::-webkit-scrollbar-thumb { background:#e5e7eb; border-radius:9px; }
`;

export default function PetGuidePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [mapCat, setMapCat] = useState<string | null>(null); // 지도 범례 필터
  const [zoom, setZoom] = useState(1);
  const mapBoxRef = useRef<HTMLDivElement>(null);
  const mapCats = useMemo(
    () => CATEGORIES.filter((c) => EXHIBITORS.some((e) => e.category === c)),
    []
  );

  // ---- AI 챗봇 ----
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "안녕! 케이펫페어 수원 가이드야 🐾 169개 부스 중에 뭐 찾는지 말해줘. (예: \"관절 영양제\", \"강아지 유모차\", \"수제간식\")",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // 채팅 컨테이너 "내부"만 맨 아래로 (페이지는 안 움직임)
  useEffect(() => {
    const el = chatScrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, loading]);

  const findMatches = (text: string): Exhibitor[] => {
    const codes = (text.match(/\b([A-M]-\d{1,2})\b/g) || []).map((c) => c.toUpperCase());
    const seen = new Set<string>();
    const out: Exhibitor[] = [];
    for (const code of codes) {
      const ex = EXHIBITORS.find((e) => e.booths.includes(code));
      if (ex && !seen.has(ex.id)) { seen.add(ex.id); out.push(ex); }
    }
    return out;
  };

  const send = useCallback(
    async (text: string) => {
      const q = text.trim();
      if (!q || loading) return;
      const next: Msg[] = [...msgs, { role: "user", content: q }];
      setMsgs(next);
      setInput("");
      setLoading(true);
      try {
        const res = await fetch("/api/pet-guide/chat", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ messages: next.map((m) => ({ role: m.role, content: m.content })) }),
        });
        const data = await res.json();
        const reply: string = data.reply || "음, 다시 물어봐줄래?";
        setMsgs([...next, { role: "assistant", content: reply, matches: findMatches(reply) }]);
      } catch {
        setMsgs([...next, { role: "assistant", content: "잠깐 문제가 생겼어. 다시 시도해줘." }]);
      } finally {
        setLoading(false);
      }
    },
    [msgs, loading]
  );

  // ---- 지도 선택 시 가운데로 스크롤 ----
  useEffect(() => {
    if (!selected || !mapBoxRef.current) return;
    const ex = EXHIBITORS.find((e) => e.id === selected);
    if (!ex) return;
    const box = mapBoxRef.current;
    const w = box.clientWidth * zoom;
    const h = (w * 842) / 1191;
    box.scrollTo({
      left: (ex.x / 1191) * w - box.clientWidth / 2,
      top: (ex.y / 842) * h - box.clientHeight / 2,
      behavior: "smooth",
    });
  }, [selected, zoom]);

  const goMap = (id: string) => {
    setSelected(id);
    document.getElementById("pg-map")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ---- 디렉토리 ----
  const [activeCat, setActiveCat] = useState("전체");
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const kw = q.trim().toLowerCase();
    return EXHIBITORS.filter((e) => {
      if (activeCat !== "전체" && e.category !== activeCat) return false;
      if (!kw) return true;
      return (
        e.brand.toLowerCase().includes(kw) ||
        e.company.toLowerCase().includes(kw) ||
        e.items.toLowerCase().includes(kw) ||
        e.booths.join(" ").toLowerCase().includes(kw)
      );
    });
  }, [activeCat, q]);

  const selectedEx = selected ? EXHIBITORS.find((e) => e.id === selected) : null;

  return (
    <main className="min-h-screen bg-white">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <ScrollProgressBar />

      {/* ═══════ HERO ═══════ */}
      <section className="bg-brand-tint50 pt-16 md:pt-24 pb-14 md:pb-20">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            <p className="inline-flex items-center gap-1.5 text-sm md:text-base text-brand font-bold mb-4">
              <Sparkles size={15} strokeWidth={2.4} /> 강아지 전용 AI · 강쥐엄마
            </p>
            <h1 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
              케이펫페어 수원
              <br />
              <span className="text-brand">AI 부스 가이드</span>
            </h1>
            <p className="mt-5 md:mt-6 text-base md:text-lg text-ink-3 leading-relaxed">
              {FAIR.dates} · {FAIR.hall}
              <br />
              169개 부스, 뭘 찾는지 말만 하세요. AI가 부스까지 안내해드려요.
            </p>
          </FadeInSection>

          <FadeInSection delay={150}>
            <div className="mt-8 flex justify-center gap-2 text-[13px] md:text-sm font-bold">
              <a href="#pg-chat" className="bg-white text-ink-2 border border-brand-tint200 rounded-xl px-4 py-2.5 hover:bg-brand-tint50">AI한테 묻기</a>
              <a href="#pg-map" className="bg-white text-ink-2 border border-brand-tint200 rounded-xl px-4 py-2.5 hover:bg-brand-tint50">부스 지도</a>
              <a href="#pg-dir" className="bg-white text-ink-2 border border-brand-tint200 rounded-xl px-4 py-2.5 hover:bg-brand-tint50">업체 목록</a>
            </div>
          </FadeInSection>

          <FadeInSection delay={250}>
            <div className="mt-7 max-w-xl mx-auto bg-white border border-brand-tint200 rounded-2xl shadow-soft p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-sm md:text-[15px] font-bold text-ink-1 flex items-center gap-1.5 text-center sm:text-left leading-snug">
                <PawPrint size={16} className="text-brand shrink-0" strokeWidth={2.2} />
                반려견 AI, 강GPT로 일상의 질문을 채워보세요!
              </p>
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 bg-brand text-white font-extrabold text-sm rounded-xl px-5 py-2.5 shadow-brand hover:bg-brand-dark hover:-translate-y-0.5 transition-all duration-200"
              >
                앱 다운로드 <ArrowRight size={15} strokeWidth={2.4} />
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════ AI 챗봇 ═══════ */}
      <section id="pg-chat" className="bg-white py-16 md:py-24 scroll-mt-2">
        <div className="max-w-2xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-8 md:mb-10">
              <p className="text-sm md:text-base text-brand font-bold mb-3">무엇이든 물어보세요</p>
              <h2 className="text-3xl md:text-4xl font-black text-ink-1 tracking-tighter leading-tight">
                AI한테 물어보기
              </h2>
              <p className="mt-4 text-base text-ink-3 leading-relaxed">
                원하는 상품·브랜드를 말하면, 169곳에서 골라 부스를 알려드려요.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={150}>
            <div className="border border-line rounded-3xl overflow-hidden bg-surface-subtle">
              <div ref={chatScrollRef} className="h-[360px] overflow-y-auto pg-scroll p-4 space-y-3">
                {msgs.map((m, i) => (
                  <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                    <div className="max-w-[85%]">
                      <div
                        className={
                          "rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap " +
                          (m.role === "user"
                            ? "bg-brand text-white rounded-br-md"
                            : "bg-white text-ink-1 border border-line rounded-bl-md")
                        }
                      >
                        {m.content}
                      </div>
                      {m.matches && m.matches.length > 0 && (
                        <div className="mt-2 space-y-2">
                          {m.matches.map((ex) => (
                            <ExhibitorCard key={ex.id} ex={ex} compact onMap={() => goMap(ex.id)} />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-line rounded-2xl rounded-bl-md px-3.5 py-2.5">
                      <Loader2 size={16} className="animate-spin text-brand" />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-2 overflow-x-auto pg-scroll px-4 pb-2 pt-1">
                {CHIPS.map((c) => (
                  <button key={c} onClick={() => send(c)} className="shrink-0 text-[12.5px] font-semibold bg-white border border-brand-tint200 text-brand rounded-full px-3 py-1.5 hover:bg-brand-tint50">
                    {c}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 border-t border-line bg-white p-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") send(input); }}
                  placeholder="예: 관절에 좋은 영양제 어디 있어?"
                  className="flex-1 bg-surface-subtle rounded-full px-4 py-2.5 text-sm text-ink-1 outline-none focus:ring-2 focus:ring-brand-tint200"
                />
                <button onClick={() => send(input)} disabled={loading || !input.trim()} className="shrink-0 w-10 h-10 rounded-full bg-brand text-white grid place-items-center disabled:opacity-40 hover:bg-brand-dark transition-colors" aria-label="보내기">
                  <Send size={17} />
                </button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════ 부스 지도 ═══════ */}
      <section id="pg-map" className="bg-white py-16 md:py-24 scroll-mt-2">
        <div className="max-w-2xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-8 md:mb-10">
              <p className="flex items-center justify-center gap-1.5 text-sm md:text-base text-brand font-bold mb-3">
                <Compass size={16} strokeWidth={2.4} /> 한눈에 보기
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-ink-1 tracking-tighter leading-tight">부스 지도</h2>
              <p className="mt-4 text-base text-ink-3 leading-relaxed">점을 누르면 업체 정보가 떠요. 색은 카테고리, 칩을 누르면 그 종류만 보여요.</p>
            </div>
          </FadeInSection>

          {/* 카테고리 색 범례 */}
          <FadeInSection delay={100}>
            <div className="flex flex-wrap justify-center gap-1.5 mb-4">
              {mapCats.map((c) => {
                const on = mapCat === c;
                return (
                  <button
                    key={c}
                    onClick={() => { setMapCat(on ? null : c); setSelected(null); }}
                    className={
                      "inline-flex items-center gap-1.5 text-[12px] font-semibold rounded-full pl-1.5 pr-2.5 py-1 border transition-colors " +
                      (on ? "bg-ink-1 text-white border-ink-1" : "bg-white text-ink-2 border-line hover:border-ink-3")
                    }
                  >
                    <span className="w-3 h-3 rounded-full" style={{ background: catColor(c) }} />
                    {c}
                  </button>
                );
              })}
              {mapCat && (
                <button onClick={() => setMapCat(null)} className="text-[12px] font-semibold text-ink-3 underline underline-offset-2 px-2 py-1">
                  전체보기
                </button>
              )}
            </div>
          </FadeInSection>

          <FadeInSection delay={150}>
            <div className="relative rounded-3xl border border-line bg-surface-subtle overflow-hidden">
              <div ref={mapBoxRef} className="overflow-auto pg-scroll" style={{ maxHeight: "62vh" }}>
                <svg viewBox={FAIR.mapViewBox} style={{ width: `${zoom * 100}%`, height: "auto", display: "block", minWidth: "100%" }}>
                  <rect x="0" y="0" width="1191" height="842" fill="#fafafa" />
                  {LANDMARKS.map((l, i) => {
                    if (l.kind === "entrance")
                      return <text key={i} x={l.x} y={l.y} textAnchor="middle" fontSize="15" fontWeight="700" fill="#9ca3af">{l.label}</text>;
                    const isRest = l.kind === "rest";
                    const w = l.label.length * 16 * 0.62 + 16;
                    return (
                      <g key={i}>
                        <rect x={l.x - w / 2} y={l.y - 13} width={w} height={26} rx={7} fill={isRest ? "#cbd5e1" : "#e9edf2"} opacity={0.92} />
                        <text x={l.x} y={l.y + 5} textAnchor="middle" fontSize="16" fontWeight={isRest ? 800 : 600} fill={isRest ? "#334155" : "#94a3b8"}>{l.label}</text>
                      </g>
                    );
                  })}
                  {/* 중앙 행사존 박스 */}
                  {ZONE_BOXES.map((z, i) => (
                    <g key={"z" + i}>
                      <rect x={z.x} y={z.y} width={z.w} height={z.h} rx={5} fill="#dbe7ff" stroke="#2563eb" strokeWidth={1.5} opacity={0.9} />
                      {z.lines.map((ln, j) => (
                        <text
                          key={j}
                          x={z.x + z.w / 2}
                          y={z.y + z.h / 2 + 5 + (j - (z.lines.length - 1) / 2) * 16}
                          textAnchor="middle"
                          fontSize="14"
                          fontWeight="700"
                          fill="#1d4ed8"
                        >
                          {ln}
                        </text>
                      ))}
                    </g>
                  ))}
                  {EXHIBITORS.map((e) => {
                    const isSel = e.id === selected;
                    return (
                      <g key={e.id} onClick={() => setSelected(e.id)} style={{ cursor: "pointer" }}>
                        {isSel && <circle cx={e.x} cy={e.y} r={9} fill={catColor(e.category)} className="pg-pulse" />}
                        <circle
                          cx={e.x} cy={e.y}
                          r={isSel ? 14 : 8}
                          fill={catColor(e.category)}
                          stroke="#fff"
                          strokeWidth={isSel ? 3 : 1.5}
                          opacity={(mapCat && e.category !== mapCat) ? 0.12 : (selected && !isSel ? 0.4 : 0.95)}
                        />
                        {isSel && (
                          <text x={e.x} y={e.y - 21} textAnchor="middle" fontSize="17" fontWeight="800" fill="#111827">
                            {e.brand} {e.booths[0]}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>

              <div className="absolute top-3 right-3 flex flex-col gap-1.5">
                <button onClick={() => setZoom((z) => Math.min(3, +(z + 0.6).toFixed(1)))} className="w-9 h-9 rounded-xl bg-white border border-line shadow-soft text-ink-1 text-lg font-bold grid place-items-center">+</button>
                <button onClick={() => setZoom((z) => Math.max(1, +(z - 0.6).toFixed(1)))} className="w-9 h-9 rounded-xl bg-white border border-line shadow-soft text-ink-1 text-xl font-bold grid place-items-center">−</button>
              </div>
            </div>
          </FadeInSection>

          {selectedEx && (
            <div className="mt-3">
              <ExhibitorCard ex={selectedEx} onMap={() => goMap(selectedEx.id)} />
            </div>
          )}
        </div>
      </section>

      {/* ═══════ 디렉토리 ═══════ */}
      <section id="pg-dir" className="bg-surface-subtle py-16 md:py-24 scroll-mt-2">
        <div className="max-w-2xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-8 md:mb-10">
              <p className="flex items-center justify-center gap-1.5 text-sm md:text-base text-brand font-bold mb-3">
                <ListFilter size={16} strokeWidth={2.4} /> 전체 보기
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-ink-1 tracking-tighter leading-tight">
                참가업체 {EXHIBITORS.length}곳
              </h2>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="flex items-center gap-2 bg-white border border-line rounded-full px-4 py-2.5 mb-3">
              <Search size={16} className="text-ink-3" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="브랜드·품목·부스코드 검색" className="flex-1 bg-transparent text-sm text-ink-1 outline-none" />
              {q && <button onClick={() => setQ("")}><X size={16} className="text-ink-3" /></button>}
            </div>

            <div className="flex gap-2 overflow-x-auto pg-scroll pb-2 mb-5">
              {["전체", ...CATEGORIES].map((c) => {
                const on = activeCat === c;
                return (
                  <button key={c} onClick={() => setActiveCat(c)} className={"shrink-0 text-[12.5px] font-semibold rounded-full px-3 py-1.5 border " + (on ? "bg-brand text-white border-brand" : "bg-white text-ink-2 border-line")}>
                    {c}
                  </button>
                );
              })}
            </div>
          </FadeInSection>

          {filtered.length === 0 ? (
            <p className="text-ink-3 text-sm py-10 text-center">검색 결과가 없어요.</p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-3">
              {filtered.map((ex) => (
                <ExhibitorCard key={ex.id} ex={ex} onMap={() => goMap(ex.id)} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═══════ 최종 CTA ═══════ */}
      <section className="bg-brand-tint50 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            <p className="inline-flex items-center gap-1.5 text-sm md:text-base text-brand font-bold mb-3">
              <Sparkles size={15} strokeWidth={2.4} /> 강아지 전용 AI · 강쥐엄마
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tightest leading-tight">
              우리 아이의 매일,
              <br />
              <span className="text-brand">더 가까이 더 오래</span>
            </h2>
            <p className="mt-6 md:mt-8 text-base md:text-xl text-ink-2 font-medium leading-relaxed">
              펫페어에서 고른 사료·간식, 우리 아이한테 맞는지 물어보세요.
              <br className="hidden md:block" />
              강쥐엄마는 우리 아이만 기억하는 강아지 전용 AI예요.
            </p>
            <div className="mt-10 md:mt-12">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 md:px-12 py-5 md:py-6 bg-brand text-white font-extrabold text-lg md:text-2xl rounded-2xl shadow-brand hover:bg-brand-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>강아지 전용 AI, 강쥐엄마 써보기</span>
                <ArrowRight className="w-6 h-6" strokeWidth={2.4} />
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}

/* ===== 업체 카드 ===== */
function ExhibitorCard({ ex, compact, onMap }: { ex: Exhibitor; compact?: boolean; onMap?: () => void }) {
  return (
    <div className={"bg-white border border-line rounded-2xl p-3.5 " + (compact ? "" : "shadow-soft")}>
      <div className="flex items-center gap-1.5 flex-wrap">
        <span className="font-bold text-ink-1 text-[15px]">{ex.brand}</span>
        {ex.booths.map((b) => (
          <span key={b} className="text-[11px] font-bold text-brand bg-brand-tint50 rounded-md px-1.5 py-0.5">{b}</span>
        ))}
        <span className="text-[11px] font-semibold rounded-full px-2 py-0.5 text-white" style={{ background: catColor(ex.category) }}>
          {ex.category}
        </span>
      </div>

      {(ex.summary || ex.items) && (
        <p className="mt-2 text-[13px] text-ink-2 leading-relaxed line-clamp-2">{ex.summary || ex.items}</p>
      )}

      <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
        {onMap && (
          <button onClick={onMap} className="inline-flex items-center gap-1 text-[12px] font-semibold text-brand bg-brand-tint50 rounded-lg px-2.5 py-1.5">
            <MapPin size={13} /> 지도에서 보기
          </button>
        )}
        {ex.website && (
          <a href={ex.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[12px] text-ink-2 bg-surface-subtle rounded-lg px-2.5 py-1.5">
            <Globe size={13} /> 웹사이트
          </a>
        )}
        <a href={ex.instagram ? `https://instagram.com/${ex.instagram}` : `https://www.google.com/search?q=${encodeURIComponent(ex.brand + " 인스타그램")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[12px] text-ink-2 bg-surface-subtle rounded-lg px-2.5 py-1.5">
          <Camera size={13} /> 인스타
        </a>
        <a href={ex.naver} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[12px] text-ink-2 bg-surface-subtle rounded-lg px-2.5 py-1.5">
          <Search size={13} /> 네이버 <ArrowRight size={11} />
        </a>
      </div>
    </div>
  );
}
