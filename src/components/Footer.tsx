export default function Footer() {
  return (
    <footer className="bg-ink-1 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* 좌측: 로고 + 슬로건 */}
          <div className="flex flex-col gap-3">
            <div className="text-2xl font-black text-brand">강쥐엄마</div>
            <p className="text-ink-4 text-base">
              매일 더 가까이, 더 오래
            </p>
          </div>

          {/* 우측: 회사 정보 */}
          <div className="flex flex-col gap-2 text-base text-ink-4">
            <div className="font-bold text-white">(주)비타니마</div>
            <a
              href="mailto:gangjiumma@gmail.com"
              className="hover:text-white transition-colors"
            >
              📧 gangjiumma@gmail.com
            </a>
            <div className="text-sm">
              사업자등록번호: [284-88-02356]
              
            </div>
            <div className="text-sm">
              
              대표 : 김훈기 l
              개인정보관리책임자 : 김훈기
            </div>
          </div>
        </div>

        {/* 하단 카피라이트 */}
        <div className="mt-12 pt-6 border-t border-ink-2/40 text-sm text-ink-4">
          © 2026 Vitanima. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
