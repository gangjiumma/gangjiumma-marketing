"use client";

// src/components/BusinessComingSoon.tsx
// 사장님 페이지 준비중 화면 + 입점 사전신청 폼
// - 신청 → Supabase business_leads 저장 (리드 유실 방지, 최우선)
// - WEB3FORMS_ACCESS_KEY 가 채워져 있으면 마음이 이메일로 즉시 알림 (best-effort)
// - 완료 시 "카카오톡으로 안내" 안내
// - 기존 사장님 페이지 복귀: page.tsx 의 SHOW_FULL_PAGE 를 true 로

import { useState } from "react";
import { Wrench, Send, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

// ✏️ 이메일 알림 키 — https://web3forms.com 에서 이메일 넣으면 무료 키 발급 (1분)
//    비워두면 이메일 발송만 생략되고, DB 저장은 정상 작동함
const WEB3FORMS_ACCESS_KEY = "";

// ✏️ 업종 선택지
const CATEGORIES = [
  "미용",
  "호텔 · 유치원",
  "동물병원",
  "카페 · 운동장",
  "훈련 · 교육",
  "용품 · 온라인몰",
  "기타",
];

export default function BusinessComingSoon() {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = async () => {
    setErrorMsg("");

    // 허니팟 — 봇이면 조용히 성공한 척
    if (honeypot.trim() !== "") {
      setDone(true);
      return;
    }

    const nn = name.trim();
    const bn = businessName.trim();
    const ph = phone.trim();

    if (!nn || !bn || !ph || !category) {
      setErrorMsg("모든 항목을 채워주세요.");
      return;
    }
    if (!/^[0-9\-\s+()]{8,20}$/.test(ph)) {
      setErrorMsg("전화번호 형식을 확인해주세요.");
      return;
    }
    if (!consent) {
      setErrorMsg("개인정보 수집·이용에 동의해주세요.");
      return;
    }

    setSubmitting(true);
    try {
      // 1) Supabase 저장 (핵심 — 여기 성공하면 리드 확보)
      const { error } = await supabase.from("business_leads").insert({
        name: nn,
        business_name: bn,
        phone: ph,
        category,
        privacy_consent: true,
      });

      if (error) {
        setErrorMsg("잠시 후 다시 시도해주세요. 🙏");
        return;
      }

      // 2) 이메일 알림 (best-effort — 실패해도 신청은 이미 저장됨)
      if (WEB3FORMS_ACCESS_KEY) {
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `🐾 사장님 입점 사전신청 — ${bn}`,
            from_name: "강쥐엄마 사장님 페이지",
            이름: nn,
            상호명: bn,
            전화번호: ph,
            업종: category,
          }),
        }).catch(() => {});
      }

      setDone(true);
    } catch {
      setErrorMsg("잠시 후 다시 시도해주세요. 🙏");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full px-4 py-3 rounded-2xl border border-line bg-surface-subtle text-ink-1 placeholder:text-ink-4 focus:outline-none focus:border-biz focus:bg-white transition-colors";

  return (
    <>
      {/* ── HERO — 준비중 안내 ─────────────────────────────── */}
      <section className="relative bg-biz-tint50 pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-biz-tint100/50 via-biz-tint50 to-white pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
          {/* ✏️ 상단 배지 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white rounded-full shadow-soft border border-biz-tint200">
            <Wrench className="w-4 h-4 text-biz" strokeWidth={2.4} />
            <span className="text-sm md:text-base font-bold text-biz">
              더 좋아지는 중
            </span>
          </div>

          {/* ✏️ 메인 헤드라인 */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-ink-1 tracking-tightest leading-[1.15]">
            사장님 입점 서비스가
            <br />
            <span className="text-biz">준비중입니다</span>
          </h1>

          {/* ✏️ 부제 */}
          <p className="mt-8 md:mt-10 text-base md:text-xl text-ink-2 font-medium leading-relaxed">
            아래 폼에 인적사항을 남겨주시면
            <br />
            사장님 서비스가 준비되는 대로{" "}
            <span className="text-biz font-bold">연락드리겠습니다</span>.
          </p>
        </div>
      </section>

      {/* ── 사전신청 폼 ───────────────────────────────────── */}
      <section className="bg-surface-subtle py-16 md:py-24">
        <div className="max-w-xl mx-auto px-5 md:px-8">
          {done ? (
            /* 완료 화면 */
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-card border border-biz-tint200 text-center">
              <CheckCircle2 className="w-14 h-14 text-biz mx-auto mb-6" strokeWidth={1.8} />
              {/* ✏️ 완료 카피 */}
              <h3 className="text-2xl md:text-3xl font-black text-ink-1 mb-4">
                신청 완료!
              </h3>
              <p className="text-base md:text-lg text-ink-2 leading-relaxed">
                사장님 서비스가 준비되는 대로
                <br />
                <span className="text-biz font-bold">카카오톡으로 안내드리겠습니다</span> 💬
              </p>
              <p className="mt-6 text-sm text-ink-3">
                소중한 신청 감사합니다. 곧 만나요! 🐾
              </p>
            </div>
          ) : (
            /* 입력 폼 */
            <div className="bg-white rounded-3xl p-6 md:p-9 shadow-card border border-line">
              <h3 className="text-lg md:text-xl font-black text-ink-1 mb-6">
                입점 사전신청
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-ink-2 mb-2">이름</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={30}
                    placeholder="홍길동"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-ink-2 mb-2">상호명</label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    maxLength={60}
                    placeholder="멍멍애견미용"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-ink-2 mb-2">전화번호</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    maxLength={20}
                    placeholder="010-1234-5678"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-ink-2 mb-2">업종</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={`${inputCls} appearance-none ${category ? "text-ink-1" : "text-ink-4"}`}
                  >
                    <option value="" disabled>
                      업종을 선택해주세요
                    </option>
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 개인정보 동의 */}
                <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-[#3b82f6]"
                  />
                  <span className="text-sm text-ink-3 leading-relaxed">
                    개인정보 수집·이용에 동의합니다.
                    <br />
                    <span className="text-xs text-ink-4">
                      (입점 안내 연락 목적으로만 사용되며, 안내 완료 후 파기됩니다)
                    </span>
                  </span>
                </label>

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

                {errorMsg && <p className="text-sm font-medium text-biz">{errorMsg}</p>}

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-biz text-white font-extrabold text-base md:text-lg rounded-2xl shadow-biz hover:bg-biz-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" strokeWidth={2.3} />
                  <span>{submitting ? "신청하는 중..." : "사전신청 하기"}</span>
                </button>

                <p className="text-center text-xs md:text-sm text-ink-3 pt-1">
                  준비가 완료되면 <span className="font-bold">카카오톡으로</span> 안내드려요 💬
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
