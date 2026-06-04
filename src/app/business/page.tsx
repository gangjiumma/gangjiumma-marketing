"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Megaphone,
  Settings,
  Lightbulb,
  Brain,
  Sparkles,
  Target,
  Share2,
  Wallet,
  BarChart3,
  Tent,
  Briefcase,
  Calendar,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { ScrollProgressBar } from "@/components/ScrollIndicator";
import ScrollHint from "@/components/ScrollHint";
import { IconBox } from "@/components/IconBox";
import BusinessComingSoon from "@/components/BusinessComingSoon";

const DOWNLOAD_URL = "https://gangjiumma.github.io/gangjiumma_app_download/";

// ✏️ 사장님용 사용설명서 — 5월 24일 정식 오픈 예정 (현재는 준비중 안내 페이지)
const MANUAL_URL = "/biz-manual";

// ✏️ 사장님 페이지 정비 중 — 완성되면 true 로 바꾸면 기존 페이지 그대로 복귀
const SHOW_FULL_PAGE = false;

// ─────────────────────────────────────────────────────────────
// 사장님 페이지 v2 — "AI로 영업·광고·운영" 컨셉
//
// 톤: 비즈니스 블루 (#3B82F6) + 살짝 푸른빛 배경 (#F1F5F9)
// 단, 앱 다운로드 CTA는 오렌지 유지 (강쥐엄마 시그니처)
//
// 구조 (11섹션):
//   1. Hero
//   2. 문제점 (공감 톤) + 해결 3개 카드 (마케팅/운영/컨설팅)
//   3. 차별점 8개 카드 (4x2)
//   4. 비교표 (기존 활용, 컬러만 블루)
//   5. 노출 4곳
//   6. 플랜 (탭, 기존 그대로)
//   7. 입점 혜택
//   8. 만든 사람
//   9. FAQ
//   10. Final CTA
//
// ✏️ 카피 수정 위치를 찾으려면 "✏️" 검색하세요
// ─────────────────────────────────────────────────────────────

