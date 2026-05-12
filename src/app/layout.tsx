import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://gangjiumma.kr"),
  title: {
    default: "강쥐엄마 — 반려견 AI",
    template: "%s | 강쥐엄마",
  },
  description:
    "우리 강아지와의 시간은 생각보다 짧으니까. 강아지의 매일을 더 잘 만들고 싶은 사람들이 모이는 곳, 강쥐엄마.",
  keywords: [
    "강쥐엄마",
    "반려견 앱",
    "강아지 커뮤니티",
    "강아지 정보",
    "동네 강아지",
    "펫 마케팅",
  ],
  openGraph: {
    title: "강쥐엄마 — 반려견 AI",
    description:
      "우리 강아지와의 시간은 생각보다 짧으니까. 매일 더 가까이, 더 오래.",
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
      "우리 강아지와의 시간은 생각보다 짧으니까. 매일 더 가까이, 더 오래.",
    images: ["/og-image.png"],
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
