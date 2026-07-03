// src/app/renew/page.tsx
// 강쥐엄마 → AnimAI 리브랜드 안내 페이지
// 대상: 기존 유저 (앱 배너 · 푸시 · SNS로 유입)
// 톤: 이벤트 축하 (밝게, 지난 이름도 고마워요)

import Link from "next/link";
import type { Metadata } from "next";
import {
  Sparkles,
  ArrowRight,
  PawPrint,
  Cat,
  Dog,
  Heart,
  CheckCircle2,
  Plus,
  Download,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "강쥐엄마가 AnimAI로 이름을 바꿨어요 — AnimAI",
  description:
    "Animal + AI = AnimAI. 반려동물 모두를 품기 위해 이름을 바꿨어요. 하던 대로 그대로 쓰면 돼요.",
  openGraph: {
    title: "강쥐엄마 → AnimAI",
    description:
      "우리 아이가 강아지든 고양이든, 오늘도 함께 · 하던 대로 그대로",
    type: "website",
  },
};

const APP_DOWNLOAD =
  "https://gangjiumma.github.io/gangjiumma_app_download/";

// 페이지 진입 애니메이션 · 이름 전환 · 강조 (styled-jsx 금지 → 전역 style로)
const RENEW_CSS = `
@keyframes renewFadeUp {
  0%   { opacity: 0; transform: translateY(14px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes renewFadeIn {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes renewPulse {
  0%, 100% { transform: scale(1);   opacity: 1; }
  50%      { transform: scale(1.06); opacity: 0.85; }
}
@keyframes renewSweep {
  0%   { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
.renew-fade-up   { animation: renewFadeUp 0.9s ease-out both; }
.renew-fade-in   { animation: renewFadeIn 1.4s ease-out both; }
.renew-pulse     { animation: renewPulse 2.2s ease-in-out infinite; }
.renew-delay-1   { animation-delay: 0.10s; }
.renew-delay-2   { animation-delay: 0.25s; }
.renew-delay-3   { animation-delay: 0.40s; }
.renew-delay-4   { animation-delay: 0.55s; }
.renew-delay-5   { animation-delay: 0.70s; }
.renew-gradient-text {
  background: linear-gradient(90deg, #FF6B35 0%, #FF8A5B 50%, #FF6B35 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: renewSweep 6s ease-in-out infinite alternate;
}
`;

/* ─────────────────────────────────────────────────────────
   HERO — 이름 전환 (강쥐엄마 → AnimAI)
   ───────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-brand-tint50 via-white to-white">
      {/* 은은한 배경 원 */}
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-tint100 opacity-60 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-brand-tint50 opacity-70 blur-3xl"
      />

      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        {/* 축하 배지 */}
        <div className="renew-fade-up inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-brand-tint200 shadow-soft">
          <Sparkles size={16} className="text-brand renew-pulse" strokeWidth={2.5} />
          <span className="text-xs md:text-sm font-bold text-brand">
            2026, 새 이름으로 인사드려요
          </span>
        </div>

        {/* 이름 전환 */}
        <div className="mt-8 md:mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {/* 이전 이름 */}
          <div className="renew-fade-up renew-delay-1 relative">
            <span className="block text-4xl md:text-6xl font-black text-ink-3 line-through decoration-brand-tint200 decoration-4">
              강쥐엄마
            </span>
            <span className="mt-2 block text-xs md:text-sm text-ink-3 font-medium">
              2024~2026 · 고마웠어요
            </span>
          </div>

          {/* 화살표 */}
          <div className="renew-fade-in renew-delay-2 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand shadow-soft">
            <ArrowRight size={24} className="text-white" strokeWidth={3} />
          </div>

          {/* 새 이름 */}
          <div className="renew-fade-up renew-delay-3">
            <span className="block text-5xl md:text-7xl font-black tracking-tight renew-gradient-text">
              AnimAI
            </span>
            <span className="mt-2 block text-xs md:text-sm text-brand font-bold">
              애니마이 · 2026~
            </span>
          </div>
        </div>

        {/* 메인 카피 */}
        <h1 className="renew-fade-up renew-delay-4 mt-10 md:mt-14 text-2xl md:text-4xl font-black text-ink-1 leading-tight">
          우리 아이가 강아지든 고양이든,
          <br className="hidden md:block" />
          <span className="text-brand"> 오늘도 함께.</span>
        </h1>
        <p className="renew-fade-up renew-delay-5 mt-4 md:mt-6 text-base md:text-lg text-ink-2 leading-relaxed">
          이름은 바뀌었지만 하는 일은 그대로예요.
          <br />
          로그인 정보, 아이 기록, 포인트 <b className="text-ink-1">전부 그대로</b>{" "}
          — 앱을 열면 어제까지 하던 대화가 이어져요.
        </p>

        {/* CTA */}
        <div className="renew-fade-up renew-delay-5 mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={APP_DOWNLOAD}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-3xl bg-brand text-white text-base md:text-lg font-bold shadow-soft hover:opacity-90 transition-all"
          >
            <Download size={18} strokeWidth={2.5} />앱 열기 · 다운로드
          </a>
          <Link
            href="#renew-cat"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-3xl bg-white border border-brand-tint200 text-brand text-base md:text-lg font-bold hover:bg-brand-tint50 transition-all"
          >
            <Cat size={18} strokeWidth={2.5} />
            고양이 등록 방법 보기
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   MEANING — Animal + AI = AnimAI 워드플레이
   ───────────────────────────────────────────────────────── */
