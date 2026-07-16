"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  Sparkles,
  CreditCard,
  RefreshCw,
  ShieldCheck,
  Calendar,
  PartyPopper,
  Lock,
} from "lucide-react";
import BizSignupModal from "@/components/BizSignupModal";

export const dynamic = "force-static";

// ─────────────────────────────────────────────────────────────
// 정기결제 상품 안내 페이지 (/plans)
//
// 목적:
//   1. 토스페이먼츠 빌링 심사용 정기결제 상품 명세 페이지
//   2. 사장님 회원의 결제 전 상품 정보 확인 페이지
//
// v19.2 BM 반영 (2026.07):
//   - 라이트 무료(원가 9,900) · 베이직 29,900 · 프로 59,900 · 맥스 79,900
//   - 7월 한달 가입 한정 라이트 평생 무료 + 14일 베이직 무료체험
//   - 기능 뱃지 이원화: ✅ 모든 손님 / ✨ 앱 전용
// ─────────────────────────────────────────────────────────────

// 기능 뱃지 타입
//   'all' = 체크 아이콘 = 앱 유무 관계없이 모든 손님에게 닿음
//   'app' = 스파클 아이콘 = 앱 회원 손님에게만 닿음 (앱 전용)
type FeatureType = "all" | "app";

interface Feature {
  text: string;
  type: FeatureType;
}

interface Plan {
  id: string;
  title: string;
  price: number;           // 정가 (원)
  originalPrice?: number;  // 원가 (취소선 표시용, 라이트만)
  isFree?: boolean;        // 무료 플랜
  perDay?: string;         // 예: "하루 1,000원 꼴"
  description: string;
  inherits?: string;       // 예: "라이트의 모든 기능 +"
  features: Feature[];
  badge?: string;          // 상단 뱃지 ("출시 기념" / "추천" / "출시 예정")
  badgeColor?: "brand" | "biz" | "muted"; // 뱃지 색상
  highlight?: boolean;     // 카드 강조 (베이직만 - 추천)
  isAvailableNow: boolean; // 지금 구독 가능 여부
  ctaLabel: string;        // CTA 버튼 텍스트
  ctaVariant: "primary" | "outline" | "current" | "locked";
}

const plans: Plan[] = [
  {
    id: "lite",
    title: "라이트",
    price: 0,
    originalPrice: 9900,
    isFree: true,
    description: "예약·매출·통계까지 무료로",
    features: [
      { text: "예약·고객 관리", type: "all" },
      { text: "토스 단말기 결제 연동", type: "all" },
      { text: "매출 관리 (토스 단말기 자동 연동)", type: "all" },
      { text: "이용권·일반상품 등록", type: "all" },
      { text: "예약 확정·취소 알림톡", type: "all" },
      { text: "시·구 단위 입점 업체 노출", type: "app" },
      { text: "앱이용고객 - QR 포인트 수취", type: "app" },
    ],
    badge: "출시 기념",
    badgeColor: "brand",
    isAvailableNow: true,
    ctaLabel: "베이직 무료체험 후 라이트로 변경",
    ctaVariant: "outline",
  },
  {
    id: "mini",
    title: "베이직",
    price: 14950,
    originalPrice: 29900,
    perDay: "월 · 하루 500원 꼴",
    description: "AI 알림장 · 알림톡 무제한 · 할인쿠폰",
    inherits: "라이트의 모든 기능 +",
    features: [
      { text: "AI 알림장 (유치원·호텔·미용)", type: "all" },
      { text: "AI 알림톡 무제한", type: "all" },
      { text: "AI 문의 자동응답 무제한", type: "app" },
      { text: "할인쿠폰 발행", type: "app" },
    ],
    badge: "추천",
    badgeColor: "biz",
    isAvailableNow: true,
    ctaLabel: "시작하기",
    ctaVariant: "primary",
  },
  {
    id: "basic",
    title: "프로",
    price: 29950,
    originalPrice: 59900,
    perDay: "월 · 하루 1,000원 꼴",
    description: "펫 특화 AI 광고 제작소 · 트렌드 리포트",
    inherits: "라이트·베이직의 모든 기능 +",
    features: [
      { text: "인스타·스레드·블로그용 광고 콘텐츠 제작 (무제한)", type: "all" },
      { text: "고객이 알려주는 트렌드 리포트 (미용·유치원·호텔)", type: "all" },
      { text: "지역별 고객 수요 통계", type: "app" },
      { text: "AI 이벤트 초안 (관심사 TOP3 기반)", type: "app" },
      { text: "AnimAI 앱 광고 게재 (시도·주 3회)", type: "app" },
    ],
    highlight: true,
    isAvailableNow: true,
    ctaLabel: "시작하기",
    ctaVariant: "primary",
  },
  {
    id: "pro",
    title: "맥스",
    price: 39950,
    originalPrice: 79900,
    perDay: "월 · 하루 1,300원 꼴",
    description: "전담 AI 에이전트 + 담당자 지원",
    inherits: "라이트·베이직·프로의 모든 기능 +",
    features: [
      { text: "전용 AI 에이전트 (자동 광고 게재)", type: "all" },
      { text: "매일 영업·매출 보고서 제공", type: "all" },
      { text: "담당 직원 배정 · 고객/영업 관리 지원", type: "all" },
      { text: "AnimAI 앱 광고 게재 (전국·주 5회)", type: "app" },
    ],
    badge: "출시 예정",
    badgeColor: "muted",
    isAvailableNow: false,
    ctaLabel: "곧 만나요",
    ctaVariant: "locked",
  },
];

