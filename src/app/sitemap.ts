import type { MetadataRoute } from "next";

/**
 * Next.js 16 sitemap.xml 자동 생성
 *
 * 결과: https://www.gangjiumma.kr/sitemap.xml 에 XML 형태로 노출됨
 *
 * 네이버 서치어드바이저에 등록된 도메인 형태(www 포함)와 일치시킴.
 *
 * 새 페이지 만들 때마다 여기에 추가하면 됨.
 * - priority: 0.0 ~ 1.0 (메인이 가장 높음)
 * - changeFrequency: always | hourly | daily | weekly | monthly | yearly | never
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // 메인
    {
      url: "https://www.gangjiumma.kr",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // 사장님 페이지 (영업 핵심)
    {
      url: "https://www.gangjiumma.kr/business",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // 펫페어 랜딩
    {
      url: "https://www.gangjiumma.kr/megaz",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.gangjiumma.kr/kpet-suwon",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // 사장님 사용설명서 (메인 hub)
    {
      url: "https://www.gangjiumma.kr/biz-manual",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // 사장님 사용설명서 (앱 빌드 호환용 - biz-manual과 동일)
    {
      url: "https://www.gangjiumma.kr/business-manual",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // 사장님 사용설명서 - 상세 6개
    {
      url: "https://www.gangjiumma.kr/biz-manual/signup",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://www.gangjiumma.kr/biz-manual/profile",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      // ⭐ 핵심 기능 — AI 광고 만들기
      url: "https://www.gangjiumma.kr/biz-manual/ads",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.gangjiumma.kr/biz-manual/manage",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://www.gangjiumma.kr/biz-manual/insights",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://www.gangjiumma.kr/biz-manual/operations",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // 법적 페이지
    {
      url: "https://www.gangjiumma.kr/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.gangjiumma.kr/terms-of-service",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.gangjiumma.kr/marketing-consent",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.gangjiumma.kr/account-delete",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
