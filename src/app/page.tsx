import type { Metadata } from "next";
import {
  Bot,
  Camera,
  Film,
  Cake,
  Footprints,
  HeartPulse,
  CalendarCheck,
  MapPin,
  Users,
  PawPrint,
  Dog,
  Cat,
  ArrowRight,
  Smartphone,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { ScrollProgressBar } from "@/components/ScrollIndicator";
import ScrollHint from "@/components/ScrollHint";
import HeroStats from "@/components/HeroStats";
import HeroCinema from "@/components/HeroCinema";
import HeroChat from "@/components/HeroChat";

// ─────────────────────────────────────────────────────────────
// 홈 전용 metadata — canonical 명시 (2026.07.08)
//
// 배경: 리브랜딩 후 동일 HTML이 www.animai.kr / www.gangjiumma.kr /
//       *.vercel.app 3곳에서 200으로 서빙되며 중복 콘텐츠로 인식됨
//       → 신규 도메인 색인이 억제됨(네이버 색인 2 vs 구도메인 15).
//       호스트는 308로 정리했고, 정본을 태그로도 못박음.
//
// ⚠️ 루트 layout.tsx 에 canonical 을 넣으면 하위 전 페이지가 "/" 로
//    박혀서 오히려 망가짐. 반드시 여기(홈 page)에만 스코프할 것.
//
// title/description/openGraph 등은 루트 layout 값이 그대로 병합됨.
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  alternates: { canonical: "https://www.animai.kr" },
};

const DOWNLOAD_URL = "https://gangjiumma.github.io/gangjiumma_app_download/";

// 앱 사용 흐름 4단계 (히어로 아래 간단 디렉팅)
const USE_STEPS = [
  { icon: <Smartphone size={20} strokeWidth={2.1} />, label: "앱 다운로드" },
  {
    icon: (
      <div className="flex items-center gap-0.5">
        <Dog size={17} strokeWidth={2.1} />
        <Cat size={17} strokeWidth={2.1} />
      </div>
    ),
    label: "우리 아이 등록",
  },
  { icon: <MessageCircle size={20} strokeWidth={2.1} />, label: "무료로 대화" },
  { icon: <Sparkles size={20} strokeWidth={2.1} />, label: "알아서 학습" },
];

// ✏️ 매일 아침 여기 숫자만 업데이트 (오늘자 누적 신규가입 반려인)
const TOTAL_SIGNUPS = 6024;