export default function PlansPage() {
  const [signupOpen, setSignupOpen] = useState(false);
  return (
    <>
      <BizSignupModal open={signupOpen} onClose={() => setSignupOpen(false)} />

      {/* ═════════════════════════════════════════════════════ */}
      {/* HERO                                                    */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-biz-bg pt-28 md:pt-36 pb-10 md:pb-12">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h1 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
            플랜
          </h1>
          <p className="mt-4 text-base md:text-lg text-ink-3 font-medium leading-relaxed">
            예약·매출·통계는 라이트(출시 기념 무료)부터 제공돼요.<br className="hidden md:block" />
            AI 알림장·마케팅은 상위 플랜에서 열려요.
          </p>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 출시 기념 배너 (7월 한달 한정)                            */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="pt-6 pb-4">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="bg-white border-2 border-brand-tint200 rounded-2xl p-5 md:p-6 flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-tint50 flex items-center justify-center">
              <PartyPopper size={22} className="text-brand" strokeWidth={2.2} />
            </div>
            <div className="flex-1 text-sm md:text-base leading-relaxed">
              <div className="font-black text-ink-1 mb-1">
                출시 기념! 라이트 플랜 평생 무료 보장{" "}
                <span className="font-medium text-ink-3">
                  (원가 월 <span className="line-through">9,900원</span>)
                </span>
              </div>
              <p className="text-ink-2">
                <b className="text-brand">출시 기념</b> 라이트플랜 평생 무료 +{" "}
                <b>14일간 베이직 플랜 무료 체험</b>. 유료 플랜은 지금 <b className="text-brand">출시 기념 50% 할인가</b>로
                시작하실 수 있어요. 무료체험 이후 원하실 경우 카드결제 후 원하는 플랜을 이용하실 수 있어요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 뱃지 안내 (앱 전용 vs 모든 손님)                          */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="pt-4 pb-6">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 md:p-6">
            <p className="text-sm md:text-base font-black text-ink-1 mb-3">
              AnimAI 앱을 설치하지 않은 일반 손님까지, 모두 잡아드려요
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-brand-tint50 border border-brand-tint200 text-brand font-bold text-xs">
                  <Sparkles size={12} strokeWidth={2.5} />앱 전용
                </span>
                <span className="text-ink-2">앱 회원 손님에게 닿아요</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-100 border border-emerald-300 text-emerald-700 font-bold text-xs">
                  <Check size={12} strokeWidth={3} />모든 손님
                </span>
                <span className="text-ink-2">앱 없는 손님까지 닿아요</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 플랜 카드 4종                                            */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 md:p-7 border-2 flex flex-col ${
                  plan.highlight
                    ? "border-biz bg-biz-tint50 shadow-biz-soft"
                    : "border-line bg-white"
                }`}
              >
                {/* 상단 뱃지 */}
                {plan.badge && (
                  <div
                    className={`absolute -top-3 right-6 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black ${
                      plan.badgeColor === "brand"
                        ? "bg-brand text-white"
                        : plan.badgeColor === "biz"
                          ? "bg-biz text-white"
                          : "bg-surface-muted text-ink-3 border border-line"
                    }`}
                  >
                    {plan.badge === "출시 기념" && (
                      <PartyPopper size={12} strokeWidth={2.5} />
                    )}
                    {plan.badge === "출시 예정" && (
                      <Lock size={11} strokeWidth={2.5} />
                    )}
                    {plan.badge}
                  </div>
                )}

                {/* 타이틀 */}
                <div className="mb-3">
                  <div className="text-xl md:text-2xl font-black text-ink-1">
                    {plan.title}
                  </div>
                </div>

                {/* 가격 */}
                <div className="mb-5">
                  {plan.originalPrice && (
                    <div className="text-sm text-ink-3 line-through mb-0.5">
                      {plan.originalPrice.toLocaleString()}원
                    </div>
                  )}
                  <div className="flex items-baseline gap-1">
                    {plan.isFree ? (
                      <span className="text-3xl md:text-4xl font-black text-brand">
                        무료
                      </span>
                    ) : (
                      <>
                        <span className="text-3xl md:text-4xl font-black text-ink-1">
                          {plan.price.toLocaleString()}
                        </span>
                        <span className="text-base text-ink-3 font-bold">원</span>
                      </>
                    )}
                  </div>
                  {plan.perDay && (
                    <div className="mt-1 text-xs text-ink-3">{plan.perDay}</div>
                  )}
                  {plan.isFree && (
                    <div className="mt-1 text-xs font-bold text-brand">
                      출시 기념 무료 🎉
                    </div>
                  )}
                </div>

                {/* 설명 */}
                <div className="text-sm text-ink-2 font-medium mb-4 min-h-[2.5rem]">
                  {plan.description}
                </div>

                {/* 상속 표시 */}
                {plan.inherits && (
                  <div className="mb-4 px-3 py-2 rounded-lg bg-surface-subtle text-xs font-bold text-ink-2">
                    {plan.inherits}
                  </div>
                )}

                {/* 기능 리스트 */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-ink-2"
                    >
                      {feature.type === "app" ? (
                        <Sparkles
                          size={16}
                          className="shrink-0 mt-0.5 text-brand"
                          strokeWidth={2.5}
                        />
                      ) : (
                        <Check
                          size={16}
                          className="shrink-0 mt-0.5 text-emerald-600"
                          strokeWidth={3}
                        />
                      )}
                      <span className="leading-snug">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {plan.ctaVariant === "primary" && (
                  <button
                    type="button"
                    onClick={() => setSignupOpen(true)}
                    className="block w-full text-center py-3 rounded-xl bg-brand text-white font-black hover:opacity-90 transition-opacity"
                  >
                    {plan.ctaLabel}
                  </button>
                )}
                {plan.ctaVariant === "outline" && (
                  <button
                    type="button"
                    onClick={() => setSignupOpen(true)}
                    className="block w-full text-center py-3 rounded-xl bg-brand-tint50 border border-brand-tint200 text-brand font-black hover:bg-brand-tint100 transition-colors text-sm"
                  >
                    {plan.ctaLabel}
                  </button>
                )}
                {plan.ctaVariant === "locked" && (
                  <div className="block w-full text-center py-3 rounded-xl bg-surface-muted text-ink-3 font-bold cursor-not-allowed">
                    {plan.ctaLabel}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 하단 안내 */}
          <div className="mt-8 text-center text-xs md:text-sm text-ink-3">
            결제 카드는 토스페이먼츠 보안 서버에 안전하게 보관돼요 · 언제든 해지할 수 있어요
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
            AnimAI Biz의 정기결제는 신용카드 자동결제 방식으로 이루어집니다.
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
                <span className="text-ink-3">연락번호:</span> 010-2358-5248
              </div>
              <div>
                <span className="text-ink-3">통신판매업신고번호:</span> 제2026-인천연수구-1470호
              </div>
              <div>
                <span className="text-ink-3">이메일:</span>{" "}
                <a href="mailto:cs@vitanima.kr" className="text-biz hover:underline font-bold">
                  cs@vitanima.kr
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
