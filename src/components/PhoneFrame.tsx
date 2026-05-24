'use client';

import { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
  /** 폰 안 콘텐츠 비율 — 기본 9:18.5 (긴 폰) */
  variant?: 'tall' | 'short';
  /** 그림자 강도 */
  shadow?: 'normal' | 'strong' | 'none';
  className?: string;
}

/**
 * 사장님 메뉴얼용 폰 mockup wrap
 * - 스크린샷이나 인터랙티브 데모를 감싸는 용도
 * - 비즈니스 블루 톤 보더 + 그림자
 */
export default function PhoneFrame({
  children,
  variant = 'tall',
  shadow = 'normal',
  className = '',
}: PhoneFrameProps) {
  const aspectRatio = variant === 'tall' ? 'aspect-[9/18.5]' : 'aspect-[9/16]';
  const shadowClass =
    shadow === 'strong'
      ? 'shadow-2xl shadow-biz/15'
      : shadow === 'none'
      ? ''
      : 'shadow-xl shadow-slate-300/40';

  return (
    <div
      className={`relative mx-auto w-full max-w-[280px] ${aspectRatio} ${shadowClass} ${className}`}
    >
      {/* 폰 외곽 (베젤) */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-slate-900 p-[6px]">
        {/* 노치 (선택사항 — 미니멀하게) */}
        <div className="absolute left-1/2 top-[6px] z-30 h-[14px] w-[80px] -translate-x-1/2 rounded-b-xl bg-slate-900" />

        {/* 화면 */}
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
