import Link from "next/link";
import Image from "next/image";
import {
  Pencil,
  MessageCircle,
  Sparkles,
  ClipboardList,
  Calendar,
  Pill,
  UtensilsCrossed,
  Store,
  Dog,
  PawPrint,
} from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import FadeInSection from "@/components/FadeInSection";
import { ScrollProgressBar } from "@/components/ScrollIndicator";
import ScrollHint from "@/components/ScrollHint";
import { IconBox } from "@/components/IconBox";
import HeroStats from "@/components/HeroStats";

const DOWNLOAD_URL = "https://gangjiumma.github.io/gangjiumma_app_download/";

// ✏️ 매일 아침 여기 숫만 업데이트 (오늘자 누적 신규가입 반려인)
const TOTAL_SIGNUPS = 1408;

// ─────────────────────────────────────────────────────────────
// 메인 페이지 v2 — "반려견 AI 비서" 컨셉
//
// 구조:
//   1. Hero — AI 비서 정체성
//   2. 간단함 — 딱 두 단계
//   3. AI 데모 영상
//   4. AI 비서가 하는 일 (2개)
//   5. AI 비서가 안내하는 곳 (3개)
//   6. Paw 포인트 (보조 띠)
//   7. 최종 CTA
//   8. 사장님 분기
//
// ✏️ 카피 수정 위치를 찾으려면 "✏️" 검색하세요
// ─────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <ScrollProgressBar />

      {/* ═════════════════════════════════════════════════════ */}
      {/* 1. HERO — AI 비서 정체성                              */}
      {/* CTA 버튼 아래에 ScrollHint ("이어서 보기" + 화살표)    */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="relative bg-brand-tint50 pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-tint100/50 via-brand-tint50 to-white pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            {/* ✏️ Hero 상단 — 작고 회색 (기존에 흩어진 것들 나열) */}
            <p className="text-lg md:text-2xl text-ink-3 font-medium tracking-tight leading-relaxed">

              우리 강쥐에 대해 궁금한 점, AI한테 많이 물어보시죠? 
              <br />
              일관성 없는 답변, 사람 기준 답변, 자가 학습 없음..
            </p>
            {/* ✏️ Hero 메인 헤드라인 */}
            <p className="mt-5 md:mt-6 text-3xl md:text-5xl lg:text-6xl font-black text-ink-1 tracking-tightest leading-[1.2]">
             강아지 학습형 AI는 다릅니다.
            </p>
          </FadeInSection>

          <FadeInSection delay={200}>
            {/* ✏️ Hero 강조 — 가입자 카운터 + D+N 뱃지 (HeroStats) */}
            <div className="mt-8 md:mt-10">
              <HeroStats total={TOTAL_SIGNUPS} />
            </div>
          </FadeInSection>

          <FadeInSection delay={400}>
            {/* ✏️ Hero 부제 */}
           
            <div className="mt-12 md:mt-14">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-brand text-white font-extrabold text-base md:text-xl rounded-2xl shadow-brand hover:bg-brand-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>강쥐엄마 앱 다운로드</span>
              </a>
            </div>
            {/* 다음 섹션으로 자연스럽게 유도하는 힌트 */}
            <div className="mt-14 md:mt-16">
              <ScrollHint />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 2. 간단함 (NEW) — 딱 두 단계면 끝                     */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              {/* ✏️ 섹션 라벨 */}
              <p className="text-base md:text-lg text-brand font-bold mb-3">
                어렵지 않아요
              </p>
              {/* ✏️ 섹션 헤드라인 */}
              <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
                딱 두 단계면 끝
              </h2>
              {/* ✏️ 섹션 부제 */}
              <p className="mt-6 text-base md:text-lg text-ink-3 font-medium leading-relaxed">
                나머지는 강쥐엄마가 알아서 챙겨드려요
              </p>
            </div>
          </FadeInSection>

          {/* 3단 카드 — 1, 2, 끝. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 relative">
            {/* Step 1 */}
            <FadeInSection delay={0}>
              <div className="bg-brand-tint50 rounded-3xl p-8 md:p-10 h-full border border-brand-tint200 relative">
                <div className="absolute -top-4 left-8 bg-brand text-white text-sm font-black px-3 py-1 rounded-full shadow-brand-soft">
                  STEP 1
                </div>
                <div className="mb-5 mt-2">
                  <IconBox category="paw" icon={Pencil} size="lg" />
                </div>
                {/* ✏️ Step 1 제목 */}
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-3 leading-snug">
                  우리 아이 정보 입력
                </h3>
                {/* ✏️ Step 1 본문 */}
                <p className="text-base text-ink-3 leading-relaxed">
                  이름, 나이, 견종, 건강 정보를
                  <br />
                  간단히 알려주세요.
                </p>
              </div>
            </FadeInSection>

            {/* Step 2 */}
            <FadeInSection delay={150}>
              <div className="bg-brand-tint50 rounded-3xl p-8 md:p-10 h-full border border-brand-tint200 relative">
                <div className="absolute -top-4 left-8 bg-brand text-white text-sm font-black px-3 py-1 rounded-full shadow-brand-soft">
                  STEP 2
                </div>
                <div className="mb-5 mt-2">
                  <IconBox category="chat" icon={MessageCircle} size="lg" />
                </div>
                {/* ✏️ Step 2 제목 */}
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-3 leading-snug">
                  AI에게 물어보기
                </h3>
                {/* ✏️ Step 2 본문 */}
                <p className="text-base text-ink-3 leading-relaxed">
                  궁금한 거 무엇이든
                  <br />
                  편하게 물어보세요.
                </p>
              </div>
            </FadeInSection>

            {/* End — "끝." */}
            <FadeInSection delay={300}>
              <div className="bg-brand text-white rounded-3xl p-8 md:p-10 h-full relative shadow-brand">
                <div className="absolute -top-4 left-8 bg-white text-brand text-sm font-black px-3 py-1 rounded-full shadow-soft">
                  END
                </div>
                <div className="mb-5 mt-2 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20">
                  <Sparkles size={32} strokeWidth={2} color="#ffffff" />
                </div>
                {/* ✏️ End 제목 */}
                <h3 className="text-xl md:text-2xl font-black mb-3 leading-snug">
                  끝.
                </h3>
                {/* ✏️ End 본문 */}
                <p className="text-base text-white/90 leading-relaxed">
                  나머지는 강쥐엄마가 알아서
                  <br />
                  건강한 반려생활로 이끌어드려요.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 3. AI 데모 영상 (기존 유지)                            */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-surface-subtle py-20 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              {/* ✏️ 섹션 라벨 */}
              <p className="text-base md:text-lg text-brand font-bold mb-3">
                우리 아이를 가장 잘 아는 AI 비서
              </p>
              {/* ✏️ 섹션 헤드라인 */}
              <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
                궁금한 모든 것,
                <br />
                물어보세요
              </h2>
            </div>
          </FadeInSection>
          <FadeInSection delay={200}>
            <div className="flex justify-center">
              <PhoneMockup videoSrc="/videos/ganggpt-demo.mp4" />
            </div>
          </FadeInSection>
          <FadeInSection delay={400}>
            <div className="text-center mt-12 md:mt-16">
              {/* ✏️ 영상 아래 강조 카피 */}
              <p className="text-lg md:text-2xl text-ink-2 font-bold leading-relaxed">
                질문할수록
                <span className="text-brand"> 아이에 대해 학습하는 </span>
                나만의 AI
              </p>
              {/* ✏️ 영상 아래 보조 카피 */}
              <p className="text-base md:text-lg text-ink-3 mt-4 font-medium">
                사진 한 장으로도, 우리 아이에게 꼭 맞는 답을 받아보세요
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 4. AI 비서가 하는 일 (2개 큰 카드)                     */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-16 md:mb-20">
              {/* ✏️ 섹션 라벨 */}
              <p className="text-base md:text-lg text-brand font-bold mb-3">
                AI 비서가 하는 일
              </p>
              {/* ✏️ 섹션 헤드라인 */}
              <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
                쓸수록 똑똑해지고,
                <br />
                알아서 챙겨드려요
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* 카드 1 — 학습하는 AI (컨셉 1) */}
            <FadeInSection delay={0}>
              <div className="bg-brand-tint50 rounded-3xl p-8 md:p-12 h-full border border-brand-tint200">
                <div className="mb-6">
                  <Image
                    src="/icons/paw.png"
                    alt="학습하는 AI"
                    width={48}
                    height={48}
                    className="rounded-xl"
                  />
                </div>
                {/* ✏️ 카드 1 제목 */}
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                  쓸수록 우리 아이를
                  <br />
                  더 잘 아는 AI
                </h3>
                {/* ✏️ 카드 1 본문 */}
                <p className="text-base md:text-lg text-ink-2 leading-relaxed mb-5">
                  검색, 좋아요, 산책, 일상 기록…
                  <br />
                  강쥐엄마 안의 활동만으로 AI가 학습해요.
                </p>
                <p className="text-base text-ink-3 leading-relaxed">
                  우리 아이가 뭘 좋아하는지, 어디가 약한지,
                  <br />
                  무엇을 조심해야 하는지 — AI 비서가 기억해요.
                </p>
                {/* ✏️ 강조 인용 */}
                <div className="mt-6 pt-6 border-t border-brand-tint200">
                  <p className="text-base text-brand font-bold leading-relaxed">
                    매번 AI가 다른 답을 줘서 불편했던 경험,
                    <br />
                    이제 그만.
                  </p>
                </div>
              </div>
            </FadeInSection>

            {/* 카드 2 — 알아서 챙겨주는 AI (컨셉 2) */}
            <FadeInSection delay={150}>
              <div className="bg-brand-tint50 rounded-3xl p-8 md:p-12 h-full border border-brand-tint200">
                <div className="mb-6">
                  <IconBox category="schedule" icon={ClipboardList} size="lg" />
                </div>
                {/* ✏️ 카드 2 제목 */}
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                  알아서 챙겨주는
                  <br />
                  AI 비서
                </h3>
                {/* ✏️ 카드 2 본문 */}
                <p className="text-base md:text-lg text-ink-2 leading-relaxed mb-5">
                  접종 일정, 영양제, 사료, 여행지, 용품까지
                  <br />
                  우리 아이에게 꼭 필요한 것만
                  <br />
                  AI 비서가 먼저 알려드려요.
                </p>
                {/* ✏️ 예시 리스트 */}
                <div className="mt-6 pt-6 border-t border-brand-tint200 space-y-3">
                  <div className="flex items-center gap-3 text-base text-ink-2 font-medium">
                    <IconBox category="schedule" icon={Calendar} size="sm" />
                    <span>다음 접종일이 다가왔어요</span>
                  </div>
                  <div className="flex items-center gap-3 text-base text-ink-2 font-medium">
                    <IconBox category="like" icon={Pill} size="sm" />
                    <span>우리 아이에 맞는 영양제예요</span>
                  </div>
                  <div className="flex items-center gap-3 text-base text-ink-2 font-medium">
                    <IconBox category="market" icon={UtensilsCrossed} size="sm" />
                    <span>이 사료, 우리 아이에게 맞을까?</span>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 5. AI 비서가 안내하는 곳 (3개 카드)                    */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-brand-tint50 py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-16 md:mb-20">
              {/* ✏️ 섹션 라벨 */}
              <p className="text-base md:text-lg text-brand font-bold mb-3">
                AI 비서가 안내하는 곳
              </p>
              {/* ✏️ 섹션 헤드라인 */}
              <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
                매일을 더 풍성하게,
                <br />
                강쥐엄마가 연결해드려요
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {/* 카드 ① 우리동네 (컨셉 3) */}
            <FadeInSection delay={0}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card hover:shadow-elevated transition-shadow duration-300 h-full">
                <div className="mb-6">
                  <IconBox category="business" icon={Store} size="lg" />
                </div>
                {/* ✏️ 카드 ① 제목 */}
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                  강쥐엄마가 엄선한
                  <br />
                  우리동네
                </h3>
                {/* ✏️ 카드 ① 본문 */}
                <p className="text-base text-ink-3 leading-relaxed">
                  행사 정보, 동반 가능 식당,
                  <br />
                  우리동네 호텔·유치원·미용실까지.
                  <br />
                  광고 후기가 아닌, 진짜 정보만.
                </p>
              </div>
            </FadeInSection>

            {/* 카드 ② 강쥐엄마들 (컨셉 4) */}
            <FadeInSection delay={150}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card hover:shadow-elevated transition-shadow duration-300 h-full">
                <div className="mb-6">
                  <IconBox category="chat" icon={MessageCircle} size="lg" />
                </div>
                {/* ✏️ 카드 ② 제목 */}
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                  강쥐엄마들이
                  <br />
                  모이는 곳
                </h3>
                {/* ✏️ 카드 ② 본문 */}
                <p className="text-base text-ink-3 leading-relaxed mb-3">
                  AI가 답하기 어려운 질문은 강쥐엄마끼리.
                  <br />
                  &quot;우리동네 넥*가드 약국 어디?&quot;
                  <br />
                  &quot;다른 친구들 이번 주말에 뭐했지?&quot;
                </p>
                <p className="text-base text-brand font-bold leading-relaxed">
                  익숙한 피드와 프로필로 편하게.
                </p>
              </div>
            </FadeInSection>

            {/* 카드 ③ 유기견 친구들 (컨셉 5) */}
            <FadeInSection delay={300}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card hover:shadow-elevated transition-shadow duration-300 h-full">
                <div className="mb-6">
                  <IconBox category="dog" icon={Dog} size="lg" />
                </div>
                {/* ✏️ 카드 ③ 제목 */}
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                  유기견 친구들에게도
                  <br />
                  가족을
                </h3>
                {/* ✏️ 카드 ③ 본문 */}
                <p className="text-base text-ink-3 leading-relaxed">
                  매일 길을 잃어버린 아이들의 정보가
                  <br />
                  새롭게 올라와요.
                  <br />
                  좋은 곳에 입양될 수 있도록
                  <br />
                  잠깐만 관심을 주세요.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 6. Paw 포인트 (작은 띠)                                */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="bg-gradient-to-r from-brand-tint50 to-brand-tint100 rounded-3xl p-8 md:p-10 border border-brand-tint200 flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <IconBox category="paw" icon={PawPrint} size="lg" />
              <div className="flex-1 text-center md:text-left">
                {/* ✏️ Paw 띠 제목 */}
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-2 leading-snug">
                  활동할수록 <span className="text-brand">Paw(포)인트</span> 적립
                </h3>
                {/* ✏️ Paw 띠 본문 */}
                <p className="text-base text-ink-3 leading-relaxed">
                  동네 업체, 행사, 상품에서 할인으로 사용 가능
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 7. 최종 CTA                                            */}
      {/* ═════════════════════════════════════════════════════ */}
      <section id="download" className="bg-surface-subtle py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            {/* ✏️ Final CTA 헤드라인 */}
            <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tightest leading-tight">
              우리 아이의
              <br />
              <span className="text-brand">AI 비서, 강쥐엄마</span>
            </h2>
            {/* ✏️ Final CTA 부제 */}
            <p className="mt-8 text-lg md:text-2xl text-ink-2 font-medium">
              매일 더 가까이, 더 오래
              <br />
              강쥐엄마와 함께
            </p>
            <div className="mt-12 md:mt-14">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 md:px-12 py-5 md:py-6 bg-brand text-white font-extrabold text-lg md:text-2xl rounded-2xl shadow-brand hover:bg-brand-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>강쥐엄마 앱 다운로드</span>
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 8. 사장님 분기 (기존 유지)                              */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <Link
              href="/business"
              className="group block bg-brand-tint50 rounded-3xl p-8 md:p-12 shadow-soft border border-brand-tint200 hover:shadow-card hover:-translate-y-1 transition-all duration-200 text-center"
            >
              <p className="text-sm md:text-base text-ink-3 mb-3">
                강아지 가게를 운영하시나요?
              </p>
              <h3 className="text-2xl md:text-3xl font-black text-ink-1 mb-5 leading-snug">
                강쥐엄마와 함께
                <br />
                건강한 반려생활을 만들어요
              </h3>
              <span className="inline-flex items-center gap-1 text-base md:text-lg font-bold text-brand group-hover:gap-2 transition-all">
                사장님 입점 안내 보기
                <span>→</span>
              </span>
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
