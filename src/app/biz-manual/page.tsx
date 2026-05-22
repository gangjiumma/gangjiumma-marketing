import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowLeft, Calendar, User, Store, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

// ─────────────────────────────────────────────────────────────
// 사장님 사용설명서 — 준비 중 안내 + 빠른 시작 4단계
// 톤: 비즈니스 블루 (/business 페이지와 동일)
// 5월 24일 정식 매뉴얼 오픈 예정
// ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "사장님 사용설명서 - 강쥐엄마",
  description: "강쥐엄마 사장님 입점 4단계 빠른 가이드. 상세 사용설명서는 5월 24일 오픈 예정.",
};

const STEPS = [
  {
    num: "01",
    icon: User,
    title: "프로필 페이지 하단",
    desc: "강쥐엄마 앱을 실행하고\nMY 탭 → 내 프로필로 이동",
  },
  {
    num: "02",
    icon: Store,
    title: "사장님 입점 신청",
    desc: "프로필 화면 하단의\n사장님 입점 신청 버튼 선택",
  },
  {
    num: "03",
    icon: Sparkles,
    title: "AI 승인 절차 진행",
    desc: "사업자등록증 사진 1장 업로드\nAI가 자동으로 검수",
  },
  {
    num: "04",
    icon: CheckCircle2,
    title: "자동 승인",
    desc: "검수 통과 시 즉시 승인\n바로 사장님 페이지 사용 가능",
  },
];

export default function BizManualPage() {
  return (
    <section className="relative min-h-screen bg-biz-bg overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 bg-gradient-to-b from-biz-tint50 via-biz-bg to-white pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 md:px-8">
        {/* ═════════════════════════════════════════════════ */}
        {/* 1. 빠른 시작 4단계 — 사장님이 지금 바로 할 수 있는 것 */}
        {/* ═════════════════════════════════════════════════ */}
        <FadeInSection>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-6 bg-white rounded-3xl shadow-card border border-biz-tint200">
              <BookOpen size={32} strokeWidth={2} className="text-biz" />
            </div>
            <p className="text-sm md:text-base text-biz font-bold mb-3 tracking-tight">
              사장님 입점 빠른 가이드
            </p>
            <h1 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tightest leading-tight">
              4단계면
              <br />
              바로 시작할 수 있어요
            </h1>
          </div>
        </FadeInSection>

        {/* 4단계 카드 */}
        <div className="space-y-4 md:space-y-5 mb-16 md:mb-20">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === STEPS.length - 1;
            return (
              <FadeInSection key={i} delay={i * 120}>
                <div className="relative">
                  {/* 카드 */}
                  <div className="bg-white rounded-3xl p-6 md:p-7 shadow-soft border border-biz-tint200 hover:shadow-card transition-shadow">
                    <div className="flex items-start gap-4 md:gap-5">
                      {/* 아이콘 박스 */}
                      <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-biz-tint50 rounded-2xl flex items-center justify-center">
                        <Icon size={24} strokeWidth={2.5} className="text-biz" />
                      </div>
                      {/* 텍스트 */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xs md:text-sm font-bold text-biz tracking-wider">
                            STEP {step.num}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-black text-ink-1 mb-2 leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-sm md:text-base text-ink-3 leading-relaxed whitespace-pre-line">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 카드 사이 화살표 */}
                  {!isLast && (
                    <div className="flex justify-center my-1 md:my-2">
                      <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-biz-tint100 flex items-center justify-center">
                        <ArrowRight size={14} strokeWidth={3} className="text-biz rotate-90" />
                      </div>
                    </div>
                  )}
                </div>
              </FadeInSection>
            );
          })}
        </div>

        {/* ═════════════════════════════════════════════════ */}
        {/* 2. 상세 매뉴얼 준비중 안내 — 5월 24일             */}
        {/* ═════════════════════════════════════════════════ */}
        <FadeInSection delay={200}>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-black text-ink-1 tracking-tighter leading-tight mb-4">
              상세 사용설명서는
              <br />
              곧 만나보실 수 있어요
            </h2>
            <p className="text-base md:text-lg text-ink-2 font-medium leading-relaxed mb-8">
              강쥐엄마의 모든 기능을 더 잘 활용하실 수 있도록
              <br />
              사장님 전용 사용설명서를 준비 중이에요.
            </p>

            {/* 오픈 일자 박스 */}
            <div className="inline-flex items-center gap-3 px-6 md:px-7 py-4 md:py-5 bg-white rounded-2xl shadow-soft border border-biz-tint200">
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
          </div>
        </FadeInSection>

        {/* ═════════════════════════════════════════════════ */}
        {/* 3. 사장님 페이지로 돌아가기 링크                    */}
        {/* ═════════════════════════════════════════════════ */}
        <FadeInSection delay={400}>
          <div className="mt-14 md:mt-16 text-center">
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
