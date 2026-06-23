import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "강쥐 사장님 · 펫 유치원·미용실 올인원 관리 | 강쥐엄마",
  description:
    "예약·결제·고객·매출·AI 마케팅을 하나로. 펫 유치원·미용실 사장님을 위한 올인원 관리 프로그램. 토스 결제 연동, 지금 무료로 입점 신청하세요.",
  keywords: [
    "펫 유치원 관리 프로그램",
    "애견 미용실 예약",
    "펫샵 예약 결제",
    "반려견 사업장 관리",
    "강쥐엄마 사장님",
    "펫 사업장 올인원",
    "강아지 유치원 예약 시스템",
  ],
  openGraph: {
    title: "강쥐 사장님 · 펫 사업장 올인원 관리",
    description:
      "예약·결제·고객·매출·AI 마케팅까지 하나로. 펫 유치원·미용실 사장님을 위한 무료 관리 프로그램.",
    url: "https://www.gangjiumma.kr/business",
    siteName: "강쥐엄마",
    locale: "ko_KR",
    type: "website",
  },
  alternates: { canonical: "https://www.gangjiumma.kr/business" },
};

export default function BusinessLayout({ children }: { children: React.ReactNode }) {
  return children;
}
