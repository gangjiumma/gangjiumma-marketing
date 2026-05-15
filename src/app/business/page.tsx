"use client";

import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";
import { ScrollDownIndicator, ScrollProgressBar } from "@/components/ScrollIndicator";

const DOWNLOAD_URL = "https://gangjiumma.github.io/gangjiumma_app_download/";

export default function BusinessPage() {
  const [planTab, setPlanTab] = useState<"local" | "online">("local");

  return (
    <>
      {/* 페이지 상단 스크롤 진행 바 */}
      <ScrollProgressBar />

      {/* Hero 하단 스크롤 다운 인디케이터 */}
      <ScrollDownIndicator />

      {/* 1. HERO */}
      <section className="relative bg-brand-tint50 pt-28 md:pt-36 pb-24 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-tint100/40 via-brand-tint50 to-white pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white rounded-full shadow-soft border border-brand-tint200">
              <span>🎁</span>
              <span className="text-sm md:text-base font-bold text-brand">
                7월 15일까지 베타서비스 무료 운영 중
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-ink-1 tracking-tightest leading-[1.2]">
              강아지에 진심인 사장님께
              <br />
              <span className="text-brand">진짜 강아지를 위한 서비스를 소개드립니다</span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={300}>
            <p className="mt-8 md:mt-10 text-lg md:text-2xl text-ink-2 font-medium leading-relaxed">
              동급 효과 대비 1/5 비용,
              <br className="md:hidden" />
              <span className="hidden md:inline"> </span>
              강쥐엄마와 함께
              <br />
              건강한 반려 문화를 만들어가요
            </p>
            <div className="mt-12 md:mt-14 flex flex-col items-center gap-4">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-brand text-white font-extrabold text-base md:text-xl rounded-2xl shadow-brand hover:bg-brand-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>🐾</span>
                <span>강쥐엄마앱 다운로드</span>
              </a>
              <p className="text-xs md:text-sm text-ink-3 font-medium">
                ✓ 베타 기간 Basic 무료 (Lite·Pro는 7/15 출시) <br className="md:hidden" />
                ✓ 카드 등록 없이 시작 / 언제든 취소 가능
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 2. 페인 포인트 */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
                사장님, 이런 고민
                <br />
                있으셨죠?
              </h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {[
              {
                emoji: "💸",
                title: "대행사 비용이 부담돼요",
                text: "월 20~100만원, 효과는 미지수. 사장님이 직접 광고를 만들고 관리하기엔 시간도, 전문성도 부족해요.",
              },
              {
                emoji: "🤷",
                title: "광고를 해도 효과가 안 보여요",
                text: "인스0 광고, 네이0 광고... 돈은 나가는데 진짜 우리 가게에 강아지 손님이 오는 건지 모르겠어요.",
              },
              {
                emoji: "📉",
                title: "SNS는 강아지 손님이 안 모여요",
                text: "일반 SNS의 광고는 강아지에 관심 없는 사람들에게도 무차별로 노출돼요. 우리는 진짜 강아지 손님이 필요한데.",
              },
              {
                emoji: "⏰",
                title: "운영하기도 벅찬데 마케팅까지",
                text: "손님 응대, 예약 관리, 시술/돌봄... 하루 종일 바쁜데 광고까지 신경 쓸 시간이 없어요.",
              },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="bg-surface-subtle rounded-2xl p-8 md:p-9 h-full">
                  <div className="text-4xl mb-5">{item.emoji}</div>
                  <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-base text-ink-3 leading-relaxed">{item.text}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 강쥐엄마와 함께라면 */}
      <section className="bg-brand-tint50 py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-16 md:mb-20">
              <p className="text-base md:text-lg text-brand font-bold mb-3">
                강쥐엄마와 함께라면
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
                강아지 사장님을 위한,
                <br />
                강아지 진심 사용자만의 플랫폼
              </h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <FadeInSection delay={0}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card h-full">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                  진짜 강아지 고객만
                </h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  강쥐엄마 사용자는 100% 강아지 보호자입니다. 일반 SNS처럼 비반려인이 섞이지 않아요.
                  <br />
                  <br />
                  <span className="text-ink-2 font-bold">강아지에 진심인 분들이라, 좋은 상품과 서비스라면 이용률이 압도적으로 높습니다.</span>
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={150}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card h-full">
                <div className="text-5xl mb-6">🎪</div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                  매월 펫페어 공동 홍보
                </h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  강쥐엄마 베타 기간엔 메가주(5월), 케이펫페어(6월)에 참여해 대규모 사용자 유치 중!
                  <br />
                  <br />
                  정식 출시 후에도 매월 펫페어(메가주, 케이펫페어, 마이펫페어)에 강쥐엄마 부스로 사장님 업체를 공동 홍보해드려요. (Basic+)
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card h-full">
                <div className="text-5xl mb-6">💰</div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                  사용자가 우리 가게로 옵니다
                </h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  사용자가 강쥐엄마 안에서 매일 활동하면 <span className="text-brand font-bold">Paw(포인트)</span>가 쌓여요. 그 Paw를 쓰러 우리 가게에 방문하거나 우리 상품을 구매합니다.
                  <br />
                  <br />
                  <span className="text-ink-2 font-bold">받은 Paw는 사장님이 현금화 가능합니다.</span>
                  <br />
                  즉, 강쥐엄마가 손님을 직접 데려와요.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={450}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card h-full">
                <div className="text-5xl mb-6">🤖</div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                  AI가 마케팅을 도와드려요
                </h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  AI가 광고 초안을 만들어드리고
                  <span className="text-ink-2 font-medium"> (Lite 일 3회, Basic 일 10회, Pro 일 20회)</span>, 사장님의 가게 정보를 바탕으로 사용자 문의에 1차 응대까지 자동 처리합니다.
                  <br />
                  <br />
                  <span className="text-ink-2 font-bold">AI 문의 응대는 모든 플랜 무제한.</span>
                  <br />
                  바쁜 운영 중에도 마케팅이 멈추지 않아요.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 4. 비교 표 */}
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
                    <th className="px-2 py-3 md:px-3 md:py-4 text-center text-xs md:text-sm font-bold bg-brand">강쥐엄마</th>
                    <th className="px-2 py-3 md:px-3 md:py-4 text-center text-xs md:text-sm font-bold">인스0광고</th>
                    <th className="px-2 py-3 md:px-3 md:py-4 text-center text-xs md:text-sm font-bold">네이0광고</th>
                    <th className="px-2 py-3 md:px-3 md:py-4 text-center text-xs md:text-sm font-bold">대행0위탁</th>
                    <th className="px-2 py-3 md:px-3 md:py-4 text-center text-xs md:text-sm font-bold">펫0앱</th>
                  </tr>
                </thead>
                <tbody className="text-xs md:text-sm">
                  <tr className="border-b border-line">
                    <td className="px-2 py-3 md:px-3 md:py-4 font-bold text-ink-1">월 비용</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center bg-brand-tint50 font-bold text-brand whitespace-nowrap">29,900원~</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">10~30만</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">100~500원<br />/클릭</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">100~300만</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">변동</td>
                  </tr>
                  <tr className="border-b border-line bg-surface-subtle">
                    <td className="px-2 py-3 md:px-3 md:py-4 font-bold text-ink-1">대상 고객</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center bg-brand-tint50 font-bold text-ink-1">100% 강아지<br />보호자</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2">비반려인<br />다수</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2">검색<br />의도자만</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2">위탁사<br />운영</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2">펫 보호자</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="px-2 py-3 md:px-3 md:py-4 font-bold text-ink-1">사용자<br />성향</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center bg-brand-tint50 font-bold text-ink-1">강아지에 진심,<br />이용률 ↑</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2">다양</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2">즉시<br />구매 의도</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2">다양</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2">다양</td>
                  </tr>
                  <tr className="border-b border-line bg-surface-subtle">
                    <td className="px-2 py-3 md:px-3 md:py-4 font-bold text-ink-1">노출 빈도</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center bg-brand-tint50 font-bold text-ink-1 whitespace-nowrap">매일<br />(데일리 앱)</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">광고 시</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">검색 시</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">광고 시</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">검색 시</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="px-2 py-3 md:px-3 md:py-4 font-bold text-ink-1">효과 측정</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center bg-brand-tint50 font-bold text-ink-1 whitespace-nowrap">앱 내<br />통계 제공</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">노출/클릭만</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">클릭만</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">한정적</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-2 whitespace-nowrap">한정적</td>
                  </tr>
                  <tr className="border-b border-line bg-surface-subtle">
                    <td className="px-2 py-3 md:px-3 md:py-4 font-bold text-ink-1">AI 광고<br />제작</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center bg-brand-tint50 font-bold text-brand whitespace-nowrap">✅ 일 3~20회</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-4">❌</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-4">❌</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-4">❌</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center text-ink-4">❌</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-3 md:px-3 md:py-4 font-bold text-ink-1">추가 혜택</td>
                    <td className="px-2 py-3 md:px-3 md:py-4 text-center bg-brand-tint50 font-bold text-ink-1">펫페어<br />공동 광고<br />+ Paw 보상</td>
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
            <div className="mt-12 md:mt-16 p-8 md:p-10 bg-brand-tint50 rounded-3xl border-2 border-brand-tint200">
              <div className="flex items-start gap-4">
                <div className="text-4xl shrink-0">💡</div>
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
                    지역 기반의 강아지 보호자가 <span className="text-brand font-bold">매일 방문하는 데일리 앱</span>이기에 효과는 몇 배 더 강력합니다.
                    <br />
                    <br />
                    특히 강쥐엄마 사용자는 <span className="font-bold">&apos;강아지에 진심인 분들&apos;</span>. 좋은 상품과 서비스라면 이용률이 압도적으로 높습니다.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 5. 노출되는 4곳 */}
      <section className="bg-surface-subtle py-24 md:py-32">
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
              { num: 1, emoji: "🏠", title: 'Home의 "우리동네 업체"', text: "사용자가 앱을 열면 가장 먼저 보는 화면. 같은 지역 강쥐엄마 보호자들에게 우리 가게가 자동 추천돼요." },
              { num: 2, emoji: "💬", title: "강쥐talk 광고 게시글", text: "동네 보호자들이 모이는 커뮤니티 피드. 우리 가게의 신메뉴, 이벤트, 특별 소식을 사장님이 직접 알릴 수 있어요.", sub: "(플랜에 따라 주 1~3회)" },
              { num: 3, emoji: "🤖", title: "AI 검색 결과 (강GPT)", text: '사용자가 "우리동네 미용실 추천해줘" 물어보면, AI가 우리 가게를 답변 안에 자연스럽게 추천해드려요.' },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-soft h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-full bg-brand-tint100 flex items-center justify-center text-2xl font-black text-brand">
                      {item.num}
                    </div>
                    <div className="text-2xl">{item.emoji}</div>
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
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card border-2 border-brand-tint200 relative h-full">
                <div className="absolute -top-3 right-6 px-3 py-1 bg-brand text-white text-xs font-bold rounded-full">
                  가입 즉시 사용
                </div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full bg-brand-tint100 flex items-center justify-center text-2xl font-black text-brand">4</div>
                  <div className="text-2xl">🎫</div>
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

      {/* 6. 사용 방법 영상 */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
              강쥐엄마,
              <br />
              어떻게 사용하나요?
            </h2>
            <p className="mt-6 text-base md:text-lg text-ink-3 font-medium">
              1분이면 충분해요
            </p>
            <div className="mt-12 md:mt-16">
              <div className="aspect-[9/16] max-w-sm mx-auto bg-surface-muted rounded-3xl flex items-center justify-center border-2 border-dashed border-line-medium">
                <div className="text-center px-6">
                  <div className="text-5xl mb-4">📱</div>
                  <p className="text-base text-ink-3 font-medium">
                    사장님 사용 방법
                    <br />
                    영상이 곧 추가됩니다
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 space-y-2 text-base md:text-lg text-ink-2 font-medium">
              <p>✓ 회원가입 1분 · 사업자등록증 자동 검수 1분</p>
              <p>✓ AI가 광고 초안 작성 · 사장님이 검토만</p>
              <p>✓ 게시 후 실시간 노출 통계 확인</p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 7. 플랜 */}
      <section className="bg-surface-subtle py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
                사장님 업종에 맞는
                <br />
                플랜을 선택하세요
              </h2>
              <div className="mt-8 inline-block px-5 py-3 bg-brand-tint50 border border-brand-tint200 rounded-2xl">
                <p className="text-sm md:text-base text-ink-2 font-medium">
                  🎁 베타 기간엔 <span className="text-brand font-bold">Basic 플랜만 무료</span> · Lite/Pro는 7/15 정식 출시
                </p>
              </div>
            </div>

            <div className="flex justify-center mb-12">
              <div className="inline-flex p-1.5 bg-white rounded-2xl shadow-soft">
                <button
                  onClick={() => setPlanTab("local")}
                  className={`px-5 md:px-7 py-3 rounded-xl font-bold text-sm md:text-base transition-all ${
                    planTab === "local"
                      ? "bg-brand text-white shadow-brand-soft"
                      : "text-ink-3 hover:text-ink-1"
                  }`}
                >
                  🏪 지역 매장 (수도권)
                </button>
                <button
                  onClick={() => setPlanTab("online")}
                  className={`px-5 md:px-7 py-3 rounded-xl font-bold text-sm md:text-base transition-all ${
                    planTab === "online"
                      ? "bg-brand text-white shadow-brand-soft"
                      : "text-ink-3 hover:text-ink-1"
                  }`}
                >
                  🛍️ 온라인 업체 (전국)
                </button>
              </div>
            </div>
          </FadeInSection>

          {planTab === "local" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              <PlanCard title="Lite" price="29,900" badge="🔒 7월 15일 정식 출시" badgeColor="ink" ctaText="7월 15일 정식 출시" ctaDisabled features={["광고 게시글 주 1회 (시·도)","AI 광고 초안 (일 3회)","AI 문의 응대 (무제한)","Home / 강쥐talk / AI 검색 노출","쿠폰 발행 (시·도 노출)","Paw 수취 및 현금화"]} />
              <PlanCard title="Basic" price="59,900" badge="🎁 베타 무료 / 추천" badgeColor="brand" ctaText="베타 무료 시작하기" ctaHref={DOWNLOAD_URL} highlight features={["광고 게시글 주 3회 (시·도)","AI 광고 초안 (일 10회)","AI 문의 응대 (무제한)","AI 추천 우선순위","매월 펫페어 공동 광고 (기본)","유저 트렌드 리포트 (기본)","쿠폰 발행 (시·도 노출)","Paw 수취 및 현금화"]} />
              <PlanCard title="Pro" price="79,900" badge="🔒 7월 15일 정식 출시" badgeColor="ink" ctaText="7월 15일 정식 출시" ctaDisabled features={["광고 게시글 주 3회 (전국)","AI 광고 초안 (일 20회)","AI 문의 응대 (무제한)","강쥐talk 상단 고정","AI 추천 우선순위","매월 펫페어 공동 광고 (우선)","유저 트렌드 리포트 (상세)","쿠폰 발행 (전국 노출)","Paw 수취 및 현금화"]} />
            </div>
          )}
          {planTab === "online" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              <PlanCard title="Lite" price="29,900" badge="🔒 7월 15일 정식 출시" badgeColor="ink" ctaText="7월 15일 정식 출시" ctaDisabled features={["광고 게시글 주 1회 (전국)","AI 광고 초안 (일 3회)","AI 문의 응대 (무제한)","자사몰 상품 5개 등록","강GPT AI 추천","입점업체 페이지 소개","Paw 수취 및 현금화"]} />
              <PlanCard title="Basic" price="59,900" badge="🎁 베타 무료 / 추천" badgeColor="brand" ctaText="베타 무료 시작하기" ctaHref={DOWNLOAD_URL} highlight features={["광고 게시글 주 3회 (전국)","AI 광고 초안 (일 10회)","AI 문의 응대 (무제한)","자사몰 상품 10개 등록","AI 추천 우선순위","매월 펫페어 공동 광고 (기본)","유저 트렌드 리포트 (기본)","입점업체 페이지 리스트업 + 전용 프로필","Paw 수취 및 현금화"]} />
              <PlanCard title="Pro" price="79,900" badge="🔒 7월 15일 정식 출시" badgeColor="ink" ctaText="7월 15일 정식 출시" ctaDisabled features={["광고 게시글 주 3회 (전국)","AI 광고 초안 (일 20회)","AI 문의 응대 (무제한)","자사몰 상품 10개 + 건강템 상위 노출","강쥐talk 상단 고정","매월 펫페어 공동 광고 (우선)","유저 트렌드 리포트 (상세)","입점업체 페이지 상위 소개","Paw 수취 및 현금화"]} />
            </div>
          )}
        </div>
      </section>

      {/* 8. 7/15 추가 혜택 */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-16 md:mb-20">
              <p className="text-base md:text-lg text-brand font-bold mb-3">
                7월 15일 정식 출시 시
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
                이 모든 게
                <br />
                가능해져요
              </h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {[
              { emoji: "📊", title: "트렌드 리포트 풀버전", text: "강쥐엄마 사용자들의 검색 트렌드, 관심 카테고리 분석. 어떤 서비스/상품이 인기인지 데이터로 확인하세요." },
              { emoji: "🎪", title: "펫페어 공동 광고 확대", text: "매월 메가주, 케이펫페어, 마이펫페어에 강쥐엄마 부스로 사장님 가게 공동 광고.", sub: "(베타: 5월 메가주, 6월 케이펫페어)" },
              { emoji: "🔓", title: "Lite / Pro 플랜 출시", text: "Basic 외 Lite, Pro 플랜으로 사장님 상황에 맞는 선택 가능. 가볍게 시작하거나 강하게 확장하거나, 자유롭게." },
              { emoji: "📈", title: "정식 사용자 확장", text: "펫페어 / 마케팅 캠페인 종료 후 사용자 본격 확장. 초기 입점 사장님은 누적 노출 혜택을 받습니다." },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="bg-brand-tint50 rounded-2xl p-8 md:p-9 h-full">
                  <div className="text-4xl mb-5">{item.emoji}</div>
                  <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">{item.title}</h3>
                  <p className="text-base text-ink-2 leading-relaxed">
                    {item.text}
                    {item.sub && (<><br /><span className="text-ink-3">{item.sub}</span></>)}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 9. 베타 안내 + CTA */}
      <section className="bg-brand-tint50 py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
                지금 입점하시면
              </h2>
            </div>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
              <ul className="space-y-4 text-base md:text-lg text-ink-2">
                <li className="flex items-start gap-3"><span className="text-brand text-xl shrink-0">✅</span><span><span className="font-bold">Basic 플랜을 7월 15일까지 무료 이용</span></span></li>
                <li className="flex items-start gap-3"><span className="text-brand text-xl shrink-0">✅</span><span>카드 등록 없이 가입 가능</span></li>
                <li className="flex items-start gap-3"><span className="text-brand text-xl shrink-0">✅</span><span>5월 메가주, 6월 케이펫페어에서 대규모 사용자 유치 중</span></li>
                <li className="flex items-start gap-3"><span className="text-brand text-xl shrink-0">✅</span><span><span className="font-bold">쿠폰 발행 / 자사몰 등록 가입 즉시 사용 가능</span></span></li>
                <li className="flex items-start gap-3"><span className="text-brand text-xl shrink-0">✅</span><span>정식 출시 시 자동 14일 무료체험</span></li>
                <li className="flex items-start gap-3"><span className="text-brand text-xl shrink-0">✅</span><span>베타 기간 등록한 정보 + 데이터 그대로 유지</span></li>
                <li className="flex items-start gap-3"><span className="text-brand text-xl shrink-0">✅</span><span>만족 못 하시면 언제든 등록 취소 가능</span></li>
              </ul>
              <div className="mt-10 p-6 bg-brand-tint50 rounded-2xl">
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">💝</span>
                  <p className="text-base md:text-lg text-ink-2 leading-relaxed">
                    강쥐엄마는 사장님이 만족하지 못하면 언제든 멈출 수 있는 서비스입니다. <span className="font-bold">부담 없이 지금 시작해보세요.</span>
                  </p>
                </div>
              </div>
              <div className="mt-10 text-center">
                <a
                  href={DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-brand text-white font-extrabold text-base md:text-xl rounded-2xl shadow-brand hover:bg-brand-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>🐾</span>
                  <span>강쥐엄마앱 다운로드</span>
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 10. 마음이 소개 */}
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
            <div className="bg-surface-subtle rounded-3xl p-8 md:p-12">
              <div className="pb-8 border-b border-line">
                <h3 className="text-2xl md:text-3xl font-black text-ink-1">
                  김훈기 <span className="text-base md:text-lg text-ink-3 font-medium">대표</span>
                </h3>
                <p className="mt-2 text-base md:text-lg text-brand font-bold">(주)비타니마</p>
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
                <p className="text-brand font-bold">제가 가장 사랑하는 강아지와 함께 만들어가는 플랫폼이니까요.</p>
                <p className="text-right text-ink-3 mt-6">— 김훈기, (주)비타니마 대표</p>
              </div>
              
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="bg-surface-subtle py-24 md:py-32">
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

      {/* 12. Final CTA */}
      <section className="bg-white py-28 md:py-36">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tightest leading-tight">
              동네 강쥐엄마들이
              <br />
              <span className="text-brand">사장님 가게를 기다리고 있어요</span>
            </h2>
            <p className="mt-8 text-lg md:text-2xl text-ink-2 font-medium">
              사용자가 매일 만나는 강쥐엄마,
              <br />
              지금 함께 시작해주세요.
            </p>
            <div className="mt-12 md:mt-14">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 md:px-12 py-5 md:py-6 bg-brand text-white font-extrabold text-lg md:text-2xl rounded-2xl shadow-brand hover:bg-brand-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>🐾</span>
                <span>강쥐엄마와 함께 건강한 반려문화 만들기</span>
              </a>
            </div>
            <p className="mt-8 text-sm text-ink-4">
              문의: <a href="mailto:gangjiumma@gmail.com" className="text-brand hover:underline">gangjiumma@gmail.com</a>
            </p>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}

interface PlanCardProps {
  title: string;
  price: string;
  badge: string;
  badgeColor: "brand" | "ink";
  ctaText: string;
  ctaHref?: string;
  ctaDisabled?: boolean;
  highlight?: boolean;
  features: string[];
}

function PlanCard({ title, price, badge, badgeColor, ctaText, ctaHref, ctaDisabled = false, highlight = false, features }: PlanCardProps) {
  return (
    <div className={`relative bg-white rounded-3xl p-8 md:p-10 transition-all ${highlight ? "shadow-elevated border-2 border-brand md:scale-105" : "shadow-soft"}`}>
      <div className={`inline-block px-3 py-1.5 mb-5 text-xs md:text-sm font-bold rounded-full ${badgeColor === "brand" ? "bg-brand text-white" : "bg-ink-1/10 text-ink-2"}`}>
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
            <span className="text-brand shrink-0">✓</span>
            <span>{feat}</span>
          </li>
        ))}
      </ul>
      {ctaDisabled ? (
        <div className="w-full py-3.5 text-center bg-surface-muted text-ink-3 font-bold rounded-xl text-sm md:text-base">{ctaText}</div>
      ) : (
        <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="block w-full py-3.5 text-center bg-brand text-white font-bold rounded-xl text-sm md:text-base hover:bg-brand-dark transition-colors">
          {ctaText}
        </a>
      )}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full p-6 md:p-7 text-left flex items-start justify-between gap-4 hover:bg-surface-subtle transition-colors">
        <span className="text-base md:text-lg font-bold text-ink-1 leading-snug">Q. {q}</span>
        <span className={`text-2xl text-ink-3 shrink-0 transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-6 md:px-7 pb-6 md:pb-7 text-base text-ink-2 leading-relaxed border-t border-line">
          <p className="pt-5">{a}</p>
        </div>
      )}
    </div>
  );
}
