import Link from "next/link";
import Image from "next/image";
import PhoneMockup from "@/components/PhoneMockup";
import FadeInSection from "@/components/FadeInSection";

const DOWNLOAD_URL = "https://gangjiumma.github.io/gangjiumma_app_download/";

export default function Home() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative bg-brand-tint50 pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-tint100/40 via-brand-tint50 to-white pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-ink-1 tracking-tightest leading-[1.15]">
              우리 아이와의 시간은
              <br />
              생각보다 짧으니까
            </h1>
          </FadeInSection>
          <FadeInSection delay={200}>
            <div className="mt-8 md:mt-10 text-5xl md:text-7xl font-black text-brand tracking-tightest">
              강쥐엄마
            </div>
          </FadeInSection>
          <FadeInSection delay={400}>
            <p className="mt-6 md:mt-8 text-lg md:text-2xl text-ink-2 font-medium">
              매일 더 가까이, 더 오래
            </p>
            <div className="mt-12 md:mt-14">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-brand text-white font-extrabold text-base md:text-xl rounded-2xl shadow-brand hover:bg-brand-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>📱</span>
                <span>강쥐엄마 만나러 가기</span>
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 2. AI 데모 영상 */}
      <section className="bg-white py-20 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-base md:text-lg text-brand font-bold mb-3">
                우리 아이를 가장 잘 아는 AI
              </p>
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
              <p className="text-lg md:text-2xl text-ink-2 font-bold leading-relaxed">
                질문할수록
                <span className="text-brand"> 아이에 대해 학습하는 </span>
                나만의 AI
              </p>
              <p className="text-base md:text-lg text-ink-3 mt-4 font-medium">
                사진 한 장으로도, 우리 아이에게 꼭 맞는 답을 받아보세요
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 3. 페인 포인트 */}
      <section className="bg-surface-subtle py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
                아이를 키우다보면,
                <br />
                궁금한 것도, 챙겨야 하는 것도 많습니다.
              </h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            <FadeInSection delay={0}>
              <div className="bg-white rounded-2xl p-8 md:p-9 h-full">
                <div className="text-4xl mb-5">🤔</div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                  아이가 갑자기 아프거나
                </h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  궁금한게 생기면 우리는 카페, 단톡방, 모임, 인별그램에 질문하거나 병원을 찾습니다.
                  <br />
                  AI에게 물어봐도 우리아이에 대해 잘 알지 못합니다.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="bg-white rounded-2xl p-8 md:p-9 h-full">
                <div className="text-4xl mb-5">📣</div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                  업체 후기는 광고
                  <br />
                  투성이고 못 미덥
                </h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  스러울 때가 많습니다. 인별그램, 카페, 인터넷 후기의 대부분은 광고 및 체험단의 글로 가득합니다.
                  <br />
                  진짜 후기는 찾기 어렵습니다.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="bg-white rounded-2xl p-8 md:p-9 h-full">
                <div className="text-4xl mb-5">⏰</div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                  바쁜 일상속
                  <br />
                  영양제, 약, 산책
                </h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  은 매번 챙기기 어렵습니다. 날짜가 지난 후 넥*가드를 먹일때가 다반수고
                  <br />
                  오늘의 산책을 내일로 미루게 됩니다
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div className="bg-white rounded-2xl p-8 md:p-9 h-full">
                <div className="text-4xl mb-5">💬</div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                  우리 아이의 일상을 나누는 것 조차
                </h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  쉽지 않습니다. 카페 등업, 단톡방 참여, 모임 참여, 인별그램 부계정 생성..
                  <br />
                  매일의 아이 일상을 나누기 위해 할것이 많습니다.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 4. 강쥐엄마는 */}
      <section className="bg-brand-tint50 py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <FadeInSection>
            <div className="text-center mb-16 md:mb-20">
              <p className="text-base md:text-lg text-brand font-bold mb-3">
                그래서 강쥐엄마는 엄마,아빠들의
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tighter leading-tight">
                매일을 지켜드려요
              </h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <FadeInSection delay={0}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card hover:shadow-elevated transition-shadow duration-300 h-full">
                <div className="mb-6">
                  <Image
                    src="/icons/paw.png"
                    alt="GangGPT"
                    width={44}
                    height={44}
                    className="rounded-xl"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                  24시간,
                  <br />
                  우리 아이를 잘 아는 AI 친구
                </h3>
                <div className="space-y-2 mb-5">
                  <p className="text-base text-ink-2 font-medium">&quot;갑자기 안 먹어요&quot;</p>
                  <p className="text-base text-ink-2 font-medium">&quot;이 음식 먹어도 되나요?&quot;</p>
                  <p className="text-base text-ink-2 font-medium">&quot;나만 보면 왜 짖어?&quot;</p>
                </div>
                <p className="text-base text-ink-3 leading-relaxed">
                  우리 강아지를 알고 있는 AI가 일상부터 갑작스런 걱정까지 빠르게 답해요.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={150}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card hover:shadow-elevated transition-shadow duration-300 h-full">
                <div className="text-5xl mb-6">🏪</div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                  대행사 광고 없는
                  <br />
                  우리동네 업체
                </h3>
                <p className="text-base text-ink-3 leading-relaxed">
                  불필요한 광고-체험후기는 걷어내고, 아이와 매일을 함께 할 수 있는 업체, 상품을 사장님들이 직접 소개드려요
                  <br />
                  <br />
                  강아지가 좋아서, 함께하고 싶어서 개업을 하신 아이에 진심인 업체만 모집합니다.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card hover:shadow-elevated transition-shadow duration-300 h-full">
                <div className="text-5xl mb-6">📅</div>
                <h3 className="text-xl md:text-2xl font-black text-ink-1 mb-4 leading-snug">
                  일정관리, 행사 정보
                  <br />
                  매일을 위해 챙겨야 할 것들
                </h3>
                <p className="text-base text-ink-3 leading-relaxed mb-3">
                  산책, 예방접종, 급여 알림까지 알아서 알려드려요. 펫페어, 지역행사, 강아지 강연.. 아이와 함께할 수 있는 일정 까지.
                </p>
                <p className="text-base text-ink-3 leading-relaxed">
                  앱에서 아이와 함께할 수록{" "}
                  <span className="text-brand font-bold">Paw(포)인트</span>가 쌓여 동네 업체, 행사, 상품구매에 사용할 수 있어요.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 5. 최종 CTA */}
      <section id="download" className="bg-white py-28 md:py-36">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-5xl font-black text-ink-1 tracking-tightest leading-tight">
              우리 아이와,
              <br />
              <span className="text-brand">20살까지 건강하게</span>
            </h2>
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
                <span>📱</span>
                <span>강쥐엄마 만나러 가기</span>
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 6. 분기 영역 — Story 카드 제거, 사장님 카드만 (가운데 배치) */}
      <section className="bg-surface-subtle py-20 md:py-24">
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
                자라고 싶어요
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
