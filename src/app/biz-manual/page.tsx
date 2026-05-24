import type { Metadata } from 'next';
import Link from 'next/link';
import {
  UserPlus,
  Store,
  Sparkles,
  ClipboardList,
  BarChart3,
  Settings,
  ArrowRight,
  CheckCircle2,
  Clock,
  Gift,
  Mail,
  Phone,
  MessageCircle,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';

export const metadata: Metadata = {
  title: '강쥐엄마 사장님 사용설명서 | 30분이면 시작하는 AI 광고',
  description:
    '강쥐엄마 사장님 모드의 모든 것 — 가입부터 AI 광고 만들기, 인사이트 확인까지. 사장님은 매장 운영에, AI는 광고 작성에.',
  openGraph: {
    title: '강쥐엄마 사장님 사용설명서',
    description: '30분이면 시작하는 AI 광고, 사장님은 매장 운영에 집중하세요',
    url: 'https://gangjiumma.kr/biz-manual',
  },
};

// ────────────────────────────────────────────
// 데이터: 섹션 카드 6개
// ────────────────────────────────────────────
const SECTIONS = [
  {
    href: '/biz-manual/signup',
    icon: UserPlus,
    badge: '5분',
    title: '가입부터 입점 승인까지',
    desc: '회원가입 → 사장님 입점 신청 → AI 자동 검수 → 즉시 사용',
    steps: 5,
    color: 'biz',
  },
  {
    href: '/biz-manual/profile',
    icon: Store,
    badge: '필수',
    title: '사장님 홈 둘러보기',
    desc: '일반/사장님 모드 토글, 업체 정보 등록 — 한 번 잘 채워두면 끝',
    steps: 4,
    color: 'biz',
  },
  {
    href: '/biz-manual/ads',
    icon: Sparkles,
    badge: '⭐ 핵심',
    title: 'AI로 광고 만들기',
    desc: '몇 가지 선택만 하면 AI가 광고 문구를 작성해드려요',
    steps: 6,
    color: 'biz',
    featured: true,
  },
  {
    href: '/biz-manual/manage',
    icon: ClipboardList,
    badge: '관리',
    title: '광고·쿠폰 관리',
    desc: '게시 중/임시 저장/예약 대기 — 한 화면에서 모두 관리',
    steps: 4,
    color: 'biz',
  },
  {
    href: '/biz-manual/insights',
    icon: BarChart3,
    badge: '인사이트',
    title: '성과 보기 (인사이트)',
    desc: '홈 노출 / 입점업체 클릭 / AI 추천 / 문의 — 실시간 추이',
    steps: 3,
    color: 'biz',
  },
  {
    href: '/biz-manual/operations',
    icon: Settings,
    badge: '운영',
    title: '문의·QR·구독·Paw',
    desc: '고객 문의 답변, QR 스캔, 구독 관리, Paw 포인트 적립·현금화',
    steps: 5,
    color: 'biz',
  },
];

// ────────────────────────────────────────────
// 데이터: FAQ
// ────────────────────────────────────────────
const FAQS = [
  {
    q: '베타 기간 동안 정말 무료인가요?',
    a: '네, 100% 무료예요. 카드 등록 없이 지금 바로 시작할 수 있어요. 7월 28일까지 basic 플랜의 모든 기능을 무료로 사용할 수 있고, 7월 15일부터 28일 사이에 결제 카드를 등록하시면 정식 출시 후에도 그대로 이어서 사용할 수 있어요.',
  },
  {
    q: '광고는 일주일에 몇 개까지 올릴 수 있나요?',
    a: 'basic 플랜은 주 3회, pro 플랜은 주 5회까지 광고를 게시할 수 있어요. AI 광고 작성은 하루 10회까지 가능해요 (저장만 하고 나중에 게시해도 횟수에 포함됩니다).',
  },
  {
    q: '광고가 어디에 노출되나요?',
    a: '강쥐엄마 앱의 강쥐Talk 피드와 일부 화면에 노출돼요. basic 플랜은 시·도 지역 노출, pro 플랜은 전국 노출이에요. 향후 인스타그램 자동 연동도 추가 예정이에요.',
  },
  {
    q: 'AI가 작성한 광고 문구는 수정할 수 있나요?',
    a: '네, AI 초안이 마음에 안 들면 자유롭게 수정할 수 있어요. 사진도 직접 첨부할 수 있고, 업체 정보(전화/홈페이지/주소)는 자동으로 들어가요.',
  },
  {
    q: '쿠폰이나 QR 코드는 어떻게 쓰나요?',
    a: '쿠폰을 발행하면 고객이 앱에서 받아갈 수 있어요. 매장에 방문한 고객의 쿠폰을 QR 스캔으로 사용 처리하면 Paw 포인트가 자동으로 사장님께 적립돼요.',
  },
  {
    q: 'Paw 포인트는 현금으로 받을 수 있나요?',
    a: '네, 누적 Paw를 1:1로 현금화 신청할 수 있어요 (1 Paw = 1원). 사업자 정보 확인 후 입금돼요. 자세한 절차는 운영팀이 안내드릴게요.',
  },
];

// ────────────────────────────────────────────
// 컴포넌트
// ────────────────────────────────────────────
export default function BizManualPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-biz-bg pb-20">
        {/* ─────────────────────── HERO ─────────────────────── */}
        <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4 overflow-hidden">
          {/* 배경 데코 */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-biz/5 rounded-full blur-3xl -z-10" />

          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <div className="inline-flex items-center gap-2 bg-biz-tint100 text-biz-dark px-4 py-2 rounded-full text-sm font-bold mb-6">
                📘 사장님 사용설명서
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-5">
                30분이면 시작하는
                <br />
                <span className="text-biz">AI 광고</span>
              </h1>

              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
                사장님은 매장 운영에, AI는 광고 작성에.
                <br className="hidden md:block" />
                가입부터 첫 광고 게시까지, 단계별로 차근차근 안내해드릴게요.
              </p>

              {/* 빠른 진입 카드 */}
              <div className="inline-flex flex-col sm:flex-row items-stretch gap-3 max-w-xl w-full mx-auto">
                <Link
                  href="/biz-manual/ads"
                  className="flex-1 flex items-center justify-center gap-2 bg-biz hover:bg-biz-dark text-white font-bold px-5 py-3.5 rounded-2xl shadow-biz transition-colors"
                >
                  <Sparkles className="w-5 h-5" />
                  AI 광고 만들기부터 보기
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/business"
                  className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-bold px-5 py-3.5 rounded-2xl border-2 border-slate-200 transition-colors"
                >
                  사장님 소개 다시 보기
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ─────────────────────── 빠른 가이드 (4단계 요약) ─────────────────────── */}
        <section className="px-4 mb-16">
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-10 shadow-biz-soft">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-biz-tint100 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-biz" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-slate-900">
                    딱 4단계, 5분이면 끝나요
                  </h2>
                </div>

                <div className="grid md:grid-cols-4 gap-3 md:gap-4">
                  {[
                    {
                      step: '01',
                      icon: '📱',
                      title: '회원가입',
                      desc: '휴대폰 번호로 30초',
                    },
                    {
                      step: '02',
                      icon: '🏪',
                      title: '사장님 입점 신청',
                      desc: 'MY → 사장님 입점',
                    },
                    {
                      step: '03',
                      icon: '✨',
                      title: 'AI 자동 검수',
                      desc: '사업자등록증 사진 1장',
                    },
                    {
                      step: '04',
                      icon: '✅',
                      title: '즉시 사용 가능',
                      desc: '베타 기간 100% 무료',
                    },
                  ].map((step, idx) => (
                    <div key={idx} className="relative">
                      <div className="bg-biz-tint50 border border-biz-tint200 rounded-2xl p-4 h-full">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{step.icon}</span>
                          <span className="text-xs font-bold text-biz tabular-nums">
                            STEP {step.step}
                          </span>
                        </div>
                        <div className="font-bold text-slate-900 text-sm mb-1">
                          {step.title}
                        </div>
                        <div className="text-xs text-slate-600">{step.desc}</div>
                      </div>
                      {/* 화살표 */}
                      {idx < 3 && (
                        <div className="hidden md:block absolute top-1/2 -right-2.5 -translate-y-1/2 z-10">
                          <ArrowRight className="w-5 h-5 text-biz" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
                  <Gift className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-emerald-900 text-sm">
                      7월 28일까지 100% 무료
                    </div>
                    <div className="text-xs text-emerald-700 mt-1">
                      카드 등록 없이 지금 바로 시작 · 7/15~28 등록 시 정식 출시 후에도 그대로 사용
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ─────────────────────── 섹션 카드 6개 ─────────────────────── */}
        <section className="px-4 mb-16">
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                  기능별 자세히 보기
                </h2>
                <p className="text-slate-600">
                  궁금한 기능 카드를 눌러보세요. 단계별로 실제 화면과 함께 안내해드려요.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {SECTIONS.map((section) => {
                  const Icon = section.icon;
                  return (
                    <Link
                      key={section.href}
                      href={section.href}
                      className={`group bg-white rounded-2xl p-5 md:p-6 border-2 transition-all ${
                        section.featured
                          ? 'border-biz shadow-biz hover:shadow-lg'
                          : 'border-slate-200 hover:border-biz hover:shadow-biz-soft'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ${
                            section.featured
                              ? 'bg-biz text-white'
                              : 'bg-biz-tint100 text-biz'
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-black text-slate-900 text-lg">
                              {section.title}
                            </h3>
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                section.featured
                                  ? 'bg-biz-tint100 text-biz-dark'
                                  : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              {section.badge}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed mb-3">
                            {section.desc}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-400">
                              {section.steps}단계
                            </span>
                            <span className="flex items-center gap-1 text-sm font-bold text-biz group-hover:gap-2 transition-all">
                              자세히 보기
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ─────────────────────── FAQ ─────────────────────── */}
        <section className="px-4 mb-16">
          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                  자주 묻는 질문
                </h2>
                <p className="text-slate-600">
                  사장님들이 가장 많이 물어보신 6가지
                </p>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-white rounded-2xl border border-slate-200 overflow-hidden"
                  >
                    <summary className="flex items-center gap-3 p-5 cursor-pointer hover:bg-slate-50/50 transition-colors list-none">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-biz-tint100 text-biz flex items-center justify-center font-bold text-sm">
                        Q
                      </div>
                      <div className="flex-1 font-bold text-slate-900 text-base">
                        {faq.q}
                      </div>
                      <div className="flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                        ▾
                      </div>
                    </summary>
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100">
                      <div className="flex gap-3 mt-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
                          A
                        </div>
                        <div className="flex-1 text-slate-700 leading-relaxed text-sm md:text-base">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ─────────────────────── 도움이 필요하면 ─────────────────────── */}
        <section className="px-4 mb-16">
          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <div className="bg-gradient-to-br from-biz to-biz-dark rounded-3xl p-8 md:p-10 text-white text-center shadow-biz">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-5">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black mb-2">
                  더 궁금한 게 있으세요?
                </h2>
                <p className="text-white/90 mb-6 leading-relaxed">
                  앱 안 '사장님 모드 → 운영팀에 문의하기'로 무엇이든 편하게 보내주세요.
                  <br className="hidden md:block" />
                  사장님 한 분 한 분께 직접 답변드릴게요.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 max-w-md mx-auto">
                  <a
                    href="mailto:cs@gangjiumma.kr"
                    className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-2xl px-5 py-3 font-bold transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    cs@gangjiumma.kr
                  </a>
                 
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ─────────────────────── 최종 CTA ─────────────────────── */}
        <section className="px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <div className="bg-white rounded-3xl border-2 border-slate-200 p-8 md:p-12 text-center">
                <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-5">
                  <CheckCircle2 className="w-4 h-4" />
                  지금 가입하면 7/28까지 무료
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                  준비되셨다면, 30초 만에 시작하세요
                </h2>
                <p className="text-slate-600 mb-8">
                  앱 다운로드 → 회원가입 → 사장님 입점 신청, 5분이면 첫 광고를 만들 수 있어요.
                </p>

                <a
                  href="https://gangjiumma.github.io/gangjiumma_app_download/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-brand/30 transition-colors text-lg"
                >
                  강쥐엄마 앱 다운로드
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
