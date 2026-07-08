// src/app/renew/page.tsx
// 강쥐엄마 → AnimAI 리브랜드 안내 페이지 (v2 · 심플 5섹션)
// 대상: 기존 유저 (앱 배너 · 푸시 · SNS · 지인 추천 유입)
// 톤: 이벤트 축하 (밝게, 지난 이름도 고마워요)

import Link from "next/link";
import type { Metadata } from "next";
import {
  Sparkles,
  ArrowRight,
  PawPrint,
  Cat,
  Dog,
  Plus,
  Download,
} from "lucide-react";
import ShareButton from "@/components/ShareButton";

// ─────────────────────────────────────────────────────────────
// /renew — "강쥐엄마" 검색어의 유일한 착지점 (2026.07.08)
//
// 리브랜딩 후 전 페이지 <title>이 AnimAI로 바뀌면서 "강쥐엄마" 브랜드
// 검색어가 통째로 빠짐(브랜드 쿼리는 title 매칭이 절대적).
// 이 페이지가 구 브랜드 검색 유입을 받아 신 브랜드로 넘기는 다리 역할.
//
// ⚠️ title에서 "강쥐엄마"를 빼지 말 것. 루트 template("%s | AnimAI (애니마이)")가
//    뒤에 붙으므로 여기 title엔 "AnimAI"를 중복해 넣지 않는다.
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "강쥐엄마가 애니마이로 바뀌었어요",
  description:
    "강쥐엄마 앱의 새 이름은 애니마이(AnimAI)입니다. Animal + AI = AnimAI. 기존 계정·기록 그대로, 이제 강아지도 고양이도 함께해요. 우리 아이만의 AI 비서.",
  keywords: [
    // 구 브랜드 — 이 페이지의 존재 이유
    "강쥐엄마",
    "강쥐엄마 앱",
    "강쥐엄마 새 이름",
    "강쥐엄마 애니마이",
    "강쥐엄마 AnimAI",
    "강쥐엄마 바뀜",
    // 신 브랜드
    "애니마이",
    "AnimAI",
    "애니마이 앱",
    "반려동물 AI",
  ],
  openGraph: {
    title: "강쥐엄마 → 애니마이 (AnimAI)",
    description:
      "우리 아이만의 AI 비서. 강아지도, 고양이도, 이제 함께해요 🐾",
    url: "https://www.animai.kr/renew",
    siteName: "AnimAI (애니마이)",
    locale: "ko_KR",
    type: "website",
  },
  alternates: { canonical: "https://www.animai.kr/renew" },
  robots: { index: true, follow: true },
};

const DOWNLOAD_URL = "https://gangjiumma.github.io/gangjiumma_app_download/";