// ─────────────────────────────────────────────────────────────
// 메인 페이지 v2 — "반려동물 AI 비서" 컨셉
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
      {/* 1. HERO — 영상 채팅 (내 아이를 아는 AE에게 물어보세요)   */}
      {/* ═════════════════════════════════════════════════════ */}
      <HeroChat />

      {/* ═════════════════════════════════════════════════════ */}
      {/* 1-1. 리브랜딩 밴드 — SEO "강쥐엄마" 검색 자산 회수    */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-white py-6 md:py-8" aria-label="브랜드 안내">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 flex-wrap justify-center px-4 py-2 rounded-full bg-brand-tint50 border border-brand-tint200 text-sm md:text-base font-medium text-ink-2">
            <span aria-hidden>🐾</span>
            <span>
              <b className="text-brand font-black">AnimAI</b>
              <span className="text-ink-3 font-normal"> (애니마이)</span>
              <span className="mx-2 text-ink-3">·</span>
              <span>
                <b className="text-ink-1 font-bold">강쥐엄마</b>
                <span className="text-ink-3 font-normal">의 새 이름이에요</span>
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 1-2. HERO 합류 — 시네마 끝 → 다운로드 (카운터 유지)     */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="relative bg-white pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center">
          {/* 사용 흐름 4단계 — 순차 페이드인 */}
          <FadeInSection>
            <p className="text-sm md:text-base text-brand font-bold mb-5 md:mb-7">이렇게 시작해요</p>
          </FadeInSection>
          <div className="flex items-center justify-center gap-1 md:gap-2 flex-wrap max-w-lg mx-auto">
            {USE_STEPS.map((s, i) => (
              <div key={s.label} className="flex items-center gap-1 md:gap-2">
                <FadeInSection delay={i * 150}>
                  <div className="flex flex-col items-center gap-1.5 w-[68px] md:w-[84px]">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-brand-tint50 border border-brand-tint200 flex items-center justify-center text-brand">
                      {s.icon}
                    </div>
                    <span className="text-[11px] md:text-sm font-bold text-ink-2 text-center leading-tight">
                      {s.label}
                    </span>
                  </div>
                </FadeInSection>
                {i < USE_STEPS.length - 1 && (
                  <ArrowRight
                    className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand/40 shrink-0"
                    strokeWidth={2.6}
                  />
                )}
              </div>
            ))}
          </div>

          <FadeInSection delay={150}>
            {/* ✏️ 가입자 카운터 + D+N (HeroStats) */}
            <div className="mt-12 md:mt-16">
              <HeroStats total={TOTAL_SIGNUPS} />
            </div>
          </FadeInSection>

          <FadeInSection delay={300}>
            {/* 다음 섹션 유도 */}
            <div className="mt-10 md:mt-12">
              <ScrollHint />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 3. 차별점 — 우리 아이를 기억하는 AI                     */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-surface-subtle py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-sm md:text-base text-brand font-bold mb-3">무엇이든 물어보세요</p>
              <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
                우리 아이를 <span className="text-brand">기억하는</span> AI
              </h2>
              <p className="mt-5 md:mt-6 text-base md:text-lg text-ink-3 leading-relaxed">
                같은 질문에도, 우리 아이만을 위한 답이 달라요.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={150}>
            <div className="grid md:grid-cols-2 gap-5 md:gap-6 items-stretch">
              {/* 일반 AI */}
              <div className="rounded-3xl bg-white border border-line p-6 md:p-7 flex flex-col">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-ink-3" strokeWidth={2.1} />
                  </div>
                  <span className="font-bold text-ink-2">일반 AI</span>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-slate-100 px-4 py-2.5 text-sm text-ink-2">
                    펫페어 왔는데 어떤 사료 고르지?
                  </div>
                  <div className="mr-auto max-w-[94%] rounded-2xl rounded-tl-md bg-slate-50 border border-line px-4 py-3 text-sm text-ink-3 leading-relaxed">
                    연령·품종·알러지 유무에 따라 달라요. 일반적으로 주성분, 첨가물, AAFCO 기준을 확인하시고 수의사와 상담하세요.
                  </div>
                </div>
                <p className="mt-5 text-xs font-bold text-ink-3 text-center">누구에게나 똑같은 일반론</p>
              </div>

              {/* AnimAI */}
              <div className="rounded-3xl bg-white border-2 border-brand shadow-brand p-6 md:p-7 flex flex-col">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-brand-tint50 flex items-center justify-center">
                    <PawPrint className="w-5 h-5 text-brand" strokeWidth={2.1} />
                  </div>
                  <span className="font-bold text-ink-1">AnimAI</span>
                  <span className="ml-auto text-[11px] font-bold text-brand bg-brand-tint50 px-2 py-0.5 rounded-full">
                    마음이 전용 AI
                  </span>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-brand text-white px-4 py-2.5 text-sm">
                    펫페어 왔는데 어떤 사료 고르지?
                  </div>
                  <div className="mr-auto max-w-[94%] rounded-2xl rounded-tl-md bg-brand-tint50 border border-brand-tint200 px-4 py-3 text-sm text-ink-1 leading-relaxed">
                    <b>마음이</b>는 글루텐 알러지가 있으니 글루텐 적은 사료로 골라줘. 탄수화물 낮고 단백질 높은 걸로! 그리고 아직 1살이라 성장기니까 퍼피용·고열량 사료가 좋아. 업체에 &lsquo;글루텐 최소&rsquo;로 추천받아봐 🐾
                  </div>
                </div>
                <p className="mt-5 text-xs font-bold text-brand text-center">우리 아이를 기억한 맞춤 답</p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={300}>
            <p className="mt-10 md:mt-12 text-center text-base md:text-lg text-ink-2 font-medium leading-relaxed">
              대화할수록 더 잘 알아가요 —{" "}
              <span className="text-ink-1 font-bold">세상에서 우리 아이를 가장 잘 아는 AI.</span>
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 3-2. 전환 다리 — AI 위에, 일상을 더 든든하게            */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            <p className="text-sm md:text-base text-brand font-bold mb-3">AI로 시작되는 건강한 반려생활</p>
            <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
              묻고 답하는 것에서
              <br />
              그치지 않아요
            </h2>
            <p className="mt-5 md:mt-7 text-base md:text-xl text-ink-2 font-medium leading-relaxed">
              AI 대화 이외에도 —{" "}
              <span className="text-ink-1 font-bold">일기를 작성하고, 산책·놀이하고, 영양제 일정을 등록하고, 동네 사장님들과 이어지며</span>
              <br className="hidden md:block" />
              {" "}매일을 더 든든하게 채워가요.
            </p>
          </FadeInSection>

          <FadeInSection delay={150}>
            <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-2.5">
              {[
                { icon: <Camera size={15} strokeWidth={2.2} />, label: "기록" },
                { icon: <Footprints size={15} strokeWidth={2.2} />, label: "산책" },
                { icon: <span className="text-[15px] leading-none">🎣</span>, label: "놀이" },
                { icon: <HeartPulse size={15} strokeWidth={2.2} />, label: "건강" },
                { icon: <MapPin size={15} strokeWidth={2.2} />, label: "동네" },
                { icon: <PawPrint size={15} strokeWidth={2.2} />, label: "Paw 적립" },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-tint50 border border-brand-tint200 px-4 py-2 text-sm font-bold text-brand"
                >
                  {chip.icon}
                  {chip.label}
                </span>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 4. 기록 ⭐ — 우리 아이의 하루하루를 기록해요 (특별 블록)  */}
      {/* ═════════════════════════════════════════════════════ */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #3a2410 0%, #7a3b14 58%, #c14a12 100%)" }}
      >
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center text-white">
          <FadeInSection>
            <p className="text-sm md:text-base font-bold text-brand-light mb-3">오늘을 남겨요</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tightest leading-tight">
              우리 아이의 하루하루를
              <br />
              기록해요
            </h2>
            <p className="mt-6 md:mt-8 text-base md:text-xl text-white/85 leading-relaxed">
              매일 사진과 영상을 올리고, 어떤 순간이었는지 한마디만 들려주세요.
              <br className="hidden md:block" />
              {" "}AnimAI가 소중한 추억으로 차곡차곡 기록해드려요.
            </p>
          </FadeInSection>

          <FadeInSection delay={150}>
            <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 text-left">
              <div className="bg-white/10 border border-white/15 rounded-3xl p-6 backdrop-blur-sm">
                <Camera className="w-8 h-8 text-brand-light mb-3" strokeWidth={2} />
                <h3 className="text-lg font-black mb-1.5">매일의 사진·영상</h3>
                <p className="text-sm text-white/75 leading-relaxed">오늘의 순간을 올리면 일지로 쌓여요.</p>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-3xl p-6 backdrop-blur-sm">
                <Film className="w-8 h-8 text-brand-light mb-3" strokeWidth={2} />
                <h3 className="text-lg font-black mb-1.5">기념일 영상 선물</h3>
                <p className="text-sm text-white/75 leading-relaxed">100일·1년, 그동안의 추억을 영상으로.</p>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-3xl p-6 backdrop-blur-sm">
                <Cake className="w-8 h-8 text-brand-light mb-3" strokeWidth={2} />
                <h3 className="text-lg font-black mb-1.5">생일 축하 이벤트</h3>
                <p className="text-sm text-white/75 leading-relaxed">우리 아이의 특별한 날을 함께 챙겨요.</p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={300}>
            <p className="mt-10 md:mt-12 text-lg md:text-2xl font-bold">
              흘러가는 오늘을, <span className="text-brand-light">평생 간직할 수 있게.</span>
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 5. 매일 쓰는 기능 — 산책·놀이·건강·예약                */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-base md:text-lg text-brand font-bold mb-3">매일의 든든함</p>
              <h2 className="text-3xl md:text-4xl font-black text-ink-1 tracking-tighter leading-tight">
                산책·놀이도, 건강도, 예약까지
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            <FadeInSection delay={0}>
              <div className="bg-surface-subtle rounded-3xl p-8 h-full border border-line">
                <div className="w-12 h-12 rounded-2xl bg-brand-tint100 flex items-center justify-center mb-5">
                  <span className="inline-flex items-center gap-1">
                    <Footprints className="w-5 h-5 text-brand" strokeWidth={2.1} />
                    <span className="text-[15px] leading-none">🎣</span>
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-3 leading-snug">산책·놀이 기록</h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  강아지랑 산책하고, 고양이랑 놀아주고 — 함께한 시간을 차곡차곡 기록해요.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="bg-surface-subtle rounded-3xl p-8 h-full border border-line">
                <div className="w-12 h-12 rounded-2xl bg-brand-tint100 flex items-center justify-center mb-5">
                  <HeartPulse className="w-6 h-6 text-brand" strokeWidth={2.1} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-3 leading-snug">건강관리</h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  접종·체중·증상·복용약을 맡겨두면 AnimAI가 챙겨요. 다음 일정도 미리 알려드려요.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="bg-surface-subtle rounded-3xl p-8 h-full border border-line">
                <div className="w-12 h-12 rounded-2xl bg-brand-tint100 flex items-center justify-center mb-5">
                  <CalendarCheck className="w-6 h-6 text-brand" strokeWidth={2.1} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-3 leading-snug">예약·스케줄</h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  유치원·호텔·미용을 물어보고, 예약과 일정까지 앱에서 한 번에 관리해요.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 6. 동네·커뮤니티 — 혼자가 아니에요                       */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-brand-tint50 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-base md:text-lg text-brand font-bold mb-3">혼자가 아니에요</p>
              <h2 className="text-3xl md:text-4xl font-black text-ink-1 tracking-tighter leading-tight">
                우리 동네와, 반려인 이웃들과
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            <FadeInSection delay={0}>
              <div className="bg-white rounded-3xl p-8 h-full shadow-soft border border-brand-tint200">
                <div className="w-12 h-12 rounded-2xl bg-brand-tint100 flex items-center justify-center mb-5">
                  <MapPin className="w-6 h-6 text-brand" strokeWidth={2.1} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-3 leading-snug">우리동네 정보</h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  동반 가능 식당, 행사, 호텔·유치원·미용실까지. 광고 후기가 아닌 진짜 정보만.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="bg-white rounded-3xl p-8 h-full shadow-soft border border-brand-tint200">
                <div className="w-12 h-12 rounded-2xl bg-brand-tint100 flex items-center justify-center mb-5">
                  <Users className="w-6 h-6 text-brand" strokeWidth={2.1} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-3 leading-snug">Ani Talk</h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  종끼리, 동네끼리 모여요. 오늘 우리 아이가 한 일을 나누고, 궁금한 건 이웃들에게.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="bg-white rounded-3xl p-8 h-full shadow-soft border border-brand-tint200">
                <div className="w-12 h-12 rounded-2xl bg-brand-tint100 flex items-center justify-center mb-5">
                  <PawPrint className="w-6 h-6 text-brand" strokeWidth={2.1} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-3 leading-snug">가족을 찾는 아이들</h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  가족을 기다리는 아이들의 소식이 올라와요. 잠깐의 관심이 한 생명을 살려요.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 7. Paw — 함께한 시간이 쌓여요                            */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="bg-brand-tint50 rounded-3xl p-8 md:p-10 border border-brand-tint200 text-center">
              <div className="w-12 h-12 rounded-2xl bg-white border border-brand-tint200 flex items-center justify-center mx-auto mb-4">
                <PawPrint className="w-6 h-6 text-brand" strokeWidth={2.1} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-2 leading-snug">
                함께한 시간이 쌓여요
              </h3>
              <p className="text-base text-ink-3 leading-relaxed">
                출석·산책·놀이·기록·퀴즈로 모은 <span className="text-brand font-bold">Paw(포)인트</span>,
                동네 업체·행사·상품 할인으로 쓸 수 있어요.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 7-2. 감성 마무리 — 2016 시네마 (유한성·앞으로의 10년)   */}
      {/* ═════════════════════════════════════════════════════ */}
      <HeroCinema />

      {/* ═════════════════════════════════════════════════════ */}
      {/* 8. 최종 CTA                                            */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-brand-tint50 py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tightest leading-tight">
              우리 아이의 매일,
              <br />
              <span className="text-brand">더 가까이 더 오래</span>
            </h2>
            <p className="mt-6 md:mt-8 text-base md:text-xl text-ink-2 font-medium leading-relaxed">
              오늘도 가치있게, AnimAI와 함께.
            </p>
            <div className="mt-10 md:mt-12">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 md:px-12 py-5 md:py-6 bg-brand text-white font-extrabold text-lg md:text-2xl rounded-2xl shadow-brand hover:bg-brand-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>AnimAI 앱 다운로드</span>
                <ArrowRight className="w-6 h-6" strokeWidth={2.4} />
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
