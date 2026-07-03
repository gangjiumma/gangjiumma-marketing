import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://gangjiumma.kr"),
  title: {
    default: "AnimAI — 반려동물 전용 AI (강아지·고양이)",
    template: "%s | AnimAI",
  },
  description:
    "반려동물 곁에서 매일 학습하고 함께 기록하는, 아이 하나하나에 맞춤 AI",
  keywords: [
    // 새 브랜드 (우선)
    "AnimAI",
    "애니마이",
    "반려동물 AI",
    "반려동물 앱",
    "강아지 고양이 AI",
    "고양이 AI",
    "반려동물 커뮤니티",
    // 구 브랜드 (SEO 자산 유지 — 6~12개월 후 조정)
    "강쥐엄마",
    "반려견 앱",
    "강아지 커뮤니티",
    "강아지 정보",
    "동네 강아지",
    // 사장님
    "펫 마케팅",
    "펫샵 사장님",
  ],
  openGraph: {
    title: "AnimAI — 반려동물 전용 AI (강아지·고양이)",
    description:
      "반려동물 곁에서 매일 학습하고 함께 기록하는, 아이 하나하나에 맞춤 AI",
    url: "https://gangjiumma.kr",
    siteName: "AnimAI",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AnimAI — 반려동물 AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AnimAI — 반려동물 AI",
    description:
      "우리 아이(강아지·고양이)를 매일 학습하는 반려동물 전용 AI",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      "naver-site-verification": "e91039a96bbb4447a608405c39a686429948832d",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* 새로고침 시 항상 맨 위(히어로)부터 시작 — 브라우저 스크롤 복원 끄기 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if('scrollRestoration' in history){history.scrollRestoration='manual';}`,
          }}
        />
        {/* Pretendard 폰트 CDN */}
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="font-sans antialiased bg-white text-ink-1">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
