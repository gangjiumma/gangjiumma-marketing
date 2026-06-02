import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";
import { ScrollProgressBar } from "@/components/ScrollIndicator";
import VoiceWall from "@/components/VoiceWall";

const DOWNLOAD_URL = "https://gangjiumma.github.io/gangjiumma_app_download/";

// ─────────────────────────────────────────────────────────────
// 강쥐엄마 소통 창구 (/voice)
// 톤: 메인 브랜드 오렌지 (#FF6B35) — 따뜻하고 진솔하게
// 펫페어에서 한 약속("여러분과 소통하는 공간을 만들겠다")을 실제 페이지로
//
// 작성 폼 + 실시간 카드 리스트는 <VoiceWall /> (client) 가 담당
// ✏️ 카피 수정 위치는 "✏️" 검색
// ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  // ✏️ 카피 — SEO 메타
  title: "강쥐엄마에게 한마디 | 소통 창구",
  description:
    "강쥐엄마는 여러분의 목소리로 만들어집니다. 바라는 점, 아쉬운 점 무엇이든 들려주세요. 제가 다 읽어요.",
  openGraph: {
    title: "강쥐엄마에게 한마디 | 소통 창구",
    description: "여러분의 목소리가 강쥐엄마를 키웁니다. 무엇이든 편하게 남겨주세요.",
    images: ["/og-image.png"],
  },
};

export default function VoicePage() {
  return (
    <>
      <ScrollProgressBar />

      {/* 1. HERO */}
      <section className="relative bg-[#FFF6F1] pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFE9DD]/60 via-[#FFF6F1] to-white pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            {/* ✏️ 카피 — 상단 배지 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white rounded-full shadow-soft border border-[#FFD9C7]">
              <span>🐾</span>
              <span className="text-sm md:text-base font-bold text-brand">
                고객과의 약속
              </span>
            </div>

            {/* ✏️ 카피 — 메인 헤드라인 */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-ink-1 tracking-tightest leading-[1.15]">
              여러분의 목소리를
              <br />
              <span className="text-brand">강쥐엄마는 기다립니다</span>
            </h1>
          </FadeInSection>

          <FadeInSection delay={300}>
            {/* ✏️ 카피 — Hero 부제 */}
            <p className="mt-8 md:mt-10 text-base md:text-xl text-ink-2 font-medium leading-relaxed">
              5.29 고객님들께 처음 인사드리며  
              
              <br />
              부족하지만 소통하며 성장하는 앱이 되겠다고 약속드렸습니다.
              <br />
              개발되었으면 하는 부분도, 아쉬운 점도{" "}
              <span className="text-brand font-bold">무엇이든</span> 들려주세요.
            </p>
          </FadeInSection>
        </div>
      </section>

      
      {/* 3. 폼 + 실시간 리스트 */}
      <section className="bg-surface-subtle py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="max-w-2xl mx-auto">
              <VoiceWall />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 4. 가벼운 다운로드 CTA */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            {/* ✏️ 카피 — CTA */}
            <h2 className="text-2xl md:text-4xl font-black text-ink-1 tracking-tighter leading-tight">
              아직 강쥐엄마가 처음이세요?
            </h2>
            <p className="mt-6 text-base md:text-lg text-ink-2 font-medium leading-relaxed">
              반려견 AI 비서, 강쥐엄마와 함께
              <br />
              우리 아이와의 일상을 더 편하게.
            </p>
            <div className="mt-10">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-brand text-white font-extrabold text-base md:text-xl rounded-2xl shadow-brand hover:bg-brand-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>📱</span>
                <span>강쥐엄마 다운로드</span>
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
