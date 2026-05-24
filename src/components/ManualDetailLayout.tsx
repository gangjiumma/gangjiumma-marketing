'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { ChevronLeft, ArrowRight } from 'lucide-react';

interface ManualDetailLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  /** 다음 섹션 링크 (선택) */
  nextHref?: string;
  nextLabel?: string;
}

/**
 * 사장님 메뉴얼 상세 페이지 공통 레이아웃
 * - 상단 뒤로가기 + 페이지 헤더
 * - 본문 (children)
 * - 하단 다음 페이지 링크 + 메인 돌아가기
 */
export default function ManualDetailLayout({
  badge,
  title,
  subtitle,
  children,
  nextHref,
  nextLabel,
}: ManualDetailLayoutProps) {
  return (
    <main className="min-h-screen bg-biz-bg pb-20">
      {/* 상단 nav */}
      <div className="sticky top-16 md:top-20 z-30 bg-biz-bg/90 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/biz-manual"
            className="flex items-center gap-1.5 text-sm font-bold text-slate-700 hover:text-biz transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            메뉴얼 목차
          </Link>
          <Link
            href="/business"
            className="text-xs font-medium text-slate-500 hover:text-biz transition-colors"
          >
            사장님 소개 보기
          </Link>
        </div>
      </div>

      {/* 페이지 헤더 */}
      <header className="pt-10 md:pt-14 pb-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-biz-tint100 text-biz-dark px-3 py-1.5 rounded-full text-xs font-bold mb-4">
            {badge}
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-3">
            {title}
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </header>

      {/* 본문 */}
      <div className="px-4">
        <div className="max-w-3xl mx-auto">{children}</div>
      </div>

      {/* 하단 nav */}
      <div className="px-4 mt-16">
        <div className="max-w-3xl mx-auto space-y-3">
          {nextHref && nextLabel && (
            <Link
              href={nextHref}
              className="group flex items-center justify-between gap-4 bg-white rounded-2xl p-5 border-2 border-biz hover:bg-biz-tint50 transition-colors shadow-biz-soft"
            >
              <div>
                <div className="text-xs font-bold text-slate-400 mb-1">
                  다음 섹션
                </div>
                <div className="font-black text-slate-900 text-lg">
                  {nextLabel}
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-biz group-hover:translate-x-1 transition-transform" />
            </Link>
          )}

          <Link
            href="/biz-manual"
            className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 rounded-2xl transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            메뉴얼 목차로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
}
