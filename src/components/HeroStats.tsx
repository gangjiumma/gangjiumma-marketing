"use client";

// src/components/HeroStats.tsx
// 메인 Hero — 오늘자 누적 가입자 카운트업 + 정식출시 D+N 뱃지
// ✏️ 매일 아침 숫자 업데이트는 page.tsx 의 TOTAL_SIGNUPS 한 줄만 바꾸면 됨

import { useEffect, useRef, useState } from "react";

const LAUNCH_DATE = "2026-05-29T00:00:00+09:00"; // 정식출시일 (KST) — 고정

function daysSinceLaunch() {
  const launch = new Date(LAUNCH_DATE).getTime();
  const diff = Date.now() - launch;
  return Math.max(0, Math.floor(diff / 86400000));
}

// 30일 이내 → "정식출시 D+N일", 이후 → "출시 N일째" (신생앱 느낌 자동 졸업)
function dDayLabel(days: number) {
  if (days <= 30) return `정식출시 D+${days}일`;
  return `출시 ${days}일째`;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function HeroStats({ total }: { total: number }) {
  const [display, setDisplay] = useState(0);
  const [days, setDays] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setDays(daysSinceLaunch());

    // 모션 최소화 설정이면 애니메이션 생략
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(total);
      return;
    }

    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(total * easeOutCubic(p)));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [total]);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* 정식출시 D+N 뱃지 */}
      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-tint100 border border-brand-tint200 text-brand text-sm md:text-base font-bold">
        <span>🚀</span>
        <span>{dDayLabel(days)}</span>
      </span>

      {/* 오늘자 누적 가입자 카운터 카드 */}
      <div className="inline-flex flex-col items-center gap-2 px-10 md:px-14 py-7 md:py-8 rounded-4xl bg-white shadow-card border border-brand-tint200">
        <span className="inline-flex items-center gap-2 text-sm md:text-base text-ink-3 font-bold">
          {/* 🟢 점멸 점 */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          오늘자 누적 다운로드
        </span>
        <span className="text-5xl md:text-7xl font-black text-brand tracking-tightest tabular-nums leading-none">
          {display.toLocaleString("ko-KR")}
          <span className="text-2xl md:text-4xl align-baseline ml-1">명</span>
        </span>
      </div>
    </div>
  );
}
