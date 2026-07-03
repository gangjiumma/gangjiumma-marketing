"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Store, Compass } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = scrolled
    ? "bg-white/90 backdrop-blur-md shadow-soft"
    : "bg-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* 로고 — 통짜 주황 텍스트 (Pretendard Black). /renew 히어로에서만 워드플레이 시각화 */}
        <Link href="/" className="text-xl md:text-2xl font-black text-brand tracking-tighter" aria-label="AnimAI 홈으로">
          AnimAI
        </Link>

        {/* 우측 버튼 그룹 */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* 펫페어 가이드 (/pet-guide) — 케이펫페어 수원 AI 부스 가이드 (지난 이벤트, 기록 유지) */}
          <Link
            href="/pet-guide"
            aria-label="펫페어 가이드"
            className="inline-flex items-center gap-1.5 px-3 md:px-5 py-2 md:py-2.5 rounded-3xl border border-brand bg-white text-brand text-sm md:text-base font-bold hover:bg-brand-tint50 transition-all duration-200"
          >
            <Compass size={17} strokeWidth={2.5} />
            <span className="hidden sm:inline">펫페어 가이드</span>
          </Link>

          {/* AnimAI Biz — 사장님 솔루션 입점 안내 (/business) */}
          <Link
            href="/business"
            className="inline-flex items-center gap-1.5 md:gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-3xl bg-brand text-white text-sm md:text-base font-bold shadow-soft hover:opacity-90 transition-all duration-200"
          >
            <Store size={17} strokeWidth={2.5} />
            <span className="whitespace-nowrap">
              <span className="hidden md:inline">AnimAI Biz - 사장님 솔루션</span>
              <span className="md:hidden">AnimAI Biz</span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
