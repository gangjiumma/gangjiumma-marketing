import type { MetadataRoute } from "next";

/**
 * Next.js 16 sitemap.xml 자동 생성
 *
 * 결과: https://gangjiumma.kr/sitemap.xml 에 XML 형태로 노출됨
 *
 * 새 페이지 만들 때마다 여기에 추가하면 됨.
 * - priority: 0.0 ~ 1.0 (메인이 가장 높음)
 * - changeFrequency: always | hourly | daily | weekly | monthly | yearly | never
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gangjiumma.kr",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://gangjiumma.kr/business",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // 추후 페이지 추가 시 여기에:
    // {
    //   url: "https://gangjiumma.kr/story",
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
  ];
}
