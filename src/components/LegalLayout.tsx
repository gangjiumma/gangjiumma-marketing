"use client";

import { useEffect, useState, ReactNode } from "react";

interface Section {
  id: string;
  title: string;
}

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  effectiveDate: string;
  sections: Section[];
  children: ReactNode;
}

export default function LegalLayout({
  title,
  subtitle,
  effectiveDate,
  sections,
  children,
}: LegalLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  // 스크롤 시 현재 보고 있는 섹션 추적
  useEffect(() => {
    const handleScroll = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white">
      {/* 헤더 */}
      <section className="bg-brand-tint50 pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <h1 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-base md:text-lg text-ink-3 font-medium">
            {subtitle}
          </p>
          <p className="mt-2 text-sm md:text-base text-ink-3">
            시행일: <span className="font-bold text-ink-2">{effectiveDate}</span>
          </p>
        </div>
      </section>

      {/* 본문 + 목차 */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* 좌측 목차 (데스크탑 sticky) */}
            <aside className="lg:w-64 shrink-0">
              <div className="lg:sticky lg:top-24">
                <div className="bg-surface-subtle rounded-2xl p-5">
                  <h2 className="text-sm font-black text-ink-3 mb-3 uppercase tracking-wider">
                    목차
                  </h2>
                  <nav className="space-y-1 max-h-[60vh] overflow-y-auto">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          activeSection === section.id
                            ? "bg-brand-tint100 text-brand font-bold"
                            : "text-ink-2 hover:bg-white"
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* 본문 */}
            <div className="flex-1 min-w-0">
              <article className="prose prose-base max-w-none text-ink-2 leading-relaxed">
                {children}
              </article>

              {/* 하단 회사 정보 — 토스페이먼츠 심사 필수 항목 모두 포함 */}
              <div className="mt-16 pt-8 border-t border-line">
                <div className="bg-surface-subtle rounded-2xl p-6 md:p-8">
                  <h3 className="text-base md:text-lg font-black text-ink-1 mb-4">
                    회사 정보
                  </h3>
                  <div className="space-y-1.5 text-sm md:text-base text-ink-2">
                    <p>
                      <span className="text-ink-3">상호:</span>{" "}
                      <strong>(주)비타니마</strong> (Vitanima Inc.)
                    </p>
                    <p>
                      <span className="text-ink-3">대표자:</span> 김훈기
                    </p>
                    <p>
                      <span className="text-ink-3">개인정보 보호책임자:</span>{" "}
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
                      <span className="text-ink-3">서비스:</span> AnimAI (앱)
                    </p>
                    <p>
                      <span className="text-ink-3">문의:</span>{" "}
                      <a
                        href="mailto:cs@vitanima.kr"
                        className="text-brand hover:underline font-bold"
                      >
                        cs@vitanima.kr
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
