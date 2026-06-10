import {
  MessageCircleHeart,
  Camera,
  Film,
  Cake,
  Footprints,
  HeartPulse,
  CalendarCheck,
  MapPin,
  Users,
  PawPrint,
  ArrowRight,
} from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { ScrollProgressBar } from "@/components/ScrollIndicator";
import ScrollHint from "@/components/ScrollHint";
import HeroStats from "@/components/HeroStats";
import HeroCinema from "@/components/HeroCinema";

const DOWNLOAD_URL = "https://gangjiumma.github.io/gangjiumma_app_download/";

// ✏️ 매일 아침 여기 숫자만 업데이트 (오늘자 누적 신규가입 반려인)
const TOTAL_SIGNUPS = 1047;

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
      {/* 1. HERO — 시간/관계 정체성 (새 컨셉)                              */}
      {/* CTA 버튼 아래에 ScrollHint ("이어서 보기" + 화살표)    */}
      {/* ═════════════════════════════════════════════════════ */}
      <HeroCinema />

      {/* ═════════════════════════════════════════════════════ */}
      {/* 1-2. HERO 합류 — 시네마 끝 → 다운로드 (카운터 유지)     */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="relative bg-white pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            {/* ✏️ 기능 요약 */}
            <p className="text-sm md:text-lg text-ink-3 font-medium leading-relaxed">
              매일 학습하고 · 하루를 기록하고 · 기념일을 챙기고 · 건강을 살피는
              <br className="hidden md:block" />
              {" "}우리 아이만을 위한 반려견 AI, <span className="text-brand font-bold">강쥐엄마와 함께 채워나가요.</span>
            </p>
          </FadeInSection>

          <FadeInSection delay={150}>
            {/* ✏️ 가입자 카운터 + D+N (HeroStats) */}
            <div className="mt-8 md:mt-10">
              <HeroStats total={TOTAL_SIGNUPS} />
            </div>
          </FadeInSection>

          <FadeInSection delay={300}>
            <div className="mt-10 md:mt-12">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-brand text-white font-extrabold text-base md:text-xl rounded-2xl shadow-brand hover:bg-brand-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>강쥐엄마 앱 다운로드</span>
              </a>
            </div>
            {/* 다음 섹션 유도 */}
            <div className="mt-14 md:mt-16">
              <ScrollHint />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 2. 둘러보기 인트로 — 강쥐엄마는 이렇게 함께해요         */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-white pt-10 md:pt-16 pb-14 md:pb-20">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            <p className="text-base md:text-lg text-brand font-bold mb-3">강쥐엄마는</p>
            <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
              이렇게 함께해요
            </h2>
            <p className="mt-6 md:mt-8 text-base md:text-xl text-ink-2 font-medium leading-relaxed">
              AI에게 상담하고, 일상을 공유하고, 건강을 맡기고,
              <br className="hidden md:block" />
              {" "}유치원·호텔도 물어보고, 스케줄·예약까지 —
              <br />
              <span className="text-brand font-bold">우리 아이의 하루를 같이 채워요.</span>
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 3. 상담 — 우리 아이 전담 상담사                         */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-surface-subtle py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="rounded-4xl bg-gradient-to-br from-brand-tint100 to-brand-tint50 border border-brand-tint200 aspect-[4/3] flex items-center justify-center">
                <MessageCircleHeart className="w-20 h-20 md:w-28 md:h-28 text-brand" strokeWidth={1.6} />
              </div>
              <div>
                <p className="text-sm md:text-base text-brand font-bold mb-3">무엇이든 물어보세요</p>
                <h3 className="text-2xl md:text-4xl font-black text-ink-1 tracking-tight leading-snug mb-4">
                  우리 아이 전담 상담사
                </h3>
                <p className="text-base md:text-lg text-ink-3 leading-relaxed">
                  건강·행동·식습관, 무엇이든 편하게 물어보세요. 사진 한 장이면 더 정확하게 답해드려요.
                  일반 AI와 달리 <span className="text-ink-1 font-bold">우리 아이를 기억하고</span>, 대화할수록 더 잘 알아가요.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════ */}
      {/* 3-2. AI 시연 영상 — 궁금한 모든 것, 물어보세요           */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-base md:text-lg text-brand font-bold mb-3">이렇게 물어봐요</p>
              <h2 className="text-3xl md:text-4xl font-black text-ink-1 tracking-tighter leading-tight">
                궁금한 모든 것, 물어보세요
              </h2>
              <p className="mt-5 md:mt-6 text-base md:text-lg text-ink-3 leading-relaxed">
                사진 한 장으로도, 우리 아이에게 꼭 맞는 답을 받아보세요.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={150}>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[300px] rounded-[2.5rem] overflow-hidden border-[7px] border-ink-1 shadow-elevated bg-black">
                <video
                  src="/videos/ganggpt-demo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="block w-full h-auto"
                />
              </div>
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
              {" "}강쥐엄마가 소중한 추억으로 차곡차곡 기록해드려요.
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
      {/* 5. 매일 쓰는 기능 — 산책·건강·예약                       */}
      {/* ═════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-base md:text-lg text-brand font-bold mb-3">매일의 든든함</p>
              <h2 className="text-3xl md:text-4xl font-black text-ink-1 tracking-tighter leading-tight">
                산책도, 건강도, 예약까지
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            <FadeInSection delay={0}>
              <div className="bg-surface-subtle rounded-3xl p-8 h-full border border-line">
                <div className="w-12 h-12 rounded-2xl bg-brand-tint100 flex items-center justify-center mb-5">
                  <Footprints className="w-6 h-6 text-brand" strokeWidth={2.1} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-3 leading-snug">산책 기록</h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  오늘 걸은 코스와 시간을 기록하고, 차곡차곡 쌓이는 운동량을 한눈에 봐요.
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
                  접종·체중·증상·복용약을 맡겨두면 강쥐엄마가 챙겨요. 다음 일정도 미리 알려드려요.
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
                우리 동네와, 강쥐엄마들과
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
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-3 leading-snug">강쥐Talk</h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  견종끼리, 동네끼리 모여요. 오늘 우리 아이가 한 일을 나누고, 궁금한 건 강쥐엄마들에게.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="bg-white rounded-3xl p-8 h-full shadow-soft border border-brand-tint200">
                <div className="w-12 h-12 rounded-2xl bg-brand-tint100 flex items-center justify-center mb-5">
                  <PawPrint className="w-6 h-6 text-brand" strokeWidth={2.1} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-3 leading-snug">유기견 친구들</h3>
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
                출석·산책·기록·퀴즈로 모은 <span className="text-brand font-bold">Paw(포)인트</span>,
                동네 업체·행사·상품 할인으로 쓸 수 있어요.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

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
              오늘도 가치있게, 강쥐엄마와 함께.
            </p>
            <div className="mt-10 md:mt-12">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 md:px-12 py-5 md:py-6 bg-brand text-white font-extrabold text-lg md:text-2xl rounded-2xl shadow-brand hover:bg-brand-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>강쥐엄마 앱 다운로드</span>
                <ArrowRight className="w-6 h-6" strokeWidth={2.4} />
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
