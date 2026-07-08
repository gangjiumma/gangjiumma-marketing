import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.animai.kr"),
  title: {
    default: "AnimAI (애니마이) — 반려동물 전용 AI (강아지·고양이)",
    template: "%s | AnimAI (애니마이)",
  },
  description:
    "AnimAI(애니마이)는 강쥐엄마의 새 이름이에요. 반려동물 곁에서 매일 학습하고 함께 기록하는, 아이 하나하나에 맞춤 AI. 강아지·고양이 모두 함께해요.",
  keywords: [
    // 새 브랜드 (한글 발음 우선 노출)
    "애니마이",
    "AnimAI",
    "애니마이 앱",
    "애니마이 반려동물",
    // 브랜드 전환 (강쥐엄마→AnimAI 매칭)
    "강쥐엄마",
    "구 강쥐엄마",
    "강쥐엄마 앱",
    "강쥐엄마 애니마이",
    "강쥐엄마 AnimAI",
    // 기능·카테고리
    "반려동물 AI",
    "반려동물 앱",
    "강아지 고양이 AI",
    "고양이 AI",
    "반려동물 커뮤니티",
    // 강쥐엄마 SEO 자산 (6~12개월 유지)
    "반려견 앱",
    "강아지 커뮤니티",
    "강아지 정보",
    "동네 강아지",
    // 사장님
    "AnimAI Biz",
    "펫 마케팅",
    "펫샵 사장님",
  ],
  openGraph: {
    title: "AnimAI (애니마이) — 반려동물 전용 AI (강아지·고양이)",
    description:
      "AnimAI(애니마이)는 강쥐엄마의 새 이름. 반려동물 곁에서 매일 학습하고 함께 기록하는, 아이 하나하나에 맞춤 AI",
    url: "https://www.animai.kr",
    siteName: "AnimAI (애니마이)",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-animai.png", // ⚠️ 파일명 = 캐시 키. 이미지 교체 시 반드시 파일명도 바꿀 것
        width: 1200,
        height: 630,
        alt: "AnimAI (애니마이) — 반려동물 AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AnimAI (애니마이) — 반려동물 AI",
    description:
      "강쥐엄마의 새 이름 · 우리 아이(강아지·고양이)를 매일 학습하는 반려동물 전용 AI · AnimAI (애니마이)",
    images: ["/og-animai.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      "naver-site-verification": [
        "9f11059b6e73d8cbc1e52e3426c613db18bd92d8", // www.animai.kr (신규 대표)
        "e91039a96bbb4447a608405c39a686429948832d", // gangjiumma.kr (구 도메인, 리다이렉트 이관 완료까지 유지)
      ],
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
        {/* JSON-LD 구조화 데이터 — 검색엔진에 브랜드/한글발음 공식 통보 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.animai.kr/#organization",
                  name: "AnimAI",
                  alternateName: ["애니마이", "AnimAI (애니마이)", "강쥐엄마"],
                  url: "https://www.animai.kr",
                  logo: "https://www.animai.kr/og-animai.png",
                  description:
                    "AnimAI(애니마이)는 강쥐엄마의 새 이름. 반려동물 전용 AI — 강아지·고양이 모두를 위한 맞춤 학습·기록·커뮤니티 앱.",
                  sameAs: [
                    "https://www.instagram.com/animai_official",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.animai.kr/#website",
                  url: "https://www.animai.kr",
                  name: "AnimAI (애니마이)",
                  alternateName: "애니마이",
                  inLanguage: "ko-KR",
                  publisher: { "@id": "https://www.animai.kr/#organization" },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://www.animai.kr/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "MobileApplication",
                  name: "AnimAI",
                  alternateName: "애니마이",
                  applicationCategory: "LifestyleApplication",
                  operatingSystem: "iOS, Android",
                  offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
                  description:
                    "우리 아이(강아지·고양이)를 매일 학습하는 반려동물 AI 비서",
                },
              ],
            }),
          }}
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
