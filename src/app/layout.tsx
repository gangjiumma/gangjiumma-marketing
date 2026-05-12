import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://gangjiumma.kr"),
  title: {
    default: "강쥐엄마 — 반려견 건강 AI ",
    template: "%s | 강쥐엄마",
  },
  description:
    "우리 강아지와의 시간은 생각보다 짧으니까. 반려견 전문 AI 강쥐엄마.",
  keywords: [
    "강쥐엄마",
    "반려견 앱",
    "강아지 커뮤니티",
    "강아지 정보",
    "동네 강아지",
    "펫 마케팅",
  ],
  openGraph: {
    title: "강쥐엄마 — 반려견 건강 AI ",
    description:
      "우리 강아지와의 시간은 생각보다 짧으니까. 매일 더 가까이, 더 오래.",
    url: "https://gangjiumma.kr",
    siteName: "강쥐엄마",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "강쥐엄마",
    description: "강아지에 진심인 사람들의 동네",
  },
  robots: {
    index: true,
    follow: true,
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