export default function BusinessPage() {
  const [planTab, setPlanTab] = useState<"local" | "online">("local");

  // ⭐ 준비중 모드 — 기존 페이지는 아래에 그대로 보존됨
  if (!SHOW_FULL_PAGE) {
    return (
      <>
        <ScrollProgressBar />
        <BusinessComingSoon />
      </>
    );
  }

  return (
    <>
      <ScrollProgressBar />

      {/* ═════════════════════════════════════════════════════ */}
      {/* 우측 상단 — 사용 설명서 버튼 (사장님 페이지 한정)       */}
      {/* Header의 '사장님 입점' 버튼 아래에 별도 라인으로 배치   */}
      {/* ═════════════════════════════════════════════════════ */}
      <div className="fixed top-20 md:top-24 right-4 md:right-6 z-50">
        <Link
          href={MANUAL_URL}
          className="inline-flex items-center gap-1.5 px-3.5 md:px-4 py-2 md:py-2.5 bg-white text-biz font-bold text-xs md:text-sm rounded-full shadow-card border border-biz-tint200 hover:bg-biz-tint50 transition-colors"
        >
          <BookOpen size={16} strokeWidth={2.5} />
          <span>사용설명서</span>
        </Link>
      </div>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 1. HERO                                                */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="relative bg-biz-bg pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-biz-tint50 via-biz-bg to-white pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            {/* ✏️ 베타 배지 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white rounded-full shadow-soft border border-biz-tint200">
              <span className="w-2 h-2 rounded-full bg-biz animate-pulse" />
              <span className="text-sm md:text-base font-bold text-biz">
                BETA · 7월 28일까지 무료
              </span>
            </div>
            {/* ✏️ Hero 헤드라인 */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-ink-1 tracking-tightest leading-[1.2]">
              사장님의 영업·광고·운영
              <br />
              <span className="text-biz">AI에게 맡겨보세요</span>
            </h1>
          </FadeInSection>

          <FadeInSection delay={200}>
            {/* ✏️ Hero 부제 */}
            <p className="mt-8 md:mt-10 text-base md:text-xl text-ink-2 font-medium leading-relaxed">
              매장 운영만으로도 벅찬 사장님,
              <br />
              <span className="text-biz font-bold">반려견 전문 AI</span>가 광고부터 컨설팅까지 도와드려요.
            </p>
          </FadeInSection>

          <FadeInSection delay={400}>
            {/* ✏️ Hero 강조 박스 — 메가주 임박감 */}
            <div className="mt-10 md:mt-12 inline-block px-5 md:px-6 py-3 md:py-4 bg-white rounded-2xl shadow-soft border border-biz-tint200">
              <p className="text-sm md:text-base text-ink-2 font-medium leading-relaxed">
                <span className="text-biz font-bold">5월 29일 메가주</span>를 시작으로 사용자 본격 유입.
                <br className="md:hidden" />
                <span className="md:ml-1">먼저 자리 잡은 사장님이 먼저 노출됩니다.</span>
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={600}>
            <div className="mt-12 md:mt-14">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-biz text-white font-extrabold text-base md:text-xl rounded-2xl shadow-biz hover:bg-biz-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>베타 무료로 시작하기</span>
              </a>
            </div>
            <div className="mt-14 md:mt-16">
              <ScrollHint />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 2. 문제점 (공감) + 해결 3개 (마케팅/운영/컨설팅)        */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              {/* ✏️ 섹션 라벨 */}
              <p className="text-base md:text-lg text-biz font-bold mb-3">
                사장님, 혹시 이러시진 않나요?
              </p>
              {/* ✏️ 섹션 헤드라인 (공감) */}
              <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
                현업에 치이느라
                <br />
                정작 마케팅엔 손이 안 가요
              </h2>
            </div>
          </FadeInSection>

          {/* 공감 박스 — 사장님 일상 quote */}
          <FadeInSection delay={150}>
            <div className="bg-biz-bg rounded-3xl p-8 md:p-12 mb-16 md:mb-20 max-w-3xl mx-auto">
              {/* ✏️ 공감 quote */}
              <div className="space-y-4 text-base md:text-lg text-ink-2 leading-relaxed">
                <p className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-biz mt-1 shrink-0" strokeWidth={2.5} />
                  <span>매일 미용·돌봄·매장 운영하느라 광고 신경 쓸 시간이 없어요.</span>
                </p>
                <p className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-biz mt-1 shrink-0" strokeWidth={2.5} />
                  <span>대행사 맡겨도 처음만 신경써주고, 잘 되고 있는지 모니터링도 어려워요.</span>
                </p>
                <p className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-biz mt-1 shrink-0" strokeWidth={2.5} />
                  <span>예약·문의 대응도 일이고, 우리동네 고객이 뭘 원하는지도 파악할 여유가 없어요.</span>
                </p>
                <p className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-biz mt-1 shrink-0" strokeWidth={2.5} />
                  <span>AI 모델 따로 구독해도 제대로 활용할 시간이 안 나요.</span>
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* 해결 — 우리의 3가지 기능 */}
          <FadeInSection delay={200}>
            <div className="text-center mb-12 md:mb-14">
              <p className="text-base md:text-lg text-biz font-bold mb-3">
                강쥐엄마의 해결책
              </p>
              <h3 className="text-2xl md:text-4xl font-black text-ink-1 tracking-tighter leading-tight">
                반려견 전문 AI가
                <br />
                3가지를 한 번에 해결해요
              </h3>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {/* 카드 1 — 마케팅 */}
            <FadeInSection delay={0}>
              <div className="bg-biz-tint50 rounded-3xl p-8 md:p-10 h-full border border-biz-tint200">
                <div className="mb-6">
                  <IconBox category="schedule" icon={Megaphone} size="lg" />
                </div>
                {/* ✏️ 카드 1 제목 */}
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                  마케팅
                </h3>
                {/* ✏️ 카드 1 본문 */}
                <p className="text-base text-ink-2 leading-relaxed">
                  우리 매장에 딱 맞는 광고를 AI가 직접 제작.
                  <br />
                  강쥐엄마 안은 물론 인스타·블로그용 광고까지 한 번에.
                </p>
              </div>
            </FadeInSection>

            {/* 카드 2 — 운영 */}
            <FadeInSection delay={150}>
              <div className="bg-biz-tint50 rounded-3xl p-8 md:p-10 h-full border border-biz-tint200">
                <div className="mb-6">
                  <IconBox category="schedule" icon={Settings} size="lg" />
                </div>
                {/* ✏️ 카드 2 제목 */}
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                  운영
                </h3>
                {/* ✏️ 카드 2 본문 */}
                <p className="text-base text-ink-2 leading-relaxed">
                  예약 관리, 고객 문의 응대까지 AI가 1차로.
                  <br />
                  사장님은 확인만, 시간은 매장 운영에 쓰세요.
                </p>
              </div>
            </FadeInSection>

            {/* 카드 3 — 컨설팅 */}
            <FadeInSection delay={300}>
              <div className="bg-biz-tint50 rounded-3xl p-8 md:p-10 h-full border border-biz-tint200">
                <div className="mb-6">
                  <IconBox category="schedule" icon={Lightbulb} size="lg" />
                </div>
                {/* ✏️ 카드 3 제목 */}
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                  컨설팅
                </h3>
                {/* ✏️ 카드 3 본문 */}
                <p className="text-base text-ink-2 leading-relaxed">
                  우리 동네 고객 관심사, SNS 트렌드, 실시간 데이터.
                  <br />
                  분석해서 추천 이벤트·고객 유치 방법까지 제안.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 3. 차별점 8개                                          */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-biz-bg py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-16 md:mb-20">
              {/* ✏️ 섹션 라벨 */}
              <p className="text-base md:text-lg text-biz font-bold mb-3">
                다른 AI · 광고 플랫폼과는 다릅니다
              </p>
              {/* ✏️ 섹션 헤드라인 */}
              <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
                강쥐엄마만의
                <br />
                8가지 차별점
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                num: "01",
                icon: Brain,
                title: "반려견 전문 AI",
                text: "강쥐엄마의 강GPT는 모든 알고리즘이 반려견에 맞춰져 있어요. 일반 AI와는 답변 깊이가 달라요.",
              },
              {
                num: "02",
                icon: Sparkles,
                title: "최고급 AI 모델",
                text: "현시점 가장 고급 AI 모델인 Claude(클로드)를 사용합니다. 더 똑똑하고 정확한 답변을 받으세요.",
              },
              {
                num: "03",
                icon: Target,
                title: "100% 타겟 광고",
                text: "강쥐엄마를 쓰러 오는 사람은 모두 동네 반려견 보호자. 광고가 100% 타겟에게 바로 닿아요.",
              },
              {
                num: "04",
                icon: Share2,
                title: "외부 광고도 함께 제작",
                text: "강쥐엄마 앱뿐 아니라 인스타·블로그 등에 그대로 올릴 수 있는 광고도 AI가 같이 만들어드려요.",
              },
              {
                num: "05",
                icon: Wallet,
                title: "일 1,000원대부터",
                text: "월 29,900원부터. AI 모델 하나 구독해도 월 3만 원은 그냥 쓰는 시대. 강쥐엄마는 광고·운영·컨설팅까지 포함된 가격.",
                highlight: "7/28까지 베타 무료",
              },
              {
                num: "06",
                icon: BarChart3,
                title: "가장 합리적인 광고 채널",
                text: "동급 비용 대비 노출·전환 효과 모두 우위. 자세한 비교표는 바로 아래에서 확인하세요.",
              },
              {
                num: "07",
                icon: Tent,
                title: "매월 펫페어 공동 홍보",
                text: "강쥐엄마가 매월 주요 펫페어에 고정 참여. 사장님 매장도 팜플렛·디지털 책자로 오프라인 공동 홍보됩니다.",
              },
              {
                num: "08",
                icon: Briefcase,
                title: "실질적인 영업 수단",
                text: "단순 AI agent를 넘어 광고 채널, 포인트 결제, 상품 등록, 쿠폰 발행까지 — 진짜 매출로 이어지는 도구.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeInSection key={i} delay={i * 60}>
                  <div className="bg-white rounded-3xl p-7 md:p-8 shadow-soft h-full hover:shadow-card transition-shadow">
                    <div className="flex items-start gap-4">
                      <IconBox category="schedule" icon={Icon} size="md" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-biz tracking-wider">{item.num}</span>
                          {item.highlight && (
                            <span className="px-2 py-0.5 bg-biz text-white text-[10px] font-bold rounded-full">
                              {item.highlight}
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg md:text-xl font-black text-ink-1 mb-2 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-sm md:text-base text-ink-3 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 4. 비교표 (기존 활용 — 컬러만 블루로)                  */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
                마케팅 채널,
                <br />
                비교해보세요
              </h2>
              <p className="mt-6 text-base md:text-lg text-ink-3 font-medium">
                같은 비용으로 어떤 효과를 받는지, 숫자로 직접 보여드릴게요.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="overflow-x-auto -mx-5 md:mx-0 px-5 md:px-0">
              <table className="w-full min-w-[640px] bg-white rounded-2xl overflow-hidden border border-line table-fixed">
                <colgroup>
                  <col className="w-[16%]" />
                  <col className="w-[20%]" />
                  <col className="w-[16%]" />
                  <col className="w-[16%]" />
                  <col className="w-[16%]" />
                  <col className="w-[16%]" />
                </colgroup>
                <thead>
                  <tr className="bg-ink-1 text-white">
                    <th className="px-2 py-3 md:px-3 md:py-4 text-left text-xs md:text-sm font-bold">항목</th>
                    <th className="px-2 py-3 md:px-3 md:py-4 text-center text-xs md:text-sm font-bold bg-biz">강쥐엄마</th>
                    <th className="px-2 py-3 md:px-3 md:py-4 text-center text-xs md:text-sm font-bold">인스0광고</th>
                    <th className="px-2 py-3 md:px-3 md:py-4 text-center text-xs md:text-sm font-bold">네이0광고</th>
                    <th className="px-2 py-3 md:px-3 md:py-4 text-center text-xs md:text-sm font-bold">대행0위탁</th>
                    <th className="px-2 py-3 md:px-3 md:py-4 text-center text-xs md:text-sm font-bold">펫0앱</th>
                  </tr>
                </thead>
                <tbody className="text-xs md:text-sm">
                  <tr className="border-b border-line">
                    <td className="px-2 py-3 md:px-3 md:py-4 font-bold text-ink-1">월 비용</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center bg-biz-tint50 font-bold text-biz whitespace-nowrap">29,900원~</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">10~30만</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">100~500원<br />/클릭</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">100~300만</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">변동</td>
                  </tr>
                  <tr className="border-b border-line bg-surface-subtle">
                    <td className="px-2 py-3 md:px-3 md:py-4 font-bold text-ink-1">대상 고객</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center bg-biz-tint50 font-bold text-ink-1">100% 강아지<br />보호자</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2">비반려인<br />다수</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2">검색<br />의도자만</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2">위탁사<br />운영</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2">펫 보호자</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="px-2 py-3 md:px-3 md:py-4 font-bold text-ink-1">사용자<br />성향</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center bg-biz-tint50 font-bold text-ink-1">강아지에 진심,<br />이용률 ↑</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2">다양</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2">즉시<br />구매 의도</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2">다양</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2">다양</td>
                  </tr>
                  <tr className="border-b border-line bg-surface-subtle">
                    <td className="px-2 py-3 md:px-3 md:py-4 font-bold text-ink-1">노출 빈도</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center bg-biz-tint50 font-bold text-ink-1 whitespace-nowrap">매일<br />(데일리 앱)</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">광고 시</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">검색 시</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">광고 시</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">검색 시</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="px-2 py-3 md:px-3 md:py-4 font-bold text-ink-1">효과 측정</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center bg-biz-tint50 font-bold text-ink-1 whitespace-nowrap">앱 내<br />통계 제공</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">노출/클릭만</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">클릭만</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">한정적</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">한정적</td>
                  </tr>
                  <tr className="border-b border-line bg-surface-subtle">
                    <td className="px-2 py-3 md:px-3 md:py-4 font-bold text-ink-1">AI 광고<br />제작</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center bg-biz-tint50 font-bold text-biz whitespace-nowrap">✓ 일 3~20회</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-4">—</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-4">—</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-4">—</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-4">—</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-3 md:px-3 md:py-4 font-bold text-ink-1">추가 혜택</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center bg-biz-tint50 font-bold text-ink-1">펫페어<br />공동 광고<br />+ Paw 보상</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-4">없음</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-4">없음</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-4">없음</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-4">없음</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInSection>

          <FadeInSection delay={400}>
            <div className="mt-12 md:mt-16 p-8 md:p-10 bg-biz-tint50 rounded-3xl border-2 border-biz-tint200">
              <div className="flex items-start gap-4">
                <Lightbulb size={32} className="text-biz shrink-0" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                    강쥐엄마의 핵심 차이
                  </h3>
                  <p className="text-base md:text-lg text-ink-2 leading-relaxed">
                    <span className="text-ink-3">대행0 위탁 = 월 100~300만원으로 광고 노출만</span>
                    <br />
                    <span className="font-bold text-ink-1">강쥐엄마 = 그 1/5 비용으로 광고 + AI 도구 + 펫페어 공동 광고 + 실제 매장 방문 유도까지</span>
                    <br />
                    <br />
                    지역 기반의 강아지 보호자가 <span className="text-biz font-bold">매일 방문하는 데일리 앱</span>이기에 효과는 몇 배 더 강력합니다.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 5. 노출 4곳                                            */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-biz-bg py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
                우리 가게가
                <br />
                노출되는 4곳
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {[
              { num: 1, title: 'Home의 "우리동네 업체"', text: "사용자가 앱을 열면 가장 먼저 보는 화면. 같은 지역 강쥐엄마 보호자들에게 우리 가게가 자동 추천돼요." },
              { num: 2, title: "강쥐talk 광고 게시글", text: "동네 보호자들이 모이는 커뮤니티 피드. 우리 가게의 신메뉴, 이벤트, 특별 소식을 사장님이 직접 알릴 수 있어요.", sub: "(플랜에 따라 주 1~3회)" },
              { num: 3, title: "AI 검색 결과 (강GPT)", text: '사용자가 "우리동네 미용실 추천해줘" 물어보면, AI가 우리 가게를 답변 안에 자연스럽게 추천해드려요.' },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-soft h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-full bg-biz-tint100 flex items-center justify-center text-2xl font-black text-biz">
                      {item.num}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">{item.title}</h3>
                  <p className="text-base text-ink-3 leading-relaxed">
                    {item.text}
                    {item.sub && (<><br /><span className="text-ink-2 font-medium">{item.sub}</span></>)}
                  </p>
                </div>
              </FadeInSection>
            ))}

            <FadeInSection delay={300}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card border-2 border-biz-tint200 relative h-full">
                <div className="absolute -top-3 right-6 px-3 py-1 bg-biz text-white text-xs font-bold rounded-full">
                  가입 즉시 사용
                </div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full bg-biz-tint100 flex items-center justify-center text-2xl font-black text-biz">4</div>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                  상품/쿠폰 광고란
                </h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  사장님이 직접 등록한 상품 또는 매장 할인 쿠폰이 건강템 영역에 노출돼요. 사용자가 쿠폰을 발급받아 매장 방문 시 QR로 사용 가능합니다.
                  <br />
                  <br />
                  <span className="text-ink-2 font-medium">• 온라인 사장님: 자사몰 상품 5~10개 등록</span>
                  <br />
                  <span className="text-ink-2 font-medium">• 지역 사장님: 동시 활성 쿠폰 1개 (Basic+)</span>
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 6. 플랜 (탭, 기존 그대로 — 컬러만 블루)                */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
                사장님 업종에 맞는
                <br />
                플랜을 선택하세요
              </h2>
              <div className="mt-8 inline-block px-5 py-3 bg-biz-tint50 border border-biz-tint200 rounded-2xl">
                <p className="text-sm md:text-base text-ink-2 font-medium">
                  베타 기간엔 <span className="text-biz font-bold">Basic 플랜만 무료</span> · Lite/Pro는 7/15 정식 출시
                </p>
              </div>
            </div>

            <div className="flex justify-center mb-12">
              <div className="inline-flex p-1.5 bg-biz-bg rounded-2xl shadow-soft">
                <button
                  onClick={() => setPlanTab("local")}
                  className={`px-5 md:px-7 py-3 rounded-xl font-bold text-sm md:text-base transition-all ${
                    planTab === "local"
                      ? "bg-biz text-white shadow-biz-soft"
                      : "text-ink-3 hover:text-ink-1"
                  }`}
                >
                  지역 매장 (수도권)
                </button>
                <button
                  onClick={() => setPlanTab("online")}
                  className={`px-5 md:px-7 py-3 rounded-xl font-bold text-sm md:text-base transition-all ${
                    planTab === "online"
                      ? "bg-biz text-white shadow-biz-soft"
                      : "text-ink-3 hover:text-ink-1"
                  }`}
                >
                  온라인 업체 (전국)
                </button>
              </div>
            </div>
          </FadeInSection>

          {planTab === "local" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              <PlanCard title="Lite" price="29,900" badge="7월 15일 정식 출시" badgeColor="ink" ctaText="7월 15일 정식 출시" ctaDisabled features={["광고 게시글 주 1회 (시·도)","AI 광고 초안 (일 3회)","AI 문의 응대 (무제한)","Home / 강쥐talk / AI 검색 노출","쿠폰 발행 (시·도 노출)","Paw 수취 및 현금화"]} />
              <PlanCard title="Basic" price="59,900" badge="베타 무료 / 추천" badgeColor="biz" ctaText="베타 무료 시작하기" ctaHref={DOWNLOAD_URL} highlight features={["광고 게시글 주 3회 (시·도)","AI 광고 초안 (일 10회)","AI 문의 응대 (무제한)","AI 추천 우선순위","매월 펫페어 공동 광고 (기본)","유저 트렌드 리포트 (기본)","쿠폰 발행 (시·도 노출)","Paw 수취 및 현금화"]} />
              <PlanCard title="Pro" price="79,900" badge="7월 15일 정식 출시" badgeColor="ink" ctaText="7월 15일 정식 출시" ctaDisabled features={["광고 게시글 주 3회 (전국)","AI 광고 초안 (일 20회)","AI 문의 응대 (무제한)","강쥐talk 상단 고정","AI 추천 우선순위","매월 펫페어 공동 광고 (우선)","유저 트렌드 리포트 (상세)","쿠폰 발행 (전국 노출)","Paw 수취 및 현금화"]} />
            </div>
          )}
          {planTab === "online" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              <PlanCard title="Lite" price="29,900" badge="7월 15일 정식 출시" badgeColor="ink" ctaText="7월 15일 정식 출시" ctaDisabled features={["광고 게시글 주 1회 (전국)","AI 광고 초안 (일 3회)","AI 문의 응대 (무제한)","자사몰 상품 5개 등록","강GPT AI 추천","입점업체 페이지 소개","Paw 수취 및 현금화"]} />
              <PlanCard title="Basic" price="59,900" badge="베타 무료 / 추천" badgeColor="biz" ctaText="베타 무료 시작하기" ctaHref={DOWNLOAD_URL} highlight features={["광고 게시글 주 3회 (전국)","AI 광고 초안 (일 10회)","AI 문의 응대 (무제한)","자사몰 상품 10개 등록","AI 추천 우선순위","매월 펫페어 공동 광고 (기본)","유저 트렌드 리포트 (기본)","입점업체 페이지 리스트업 + 전용 프로필","Paw 수취 및 현금화"]} />
              <PlanCard title="Pro" price="79,900" badge="7월 15일 정식 출시" badgeColor="ink" ctaText="7월 15일 정식 출시" ctaDisabled features={["광고 게시글 주 3회 (전국)","AI 광고 초안 (일 20회)","AI 문의 응대 (무제한)","자사몰 상품 10개 + 건강템 상위 노출","강쥐talk 상단 고정","매월 펫페어 공동 광고 (우선)","유저 트렌드 리포트 (상세)","입점업체 페이지 상위 소개","Paw 수취 및 현금화"]} />
            </div>
          )}
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 7. 입점 혜택 (7/28까지 무료)                          */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-biz-tint50 py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              {/* ✏️ 입점 혜택 헤드라인 */}
              <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
                지금 입점하시면
              </h2>
              <p className="mt-5 text-base md:text-lg text-biz font-bold">
                7월 28일까지 카드 등록 없이 Basic 무료
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
              <ul className="space-y-4 text-base md:text-lg text-ink-2">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={22} className="text-biz shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span><span className="font-bold">7월 28일까지 Basic 플랜 무료</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={22} className="text-biz shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span>카드 등록 없이 즉시 가입 가능</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={22} className="text-biz shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span>7월 15일~28일 사이 카드 등록 → 이어서 사용</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={22} className="text-biz shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span>등록 안 하면 7월 29일 자연 종료 — 강제 결제 절대 없음</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={22} className="text-biz shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span>5월 메가주, 6월 케이펫페어에서 대규모 사용자 유치 중</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={22} className="text-biz shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span><span className="font-bold">쿠폰 발행 / 자사몰 등록 가입 즉시 사용 가능</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={22} className="text-biz shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span>베타 기간 등록한 정보·데이터 그대로 유지</span>
                </li>
              </ul>
              <div className="mt-10 text-center">
                {/* 베타 시작 CTA — biz 컬러 */}
                <a
                  href={DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-biz text-white font-extrabold text-base md:text-xl rounded-2xl shadow-biz hover:bg-biz-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>베타 무료로 시작하기</span>
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 8. 만든 사람 (그대로 유지 — 컬러만 블루)               */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
                강쥐엄마는
                <br />
                어떤 사람이 만들었나요?
              </h2>
            </div>
            <div className="bg-biz-bg rounded-3xl p-8 md:p-12">
              <div className="pb-8 border-b border-line">
                <h3 className="text-2xl md:text-3xl font-black text-ink-1">
                  김훈기 <span className="text-base md:text-lg text-ink-3 font-medium">대표</span>
                </h3>
                <p className="mt-2 text-base md:text-lg text-biz font-bold">(주)비타니마</p>
                <p className="mt-1 text-sm md:text-base text-ink-3">
                  다수 회사 창업 및 운영 경험 · 강아지 보호자
                </p>
                <p className="mt-4 text-sm md:text-base text-ink-2 leading-relaxed">
                  GN로지텍(주), GN밸류홀딩스(주), 모시개냥, (주)이지로지 외 <span className="font-bold">10개 이상의 AI 스타트업</span>에서 사업개발 경험이 있습니다.
                </p>
              </div>
              <div className="pt-8 space-y-5 text-base md:text-lg text-ink-2 leading-relaxed">
                <p>저는 어릴 때부터 강아지와 함께 살아왔고, 강아지를 너무 사랑하기에 강아지 비즈니스를 두 번 도전했습니다.</p>
                <p>2019년 펫택시 <span className="font-bold text-ink-1">&quot;모시개냥&quot;</span>을 창업해 차량이 없는 보호자분들이 강아지와 더 자유롭게 다닐 수 있도록 지원했습니다. 코로나 팬데믹으로 사업은 정리했지만, 그 시기에 만난 강아지 사장님들의 고민이 강쥐엄마의 시작이 되었습니다.</p>
                <p>운영 중인 회사들은 코로나 팬데믹, 러-우 전쟁 같은 국제적 위기 속에서도 흔들리지 않고 견뎌왔습니다. <span className="font-bold text-ink-1">위기에도 강한 비즈니스 운영 경험</span>을 바탕으로 이번 강쥐엄마에서도 사장님들과 반드시 함께 성공해보겠습니다.</p>
                <p className="text-biz font-bold">제가 가장 사랑하는 강아지와 함께 만들어가는 플랫폼이니까요.</p>
                <p className="text-right text-ink-3 mt-6">— 김훈기, (주)비타니마 대표</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 9. FAQ (그대로 유지 — 컬러만 블루)                     */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-biz-bg py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
                자주 묻는 질문
              </h2>
            </div>
          </FadeInSection>
          <div className="space-y-4">
            {[
              { q: "강쥐엄마 사용자가 몇 명인가요?", a: "강쥐엄마 사용자는 100% 강아지 보호자이며, 그 중에서도 '강아지에 진심인 분들'이 대부분입니다. 좋은 상품과 서비스라면 이용률이 압도적으로 높습니다. 5월 메가주, 6월 케이펫페어에서 대규모 사용자 유치 중이며, 지금 입점하시는 사장님은 사용자가 빠르게 늘어날수록 누적 노출 혜택을 받게 되십니다." },
              { q: "다른 마케팅 채널보다 정말 효과 있나요?", a: "동급 비용 대비 강쥐엄마의 효과는 더 강력합니다. 강쥐엄마 사용자는 매일 방문하는 데일리 앱 사용자이고, 강아지에 진심인 분들이라 좋은 정보/서비스의 이용률이 높습니다. 또한 펫페어 공동 광고, Paw 보상 같은 추가 채널이 함께 작동합니다." },
              { q: "입점 절차가 복잡한가요?", a: "5분이면 됩니다. 사업자등록증 사진만 올리시면 AI가 자동으로 검수해드려요. 사진/정보 입력 후 바로 사장님 페이지를 사용하실 수 있습니다." },
              { q: "베타 기간엔 어떤 플랜을 사용하나요?", a: "베타 기간엔 Basic 플랜을 무료로 사용하실 수 있어요. Lite와 Pro 플랜은 7월 15일 정식 출시 시 선택 가능합니다. Basic 플랜에는 광고 게시 주 3회, 쿠폰 발행, 펫페어 공동 광고, 트렌드 리포트 등이 모두 포함됩니다." },
              { q: "쿠폰이나 자사몰 등록은 언제부터 가능한가요?", a: "가입 즉시 사용 가능합니다. 사장님이 등록한 쿠폰/상품은 강쥐엄마 사용자에게 바로 노출되며, 매장 방문이나 자사몰 구매로 이어집니다." },
              { q: "7월 15일 이후엔 어떻게 되나요?", a: "자동으로 14일 무료체험이 시작돼요. 그때 카드를 등록하시면 14일 후부터 자동결제 시작. 등록 안 하시면 자연스럽게 서비스가 종료됩니다. 강제 결제는 절대 없습니다." },
              { q: "해지는 자유로운가요?", a: "네, 언제든 자유롭게 해지 가능합니다. 해지하셔도 등록한 정보는 보관되어 재가입 시 그대로 사용 가능합니다." },
              { q: "매장이 수도권이 아닌데 가입 가능한가요?", a: "일단 유저를 수도권 위주로 모으지만, 강쥐엄마 자체적인 온라인 마케팅을 병행할 것이기 때문에 수도권 외 지역에도 유저들이 유입될 예정입니다. 원하시면 Lite로 가볍게 시작해보시다가 전국 지역으로 서비스가 확대되는 2026년 12월부터 Basic 플랜으로 변경하시는 걸 추천드려요! (2026년 12월 부산 케이펫페어를 시작으로 전국 확대 예정)" },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 50}>
                <FaqItem q={item.q} a={item.a} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 10. Final CTA                                          */}
      {/* 메인 CTA = 베타 시작 (블루) / 보조 = 앱 다운로드 (오렌지)*/}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-white py-28 md:py-36">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            {/* ✏️ Final CTA 헤드라인 */}
            <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tightest leading-tight">
              동네 강쥐엄마들이
              <br />
              <span className="text-biz">사장님 가게를 기다리고 있어요</span>
            </h2>
            {/* ✏️ Final CTA 부제 */}
            <p className="mt-8 text-lg md:text-2xl text-ink-2 font-medium">
              사용자가 매일 만나는 강쥐엄마,
              <br />
              지금 함께 시작해주세요.
            </p>
            <div className="mt-12 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* 메인 CTA — 베타 시작 (블루) */}
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 md:px-10 py-5 md:py-6 bg-biz text-white font-extrabold text-base md:text-xl rounded-2xl shadow-biz hover:bg-biz-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>베타 무료로 시작하기</span>
              </a>
              {/* 보조 CTA — 앱 다운로드 (오렌지, 시그니처 유지) */}
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 md:px-10 py-5 md:py-6 bg-brand text-white font-extrabold text-base md:text-xl rounded-2xl shadow-brand hover:bg-brand-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>강쥐엄마 앱 다운로드</span>
              </a>
            </div>
            <p className="mt-8 text-sm text-ink-4">
              문의: <a href="mailto:gangjiumma@gmail.com" className="text-biz hover:underline">gangjiumma@gmail.com</a>
            </p>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// PlanCard 컴포넌트 (블루 톤)
// ─────────────────────────────────────────────────────────────
interface PlanCardProps {
  title: string;
  price: string;
  badge: string;
  badgeColor: "biz" | "ink";
  ctaText: string;
  ctaHref?: string;
  ctaDisabled?: boolean;
  highlight?: boolean;
  features: string[];
}

function PlanCard({ title, price, badge, badgeColor, ctaText, ctaHref, ctaDisabled = false, highlight = false, features }: PlanCardProps) {
  return (
    <div className={`relative bg-white rounded-3xl p-8 md:p-10 transition-all ${highlight ? "shadow-elevated border-2 border-biz md:scale-105" : "shadow-soft"}`}>
      <div className={`inline-block px-3 py-1.5 mb-5 text-xs md:text-sm font-bold rounded-full ${badgeColor === "biz" ? "bg-biz text-white" : "bg-ink-1/10 text-ink-2"}`}>
        {badge}
      </div>
      <h3 className="text-2xl md:text-3xl font-black text-ink-1 mb-2">{title}</h3>
      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-3xl md:text-4xl font-black text-ink-1">월 {price}</span>
        <span className="text-base text-ink-3 font-medium">원</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feat, i) => (
          <li key={i} className="flex items-start gap-2 text-sm md:text-base text-ink-2">
            <CheckCircle2 size={18} className="text-biz shrink-0 mt-0.5" strokeWidth={2.5} />
            <span>{feat}</span>
          </li>
        ))}
      </ul>
      {ctaDisabled ? (
        <div className="w-full py-3.5 text-center bg-surface-muted text-ink-3 font-bold rounded-xl text-sm md:text-base">{ctaText}</div>
      ) : (
        <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="block w-full py-3.5 text-center bg-biz text-white font-bold rounded-xl text-sm md:text-base hover:bg-biz-dark transition-colors">
          {ctaText}
        </a>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// FaqItem 컴포넌트 (블루 톤)
// ─────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full p-6 md:p-7 text-left flex items-start justify-between gap-4 hover:bg-biz-tint50 transition-colors">
        <span className="text-base md:text-lg font-bold text-ink-1 leading-snug">Q. {q}</span>
        <span className={`text-2xl text-biz shrink-0 transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-6 md:px-7 pb-6 md:pb-7 text-base text-ink-2 leading-relaxed border-t border-line">
          <p className="pt-5">{a}</p>
        </div>
      )}
    </div>
  );
}
