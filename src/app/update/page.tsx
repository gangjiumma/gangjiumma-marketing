import type { Metadata } from "next";
import Link from "next/link";
import {
  Store,
  LayoutGrid,
  Sparkles,
  MessagesSquare,
  Bell,
  ArrowRight,
} from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { ScrollProgressBar } from "@/components/ScrollIndicator";

const DOWNLOAD_URL = "https://gangjiumma.github.io/gangjiumma_app_download/";

// ─────────────────────────────────────────────────────────────
// 강쥐엄마 1차 개편 업데이트 안내 (/update)
// 톤: 메인 브랜드 오렌지 (#FF6B35)
// 6월 12일(금) 새 버전 안내 + 적용 내용 4가지 + 업데이트 권장 안내
//
// ✏️ 카피 수정 위치는 "✏️" 검색
// ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "강쥐엄마 1차 개편 업데이트 안내",
  description:
    "출시 일주일 만에 1,000분 돌파! 여러분의 피드백을 담아 6월 12일 새 버전으로 찾아옵니다.",
  openGraph: {
    title: "강쥐엄마 1차 개편 업데이트 안내",
    description: "여러분의 목소리를 담은 첫 번째 큰 업데이트, 6월 12일(금) 공개!",
    images: ["/og-image.png"],
  },
};

const FEATURES = [
  {
    icon: Store,
    label: "우리동네 가게",
    title: "우리동네 가게 입점 신규 오픈",
    desc: "전국 1만 3천여 곳의 업체 정보를 확보하고, 입점 파트너 제안을 진행 중이에요. 결제 연동까지 마무리되면 6월 중으로 앱에서 우리동네 업체 예약과 포인트 사용까지 가능해집니다.",
  },
  {
    icon: LayoutGrid,
    label: "홈 화면",
    title: "홈 화면, 더 가볍고 직관적으로",
    desc: "자주 쓰는 기능 중심으로 재편했어요. \"글자가 많다\"는 피드백을 반영해 텍스트는 최대한 줄이고, 그래픽과 이미지로 한눈에 들어오게 바꿉니다.",
  },
  {
    icon: Sparkles,
    label: "강고리즘",
    title: "강고리즘이 더 똑똑해져요",
    desc: "우리 강아지에게 더 꼭 맞는 추천을 드릴 수 있도록 알고리즘을 손봤어요. 쓸수록 내 아이에게 가까워지는 맞춤 피드를 만나보세요.",
  },
  {
    icon: MessagesSquare,
    label: "강쥐TALK",
    title: "강쥐TALK, 진짜 소통 공간으로",
    desc: "밴드·단톡방처럼 견종끼리, 동네끼리 자유롭게 소통할 수 있도록 기능을 보완했어요. 우리 아이와 비슷한 친구들의 이야기를 더 가깝게 나눠요.",
  },
];

export default function UpdatePage() {
  return (
    <>
      <ScrollProgressBar />

      {/* 1. HERO */}
      <section className="relative bg-[#FFF6F1] pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFE9DD]/60 via-[#FFF6F1] to-white pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            {/* ✏️ 상단 배지 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white rounded-full shadow-soft border border-[#FFD9C7]">
              <span>🐾</span>
              <span className="text-sm md:text-base font-bold text-brand">
                첫 번째 큰 업데이트
              </span>
            </div>

            {/* ✏️ 메인 헤드라인 */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-ink-1 tracking-tightest leading-[1.15]">
              여러분의 목소리로
              <br />
              <span className="text-brand">더 좋아졌어요</span>
            </h1>
          </FadeInSection>

          <FadeInSection delay={300}>
            {/* ✏️ Hero 부제 */}
            <p className="mt-8 md:mt-10 text-base md:text-xl text-ink-2 font-medium leading-relaxed">
              출시 일주일 만에 <span className="text-brand font-bold">1,000분</span>이 넘게
              함께해 주셨어요.
              <br />
              남겨주신 피드백과 실제 사용 모습을 담아
              <br />
              <span className="text-brand font-bold">6월 12일(금)</span> 새로운 버전으로 찾아옵니다.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* 2. 업데이트 안내 (권장) */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="bg-[#FFF6F1] rounded-3xl p-7 md:p-10 border border-[#FFE2D3]">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-2xl bg-white border border-[#FFD9C7] flex items-center justify-center">
                  <Bell className="w-5 h-5 text-brand" strokeWidth={2.2} />
                </div>
                <div className="flex-1">
                  {/* ✏️ 업데이트 안내 카피 */}
                  <h2 className="text-lg md:text-xl font-black text-ink-1 mb-2">
                    앱 업데이트를 부탁드려요
                  </h2>
                  <p className="text-sm md:text-base text-ink-2 leading-relaxed">
                    앱 접속 시 업데이트 알림이 뜰 수 있어요. 업데이트 없이도 이용하실 수 있지만,
                    몇몇 소소한 기능은 제한될 수 있으니 <span className="font-bold text-brand">가능하면 업데이트를 진행</span>해 주세요. 🙏
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 3. 적용 내용 4가지 */}
      <section className="bg-surface-subtle py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-base md:text-lg text-brand font-bold mb-3">이번에 바뀐 것</p>
              <h2 className="text-3xl md:text-4xl font-black text-ink-1 tracking-tighter leading-tight">
                이렇게 달라집니다
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <FadeInSection key={f.label} delay={i * 100}>
                  <div className="bg-white rounded-3xl p-8 md:p-9 h-full shadow-card border border-line">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#FFF1EA] flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-brand" strokeWidth={2.1} />
                      </div>
                      <span className="text-sm font-bold text-brand">{f.label}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-3 leading-snug">
                      {f.title}
                    </h3>
                    <p className="text-base text-ink-3 leading-relaxed">{f.desc}</p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CTA — 업데이트 + 피드백 */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            {/* ✏️ CTA 카피 */}
            <h2 className="text-2xl md:text-4xl font-black text-ink-1 tracking-tighter leading-tight">
              더 좋아진 강쥐엄마,
              <br />
              지금 만나보세요
            </h2>
            <p className="mt-6 text-base md:text-lg text-ink-2 font-medium leading-relaxed">
              앞으로도 여러분의 한마디로 계속 자라날게요.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              {/* 업데이트/다운로드 — 핵심 오렌지 */}
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-brand text-white font-extrabold text-base md:text-xl rounded-2xl shadow-brand hover:bg-brand-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>📱</span>
                <span>앱 업데이트 하러가기</span>
              </a>

              {/* 피드백 — 보조 (흰 + 오렌지 보더) */}
              <Link
                href="/voice"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-white text-brand font-extrabold text-base md:text-xl rounded-2xl border-2 border-[#FFD9C7] hover:border-brand hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>🐾</span>
                <span>의견 남기기</span>
                <ArrowRight className="w-5 h-5" strokeWidth={2.4} />
              </Link>
            </div>

            <p className="mt-6 text-sm md:text-base text-ink-3 font-medium">
              6월 12일(금), 더 좋아진 모습으로 만나요 🐾
            </p>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
