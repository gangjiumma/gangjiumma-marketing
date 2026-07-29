import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink-1 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
        {/* 상단 — 브랜드 + 회사 정보 */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-3">
            <div className="text-2xl font-black text-brand">AnimAI</div>
            <p className="text-ink-4 text-base">매일 더 가까이, 더 오래</p>
            <p className="text-ink-4 text-xs">Animal + AI · 구 강쥐엄마</p>
            <p className="text-ink-4 text-xs">
              AnimAI는{" "}
              <a
                href="https://www.vitanima.kr"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:text-white transition-colors"
              >
                ㈜비타니마
              </a>
              가 만듭니다
            </p>
          </div>

          {/* 회사 정보 — 토스페이먼츠 심사 필수 6항목 모두 노출 */}
          <div className="flex flex-col gap-1.5 text-sm text-ink-4 md:text-right">
            <a
              href="https://www.vitanima.kr"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-white text-base mb-1 hover:text-brand transition-colors"
            >
              (주)비타니마 ↗
            </a>
            <div>대표 김훈기 | 개인정보관리책임자 김훈기</div>
            <div>사업자등록번호 284-88-02356</div>
            <div>통신판매업신고번호 제2026-인천연수구-1470호</div>
            <div>인천광역시 연수구 테크노파크로 111번길 5, 8층</div>
            <div>유선번호 010-2358-5248</div>
            <a
              href="mailto:cs@vitanima.kr"
              className="hover:text-white transition-colors mt-1"
            >
              cs@vitanima.kr
            </a>
            <a
              href="https://www.vitanima.kr"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              회사 소개 vitanima.kr
            </a>
          </div>
        </div>

        {/* 중간 — 약관 / 정책 링크 */}
        <div className="mt-10 pt-8 border-t border-ink-2/40">
          <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-ink-4">
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
              href="/refund-policy"
              className="hover:text-white transition-colors"
            >
              환불정책
            </Link>
            <span className="text-ink-2/40">|</span>
            <Link
              href="/plans"
              className="hover:text-white transition-colors"
            >
              정기결제 안내
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
