"use client";

import Link from "next/link";
import { Check, CreditCard, RefreshCw, ShieldCheck, Calendar } from "lucide-react";

export const dynamic = "force-static";

const DOWNLOAD_URL = "https://gangjiumma.github.io/gangjiumma_app_download/";

// ─────────────────────────────────────────────────────────────
// 정기결제 상품 안내 페이지 (/plans)
//
// 목적:
//   1. 토스페이먼츠 빌링 심사용 정기결제 상품 명세 페이지
//   2. 사장님 회원의 결제 전 상품 정보 확인 페이지
//
// 톤: business 페이지의 biz blue 톤 유지하되, 정보 위주로 단순화
// ─────────────────────────────────────────────────────────────

const plans = [
  {
    id: "lite",
    title: "라이트",
    price: 0,
    isFree: true,
    badge: "계속 무료",
    isAvailableNow: true,
    description: "무료로 시작하는 사장님",
    features: [
      "예약·고객 관리",
      "토스 결제 연동",
      "예약 알림톡",
      "입점 노출 (Home·강쥐talk·AI 검색)",
      "AI 문의 응대 (무제한)",
      "Paw 수취 및 현금화",
    ],
  },
  {
    id: "mini",
    title: "미니",
    price: 30000,
    badge: "베타 기간 무료",
    isAvailableNow: true,
    description: "매출까지 챙기는 사장님",
    features: [
      "라이트의 모든 기능",
      "매출 관리·정산",
      "수요 통계 리포트 (기본)",
      "할인 쿠폰 발행 (시·도)",
    ],
  },
  {
    id: "basic",
    title: "베이직",
    price: 60000,
    badge: "베타 기간 무료",
    isAvailableNow: true,
    highlight: true,
    description: "가장 인기 있는 플랜",
    features: [
      "미니의 모든 기능",
      "AI 알림장 자동 작성",
      "AI 마케팅 풀세트 (광고 초안 일 10회)",
      "광고 게시글 주 3회 (시·도)",
      "AI 추천 우선순위",
      "매월 펫페어 공동 광고 (기본)",
    ],
  },
  {
    id: "pro",
    title: "프로",
    price: 90000,
    badge: "출시 예정",
    isAvailableNow: false,
    description: "전국 노출 + 전담 관리",
    features: [
      "베이직의 모든 기능",
      "광고 게시글 주 5회 (전국)",
      "AI 광고 초안 (일 20회)",
      "강쥐talk 상단 고정",
      "전담 AI 에이전트 · 매일 매출 보고",
      "유저 트렌드 리포트 (상세)",
    ],
  },
];

