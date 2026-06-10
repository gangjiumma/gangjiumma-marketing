"use client";

// src/components/HeroCinema.tsx
// 메인 Hero — 자동 슬라이드 시네마
//  장면1: 연도 카운트다운 2026 → 2016 + 임팩트 텍스트 (사진 없음)
//  장면2: 검둥이 사진 + "그치만 우리 아이에겐..."
//  장면3: 골든 사진 + 클라이맥스
// 크로스페이드 + 켄번스. 점/화면 탭으로 수동 이동. 마지막에서 멈춤.
// 하단 고정: 실제 우리 아이들 진정성 문구.
//
// 📷 배경 사진: public/hero/scene2.jpg(검둥이), scene3.jpg(골든)

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const SUB_MS = 3000; // 사진(서브 이미지) 1장 노출 시간

// ── 장면1: 연도 카운트다운 ─────────────────────────────
function YearCountScene({ onComplete }: { onComplete: () => void }) {
  const [year, setYear] = useState(2026);
  const [landed, setLanded] = useState(false);
  const [step, setStep] = useState(0); // 1:이벤트 2:벌써10년 3:짧습니다

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const timers: number[] = [];
    let raf = 0;

    if (reduce) {
      setYear(2016);
      setLanded(true);
      setStep(3);
      timers.push(window.setTimeout(onComplete, 2800));
      return () => timers.forEach(clearTimeout);
    }

    const dur = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const e = 1 - Math.pow(1 - p, 3); // easeOut
      setYear(Math.round(2026 - 10 * e));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setYear(2016);
        setLanded(true);
      }
    };
    raf = requestAnimationFrame(tick);

    timers.push(window.setTimeout(() => setStep(1), 2000));
    timers.push(window.setTimeout(() => setStep(2), 3300));
    timers.push(window.setTimeout(() => setStep(3), 4700));
    timers.push(window.setTimeout(() => onComplete(), 7600));

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="px-6 text-center text-white max-w-4xl mx-auto">
      <p className={`year-num text-7xl md:text-[150px] font-black tabular-nums tracking-tight leading-none ${landed ? "landed" : ""}`}>
        {year}년
      </p>
      <p className={`s0-line mt-7 md:mt-9 text-base md:text-2xl font-medium text-white/85 leading-relaxed ${step >= 1 ? "show" : ""}`}>
        알파고와 이세돌, 거리를 뒤덮은 포켓몬고.
        <br />
        블랙핑크가 데뷔하고, &lsquo;태양의 후예&rsquo;에 빠져 있던 그때.
      </p>
      <p className={`s0-line mt-8 md:mt-10 text-xl md:text-3xl font-bold ${step >= 2 ? "show" : ""}`}>
        이게 벌써 10년 전이라고?
      </p>
      <p className={`s0-line mt-4 md:mt-5 text-2xl md:text-5xl font-black tracking-tightest ${step >= 3 ? "show" : ""}`}>
        10년은, <span className="text-brand-light">생각보다 짧습니다.</span>
      </p>
    </div>
  );
}

// ── 사진 장면 데이터 ───────────────────────────────────
const PHOTOS = [
  {
    id: "scene2",
    images: ["/hero/scene2.jpg", "/hero/scene2b.jpg"],
    gradient: "linear-gradient(160deg, #3a2410 0%, #6b3d12 100%)",
    body: (
      <p className="text-3xl md:text-6xl font-black tracking-tightest leading-[1.25]">
        그치만 우리 아이에겐,
        <br />
        <span className="text-brand-light">10년의 가치가 다릅니다.</span>
      </p>
    ),
  },
  {
    id: "scene3",
    images: ["/hero/scene3.jpg"],
    gradient: "linear-gradient(160deg, #7a2e0a 0%, #c14a12 55%, #ff6b35 100%)",
    body: (
      <>
        <p className="text-lg md:text-3xl font-medium leading-relaxed text-white/90">
          그래서 지금 이 순간이 더없이 소중해요.
        </p>
        <p className="mt-4 md:mt-6 text-4xl md:text-7xl font-black tracking-tightest leading-[1.18]">
          앞으로의 10년을,
          <br />
          <span className="text-white">강쥐엄마와 함께.</span>
        </p>

        {/* 마무리 강조 */}
        <div className="mt-9 md:mt-12 flex flex-col items-center gap-3">
          <span className="h-px w-12 bg-white/40" />
          <p className="text-base md:text-xl font-bold text-white/90 tracking-wide">
            매일을 가치있게
          </p>
          <p className="text-xl md:text-3xl font-black tracking-tight">
            <span className="text-white/90">강아지 전용 AI · </span>
            <span className="text-brand-light">강쥐엄마</span>
          </p>
        </div>
      </>
    ),
  },
];

