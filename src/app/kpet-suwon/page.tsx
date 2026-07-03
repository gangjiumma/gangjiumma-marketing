import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";
import { ScrollDownIndicator, ScrollProgressBar } from "@/components/ScrollIndicator";

const DOWNLOAD_URL = "https://gangjiumma.github.io/gangjiumma_app_download/";

// ─────────────────────────────────────────────────────────────
// K-PET 수원 페어 랜딩페이지
// 톤: 신선한 라임 그린 (#97C459) + 포인트 오렌지 (#FF6B35)
// 메가주 페이지(/megazoo)와 자매 관계 — 구조 동일, 컬러만 다름
//
// ✏️ 카피 수정 위치를 찾으려면 "✏️" 검색하세요
// ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  // ✏️ 카피 수정 — SEO 메타
  title: "AnimAI, 케이펫페어 수원에서 만나요!",
  description: "신선한 봄, 수원메쎄에서 AnimAI를 만나보세요. AI 퀴즈, 사은품, Paw 쿠폰까지!",
  openGraph: {
    title: "AnimAI, 케이펫페어 수원에서 만나요!",
    description: "수원메쎄에서 AnimAI와 함께. AI 퀴즈, 사은품, Paw 쿠폰까지!",
    images: ["/og-image.png"],
  },
};

