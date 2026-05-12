"use client";

import { useEffect, useState } from "react";

/**
 * ScrollDownIndicator
 * Hero 영역 하단에 "아래로 스크롤" 시각적 힌트
 * 100px 이상 스크롤되면 자동으로 사라짐
 */
export function ScrollDownIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="아래로 스크롤"
      className={`fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-2 group cursor-pointer">
        <span className="text-xs md:text-sm font-bold text-brand">
          더 알아보기
        </span>

        <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center scroll-bounce">
          <div className="absolute inset-0 rounded-full bg-brand-tint100 border-2 border-brand group-hover:scale-110 transition-transform duration-300" />
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 text-brand"
          >
            <path
              d="M12 4V20M12 20L6 14M12 20L18 14"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(6px);
          }
        }
        .scroll-bounce {
          animation: scrollBounce 1.5s ease-in-out infinite;
        }
      `}</style>
    </button>
  );
}

/**
 * ScrollProgressBar
 * 페이지 최상단에 고정된 얇은 진행 바
 */
export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-brand to-brand-dark transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
