import { ReactNode } from "react";

interface AppLegalLayoutProps {
  title: string;
  subtitle: string;
  effectiveDate: string;
  children: ReactNode;
}

/**
 * AppLegalLayout — 앱 웹뷰용 심플 wrapper
 *
 * 웹용 LegalLayout과 다른 점:
 *  - Header / Footer 없음 (앱이 네이티브 상단바 관리)
 *  - 좌측 sticky 목차 없음 (모바일에선 그냥 스크롤)
 *  - 상단 여백 pt-28/36 → pt-6 (앱 헤더 아래 바로)
 *  - 회사 정보는 축약형 (법적 필수 요소는 유지)
 *  - 폰트 크기 살짝 작게 (웹뷰 기본 크기 대응)
 *
 * 검색엔진 색인 X — 각 앱 페이지 metadata.robots에서 처리.
 */
export default function AppLegalLayout({
  title,
  subtitle,
  effectiveDate,
  children,
}: AppLegalLayoutProps) {
  return (
    <div className="bg-white min-h-screen">
      {/* 상단 헤더 (앱 네이티브 헤더 아래) */}
      <header className="bg-brand-tint50 px-5 pt-6 pb-6">
        <h1 className="text-2xl font-black text-ink-1 tracking-tight leading-tight">
          {title}
        </h1>
        <p className="mt-2 text-sm text-ink-3 font-medium">{subtitle}</p>
        <p className="mt-1 text-xs text-ink-3">
          시행일: <span className="font-bold text-ink-2">{effectiveDate}</span>
        </p>
      </header>

      {/* 본문 */}
      <main className="px-5 py-6">
        <article className="prose prose-sm max-w-none text-ink-2 leading-relaxed">
          {children}
        </article>

        {/* 하단 회사 정보 (법적 필수) */}
        <div className="mt-10 pt-6 border-t border-line">
          <div className="bg-surface-subtle rounded-2xl p-5">
            <h3 className="text-sm font-black text-ink-1 mb-3">회사 정보</h3>
            <div className="space-y-1 text-xs text-ink-2 leading-relaxed">
              <p>
                <span className="text-ink-3">상호:</span>{" "}
                <strong>(주)비타니마</strong>
              </p>
              <p>
                <span className="text-ink-3">대표·개인정보 보호책임자:</span>{" "}
                김훈기
              </p>
              <p>
                <span className="text-ink-3">사업자등록번호:</span>{" "}
                284-88-02356
              </p>
              <p>
                <span className="text-ink-3">통신판매업신고:</span>{" "}
                제2026-인천연수구-1470호
              </p>
              <p>
                <span className="text-ink-3">주소:</span>{" "}
                인천광역시 연수구 테크노파크로 111번길 5, 801-16호
              </p>
              <p>
                <span className="text-ink-3">유선번호:</span> 010-2358-5248
              </p>
              <p>
                <span className="text-ink-3">서비스:</span> AnimAI
              </p>
              <p>
                <span className="text-ink-3">문의:</span>{" "}
                <a
                  href="mailto:cs@vitanima.kr"
                  className="text-brand font-bold"
                >
                  cs@vitanima.kr
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
