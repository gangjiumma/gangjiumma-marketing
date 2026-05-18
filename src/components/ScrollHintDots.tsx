"use client";

import { useEffect, useState } from "react";

/**
 * ScrollHintDots
 * Hero 하단에 점 3개가 위→아래로 부드럽게 흐르는 인디케이터
 *
 * 디자인 컨셉:
 *   - 텍스트나 화살표 없이 미니멀하게 "더 있다"는 신호
 *   - 점 3개가 fade-in / fade-out으로 순차 흐름
 *   - 100px 이상 스크롤되면 부드럽게 사라짐
 *
 * 사용:
 *   <ScrollHintDots />
 */
export default function ScrollHintDots() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-40 transition-opacity duration-500 pointer-events-none ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-1.5">
        <span className="dot dot-1" />
        <span className="dot dot-2" />
        <span className="dot dot-3" />
      </div>

      <style jsx>{`
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background-color: #FF6B35;
          display: block;
        }
        .dot-1 {
          animation: dotFlow 1.8s ease-in-out infinite;
          animation-delay: 0s;
        }
        .dot-2 {
          animation: dotFlow 1.8s ease-in-out infinite;
          animation-delay: 0.2s;
        }
        .dot-3 {
          animation: dotFlow 1.8s ease-in-out infinite;
          animation-delay: 0.4s;
        }
        @keyframes dotFlow {
          0%, 100% {
            opacity: 0.2;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(2px);
          }
        }
      `}</style>
    </div>
  );
}
