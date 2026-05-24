'use client';

import { useState, ReactNode } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft, ArrowRight } from 'lucide-react';
import PhoneFrame from './PhoneFrame';

export interface DemoStep {
  /** 단계 제목 */
  title: string;
  /** 단계 설명 (짧게 1-2줄) */
  description: ReactNode;
  /** 스크린샷 경로 (public/manual/...) */
  image: string;
  /** 스크린샷 alt */
  imageAlt: string;
  /** 화면 위에 얹을 강조 요소 (Highlight, Arrow 등) */
  overlay?: ReactNode;
  /** 추가 팁 (선택) */
  tip?: ReactNode;
}

interface InteractiveDemoProps {
  steps: DemoStep[];
  /** 기본 열린 단계 (0부터, 기본 0) */
  defaultOpen?: number;
  /** 다음 버튼 클릭 시 다음 단계로 자동 이동 */
  autoAdvance?: boolean;
}

/**
 * 수동 아코디언 형태의 인터랙티브 데모
 * - 사장님이 클릭해서 단계별로 진행
 * - 각 단계마다 폰 mockup + 스크린샷 + 강조 + 설명
 * - "다음 →" / "← 이전" 버튼으로 단계 이동
 */
export default function InteractiveDemo({
  steps,
  defaultOpen = 0,
  autoAdvance = true,
}: InteractiveDemoProps) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpen);

  const goPrev = () => setOpenIndex((i) => Math.max(0, i - 1));
  const goNext = () => setOpenIndex((i) => Math.min(steps.length - 1, i + 1));

  return (
    <div className="space-y-3">
      {/* 진행도 표시 */}
      <div className="flex items-center gap-2 px-2">
        <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-biz rounded-full transition-all duration-300"
            style={{ width: `${((openIndex + 1) / steps.length) * 100}%` }}
          />
        </div>
        <span className="text-xs font-medium text-slate-500 tabular-nums">
          {openIndex + 1} / {steps.length}
        </span>
      </div>

      {/* 단계 아코디언 */}
      <div className="space-y-2.5">
        {steps.map((step, idx) => {
          const isOpen = openIndex === idx;
          const isCompleted = openIndex > idx;

          return (
            <div
              key={idx}
              className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                isOpen
                  ? 'border-biz shadow-biz-soft'
                  : isCompleted
                  ? 'border-emerald-200'
                  : 'border-slate-200'
              }`}
            >
              {/* 헤더 (항상 보임, 클릭으로 토글) */}
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full flex items-center gap-3 p-4 text-left hover:bg-slate-50/50 transition-colors"
              >
                {/* 번호 동그라미 */}
                <div
                  className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                    isOpen
                      ? 'bg-biz text-white'
                      : isCompleted
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {isCompleted ? '✓' : idx + 1}
                </div>

                <div className="flex-1 min-w-0">
                  <div
                    className={`font-bold text-base ${
                      isOpen ? 'text-biz-dark' : 'text-slate-800'
                    }`}
                  >
                    {step.title}
                  </div>
                  {!isOpen && (
                    <div className="text-xs text-slate-500 mt-0.5 truncate">
                      탭해서 자세히 보기
                    </div>
                  )}
                </div>

                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-biz flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {/* 컨텐츠 (열렸을 때만) */}
              {isOpen && (
                <div className="px-4 pb-5 pt-1 border-t border-slate-100">
                  <div className="grid md:grid-cols-[1fr_auto] gap-6 items-start mt-4">
                    {/* 왼쪽: 설명 + 팁 */}
                    <div className="space-y-3 order-2 md:order-1">
                      <div className="text-slate-700 leading-relaxed">
                        {step.description}
                      </div>

                      {step.tip && (
                        <div className="bg-biz-tint50 border border-biz-tint200 rounded-xl p-3 flex gap-2.5">
                          <span className="text-base flex-shrink-0">💡</span>
                          <div className="text-sm text-biz-dark leading-relaxed">
                            {step.tip}
                          </div>
                        </div>
                      )}

                      {/* 이전/다음 버튼 */}
                      <div className="flex items-center gap-2 pt-2">
                        <button
                          type="button"
                          onClick={goPrev}
                          disabled={openIndex === 0}
                          className="flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          이전
                        </button>
                        {autoAdvance && openIndex < steps.length - 1 && (
                          <button
                            type="button"
                            onClick={goNext}
                            className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-bold text-white bg-biz hover:bg-biz-dark transition-colors shadow-biz-soft"
                          >
                            다음 단계
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        )}
                        {openIndex === steps.length - 1 && (
                          <div className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-bold text-emerald-600 bg-emerald-50 border border-emerald-200">
                            ✓ 완료!
                          </div>
                        )}
                      </div>
                    </div>

                    {/* 오른쪽: 폰 mockup */}
                    <div className="order-1 md:order-2 w-full md:w-auto">
                      <PhoneFrame variant="tall">
                        <div className="relative h-full w-full">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={step.image}
                            alt={step.imageAlt}
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                          />
                          {/* 오버레이 강조 요소 */}
                          {step.overlay}
                        </div>
                      </PhoneFrame>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