export default function KpetSuwonPage() {
  return (
    <>
      <ScrollProgressBar />
      <ScrollDownIndicator />

      {/* 1. HERO */}
      <section className="relative bg-lime-tint50 pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lime-tint100/50 via-lime-tint50 to-white pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            {/* ✏️ 카피 수정 — 상단 배지 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white rounded-full shadow-soft border border-lime-tint200">
              <span>🌱</span>
              <span className="text-sm md:text-base font-bold text-lime">
                K-PET FAIR 수원 첫 등장
              </span>
            </div>

            {/* ✏️ 카피 수정 — 메인 헤드라인 */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-ink-1 tracking-tightest leading-[1.15]">
              AnimAI,
              <br />
              <span className="text-lime">수원에서 만나요!</span>
            </h1>
          </FadeInSection>

          <FadeInSection delay={300}>
            {/* ✏️ 카피 수정 — Hero 부제 */}
            <p className="mt-8 md:mt-10 text-base md:text-xl text-ink-2 font-medium leading-relaxed">
              신선한 봄, 수원메쎄에서
              <br />
              AnimAI와 <span className="text-lime font-bold">처음 만나요</span>.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* 2. 이벤트 정보 카드 */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              {/* ✏️ 카피 수정 — 섹션 라벨 */}
              <p className="text-base md:text-lg text-lime font-bold mb-3">
                부스에서 만날 수 있는 것
              </p>
              {/* ✏️ 카피 수정 — 섹션 제목 */}
              <h2 className="text-3xl md:text-4xl font-black text-ink-1 tracking-tighter leading-tight">
                꼭 방문해서
                <br />
                선물과 혜택 받아가세요
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {/* ✏️ 카드 1 */}
            <FadeInSection delay={0}>
              <div className="bg-lime-tint50 rounded-3xl p-8 md:p-10 h-full border border-lime-tint200">
                <div className="text-5xl mb-5">🤖</div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-3 leading-snug">
                  AI 퀴즈 이벤트
                </h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  AnimAI의 AI와 함께하는 재미있는 퀴즈로
                  <br />
                  우리 강아지에 대해 더 알아보세요.
                </p>
              </div>
            </FadeInSection>

            {/* ✏️ 카드 2 */}
            <FadeInSection delay={100}>
              <div className="bg-lime-tint50 rounded-3xl p-8 md:p-10 h-full border border-lime-tint200">
                <div className="text-5xl mb-5">🎁</div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-3 leading-snug">
                  사은품 증정
                </h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  방문해주신 모든 분들께 AnimAI가
                  <br />
                  준비한 특별한 선물을 드려요.
                </p>
              </div>
            </FadeInSection>

            {/* ✏️ 카드 3 */}
            <FadeInSection delay={200}>
              <div className="bg-lime-tint50 rounded-3xl p-8 md:p-10 h-full border border-lime-tint200">
                <div className="text-5xl mb-5">🐾</div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-3 leading-snug">
                  Paw(포)인트 쿠폰
                </h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  AnimAI 앱에서 사용 가능한
                  <br />
                  Paw 포인트 쿠폰을 드려요.
                </p>
              </div>
            </FadeInSection>

            {/* ✏️ 카드 4 */}
            <FadeInSection delay={300}>
              <div className="bg-lime-tint50 rounded-3xl p-8 md:p-10 h-full border border-lime-tint200">
                <div className="text-5xl mb-5">🏪</div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-3 leading-snug">
                  우리동네 추천 업체
                </h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  AnimAI가 엄선한 진심 가득한
                  <br />
                  우리동네 업체들을 소개해드려요.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 3. 일시 · 장소 · 부스 */}
      <section className="bg-surface-subtle py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              {/* ✏️ 카피 수정 — 섹션 라벨 */}
              <p className="text-base md:text-lg text-lime font-bold mb-3">
                만나러 오세요
              </p>
              {/* ✏️ 카피 수정 — 섹션 제목 */}
              <h2 className="text-3xl md:text-4xl font-black text-ink-1 tracking-tighter leading-tight">
                AnimAI는
                <br />
                여기에 있어요
              </h2>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
              {/* 일시 — ✏️ 날짜 확정되면 수정 */}
              <div className="pb-6 md:pb-8 border-b border-line">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="text-3xl md:text-4xl">📅</div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-ink-3 font-bold mb-1">일시</p>
                    <p className="text-xl md:text-3xl font-black text-ink-1 leading-tight">
                      2026년 06월 26일 ~ 28일
                    </p>
                    <p className="text-sm md:text-base text-ink-3 mt-1">금 · 토 · 일</p>
                  </div>
                </div>
              </div>

              {/* 장소 */}
              <div className="py-6 md:py-8 border-b border-line">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="text-3xl md:text-4xl">📍</div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-ink-3 font-bold mb-1">장소</p>
                    <p className="text-xl md:text-3xl font-black text-ink-1 leading-tight">
                      수원메쎄
                    </p>
                    <p className="text-sm md:text-base text-ink-3 mt-1">SUWONMESSE, 경기도 수원시</p>
                  </div>
                </div>
              </div>

              {/* 부스 — ✏️ 부스 번호 확정되면 수정 */}
              <div className="pt-6 md:pt-8">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="text-3xl md:text-4xl">🎪</div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-ink-3 font-bold mb-1">부스</p>
                    <p className="text-xl md:text-3xl font-black text-lime leading-tight">
                      추후공지
                    </p>
                    <p className="text-sm md:text-base text-ink-3 mt-1">케이펫페어 수원</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 4. CTA - 미리 다운로드 */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            {/* ✏️ 카피 수정 — Final CTA 헤드라인 */}
            <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tightest leading-tight">
              부스 방문 전에
              <br />
              <span className="text-lime">미리 만나요</span>
            </h2>
            {/* ✏️ 카피 수정 — Final CTA 부제 */}
            <p className="mt-8 text-base md:text-xl text-ink-2 font-medium leading-relaxed">
              AnimAI 앱을 먼저 다운받고 오시면
              <br />
              부스에서 더 많은 혜택을 받으실 수 있어요.
            </p>
            <div className="mt-10 md:mt-12">
              {/* CTA 버튼은 포인트 오렌지 — 메가주랑 자매 톤 통일 */}
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-brand text-white font-extrabold text-base md:text-xl rounded-2xl shadow-brand hover:bg-brand-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>📱</span>
                <span>AnimAI 다운로드</span>
              </a>
            </div>
            {/* ✏️ 카피 수정 — 하단 마무리 멘트 */}
            <p className="mt-6 text-sm md:text-base text-ink-3 font-medium">
              수원메쎄에서 만나요 🌱
            </p>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