export default function RenewPage() {
  return (
    <>
      {/* ═════════════════════════════════════════════════════ */}
      {/* 1. HERO — 강쥐엄마가 AnimAI [애니마이]로 인사             */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-b from-brand-tint50 to-white pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white border border-brand-tint200 text-brand text-sm font-black">
            <Sparkles size={14} strokeWidth={2.6} />
            새로운 이름으로 인사드려요
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight mb-4">
            강쥐엄마가{" "}
            <span className="text-brand">AnimAI</span>
            <span className="text-ink-3 font-bold text-2xl md:text-3xl">
              {" "}[애니마이]
            </span>
            <br />
            로 이름을 바꿨어요 🐾
          </h1>

          <p className="text-base md:text-lg text-ink-3 font-medium leading-relaxed mb-8">
            더 많은 아이들과 함께하기 위해
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            새 이름으로 여러분을 맞이해요.
          </p>

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand text-white text-base md:text-lg font-black shadow-soft hover:opacity-90 transition-opacity"
          >
            <Download size={20} strokeWidth={2.4} />
            앱 다운로드
            <ArrowRight size={18} strokeWidth={2.4} />
          </a>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 2. 이름의 뜻 — Animal + AI = AnimAI                     */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <p className="text-sm font-black text-biz mb-3 text-center tracking-wide">
            이름의 뜻
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-ink-1 tracking-tighter leading-tight mb-10 text-center">
            Animal + AI = AnimAI
          </h2>

          <div className="bg-surface-subtle rounded-3xl p-8 md:p-10 border border-line">
            <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-ink-1 tracking-tighter">
                  Anim<span className="text-ink-3 opacity-40">al</span>
                </div>
                <div className="text-xs text-ink-3 font-medium mt-1">
                  반려동물
                </div>
              </div>

              <Plus size={22} className="text-ink-3" strokeWidth={2.4} />

              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-brand tracking-tighter">
                  AI
                </div>
                <div className="text-xs text-ink-3 font-medium mt-1">
                  인공지능
                </div>
              </div>

              <span className="text-2xl md:text-3xl font-black text-ink-3">
                =
              </span>

              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-brand tracking-tighter">
                  AnimAI
                </div>
                <div className="text-xs text-ink-3 font-medium mt-1">
                  애니마이
                </div>
              </div>
            </div>

            <p className="text-center text-sm md:text-base text-ink-3 font-medium mt-8 leading-relaxed">
              Animal의 <b className="text-ink-2">Anim</b>과 AI가 자연스럽게
              이어져요.
            </p>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 3. 왜? — 고양이 집사님도 함께 + 앞으로 더 다양하게        */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-brand-tint50">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <p className="text-sm font-black text-brand mb-3 text-center tracking-wide">
            왜 이름을 바꿨나요?
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-ink-1 tracking-tighter leading-tight mb-10 text-center">
            강아지도, 고양이도,
            <br />
            앞으로 더 많은 아이들과 함께
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-line flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-tint100 flex items-center justify-center shrink-0">
                <Cat size={24} className="text-brand" strokeWidth={2.2} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-black text-ink-1 mb-2">
                  이제 고양이 집사님도 함께!
                </h3>
                <p className="text-sm md:text-base text-ink-3 font-medium leading-relaxed">
                  우리 냥이만의 AI 비서를 만들 수 있어요.
                  <br />
                  품종·성격·건강까지 학습해서 우리 아이에게 딱 맞는 답변을
                  드려요.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 border border-line flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-biz-tint50 flex items-center justify-center shrink-0">
                <PawPrint size={24} className="text-biz" strokeWidth={2.2} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-black text-ink-1 mb-2">
                  앞으로 더 다양한 반려동물과
                </h3>
                <p className="text-sm md:text-base text-ink-3 font-medium leading-relaxed">
                  강아지·고양이 뿐만 아니라, 앞으로는 더 다양한 반려동물의
                  AI 생활을 도우려고 해요. 그래서 이름을 넓혔어요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 4. 고양이 사용법 — 간단 3단계                            */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <p className="text-sm font-black text-biz mb-3 text-center tracking-wide">
            고양이는 어떻게 시작하나요?
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-ink-1 tracking-tighter leading-tight mb-10 text-center">
            강아지와 똑같이,
            <br />
            등록만 하면 시작돼요
          </h2>

          <ol className="space-y-4">
            <li className="bg-surface-subtle rounded-2xl p-5 md:p-6 border border-line flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center shrink-0 font-black text-lg">
                1
              </div>
              <div className="flex-1">
                <div className="font-black text-ink-1 text-base md:text-lg">
                  앱에서 [반려동물 등록/추가]
                </div>
                <div className="text-sm text-ink-3 font-medium mt-0.5">
                  홈이나 MY 탭에서 바로 시작
                </div>
              </div>
            </li>

            <li className="bg-surface-subtle rounded-2xl p-5 md:p-6 border border-line flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center shrink-0 font-black text-lg">
                2
              </div>
              <div className="flex-1">
                <div className="font-black text-ink-1 text-base md:text-lg flex items-center gap-2 flex-wrap">
                  종 선택에서
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-tint100 text-brand text-sm font-black">
                    <Cat size={14} strokeWidth={2.6} /> 고양이
                  </span>
                </div>
                <div className="text-sm text-ink-3 font-medium mt-0.5">
                  이름·품종·생일·성별을 알려주세요
                </div>
              </div>
            </li>

            <li className="bg-surface-subtle rounded-2xl p-5 md:p-6 border border-line flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center shrink-0 font-black text-lg">
                3
              </div>
              <div className="flex-1">
                <div className="font-black text-ink-1 text-base md:text-lg flex items-center gap-2">
                  <Sparkles size={18} className="text-brand" strokeWidth={2.4} />
                  우리 냥이만의 AI 이용
                </div>
                <div className="text-sm text-ink-3 font-medium mt-0.5">
                  질문·건강 관리·놀이 팁까지, 모두 열려요
                </div>
              </div>
            </li>
          </ol>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-ink-3 font-medium">
            <Dog size={18} className="text-brand" strokeWidth={2.4} />
            <span>강아지 등록도 방법은 똑같아요</span>
            <Dog size={18} className="text-brand" strokeWidth={2.4} />
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 5. 최종 CTA — 앱 다운받기 + 지인 집사 추천                */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-brand-tint50 to-white">
        <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <Dog size={22} className="text-brand" strokeWidth={2.4} />
            <PawPrint size={20} className="text-brand" strokeWidth={2.4} />
            <Cat size={22} className="text-brand" strokeWidth={2.4} />
          </div>

          <h2 className="text-2xl md:text-4xl font-black text-ink-1 tracking-tighter leading-tight mb-4">
            우리 아이만의 AI 비서
            <br />
            <span className="text-brand">AnimAI</span> 지금 시작해요
          </h2>

          <p className="text-base md:text-lg text-ink-3 font-medium mb-10">
            다운받고 우리 아이 등록하면 바로 시작 · 무료
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 rounded-2xl bg-brand text-white text-base font-black shadow-soft hover:opacity-90 transition-opacity"
            >
              <Download size={19} strokeWidth={2.4} />
              앱 다운받기
            </a>

            <ShareButton />
          </div>

          <div className="mt-12 pt-8 border-t border-line">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-ink-3 font-bold hover:text-brand transition-colors"
            >
              AnimAI 홈으로
              <ArrowRight size={14} strokeWidth={2.6} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
