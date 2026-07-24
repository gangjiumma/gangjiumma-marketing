"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Store } from "lucide-react";

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

        {/* 우측 버튼 그룹
            ⚠️ 펫페어 가이드(/pet-guide) 버튼은 제거됨 (2026.07). 지난 이벤트라 상시 노출 불필요.
               페이지 자체는 살아있으므로 필요 시 배너·링크로 다시 연결하면 됨. */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* AnimAI Biz — 사장님 솔루션 입점 안내 (/business) */}
          <Link
            href="/business"
            className="inline-flex items-center gap-1.5 md:gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-3xl bg-brand text-white text-sm md:text-base font-bold shadow-soft hover:opacity-90 transition-all duration-200"
          >
            <Store size={17} strokeWidth={2.5} />
            {/* 데스크탑: 한 줄 / 모바일: 두 줄로 풀어서 전체 노출 */}
            <span className="hidden md:inline whitespace-nowrap">AnimAI Biz - 사장님 솔루션</span>
            <span className="md:hidden flex flex-col leading-tight text-left">
              <span>AnimAI Biz</span>
              <span className="text-[11px] font-semibold text-white/90">사장님 솔루션</span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
