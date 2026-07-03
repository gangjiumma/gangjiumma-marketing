import type { MetadataRoute } from "next";

/**
 * Next.js 16 robots.txt 자동 생성
 *
 * 결과: https://www.gangjiumma.kr/robots.txt 에 텍스트로 노출됨
 *
 * 네이버 서치어드바이저에 등록된 도메인 형태(www 포함)와 일치시킴.
 *
 * AnimAI (구 강쥐엄마)는 전부 공개 사이트라 모든 크롤러에게 모든 페이지 허용.
 * - userAgent: "*" → 모든 검색엔진 (네이버, 구글, 다음 등)
 * - allow: "/" → 모든 경로 허용
 * - sitemap: 사이트맵 위치 알려줌
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.gangjiumma.kr/sitemap.xml",
  };
}
