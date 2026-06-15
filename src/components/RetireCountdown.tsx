"use client";

// src/components/RetireCountdown.tsx
// 한국시간(KST) 2026-06-19 17:00:00 까지 실시간 카운트다운 (일/시간/분/초)

import { useEffect, useState } from "react";

// KST(UTC+9) 6/19 17:00 = UTC 6/19 08:00
const TARGET = new Date("2026-06-19T17:00:00+09:00").getTime();

type T = { d: number; h: number; m: number; s: number; done: boolean };

function calc(): T {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0, done: true };
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s, done: false };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="min-w-[72px] md:min-w-[110px] px-3 md:px-5 py-4 md:py-6 rounded-3xl bg-white border border-brand-tint200 shadow-card">
        <span className="block text-4xl md:text-6xl font-black text-brand tabular-nums tracking-tight leading-none">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 md:mt-3 text-sm md:text-base font-bold text-ink-3">{label}</span>
    </div>
  );
}

export default function RetireCountdown() {
  const [t, setT] = useState<T | null>(null);

  useEffect(() => {
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  // SSR/첫 렌더 깜빡임 방지
  if (!t) {
    return <div className="h-[150px] md:h-[210px]" aria-hidden />;
  }

  if (t.done) {
    return (
      <div className="text-center">
        <p className="text-5xl md:text-7xl font-black text-brand tracking-tightest">
          자유 🎉
        </p>
        <p className="mt-4 text-xl md:text-2xl font-bold text-ink-2">
          정말 고생 많으셨습니다!
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-start justify-center gap-3 md:gap-5">
      <Unit value={t.d} label="일" />
      <Unit value={t.h} label="시간" />
      <Unit value={t.m} label="분" />
      <Unit value={t.s} label="초" />
    </div>
  );
}
