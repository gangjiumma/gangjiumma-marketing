import type { Metadata } from "next";

// ─────────────────────────────────────────────────────────────
// /demo — 색인 대상 (2026.07.08)
//
// demo/page.tsx 가 'use client' 라 metadata export 불가 →
// 서버 컴포넌트 layout 으로 분리 (business/layout.tsx 와 동일 패턴).
//
// 루트 layout.tsx 의 title.template("%s | AnimAI (애니마이)")가 자동 적용됨.
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "AnimAI Biz 데모 체험 · 가입 없이 대시보드 둘러보기",
  description:
    "회원가입 없이 AnimAI Biz 관리 대시보드를 바로 체험하세요. 돌봄센터(유치원·호텔·훈련소)와 미용실 데모 매장에서 예약·고객·매출·AI 마케팅을 직접 만져볼 수 있어요.",
  keywords: [
    // 새 브랜드
    "AnimAI 데모",
    "애니마이 데모",
    "AnimAI Biz 체험",
    "펫 유치원 관리 프로그램 체험",
    "애견 미용실 예약 프로그램 데모",
    "반려동물 사업장 관리 데모",
    "펫샵 대시보드 체험",
    // 구 브랜드 (SEO 자산)
    "강쥐엄마 사장님 데모",
  ],
  openGraph: {
    title: "AnimAI Biz 데모 · 진짜 대시보드를 직접 만져보세요",
    description:
      "가입 없이 바로 체험. 돌봄센터·미용실 데모 매장에서 예약·고객·매출·AI 마케팅까지 실제로 써볼 수 있어요.",
    url: "https://www.animai.kr/demo",
    siteName: "AnimAI Biz",
    locale: "ko_KR",
    type: "website",
  },
  alternates: { canonical: "https://www.animai.kr/demo" },
  robots: { index: true, follow: true },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
