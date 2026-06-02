import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://gangjiumma.kr"),
  title: {
    default: "강쥐엄마 — 반려견 전용 AI",
    template: "%s | 강쥐엄마",
  },
  description:
    "우리 강쥐에 대해 스스로 학습하고, 가장 잘아는 AI",
  keywords: [
    "강쥐엄마",
    "반려견 앱",
    "강아지 커뮤니티",
    "강아지 정보",
    "동네 강아지",
    "펫 마케팅",
  ],
  openGraph: {
    title: "강쥐엄마 — 반려견 AI 비서",
    description:
      "우리 아이를 가장 잘 아는 반려견 전용 AI",
    url: "https://gangjiumma.kr",
    siteName: "강쥐엄마",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "강쥐엄마 — 반려견 AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "강쥐엄마 — 반려견 AI",
    description:
      "우리 아이를 가장 잘 아는 반려견 전용 AI",
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