function Meaning() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center">
          <span className="inline-block text-xs md:text-sm font-bold text-brand uppercase tracking-widest">
            이름의 뜻
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-black text-ink-1">
            <span className="text-brand">Anim</span>
            <span className="text-ink-1">al</span>
            <span className="mx-3 md:mx-4 text-ink-3 font-black">+</span>
            <span className="text-brand">AI</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <ArrowRight size={20} className="text-ink-3" />
          </div>
          <div className="mt-4 text-6xl md:text-8xl font-black tracking-tight">
            <span className="text-brand">Anim</span>
            <span className="text-ink-1">AI</span>
          </div>
          <p className="mt-8 text-base md:text-lg text-ink-2 leading-relaxed max-w-2xl mx-auto">
            얼핏 <b className="text-brand">Animal</b>로 보이지만,
            <br />
            실은 <b className="text-brand">Anim</b>al과 <b className="text-brand">AI</b>가
            겹쳐진 이름이에요.
            <br className="hidden md:block" /> 반려동물 곁에서, AI가 함께한다는 뜻.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   WHY — 왜 바꿨나
   ───────────────────────────────────────────────────────── */
function Why() {
  return (
    <section className="py-20 md:py-28 bg-brand-tint50">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-14">
          <span className="inline-block text-xs md:text-sm font-bold text-brand uppercase tracking-widest">
            왜 바꿨을까
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-ink-1 leading-tight">
            "강쥐"라는 이름이
            <br className="md:hidden" /> 그릇을 좁게 만들었어요
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          <div className="bg-white rounded-3xl p-7 md:p-8 shadow-soft border border-brand-tint100">
            <div className="w-12 h-12 rounded-2xl bg-brand-tint50 flex items-center justify-center mb-4">
              <Dog size={24} className="text-brand" strokeWidth={2.2} />
            </div>
            <h3 className="text-lg md:text-xl font-black text-ink-1 mb-2">
              처음엔 강아지만 생각했어요
            </h3>
            <p className="text-sm md:text-base text-ink-2 leading-relaxed">
              강쥐엄마는 강아지 보호자를 위해 시작한 앱이에요. 그래서 "강쥐"가
              이름에 들어갔죠.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 md:p-8 shadow-soft border border-brand-tint100">
            <div className="w-12 h-12 rounded-2xl bg-brand-tint50 flex items-center justify-center mb-4">
              <Cat size={24} className="text-brand" strokeWidth={2.2} />
            </div>
            <h3 className="text-lg md:text-xl font-black text-ink-1 mb-2">
              고양이 보호자도 찾아오셨어요
            </h3>
            <p className="text-sm md:text-base text-ink-2 leading-relaxed">
              "우리 고양이는요?"라고 물어오시는 분들이 많아졌어요. AI가 고양이도
              충분히 배울 수 있는데, 이름이 막고 있었어요.
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-10 bg-white rounded-3xl p-7 md:p-10 border-2 border-brand-tint200">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand flex items-center justify-center">
              <PawPrint size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-black text-ink-1 mb-2">
                그릇은 넓히되, 하는 일은 그대로
              </h3>
              <p className="text-sm md:text-base text-ink-2 leading-relaxed">
                우리가 하는 일 —{" "}
                <b className="text-ink-1">
                  우리 아이 곁에서 매일 학습하고, 함께 기록하고, 끝까지 동행하는
                </b>{" "}
                — 그건 하나도 안 바뀌었어요. 반려동물 그 누구든 품을 수 있는
                이름으로 갈아입은 것뿐이에요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   NEW vs SAME — 대비 카드
   ───────────────────────────────────────────────────────── */
function NewVsSame() {
  const NEW_ITEMS = [
    { icon: Cat, text: "고양이 등록 가능" },
    { icon: Sparkles, text: "새 이름 · 새 로고" },
    { icon: PawPrint, text: "반려동물 종에 맞춘 AI 학습" },
  ];
  const SAME_ITEMS = [
    "로그인 정보 (전화번호 · 핀)",
    "우리 아이 기록 · 사진 · 일기장",
    "Paw 포인트 잔액",
    "강GPT 상담 히스토리",
    "커뮤니티 글 · 좋아요 · 팔로우",
    "동네업체 예약 · 이용권",
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-14">
          <span className="inline-block text-xs md:text-sm font-bold text-brand uppercase tracking-widest">
            바뀐 것 · 그대로인 것
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-ink-1">
            바뀐 건 이름뿐이에요
          </h2>
          <p className="mt-3 text-sm md:text-base text-ink-2">
            새 앱을 깔거나 다시 가입할 필요 없어요. 앱을 열면 그대로예요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {/* 새로 생긴 것 */}
          <div className="bg-gradient-to-br from-brand-tint50 to-white rounded-3xl p-7 md:p-8 border border-brand-tint200">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-2xl bg-brand flex items-center justify-center">
                <Plus size={18} className="text-white" strokeWidth={3} />
              </div>
              <h3 className="text-lg md:text-xl font-black text-ink-1">새로 생긴 것</h3>
            </div>
            <ul className="space-y-3">
              {NEW_ITEMS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-brand-tint200 flex items-center justify-center">
                    <Icon size={16} className="text-brand" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm md:text-base text-ink-1 font-medium">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 그대로인 것 */}
          <div className="bg-white rounded-3xl p-7 md:p-8 border border-line-1 shadow-soft">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-2xl bg-emerald-500 flex items-center justify-center">
                <CheckCircle2 size={18} className="text-white" strokeWidth={3} />
              </div>
              <h3 className="text-lg md:text-xl font-black text-ink-1">
                그대로인 것
              </h3>
            </div>
            <ul className="space-y-3">
              {SAME_ITEMS.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-emerald-500 flex-shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <span className="text-sm md:text-base text-ink-2 leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   HOW TO ADD CAT — 고양이 등록 3스텝
   ───────────────────────────────────────────────────────── */
function HowToAddCat() {
  const STEPS = [
    {
      n: "01",
      title: "MY 탭 → 반려동물 추가",
      body: "앱 아래 [MY] 탭에서 우리 아이 카드 옆의 [+] 를 눌러주세요.",
    },
    {
      n: "02",
      title: "'고양이' 선택",
      body:
        "반려동물 종류에서 '고양이'를 골라주세요. 강아지 아이가 이미 있어도 나란히 등록할 수 있어요.",
    },
    {
      n: "03",
      title: "이름 · 품종 · 생일 입력",
      body:
        "우리 고양이의 이름과 정보를 넣으면 끝. 이때부터 그 아이만을 위한 AI가 학습을 시작해요.",
    },
  ];

  return (
    <section id="renew-cat" className="py-20 md:py-28 bg-brand-tint50 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-14">
          <span className="inline-block text-xs md:text-sm font-bold text-brand uppercase tracking-widest">
            고양이 등록하기
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-ink-1">
            이제 우리 고양이도
            <br className="md:hidden" /> 함께할 수 있어요
          </h2>
          <p className="mt-3 text-sm md:text-base text-ink-2 leading-relaxed max-w-xl mx-auto">
            <b className="text-ink-1">아이 하나하나 마다 AI가 개별로 학습해요.</b>
            <br />
            강아지랑 고양이 성격이 다르듯, AI도 각 아이에게 맞춰 자라나요.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="bg-white rounded-3xl p-6 md:p-7 shadow-soft border border-brand-tint100"
            >
              <div className="text-4xl md:text-5xl font-black text-brand-tint200 mb-2">
                {step.n}
              </div>
              <h3 className="text-base md:text-lg font-black text-ink-1 mb-2">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-ink-2 leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-10 flex justify-center">
          <a
            href={APP_DOWNLOAD}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-3xl bg-brand text-white text-base md:text-lg font-bold shadow-soft hover:opacity-90 transition-all"
          >
            <Cat size={18} strokeWidth={2.5} />
            지금 앱 열고 등록하기
            <ArrowRight size={18} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   THANKS — 감사 인사 + 북극성 재확인
   ───────────────────────────────────────────────────────── */
function Thanks() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-tint50 mb-6">
          <Heart size={28} className="text-brand" strokeWidth={2.2} />
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-ink-1 leading-tight">
          <span className="text-brand">"강쥐엄마"</span>라는 이름을
          <br />
          아껴주신 분들께,
        </h2>

        <p className="mt-6 text-base md:text-lg text-ink-2 leading-relaxed">
          첫 이름부터 함께해주신 분들 덕분에 여기까지 왔어요. 이제 반려동물
          모두를 품기 위해 이름을 갈아입지만,
          <br />
          <b className="text-ink-1">우리가 드린 약속</b>은 하나도 바뀌지 않았어요.
        </p>

        {/* 북극성 재확인 카드 */}
        <div className="mt-10 md:mt-12 inline-block bg-gradient-to-br from-brand-tint50 to-white border-2 border-brand-tint200 rounded-3xl px-8 md:px-12 py-8 md:py-10">
          <span className="block text-xs md:text-sm font-bold text-brand uppercase tracking-widest">
            우리의 약속
          </span>
          <p className="mt-3 text-2xl md:text-4xl font-black text-ink-1 leading-tight">
            "우리 아이와 끝까지,
            <br />
            <span className="text-brand">가치있게."</span>
          </p>
        </div>

        <p className="mt-10 text-sm md:text-base text-ink-3">
          — AnimAI 팀 드림 · (주)비타니마
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   FINAL CTA
   ───────────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="pb-24 md:pb-32 bg-white">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="bg-brand rounded-4xl p-8 md:p-12 text-center shadow-soft">
          <Sparkles size={28} className="text-white mx-auto mb-4" strokeWidth={2.2} />
          <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
            앱을 열어보세요.
            <br />
            어제까지 하던 대화가 이어져요.
          </h3>
          <p className="mt-3 text-sm md:text-base text-white/90">
            바뀐 건 이름뿐이에요. 우리 아이는 그대로 기다리고 있어요.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={APP_DOWNLOAD}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-3xl bg-white text-brand text-base md:text-lg font-bold hover:opacity-90 transition-all"
            >
              <Download size={18} strokeWidth={2.5} />앱 열기 · 다운로드
            </a>
            <Link
              href="/voice"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-3xl border-2 border-white/50 text-white text-base md:text-lg font-bold hover:bg-white/10 transition-all"
            >
              <MessageCircle size={18} strokeWidth={2.5} />
              하고 싶은 말 남기기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────── */
export default function RenewPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: RENEW_CSS }} />
      <Hero />
      <Meaning />
      <Why />
      <NewVsSame />
      <HowToAddCat />
      <Thanks />
      <FinalCTA />
    </>
  );
}