export default function HeroCinema() {
  const [idx, setIdx] = useState(0); // 0=카운트다운, 1=검둥이, 2=골든
  const [subIdx, setSubIdx] = useState(0); // 현재 사진 장면의 서브 이미지 인덱스
  const last = PHOTOS.length; // 2
  const done = idx >= last;

  // 사진 장면: 서브 이미지 크로스페이드 + 자동 전환 (마지막에서 멈춤). 장면0은 스스로 onComplete.
  useEffect(() => {
    if (idx === 0) return;
    const scene = PHOTOS[idx - 1];
    const n = scene ? scene.images.length : 1;
    setSubIdx(0);
    const timers: number[] = [];
    for (let k = 1; k < n; k++) {
      timers.push(window.setTimeout(() => setSubIdx(k), SUB_MS * k));
    }
    if (idx < last) {
      timers.push(window.setTimeout(() => setIdx((i) => Math.min(i + 1, last)), SUB_MS * n));
    }
    return () => timers.forEach(clearTimeout);
  }, [idx, last]);

  const goNext = () => setIdx((i) => (i < last ? i + 1 : i));

  return (
    <section
      onClick={goNext}
      className="relative h-[100svh] overflow-hidden bg-black select-none cursor-pointer"
    >
      <style>{`
        .hc-slide { opacity: 0; transition: opacity 1.2s ease; }
        .hc-slide.is-active { opacity: 1; }
        .hc-bg { opacity: 0; transform: scale(1.06); transition: opacity 1.2s ease, transform 6s ease-out; }
        .hc-bg.sub-on { opacity: 1; }
        .hc-slide.is-active .hc-bg.sub-on { transform: scale(1.15); }
        .hc-copy { opacity: 0; transform: translateY(26px); }
        .hc-slide.is-active .hc-copy {
          opacity: 1; transform: none;
          transition: opacity 1s ease 0.25s, transform 1.2s cubic-bezier(0.22,1,0.36,1) 0.25s;
        }
        /* 장면1 카운트다운 */
        @keyframes yearPunch { 0%{transform:scale(1.18);} 55%{transform:scale(0.96);} 100%{transform:scale(1);} }
        .year-num.landed { animation: yearPunch 0.6s cubic-bezier(0.22,1,0.36,1); }
        .s0-line { opacity: 0; transform: translateY(22px); transition: opacity 0.8s ease, transform 1s cubic-bezier(0.22,1,0.36,1); }
        .s0-line.show { opacity: 1; transform: none; }
        @media (prefers-reduced-motion: reduce) {
          .hc-bg, .hc-slide, .hc-copy, .s0-line { transition: none !important; }
          .year-num.landed { animation: none !important; }
        }
      `}</style>

      {/* 장면1 — 카운트다운 (어두운 시네마 배경) */}
      <div className={`hc-slide absolute inset-0 ${idx === 0 ? "is-active" : ""}`}>
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(120% 90% at 50% 35%, #2a2018 0%, #14100c 100%)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {idx === 0 && <YearCountScene onComplete={() => setIdx((i) => (i === 0 ? 1 : i))} />}
        </div>
      </div>

      {/* 장면2,3 — 사진 */}
      {PHOTOS.map((s, i) => {
        const sceneIndex = i + 1;
        return (
          <div key={s.id} className={`hc-slide absolute inset-0 ${idx === sceneIndex ? "is-active" : ""}`}>
            <div className="absolute inset-0" style={{ background: s.gradient }} />
            {s.images.map((src, k) => (
              <div
                key={k}
                className={`hc-bg absolute inset-0 bg-cover bg-center ${
                  idx === sceneIndex && subIdx === k ? "sub-on" : ""
                }`}
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/65" />
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white">
              <div className="hc-copy max-w-4xl">{s.body}</div>
            </div>
          </div>
        );
      })}

      {/* 진정성 문구 (사진 장면에서만) */}
      <div
        className={`absolute bottom-[88px] md:bottom-24 left-0 right-0 px-6 text-center z-20 pointer-events-none transition-opacity duration-700 ${
          idx >= 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-xs md:text-sm text-white/75 font-medium tracking-wide">
          강쥐엄마 대표가 실제로 30년간 키워온 아이들입니다 🐾
        </p>
      </div>

      {/* 슬라이드 점 */}
      <div className="absolute bottom-12 md:bottom-14 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setIdx(i);
            }}
            aria-label={`${i + 1}번째 장면`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === idx ? "w-7 bg-white" : "w-1.5 bg-white/45"
            }`}
          />
        ))}
      </div>

      {/* 스크롤 유도 (마지막 장면에서) */}
      <div
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 z-20 transition-opacity duration-700 ${
          done ? "opacity-100" : "opacity-0"
        }`}
      >
        <ChevronDown className="w-6 h-6 animate-bounce" strokeWidth={2.2} />
      </div>
    </section>
  );
}
