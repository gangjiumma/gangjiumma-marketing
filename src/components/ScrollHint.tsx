"use client";

/**
 * ScrollHint — "이어서 보기" 텍스트 + 작은 v 화살표
 * 부드럽게 위→아래로 통통 튀는 애니메이션 (일반 CSS — styled-jsx 미사용)
 */
const HINT_CSS = `
.scroll-hint-bounce { animation: scrollHintBounce 1.8s ease-in-out infinite; }
@keyframes scrollHintBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(4px); }
}
`;

export default function ScrollHint() {
  return (
    <div
      className="inline-flex flex-col items-center gap-1.5 select-none scroll-hint-bounce"
      aria-hidden="true"
    >
      <style dangerouslySetInnerHTML={{ __html: HINT_CSS }} />
      <span className="text-sm md:text-base font-semibold text-brand tracking-tight">
        이어서 보기
      </span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
}
