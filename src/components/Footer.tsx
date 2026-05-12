import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink-1 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
        {/* 상단 — 브랜드 + 회사 정보 */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-3">
            <div className="text-2xl font-black text-brand">강쥐엄마</div>
            <p className="text-ink-4 text-base">매일 더 가까이, 더 오래</p>
          </div>
          <div className="flex flex-col gap-2 text-base text-ink-4">
            <div className="font-bold text-white">(주)비타니마</div>
            <a
              href="mailto:cs@gangjiumma.kr"
              className="hover:text-white transition-colors"
            >
              📧 cs@gangjiumma.kr
            </a>
            <div className="text-sm">사업자등록번호: 284-88-02356</div>
            <div className="text-sm">대표 : 김훈기 l 개인정보관리책임자 : 김훈기</div>
          </div>
        </div>

        {/* 중간 — 약관 링크 */}
        <div className="mt-10 pt-8 border-t border-ink-2/40">
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-4">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors font-bold"
            >
              개인정보 처리방침
            </Link>
            <span className="text-ink-2/40">|</span>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              이용약관
            </Link>
            <span className="text-ink-2/40">|</span>
            <Link
              href="/marketing-consent"
              className="hover:text-white transition-colors"
            >
              마케팅 정보 수신 동의
            </Link>
          </nav>
        </div>

        {/* 하단 — 저작권 */}
        <div className="mt-8 pt-6 border-t border-ink-2/40 text-sm text-ink-4">
          © 2026 Vitanima Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