export default function PlansPage() {
  return (
    <>
      {/* ═════════════════════════════════════════════════════ */}
      {/* HERO                                                    */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-biz-bg pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <h1 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
            정기결제 상품 안내
          </h1>
          <p className="mt-4 text-base md:text-lg text-ink-3 font-medium leading-relaxed">
            강쥐엄마 사장님 회원의 월 정기결제(구독) 상품 정보입니다.<br />
            결제는 토스페이먼츠를 통해 안전하게 처리됩니다.
          </p>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 플랜 카드 3종                                            */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 md:p-8 border-2 ${
                  plan.highlight
                    ? "border-biz bg-biz-tint50 shadow-biz-soft"
                    : "border-line bg-white"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-biz text-white text-xs font-black rounded-full">
                    추천
                  </div>
                )}

                <div className="mb-4">
                  <div className="text-2xl font-black text-ink-1 mb-1">{plan.title}</div>
                  <div className="text-sm text-ink-3">{plan.description}</div>
                </div>

                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    {plan.isFree ? (
                      <span className="text-3xl md:text-4xl font-black text-biz">무료</span>
                    ) : (
                      <>
                        <span className="text-3xl md:text-4xl font-black text-ink-1">
                          {plan.price.toLocaleString()}
                        </span>
                        <span className="text-base text-ink-3 font-bold">원 / 월</span>
                      </>
                    )}
                  </div>
                  <div
                    className={`mt-2 inline-block px-2.5 py-1 rounded-md text-xs font-bold ${
                      plan.isAvailableNow
                        ? "bg-biz-tint100 text-biz"
                        : "bg-surface-muted text-ink-3"
                    }`}
                  >
                    {plan.badge}
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-ink-2">
                      <Check
                        size={16}
                        className={`shrink-0 mt-0.5 ${
                          plan.highlight ? "text-biz" : "text-ink-3"
                        }`}
                        strokeWidth={3}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.isAvailableNow ? (
                  <Link
                    href={DOWNLOAD_URL}
                    className="block w-full text-center py-3 rounded-xl bg-biz text-white font-black hover:bg-biz-dark transition-colors"
                  >
                    {plan.isFree ? "무료로 시작하기" : "베타 무료로 시작하기"}
                  </Link>
                ) : (
                  <div className="block w-full text-center py-3 rounded-xl bg-surface-muted text-ink-3 font-bold">
                    {plan.badge}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 결제 방식 안내                                           */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-surface-subtle">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl font-black text-ink-1 tracking-tighter mb-3">
            결제 방식
          </h2>
          <p className="text-base text-ink-3 mb-10">
            강쥐엄마의 정기결제는 신용카드 자동결제 방식으로 이루어집니다.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: <CreditCard size={24} className="text-biz" strokeWidth={2.2} />,
                title: "결제 수단",
                desc: "신용카드 / 체크카드 자동결제 (토스페이먼츠 빌링키)",
              },
              {
                icon: <Calendar size={24} className="text-biz" strokeWidth={2.2} />,
                title: "결제 주기",
                desc: "매월 1회, 최초 결제일을 기준으로 동일 일자에 자동 결제됩니다.",
              },
              {
                icon: <RefreshCw size={24} className="text-biz" strokeWidth={2.2} />,
                title: "해지 / 변경",
                desc: "앱 내 [구독 관리] 메뉴에서 언제든지 해지·변경 가능합니다.",
              },
              {
                icon: <ShieldCheck size={24} className="text-biz" strokeWidth={2.2} />,
                title: "보안",
                desc: "카드 정보는 토스페이먼츠를 통해 안전하게 처리되며, 회사는 카드 정보를 보관하지 않습니다.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-line">
                <div className="w-11 h-11 rounded-xl bg-biz-tint50 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <div className="font-black text-ink-1 mb-1.5">{item.title}</div>
                <div className="text-sm text-ink-2 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 환불 / 약관 안내                                         */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl font-black text-ink-1 tracking-tighter mb-6">
            환불 및 약관
          </h2>

          <div className="bg-surface-subtle rounded-3xl p-6 md:p-8">
            <ul className="space-y-3 text-base text-ink-2">
              <li className="flex items-start gap-2">
                <span className="text-biz font-black">·</span>
                <span>결제일로부터 7일 이내 서비스를 전혀 이용하지 않은 경우 전액 환불됩니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-biz font-black">·</span>
                <span>결제 후 1회라도 유료 기능을 사용한 경우, 잔여일에 대한 일할 계산으로 환불됩니다 (결제일로부터 15일 이내).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-biz font-black">·</span>
                <span>구독 해지 시 다음 결제일부터 자동결제가 중단되며, 별도 위약금은 없습니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-biz font-black">·</span>
                <span>회사 귀책 사유로 서비스가 중단된 경우, 중단된 기간만큼 환불됩니다.</span>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-line flex flex-wrap gap-x-5 gap-y-2">
              <Link
                href="/refund-policy"
                className="text-sm font-bold text-biz hover:underline"
              >
                전체 환불정책 보기 →
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm font-bold text-biz hover:underline"
              >
                이용약관 →
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm font-bold text-biz hover:underline"
              >
                개인정보 처리방침 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 회사 정보                                                */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-surface-subtle">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl font-black text-ink-1 tracking-tighter mb-6">
            회사 정보
          </h2>

          <div className="bg-white rounded-3xl p-6 md:p-8 border border-line">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-base text-ink-2">
              <div>
                <span className="text-ink-3">상호:</span>{" "}
                <strong>(주)비타니마</strong>
              </div>
              <div>
                <span className="text-ink-3">대표자:</span> 김훈기
              </div>
              <div>
                <span className="text-ink-3">사업자등록번호:</span> 284-88-02356
              </div>
             
              <div className="md:col-span-2">
                <span className="text-ink-3">주소:</span> 인천광역시 연수구 테크노파크로 111번길 5, 801-16호
              </div>
              <div>
                <span className="text-ink-3">연락번호:</span> 010-8547-5248
              </div>
              <div>
                <span className="text-ink-3">통신판매업신고번호:</span> 제2026-인천연수구-1470호
              </div>
              <div>
                <span className="text-ink-3">이메일:</span>{" "}
                <a href="mailto:cs@gangjiumma.kr" className="text-biz hover:underline font-bold">
                  cs@gangjiumma.kr
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
