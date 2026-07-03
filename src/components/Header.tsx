"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PawPrint, Store, Compass } from "lucide-react";

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

          {/* 소통창구 (/voice) — 소통 약속 페이지 */}
          <Link
            href="/voice"
            className="inline-flex items-center gap-1.5 px-4 md:px-5 py-2 md:py-2.5 rounded-3xl border border-brand-tint200 bg-brand-tint50 text-brand text-sm md:text-base font-bold hover:bg-brand-tint100 hover:border-brand transition-all duration-200"
          >
            <PawPrint size={17} strokeWidth={2.5} />
            <span>소통창구</span>
          </Link>

          {/* 사장님 입점 (/business) — 사장님용 입점 안내 */}
          <Link
            href="/business"
            className="inline-flex items-center gap-1.5 px-4 md:px-5 py-2 md:py-2.5 rounded-3xl bg-brand text-white text-sm md:text-base font-bold shadow-soft hover:opacity-90 transition-all duration-200"
          >
            <Store size={17} strokeWidth={2.5} />
            <span>사장님 입점</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
