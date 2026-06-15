"use client";

// src/components/FunButtons.tsx
// 장식용 버튼 3개 — 실제 이동 X, 누르면 응원 메시지 + 흔들 반응

import { useState } from "react";

const BUTTONS = [
  { id: "labor", label: "고용노동부", msg: "📋 '그동안의 노고' 접수 완료! 승인자: 남편 ❤️" },
  { id: "human", label: "인권위원회", msg: "⚖️ 판결 — 오늘부터 마음껏 쉴 권리, 보장합니다!" },
  { id: "nurse", label: "한국연구간호사협회", msg: "🩺 진단: 휴식이 시급함 · 처방: 행복 무제한" },
];

export default function FunButtons() {
  const [active, setActive] = useState<string | null>(null);
  const [shake, setShake] = useState<string | null>(null);

  const onClick = (id: string) => {
    setActive(id);
    setShake(id);
    setTimeout(() => setShake(null), 500);
  };

  const msg = BUTTONS.find((b) => b.id === active)?.msg;

  return (
    <div className="flex flex-col items-center gap-6">
      <style>{`
        @keyframes funShake {
          0%,100% { transform: translateX(0) rotate(0); }
          20% { transform: translateX(-4px) rotate(-3deg); }
          40% { transform: translateX(4px) rotate(3deg); }
          60% { transform: translateX(-3px) rotate(-2deg); }
          80% { transform: translateX(3px) rotate(2deg); }
        }
        .fun-shake { animation: funShake 0.45s ease; }
      `}</style>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {BUTTONS.map((b) => (
          <button
            key={b.id}
            onClick={() => onClick(b.id)}
            className={`px-5 md:px-6 py-3 md:py-3.5 rounded-2xl bg-white border-2 border-brand-tint300 text-brand font-bold text-sm md:text-base shadow-soft hover:bg-brand-tint50 hover:-translate-y-0.5 transition-all ${
              shake === b.id ? "fun-shake" : ""
            }`}
          >
            {b.label}
          </button>
        ))}
      </div>

      <div className="min-h-[44px] flex items-center px-2">
        {msg ? (
          <p className="text-base md:text-lg font-bold text-ink-2 text-center bg-brand-tint50 border border-brand-tint200 rounded-2xl px-5 py-3">
            {msg}
          </p>
        ) : (
          <p className="text-sm text-ink-4">버튼을 눌러보세요 🐾</p>
        )}
      </div>
    </div>
  );
}
