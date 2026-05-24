'use client';

import { ReactNode } from 'react';

interface HighlightProps {
  /** 강조 위치 (% 단위) */
  x: number;
  y: number;
  /** 강조 영역 크기 (% 단위) */
  width?: number;
  height?: number;
  /** 강조 모양 */
  shape?: 'circle' | 'rect' | 'pill';
  /** 말풍선 텍스트 */
  label?: ReactNode;
  /** 말풍선 위치 */
  labelPosition?: 'top' | 'bottom' | 'left' | 'right';
  /** 활성 상태 (false면 안 보임) */
  active?: boolean;
  /** 펄스 애니메이션 사용 여부 */
  pulse?: boolean;
  /** 색상 변형 */
  variant?: 'primary' | 'biz' | 'success';
}

const COLOR_MAP = {
  primary: {
    ring: 'ring-brand',
    bg: 'bg-brand/15',
    border: 'border-brand',
    label: 'bg-brand text-white',
    pulse: 'shadow-[0_0_0_0_rgba(255,107,53,0.7)]',
  },
  biz: {
    ring: 'ring-biz',
    bg: 'bg-biz/15',
    border: 'border-biz',
    label: 'bg-biz text-white',
    pulse: 'shadow-[0_0_0_0_rgba(59,130,246,0.7)]',
  },
  success: {
    ring: 'ring-emerald-500',
    bg: 'bg-emerald-500/15',
    border: 'border-emerald-500',
    label: 'bg-emerald-500 text-white',
    pulse: 'shadow-[0_0_0_0_rgba(16,185,129,0.7)]',
  },
};

/**
 * 스크린샷 위에 얹어서 특정 영역을 강조하는 컴포넌트
 * - 펄스 테두리 + 색 박스 + 말풍선
 * - 위치는 % 단위 (반응형)
 *
 * 사용 예:
 *   <Highlight x={50} y={70} width={80} height={8} label="여기 클릭" />
 */
export default function Highlight({
  x,
  y,
  width = 30,
  height = 10,
  shape = 'rect',
  label,
  labelPosition = 'top',
  active = true,
  pulse = true,
  variant = 'biz',
}: HighlightProps) {
  if (!active) return null;

  const colors = COLOR_MAP[variant];

  const shapeClass =
    shape === 'circle'
      ? 'rounded-full'
      : shape === 'pill'
      ? 'rounded-full'
      : 'rounded-lg';

  const labelPositionStyle: Record<string, string> = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div
      className="pointer-events-none absolute z-20"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${width}%`,
        height: `${height}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* 강조 박스 */}
      <div
        className={`relative h-full w-full ${shapeClass} ${colors.bg} ${colors.border} border-2 ${
          pulse ? `${colors.pulse} animate-pulse-ring` : ''
        }`}
      >
        {/* 펄스 링 (외곽) */}
        {pulse && (
          <div
            className={`absolute inset-0 ${shapeClass} ${colors.border} border-2 animate-ping-slow opacity-75`}
          />
        )}

        {/* 말풍선 */}
        {label && (
          <div
            className={`absolute ${labelPositionStyle[labelPosition]} whitespace-nowrap`}
          >
            <div
              className={`relative ${colors.label} rounded-full px-3 py-1.5 text-xs font-bold shadow-lg`}
            >
              {label}
              {/* 말풍선 꼬리 */}
              {labelPosition === 'top' && (
                <div
                  className={`absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 ${colors.label}`}
                />
              )}
              {labelPosition === 'bottom' && (
                <div
                  className={`absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 ${colors.label}`}
                />
              )}
              {labelPosition === 'left' && (
                <div
                  className={`absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 ${colors.label}`}
                />
              )}
              {labelPosition === 'right' && (
                <div
                  className={`absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 ${colors.label}`}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * 화살표 컴포넌트 (Highlight와 분리)
 * 한 위치에서 다른 위치로 화살표 그리기
 */
interface ArrowProps {
  x: number;
  y: number;
  direction?: 'down' | 'up' | 'left' | 'right' | 'down-right' | 'down-left';
  size?: number;
  variant?: 'primary' | 'biz';
  active?: boolean;
}

export function Arrow({
  x,
  y,
  direction = 'down',
  size = 32,
  variant = 'biz',
  active = true,
}: ArrowProps) {
  if (!active) return null;

  const color = variant === 'biz' ? '#3B82F6' : '#FF6B35';

  const rotationMap: Record<string, string> = {
    down: 'rotate(0deg)',
    up: 'rotate(180deg)',
    left: 'rotate(90deg)',
    right: 'rotate(-90deg)',
    'down-right': 'rotate(-45deg)',
    'down-left': 'rotate(45deg)',
  };

  return (
    <div
      className="pointer-events-none absolute z-20 animate-bounce-slow"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) ${rotationMap[direction]}`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full drop-shadow-md"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="19 12 12 19 5 12" />
      </svg>
    </div>
  );
}
