import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowLeft, Calendar } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

// ─────────────────────────────────────────────────────────────
// 사장님 사용설명서 — 준비 중 안내 (/biz-manual)
// 톤: 비즈니스 블루 (/business 페이지와 동일)
// 5월 24일 정식 오픈 예정
// ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "사장님 사용설명서 - 강쥐엄마",
  description: "강쥐엄마 사장님 사용설명서가 곧 업로드됩니다. 5월 24일 오픈 예정.",
};

export default function BizManualPage() {
  return (
    <section className="relative min-h-screen bg-biz-bg flex items-center justify-center overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20">
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 bg-gradient-to-b from-biz-tint50 via-biz-bg to-white pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-5 md:px-8 text-center">
        <FadeInSection>
          {/* 상단 책 아이콘 박스 */}
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 mb-8 bg-white rounded-3xl shadow-card border border-biz-tint200">
            <BookOpen size={40} strokeWidth={2} className="text-biz" />
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          {/* 라벨 */}
          <p className="text-base md:text-lg text-biz font-bold mb-3 tracking-tight">
            사장님 사용설명서
          </p>

          {/* 메인 헤드라인 */}
          <h1 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tightest leading-tight">
            잠시만
            <br />
            기다려주세요
          </h1>
        </FadeInSection>

        <FadeInSection delay={400}>
          {/* 부제 */}
          <p className="mt-8 md:mt-10 text-base md:text-xl text-ink-2 font-medium leading-relaxed">
            강쥐엄마를 더 잘 활용하실 수 있도록
            <br />
            사장님 전용 사용설명서를 준비 중이에요.
          </p>
        </FadeInSection>

        <FadeInSection delay={600}>
          {/* 오픈 일자 박스 */}
          <div className="mt-10 md:mt-12 inline-flex items-center gap-3 px-6 md:px-7 py-4 md:py-5 bg-white rounded-2xl shadow-soft border border-biz-tint200">
            <Calendar size={22} strokeWidth={2.5} className="text-biz shrink-0" />
            <div className="text-left">
              <p className="text-xs md:text-sm text-ink-3 font-medium mb-0.5">
                오픈 예정
              </p>
              <p className="text-base md:text-lg font-black text-ink-1">
                2026년 5월 24일
              </p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={800}>
          {/* 사장님 페이지로 돌아가기 */}
          <div className="mt-14 md:mt-16">
            <Link
              href="/business"
              className="inline-flex items-center gap-2 px-6 md:px-7 py-3 md:py-3.5 text-biz font-bold text-sm md:text-base hover:text-biz-dark transition-colors"
            >
              <ArrowLeft size={18} strokeWidth={2.5} />
              <span>사장님 페이지로 돌아가기</span>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
