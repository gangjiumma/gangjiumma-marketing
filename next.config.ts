import type { NextConfig } from "next";

// ─────────────────────────────────────────────────────────────
// 도메인 정본(canonical) 통일 — 2026.07.08
//
// 배경: Vercel 프로덕션 alias(gangjiumma-marketing.vercel.app)가
//       www.animai.kr과 동일한 사이트를 색인 가능한 상태로 중복 서빙 중.
//       → 검색엔진이 중복 콘텐츠로 인식 → 정본 신뢰도 분산.
//
// 해결: 해당 호스트로 들어온 모든 요청을 308(영구)로 정본에 합침.
//       has: host 정확 매칭이라 프리뷰 배포(*-git-*.vercel.app)는 영향 없음.
//
// ⚠️ 이후 이 URL로 프로덕션 미리보기는 못 함(www.animai.kr으로 튕김). 의도된 동작.
// ⚠️ 구·신 도메인 리다이렉트(gangjiumma.kr / vitanima.kr → www.animai.kr)는
//    Vercel Domains 설정에서 308로 처리됨. 여기 중복 정의하지 말 것.
// ─────────────────────────────────────────────────────────────
const CANONICAL_ORIGIN = "https://www.animai.kr";
const LEGACY_VERCEL_HOST = "gangjiumma-marketing.vercel.app";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: LEGACY_VERCEL_HOST }],
        destination: `${CANONICAL_ORIGIN}/:path*`,
        permanent: true, // 308 Permanent Redirect
      },
    ];
  },
};

export default nextConfig;
