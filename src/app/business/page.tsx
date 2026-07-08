"use client";

import { useEffect, useRef, useState } from "react";
import {
  CalendarCheck,
  CreditCard,
  NotebookPen,
  Camera,
  Sparkles,
  ArrowRight,
  Gift,
  Ticket,
  Bell,
  BookHeart,
  Bot,
  QrCode,
  Check,
  ChevronDown,
  Play,
  Newspaper,
  BarChart3,
  Heart,
  PawPrint,
} from "lucide-react";
import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";
import BizSignupModal from "@/components/BizSignupModal";
import { ScrollProgressBar } from "@/components/ScrollIndicator";

// ✏️ 사진 슬롯 — public/business/ 에 파일만 넣으면 자동 교체. 여러 장이면 자동 슬라이드.
// 2026.07 대시보드 UI 리브랜딩(AnimAI Biz) 반영본. 파일명 규칙: 슬롯-번호.jpg (전부 jpg 통일)
const PHOTO = {
  // 대시보드 전반 (히어로 + 결제 해결 섹션에서 순환) — 관리 전반 스토리
  dash: [
    "/business/dash-1.jpg", // 대시보드 홈 (접수중·변경·오늘확정 + 결제·빠른예약)
    "/business/dash-2.jpg", // 빠른 예약 팝업 (30초 등록)
    "/business/dash-3.jpg", // 결제 받기 팝업 (포스·수기)
    "/business/dash-4.jpg", // 예약 설정 (예약받기 켬 + 기본설정)
    "/business/dash-5.jpg", // 이용권·선불 (미용선불권 등)
    "/business/dash-6.jpg", // 일반상품 카드 (전체미용·위생미용 등)
  ],
  // 통계·AI 마케팅 (마케팅 해결 섹션에서 순환) — 인사이트 스토리
  stat: [
    "/business/stat-1.jpg", // 운영 통계 상단 (매출·도넛·일별 매출)
    "/business/stat-2.jpg", // 운영 통계 하단 (요일별·시간대별·고객·단골)
    "/business/stat-3.jpg", // AI 마케팅 트렌드 탭 (우리 앱 노출·강고리즘 등장)
    "/business/stat-4.jpg", // AI 마케팅 광고 탭 (반려동물 특화 콘텐츠 제작)
  ],
  // AI 알림장 (알림장 해결 섹션에서 순환) — 사장님 관점 작성·전송
  notice: [
    "/business/notice-1.jpg", // 오늘 명단 (컨디션·식사·낮잠·놀이·배변·투약 태그)
    "/business/notice-2.jpg", // 알림장 완성 확인 (전원에게 전송)
    "/business/notice-3.jpg", // 미용 알림장 상단 (Before/After + 시술 태그)
    "/business/notice-4.jpg", // 미용 알림장 하단 (특이사항·다음 방문 추천)
  ],
  // 앱 유저 관점 (앱 고객 혜택 섹션에서 순환) — 손님이 받는 알림장
  app: [
    "/business/app-1.jpg", // 유치원 알림장 수신 (4장 사진 + 컨디션·식사)
    "/business/app-2.jpg", // 미용실 알림장 수신 (Before/After 시술 완료)
    "/business/app-3.jpg", // 알림장 사진 확대 뷰
  ],
};

export default function BusinessPage() {
  const [showIntro, setShowIntro] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  useEffect(() => {
    setShowIntro(true);
  }, []);
  useEffect(() => {
    document.body.style.overflow = showIntro ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showIntro]);
  const dismissIntro = () => setShowIntro(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: BZ_CSS }} />
      <ScrollProgressBar />
      <BizSignupModal open={signupOpen} onClose={() => setSignupOpen(false)} />

      {showIntro && <IntroChecklist onDone={dismissIntro} />}

      {/* ───────── 1 · HERO ───────── */}
      <Hero onStart={() => setSignupOpen(true)} />

      {/* ───────── 2 · 결제 ───────── */}
      <ProblemSolution
        num="02"
        problem={{
          eyebrow: "이런 고민 있으셨죠",
          title: (
            <>
              예약과 결제, 고객 관리가
              <br />
              서로 따로 움직입니다.
            </>
          ),
          visual: <PayProblem />,
        }}
        solution={{
          eyebrow: "AnimAI Biz는",
          title: (
            <>
              결제부터 정산까지
              <br />
              <span className="bz-accent">한 화면에서</span> 끝납니다.
            </>
          ),
          body: (
            <>
              <b>토스 단말기와 연동</b>되어, 결제하면 매출과 이용권 차감까지 대시보드에 자동으로
              기록됩니다.
            </>
          ),
          visual: <PaySolution />,
        }}
      />

      {/* ───────── 3 · 알림장 ───────── */}
      <ProblemSolution
        num="03"
        surface
        problem={{
          eyebrow: "이런 고민 있으셨죠",
          title: (
            <>
              사진 찍고, 알림장 쓰고,
              <br />
              카톡으로 <span className="bz-probac">매번 직접</span> 보내고…
            </>
          ),
          visual: <TalkProblem />,
        }}
        solution={{
          eyebrow: "AnimAI Biz는",
          title: (
            <>
              사진만 올리면,
              <br />
              <span className="bz-accent">알림장이 완성</span>됩니다.
            </>
          ),
          body: (
            <>
              AI가 알림장을 작성하고, 전송 한 번으로 <b>고객별 알림장 페이지</b>가 자동으로
              생성·전달됩니다.
            </>
          ),
          visual: <TalkSolution />,
        }}
      />

      {/* ───────── 4 · 마케팅 ───────── */}
      <ProblemSolution
        num="04"
        problem={{
          eyebrow: "이런 고민 있으셨죠",
          title: (
            <>
              인스타·유튜브·밴드·뉴스…
              <br />
              <span className="bz-probac">뭘 어떻게</span> 올려야 할지.
            </>
          ),
          visual: <MktProblem />,
        }}
        solution={{
          eyebrow: "AnimAI Biz는",
          title: (
            <>
              우리 동네 데이터로,
              <br />
              <span className="bz-accent">AI가 대신</span> 만듭니다.
            </>
          ),
          body: (
            <>
              동네 고객의 수요 통계를 바탕으로 <b>광고·인스타 게시글</b>은 물론, 이벤트와 한 달 운영
              계획까지 제안합니다.
            </>
          ),
          visual: <MktSolution />,
        }}
      />

      {/* ───────── 5 · 앱 고객 혜택 ───────── */}
      <section className="bz-sec bz-surface" id="bz-s5">
        <span className="bz-num">05 / 06</span>
        <div className="bz-wrap bz-grid2">
          <FadeInSection>
            <div className="bz-appphone">
              <div className="bz-appnotch" />
              <div className="bz-appscreen">
                <ImgFade
                  images={PHOTO.app}
                  className="bz-phfade"
                  imgClassName="bz-fadeimg"
                  alt="AnimAI 앱 화면 — 예약·고객·매출 관리"
                />
              </div>
            </div>
          </FadeInSection>
          <div>
            <FadeInSection>
              <span className="bz-eyebrow">AnimAI 앱 고객이라면</span>
            </FadeInSection>
            <FadeInSection delay={100}>
              <h2 className="bz-h2">
                고객이 앱을 쓰면,
                <br />
                운영이 한층 <span className="bz-accent">수월해집니다.</span>
              </h2>
            </FadeInSection>
            <div className="bz-benefits">
              {[
                {
                  Icon: QrCode,
                  h: "QR 포인트 적립",
                  p: "방문 시 QR 한 번으로 Paw 포인트가 쌓여 재방문을 부릅니다.",
                },
                {
                  Icon: Ticket,
                  h: "이용권·구매 이력",
                  p: "잔여 횟수와 내역이 고객 앱에 그대로 표시됩니다.",
                },
                {
                  Icon: Bell,
                  h: "다음 일정 자동 알림",
                  p: "미용 주기·다음 예약을 앱이 먼저 안내합니다.",
                },
                {
                  Icon: BookHeart,
                  h: "알림장 기록 보관",
                  p: "보낸 알림장이 고객의 일기장에 추억으로 쌓입니다.",
                },
                {
                  Icon: Bot,
                  h: "문의 AI 1차 응대",
                  p: "고객 문의에 AI가 먼저 응대해 놓치지 않습니다.",
                },
              ].map((d, i) => (
                <FadeInSection key={i} delay={120 + i * 70}>
                  <div className="bz-bcard">
                    <div className="bz-bic">
                      <d.Icon size={18} color="#3b82f6" />
                    </div>
                    <div>
                      <div className="bz-bh">{d.h}</div>
                      <div className="bz-bp">{d.p}</div>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 6 · 요금제 + 무료 + CTA ───────── */}
      <section className="bz-sec bz-plans" id="bz-s6">
        <span className="bz-num">06 / 06</span>
        <div className="bz-wrap">
          <div className="bz-center">
            <FadeInSection>
              <span className="bz-eyebrow bz-warm">요금제</span>
            </FadeInSection>
            <FadeInSection delay={100}>
              <h2 className="bz-h2">
                지금 시작하면, <span className="bz-free">전부 무료입니다.</span>
              </h2>
            </FadeInSection>
          </div>
          <FadeInSection delay={150}>
            <div className="bz-freebar">
              <Gift size={22} color="#ff6b35" style={{ flex: "none" }} />
              <span>
                <b>7월 한달간 가입 사장님 한정</b> — 라이트플랜{" "}
                <b>평생 무료</b>(원가 월 <s>9,900원</s>) + <b>14일간 베이직 플랜 무료 체험</b>. 무료체험
                이후 원하실 경우 카드결제 후 원하는 플랜을 이용하실 수 있어요.
              </span>
            </div>
            <div className="bz-ptable">
              <div className="bz-pcard">
                <span className="bz-badge bz-bwarm">출시 기념</span>
                <div className="bz-pn">라이트</div>
                <div className="bz-pp">
                  <span className="bz-was">9,900원</span>
                  <span className="bz-free">무료</span>
                </div>
                <div className="bz-pu">평생 무료 🎉</div>
                <div className="bz-pd">
                  예약·고객 관리
                  <br />
                  토스 단말기 결제·매출
                  <br />
                  예약 확정·취소 알림톡
                  <br />
                  시·구 단위 입점 노출
                </div>
              </div>
              <div className="bz-pcard">
                <div className="bz-pn">미니</div>
                <div className="bz-pp">
                  <span className="bz-price">29,900원</span>
                </div>
                <div className="bz-pu">하루 1,000원 꼴</div>
                <div className="bz-pd">
                  라이트 +<br />
                  AI 알림장
                  <br />
                  AI 문의 자동응답
                  <br />
                  할인쿠폰 발행
                </div>
              </div>
              <div className="bz-pcard bz-hot">
                <span className="bz-badge">추천</span>
                <div className="bz-pn">베이직</div>
                <div className="bz-pp">
                  <span className="bz-price">59,900원</span>
                </div>
                <div className="bz-pu">하루 2,000원 꼴</div>
                <div className="bz-pd">
                  라이트·미니 +<br />
                  AI 광고 콘텐츠 (무제한)
                  <br />
                  반려동물 트렌드 리포트
                  <br />
                  AnimAI 앱 광고 (시도·주3)
                </div>
              </div>
              <div className="bz-pcard bz-soon">
                <span className="bz-badge bz-bsoon">출시 예정</span>
                <div className="bz-pn">프로</div>
                <div className="bz-pp">
                  <span className="bz-price">79,900원</span>
                </div>
                <div className="bz-pu">하루 2,700원 꼴</div>
                <div className="bz-pd">
                  라이트·미니·베이직 +<br />
                  전담 AI 에이전트
                  <br />
                  매일 영업·매출 보고
                  <br />
                  AnimAI 앱 광고 (전국·주5)
                </div>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={250}>
            <div className="bz-center" style={{ marginTop: 36 }}>
              <div className="bz-ctarow">
                <button
                  type="button"
                  className="bz-btn bz-btnlg"
                  onClick={() => setSignupOpen(true)}
                >
                  무료로 입점 신청하기 <ArrowRight size={18} />
                </button>
                <Link className="bz-btndemo bz-btndemolg" href="/demo">
                  <Play size={18} /> 데모 체험하기
                </Link>
                <Link className="bz-btn2" href="/plans">
                  요금제 자세히 보기 <ArrowRight size={16} />
                </Link>
              </div>
              <p className="bz-finalnote">앱 계정으로 신청하시면, 1~2일 검수 후 문자로 안내드립니다.</p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}

/* ════════════ 메인(히어로) — 문제 → 해결 자동 전환 ════════════ */
function Hero({ onStart }: { onStart: () => void }) {
  const [phase, setPhase] = useState<"problem" | "solution">("problem");
  const ref = useRef<HTMLElement>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setPhase("problem");
          window.clearTimeout(timer.current);
          timer.current = window.setTimeout(() => setPhase("solution"), 3500);
        } else {
          window.clearTimeout(timer.current);
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer.current);
    };
  }, []);

  return (
    <section className="bz-sec bz-hero" ref={ref}>
      <span className="bz-num">01 / 06</span>
      <div className="bz-wrap bz-grid2">
        <div className="bz-pstext">
          <div className="bz-bizbrand">
            <div className="bz-eyebrow">사장님을 위한 운영 솔루션</div>
            <div className="bz-bizrow">
              <span className="bz-bizlogo">🐾</span>
              <span className="bz-bizname">AnimAI Biz</span>
              <span className="bz-bizfree">무료</span>
            </div>
            <div className="bz-bizdesc">펫 유치원·미용실을 위한 올인원 관리 프로그램</div>
          </div>
          <div className="bz-phasewrap bz-herowrap">
            <div className={`bz-phase${phase === "problem" ? " on" : ""}`}>
              <h1 className="bz-h1">
                예약·결제·매출 관리,
                <br />
                <span className="bz-accent">몇 개의 프로그램</span>을 쓰세요?
              </h1>
            </div>
            <div className={`bz-phase${phase === "solution" ? " on" : ""}`}>
              {/* SEO: 한 페이지 h1은 1개 — 아래 문구는 h2로 (bz-h1 스타일 유지) */}
              <h2 className="bz-h1">
                이 모두를 <span className="bz-free">한 곳에</span> 모았습니다.
                <br />
                무료로 시작하세요.
              </h2>
            </div>
          </div>
          <div className="bz-herocta">
            <button type="button" className="bz-btn" onClick={onStart}>
              무료로 입점 신청하기 <ArrowRight size={18} />
            </button>
            <Link className="bz-btndemo" href="/demo">
              <Play size={18} /> 데모 체험하기
            </Link>
          </div>
          <div className="bz-feats">
            <span className="bz-featlabel">하나로 관리</span>
            <span className="bz-feat">예약</span>
            <span className="bz-feat">결제</span>
            <span className="bz-feat">고객 관리</span>
            <span className="bz-feat">매출</span>
            <span className="bz-feat">AI 마케팅</span>
          </div>
          <div className="bz-trust2">
            전국 <b>17,000곳</b> 펫 시설 등록 중
          </div>
        </div>

        <div className="bz-psvisual bz-herovis">
          <div className={`bz-vis${phase === "problem" ? " on" : ""}`}>
            <HeroProblem />
          </div>
          <div className={`bz-vis${phase === "solution" ? " on" : ""}`}>
            <HeroSolution />
          </div>
        </div>
      </div>

      <div className="bz-scrollcue">
        아래로 내려서 살펴보세요
        <ChevronDown size={20} />
      </div>
    </section>
  );
}

/* ════════════ 인트로 체크리스트 — 펫페어 사이니지 톤 (v2) ════════════ */
function IntroChecklist({ onDone }: { onDone: () => void }) {
  const items = [
    <><span className="bz-intro-hl">DM·전화·문자로</span> 상담받고 예약 프로그램에 <span className="bz-intro-hl">수기 기입</span></>,
    <><span className="bz-intro-hl">토스나 다른 단말기</span> 결제 후 예약 프로그램에 <span className="bz-intro-hl">다시 기입</span></>,
    <>미용·유치원·호텔 알림장, <span className="bz-intro-hl">카톡·DM으로</span> 사진 <span className="bz-intro-hl">하나씩 전달</span></>,
    <><span className="bz-intro-hl">매번</span> <span className="bz-intro-hl">ChatGPT·Gemini</span> 열어 광고글 만들어 인스타·블로그 업로드</>,
    <><span className="bz-intro-hl">우리 동네 견주·집사가</span> 뭘 원하는지 모른 채 <span className="bz-intro-hl">감으로</span> 이벤트 제작</>,
  ];

  const [checkedCount, setCheckedCount] = useState(0);
  const [concludeVisible, setConcludeVisible] = useState(false);
  const [brandVisible, setBrandVisible] = useState(false);
  const [confettiVisible, setConfettiVisible] = useState(false);
  const [tailVisible, setTailVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  // 애니 시퀀스 (총 ~10초, 펫페어 톤 - 리듬감 있게)
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    // 각 체크 순차 등장 (1.4s부터 800ms 간격 · 좌우 교대 flyR/flyL)
    items.forEach((_, i) => {
      timers.push(setTimeout(() => setCheckedCount(i + 1), 1400 + i * 800));
    });
    // 결론 카피 (5.5s)
    timers.push(setTimeout(() => setConcludeVisible(true), 5500));
    // 브랜드 pill + 컨페티 (6.0s)
    timers.push(setTimeout(() => {
      setBrandVisible(true);
      setConfettiVisible(true);
    }, 6000));
    // 꼬리 카피 (7.0s)
    timers.push(setTimeout(() => setTailVisible(true), 7000));
    // 페이드아웃 (9.4s)
    timers.push(setTimeout(() => setFadingOut(true), 9400));
    // 종료 (10.0s)
    timers.push(setTimeout(onDone, 10000));
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const skip = () => {
    setFadingOut(true);
    setTimeout(onDone, 250);
  };

  return (
    <div className={`bz-intro ${fadingOut ? "bz-intro-out" : ""}`} role="dialog" aria-label="AnimAI Biz 인트로">
      {/* 배경 레이어: blob 3개 + 점 그리드 */}
      <div className="bz-intro-bg" aria-hidden>
        <div className="bz-intro-blob bz-intro-blob-1" />
        <div className="bz-intro-blob bz-intro-blob-2" />
        <div className="bz-intro-blob bz-intro-blob-3" />
        <div className="bz-intro-dots" />
      </div>

      {/* 부유 오브젝트 (하트/발/별/스파클) */}
      <div className="bz-intro-obj bz-intro-obj-1" aria-hidden>
        <Heart size={44} fill="#ff9ec4" stroke="#ff9ec4" strokeWidth={2} />
      </div>
      <div className="bz-intro-obj bz-intro-obj-2" aria-hidden>
        <Sparkles size={38} fill="#ffd84d" stroke="#ffd84d" strokeWidth={2} />
      </div>
      <div className="bz-intro-obj bz-intro-obj-3" aria-hidden>
        <PawPrint size={42} fill="#ff6b35" stroke="#ff6b35" strokeWidth={2} />
      </div>
      <div className="bz-intro-obj bz-intro-obj-4" aria-hidden>
        <Sparkles size={32} fill="#ffd9c9" stroke="#ffd9c9" strokeWidth={2} />
      </div>

      <button type="button" onClick={skip} className="bz-intro-skip" aria-label="건너뛰기">
        건너뛰기
      </button>

      <div className="bz-intro-inner">
        {/* 상단 kicker */}
        <div className="bz-intro-kicker">사장님, 잠깐만요…</div>

        {/* 메인 타이틀 (punch 애니, 한 줄) */}
        <h2 className="bz-intro-title">
          운영하시면서 <span className="bz-intro-title-o">혹시…</span>
        </h2>

        {/* 체크리스트 (좌우 교대 flyL/flyR) */}
        <ul className="bz-intro-list">
          {items.map((text, idx) => {
            const isShown = idx < checkedCount;
            const dir = idx % 2 === 0 ? "bz-intro-item-r" : "bz-intro-item-l";
            return (
              <li
                key={idx}
                className={`bz-intro-item ${dir} ${isShown ? "bz-intro-item-in" : ""}`}
              >
                <span className={`bz-intro-box ${isShown ? "bz-intro-box-on" : ""}`}>
                  <Check size={17} strokeWidth={3.5} className="bz-intro-check-icon" />
                </span>
                <span className="bz-intro-text">{text}</span>
              </li>
            );
          })}
        </ul>

        {/* 결론 카피 */}
        <div className={`bz-intro-conclude ${concludeVisible ? "bz-intro-conclude-in" : ""}`}>
          <p className="bz-intro-conclude-lead">이 중 <b>하나라도</b> 해당하신다면,</p>
        </div>

        {/* 브랜드 pill (대형 punch + 컨페티) */}
        <div className={`bz-intro-brand-row ${brandVisible ? "bz-intro-brand-in" : ""}`}>
          <div className="bz-intro-brand-wrap">
            <span className="bz-intro-brand-big">
              <span className="bz-intro-brand-paw">🐾</span>
              <b>AnimAI Biz</b>
            </span>
            {/* 손그림 밑줄 (SVG) */}
            <svg className="bz-intro-underline" viewBox="0 0 220 14" aria-hidden>
              <path
                d="M4 8 Q 55 2, 110 7 T 216 6"
                fill="none"
                stroke="#ff6b35"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* 꼬리 카피 */}
        <p className={`bz-intro-tail ${tailVisible ? "bz-intro-tail-in" : ""}`}>
          <b>가 필요합니다</b>
        </p>
      </div>

      {/* 컨페티 */}
      {confettiVisible && (
        <div className="bz-intro-confetti" aria-hidden>
          {Array.from({ length: 18 }).map((_, i) => {
            const colors = ["#ff6b35", "#ffd84d", "#ff9ec4", "#059669", "#5db4ff", "#e85d2a"];
            const left = 10 + i * 5;
            const bg = colors[i % colors.length];
            const dur = 1.6 + (i % 5) * 0.2;
            const delay = (i % 6) * 0.1;
            return (
              <i
                key={i}
                style={{
                  left: `${left}%`,
                  background: bg,
                  animationDuration: `${dur}s`,
                  animationDelay: `${delay}s`,
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

// 히어로 문제: 흩어진 운영 도구들
function HeroProblem() {
  return (
    <div className="bz-heroscatter">
      <div className="bz-htool bz-ht1">
        <span className="bz-dot" style={{ background: "#dcfce7" }}>
          <CalendarCheck size={15} color="#16a34a" />
        </span>
        예약
      </div>
      <div className="bz-htool bz-ht2">
        <span className="bz-dot" style={{ background: "#dbeafe" }}>
          <CreditCard size={15} color="#2563eb" />
        </span>
        결제
      </div>
      <div className="bz-htool bz-ht3">
        <span className="bz-dot" style={{ background: "#fef9c3" }}>
          <NotebookPen size={15} color="#ca8a04" />
        </span>
        고객 장부
      </div>
      <div className="bz-htool bz-ht4">
        <span className="bz-dot" style={{ background: "#fce7f3" }}>
          <Camera size={15} color="#db2777" />
        </span>
        SNS 홍보
      </div>
      <div className="bz-htool bz-ht5">
        <span className="bz-dot" style={{ background: "#ede9fe" }}>
          <Sparkles size={15} color="#7c3aed" />
        </span>
        마케팅
      </div>
      <span className="bz-scnote">제각각 흩어져</span>
    </div>
  );
}

// 히어로 해결: 한 곳에 모인 대시보드
function HeroSolution() {
  return (
    <div className="bz-herosol">
      <DashboardMock images={PHOTO.dash} />
    </div>
  );
}

/* ════════════ 문제 → 해결 전환 섹션 ════════════ */
function ProblemSolution({
  num,
  problem,
  solution,
  surface,
}: {
  num: string;
  problem: { eyebrow: string; title: React.ReactNode; visual: React.ReactNode };
  solution: {
    eyebrow: string;
    title: React.ReactNode;
    body: React.ReactNode;
    visual: React.ReactNode;
  };
  surface?: boolean;
}) {
  const [phase, setPhase] = useState<"problem" | "solution">("problem");
  const ref = useRef<HTMLElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const locked = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !locked.current) {
          setPhase("problem");
          window.clearTimeout(timer.current);
          timer.current = window.setTimeout(() => setPhase("solution"), 2200);
        } else {
          window.clearTimeout(timer.current);
        }
      },
      { threshold: 0.45 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer.current);
    };
  }, []);

  const go = (p: "problem" | "solution") => {
    locked.current = true; // 유저가 직접 누르면 그 선택 유지 (자동 전환 중단)
    window.clearTimeout(timer.current);
    setPhase(p);
  };

  return (
    <section className={`bz-sec bz-ps${surface ? " bz-surface" : ""}`} ref={ref}>
      <span className="bz-num">{num} / 06</span>
      <div className="bz-wrap bz-grid2">
        <div className="bz-pstext">
          <div className="bz-phasewrap">
            <div className={`bz-phase${phase === "problem" ? " on" : ""}`}>
              <span className="bz-eyebrow bz-prob">{problem.eyebrow}</span>
              <h2 className="bz-h2">{problem.title}</h2>
            </div>
            <div className={`bz-phase${phase === "solution" ? " on" : ""}`}>
              <span className="bz-eyebrow">{solution.eyebrow}</span>
              <h2 className="bz-h2">{solution.title}</h2>
              <p className="bz-lead">{solution.body}</p>
            </div>
          </div>
          <div className="bz-toggle">
            <button
              className={`${phase === "problem" ? "on bz-tprob" : ""}`}
              onClick={() => go("problem")}
            >
              지금
            </button>
            <button
              className={`${phase === "solution" ? "on" : ""}`}
              onClick={() => go("solution")}
            >
              AnimAI Biz
            </button>
          </div>
        </div>

        <div className="bz-psvisual">
          <div className={`bz-vis${phase === "problem" ? " on" : ""}`}>{problem.visual}</div>
          <div className={`bz-vis${phase === "solution" ? " on" : ""}`}>{solution.visual}</div>
        </div>
      </div>
    </section>
  );
}

/* ════════════ 비주얼 ════════════ */

// 결제 — 문제: 따로 도는 프로그램들 (카톡·엑셀·포스)
function PayProblem() {
  return (
    <div className="bz-scatter3">
      <div className="bz-ptool bz-sca">
        <div className="bz-mini bz-mkatalk">
          <span className="bz-mb bz-ml" />
          <span className="bz-mb bz-mr" />
          <span className="bz-mb bz-ml bz-msh" />
        </div>
        <div className="bz-plabel">예약 · 카톡</div>
      </div>
      <div className="bz-ptool bz-scb">
        <div className="bz-mini bz-mexcel">
          <div className="bz-mxhead" />
          <div className="bz-mxbody">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="bz-plabel">고객 장부 · 엑셀</div>
      </div>
      <div className="bz-ptool bz-scc">
        <div className="bz-mini bz-mpos">
          <div className="bz-mposscr">₩ 42,000</div>
          <div className="bz-mposkeys">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="bz-plabel">포스기 결제</div>
      </div>
      <span className="bz-scnote">제각각 따로 운영</span>
    </div>
  );
}

// 결제 — 해결: 대시보드 + 토스 단말기
function PaySolution() {
  return (
    <div className="bz-paysol2">
      <DashboardMock images={PHOTO.dash} />
      <div className="bz-terminal bz-termfloat">
        <div className="bz-termtop">TOSS</div>
        <div className="bz-termscreen">
          <Check size={18} strokeWidth={3} />
          <div className="bz-termok">결제 완료</div>
          <div className="bz-termamt">42,000원</div>
        </div>
        <div className="bz-termslot" />
      </div>
    </div>
  );
}

// 알림장 — 문제: 카톡 정신없이
function TalkProblem() {
  return (
    <div className="bz-katalk">
      <div className="bz-kday">고객님과의 채팅</div>
      <div className="bz-kbubble bz-kme">오늘 콩이 사진이에요!</div>
      <div className="bz-kbubble bz-kme bz-kphoto">
        <Camera size={18} color="#a16207" />
      </div>
      <div className="bz-kbubble bz-kme">미용 완료했습니다~</div>
      <div className="bz-kbubble bz-kme">전체미용, 1시간 반 걸렸고…</div>
      <div className="bz-kbubble bz-kme bz-ktype">
        <span />
        <span />
        <span />
      </div>
      <div className="bz-knote">매 고객마다 복사·붙여넣기</div>
    </div>
  );
}

// 알림장 — 해결: 사장님 대시보드 알림장 화면 (브라우저 목업 = 가로 이미지 원 비율 맞춤)
function TalkSolution() {
  return (
    <div className="bz-mktbrowser">
      <div className="bz-mktbar">
        <span className="bz-mktdot" />
        <span className="bz-mktdot" />
        <span className="bz-mktdot" />
        <span className="bz-mkturl">gangji-manage.kr</span>
      </div>
      <ImgFade
        images={PHOTO.notice}
        className="bz-shotwrap"
        imgClassName="bz-fadeimg"
        alt="AnimAI Biz AI 광고 만들기 화면"
      />
    </div>
  );
}

// 마케팅 — 문제: SNS 헤매기
function MktProblem() {
  return (
    <div className="bz-snsmess">
      <div className="bz-snsicon bz-insta">
        <Camera size={24} color="#fff" />
      </div>
      <div className="bz-snsicon bz-yt">
        <Play size={24} color="#fff" fill="#fff" />
      </div>
      <div className="bz-snsicon bz-band">BAND</div>
      <div className="bz-snsicon bz-news">
        <Newspaper size={22} color="#fff" />
      </div>
      <div className="bz-snscenter">뭘 어떻게 올리지?</div>
    </div>
  );
}

// 마케팅 — 해결: 통계 + AI
function MktSolution() {
  return (
    <div className="bz-mktsol">
      <div className="bz-mktcard">
        <span className="bz-mktic">
          <Sparkles size={14} color="#3b82f6" />
        </span>
        "여름 모질관리 이벤트" 광고
        <span className="bz-mktstat">생성됨</span>
      </div>
      <div className="bz-browser bz-mktbrowser">
        <div className="bz-bar">
          <i />
          <i />
          <i />
          <span className="bz-url">
            <BarChart3 size={11} style={{ verticalAlign: "-1px" }} /> 통계 · AI 마케팅
          </span>
        </div>
        <ImgFade
          images={PHOTO.stat}
          className="bz-shotwrap"
          imgClassName="bz-fadeimg"
          alt="AnimAI Biz 매출·고객 통계 화면"
        />
      </div>
    </div>
  );
}

/* ════════════ 공용: 슬라이더 / 대시보드 ════════════ */
function ImgFade({
  images,
  interval = 5000,
  className,
  imgClassName,
  onAllFail,
  alt = "AnimAI Biz 서비스 화면", // SEO: alt="" 는 네이버 진단에서 "Alt 속성 누락"으로 잡힘
}: {
  images: string[];
  interval?: number;
  className?: string;
  imgClassName?: string;
  onAllFail?: () => void;
  alt?: string;
}) {
  const [failed, setFailed] = useState<number[]>([]);
  const [idx, setIdx] = useState(0);
  const okList = images.map((_, i) => i).filter((i) => !failed.includes(i));

  useEffect(() => {
    if (okList.length < 2) return;
    const t = window.setInterval(() => {
      setIdx((p) => {
        const cur = okList.indexOf(p);
        return okList[(cur + 1) % okList.length] ?? okList[0];
      });
    }, interval);
    return () => window.clearInterval(t);
  }, [okList.length, interval]);

  useEffect(() => {
    if (okList.length && failed.includes(idx)) setIdx(okList[0]);
    if (images.length > 0 && okList.length === 0) onAllFail?.();
  }, [failed, idx, okList.length, images.length, onAllFail]);

  return (
    <div className={className}>
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src + i}
          src={src}
          alt={alt}
          onError={() => setFailed((f) => (f.includes(i) ? f : [...f, i]))}
          className={imgClassName}
          style={{ opacity: i === idx && !failed.includes(i) ? 1 : 0 }}
        />
      ))}
    </div>
  );
}

function DashboardMock({ images }: { images: string[] }) {
  const [allFailed, setAllFailed] = useState(false);
  return (
    <div className="bz-browser">
      <div className="bz-bar">
        <i />
        <i />
        <i />
        <span className="bz-url">gangji-manage.kr</span>
      </div>
      {!allFailed ? (
        <ImgFade
          images={images}
          className="bz-shotwrap"
          imgClassName="bz-fadeimg"
          alt="AnimAI Biz 관리 대시보드 화면"
          onAllFail={() => setAllFailed(true)}
        />
      ) : (
        <div className="bz-dash">
          <div className="bz-side">
            <div className="bz-biz">
              마음이네유치원<small>인천 연수구 · BASIC</small>
            </div>
            <div className="bz-nav bz-on">홈</div>
            <div className="bz-nav">예약</div>
            <div className="bz-nav">고객</div>
            <div className="bz-nav">매출</div>
          </div>
          <div className="bz-panel">
            <div className="bz-kpis">
              <div className="bz-kpi">
                <div className="bz-kt">오늘 예약</div>
                <div className="bz-kv bz-kb">8건</div>
              </div>
              <div className="bz-kpi">
                <div className="bz-kt">매출</div>
                <div className="bz-kv bz-ko">42만</div>
              </div>
              <div className="bz-kpi">
                <div className="bz-kt">이용권</div>
                <div className="bz-kv">5회</div>
              </div>
            </div>
            <div className="bz-pbar">
              <span style={{ height: "40%" }} />
              <span style={{ height: "65%" }} />
              <span style={{ height: "50%" }} />
              <span className="bz-phi" style={{ height: "90%" }} />
              <span style={{ height: "70%" }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ════════════ 스타일 ════════════ */
const BZ_CSS = `
.bz-sec{min-height:100vh;display:flex;align-items:center;padding:72px 24px;position:relative;overflow:hidden}
.bz-wrap{max-width:1080px;margin:0 auto;width:100%}
.bz-grid2{display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:center}
@media(max-width:860px){.bz-grid2{grid-template-columns:1fr;gap:28px}.bz-sec{padding:60px 20px}}
.bz-num{position:absolute;top:30px;right:28px;font-size:12px;font-weight:700;color:#94a3b8;letter-spacing:.06em}
.bz-center{text-align:center}
.bz-eyebrow{font-size:13px;font-weight:700;color:#3b82f6;margin-bottom:14px;display:inline-block}
.bz-eyebrow.bz-warm{color:#ff6b35}
.bz-eyebrow.bz-prob{color:#e55a2b}
.bz-h1{font-size:clamp(30px,5.4vw,56px);font-weight:800;letter-spacing:-.04em;line-height:1.16;color:#0f172a}
.bz-h2{font-size:clamp(25px,4vw,40px);font-weight:800;letter-spacing:-.035em;line-height:1.22;color:#0f172a}
.bz-lead{font-size:clamp(15px,1.9vw,18px);color:#64748b;margin-top:16px;max-width:440px;font-weight:500}
.bz-lead b{color:#0f172a;font-weight:700}
.bz-accent{color:#3b82f6}
.bz-probac{color:#e55a2b}
.bz-free{color:#ff6b35;font-weight:800}

/* intro — 진입 오버레이 (펫페어 사이니지 톤: 부유 오브젝트 + flyL/flyR + 컨페티 + 손그림 밑줄) */
.bz-intro{position:fixed;inset:0;z-index:120;background:#ffffff;display:flex;align-items:center;align-items:safe center;justify-content:center;padding:32px 20px;overflow-y:auto;overflow-x:hidden;animation:bzIntroFadeIn .35s ease-out both}
.bz-intro-out{animation:bzIntroFadeOut .5s ease-in both}
@keyframes bzIntroFadeIn{from{opacity:0}to{opacity:1}}
@keyframes bzIntroFadeOut{from{opacity:1}to{opacity:0}}

/* 배경 레이어 (blob 3개 + 점 그리드) */
.bz-intro-bg{position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden}
.bz-intro-blob{position:absolute;border-radius:50%;filter:blur(72px);opacity:.32;mix-blend-mode:multiply}
.bz-intro-blob-1{width:440px;height:440px;left:-140px;top:-120px;background:#ffd9c9;animation:bzIntroDrift1 26s ease-in-out infinite}
.bz-intro-blob-2{width:400px;height:400px;right:-120px;bottom:-140px;background:#ffe9c2;animation:bzIntroDrift2 30s ease-in-out infinite}
.bz-intro-blob-3{width:320px;height:320px;left:50%;top:45%;background:#e6f7ee;animation:bzIntroDrift3 34s ease-in-out infinite}
@keyframes bzIntroDrift1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(70px,50px) scale(1.12)}}
@keyframes bzIntroDrift2{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-60px,-40px) scale(1.1)}}
@keyframes bzIntroDrift3{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-44%,-58%) scale(1.18)}}
.bz-intro-dots{position:absolute;inset:0;background-image:radial-gradient(rgba(255,107,53,.09) 2px, transparent 2px);background-size:32px 32px;opacity:.42}

/* 부유 오브젝트 (하트/발/별/스파클 - 등장 애니 + bob 반복) */
.bz-intro-obj{position:absolute;z-index:1;opacity:0;pointer-events:none;animation:bzIntroObjIn .7s cubic-bezier(.2,1.3,.3,1) forwards, bzIntroObjBob 6s ease-in-out infinite}
@keyframes bzIntroObjIn{0%{opacity:0;transform:scale(0) rotate(-30deg)}70%{opacity:1;transform:scale(1.15) rotate(6deg)}100%{opacity:1;transform:scale(1) rotate(0)}}
@keyframes bzIntroObjBob{0%,100%{transform:translateY(0) rotate(-6deg)}50%{transform:translateY(-14px) rotate(6deg)}}
.bz-intro-obj-1{left:6%;top:12%;animation-delay:0.3s,1.0s}
.bz-intro-obj-2{right:8%;top:9%;animation-delay:0.5s,1.2s}
.bz-intro-obj-3{right:5%;bottom:14%;animation-delay:0.7s,1.4s}
.bz-intro-obj-4{left:7%;bottom:16%;animation-delay:0.9s,1.6s}

.bz-intro-skip{position:fixed;top:18px;right:18px;background:transparent;border:1px solid #e2e8f0;color:#64748b;font-family:inherit;font-size:12px;font-weight:600;padding:7px 14px;border-radius:100px;cursor:pointer;transition:.15s;z-index:10}
.bz-intro-skip:hover{color:#ff6b35;border-color:#ff6b35;background:#fff}

.bz-intro-inner{position:relative;z-index:5;max-width:680px;width:100%;padding:24px 4px;text-align:center}

.bz-intro-kicker{font-size:15px;font-weight:700;color:#94a3b8;letter-spacing:.02em;margin-bottom:12px;opacity:0;animation:bzIntroFadeUp .5s ease-out .4s both}
.bz-intro-title{font-size:clamp(26px,4.4vw,42px);font-weight:900;letter-spacing:-.035em;line-height:1.25;color:#0f172a;margin-bottom:28px;opacity:0;animation:bzIntroPunch .6s cubic-bezier(.18,1.4,.32,1) .7s both}
.bz-intro-title-o{color:#ff6b35}
@keyframes bzIntroPunch{0%{opacity:0;transform:scale(.3)}60%{opacity:1;transform:scale(1.08)}100%{opacity:1;transform:scale(1)}}
@keyframes bzIntroFadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}

.bz-intro-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:14px;max-width:600px;margin-left:auto;margin-right:auto;text-align:left}
.bz-intro-item{opacity:0;background:#fff;border:1.5px solid #ffe4d1;border-radius:16px;padding:14px 18px;display:flex;align-items:flex-start;gap:12px;font-size:15px;font-weight:500;color:#334155;line-height:1.55;box-shadow:0 6px 18px rgba(255,107,53,.08);transition:box-shadow .3s}
.bz-intro-item-r{transform:translateX(80px) rotate(4deg)}
.bz-intro-item-l{transform:translateX(-80px) rotate(-4deg)}
.bz-intro-item-in{opacity:1;transform:translateX(0) rotate(0);transition:opacity .5s cubic-bezier(.2,1,.3,1),transform .5s cubic-bezier(.2,1.4,.3,1)}
.bz-intro-box{flex-shrink:0;width:28px;height:28px;border-radius:9px;background:#fff;border:2px solid #cbd5e1;display:flex;align-items:center;justify-content:center;transition:background .3s ease-out,border-color .3s ease-out,transform .25s ease-out}
.bz-intro-box-on{background:#ff6b35;border-color:#ff6b35;animation:bzIntroCheckPop .4s ease-out .15s}
@keyframes bzIntroCheckPop{0%{transform:scale(1)}45%{transform:scale(1.25) rotate(-8deg)}100%{transform:scale(1) rotate(0)}}
.bz-intro-check-icon{color:#fff;opacity:0;transform:scale(.4);transition:opacity .25s ease-out .25s,transform .3s cubic-bezier(.34,1.56,.64,1) .25s}
.bz-intro-box-on .bz-intro-check-icon{opacity:1;transform:scale(1)}
.bz-intro-text{flex:1;padding-top:2px}
.bz-intro-hl{color:#e85d2a;font-weight:800;font-size:1.08em;background:linear-gradient(180deg,transparent 55%,#ffcba8 55%);padding:0 4px;border-radius:3px;box-decoration-break:clone;-webkit-box-decoration-break:clone;letter-spacing:-.01em}

/* 결론 카피 */
.bz-intro-conclude{margin-top:44px;opacity:0;transform:translateY(10px);transition:opacity .5s ease-out,transform .5s ease-out}
.bz-intro-conclude-in{opacity:1;transform:translateY(0)}
.bz-intro-conclude-lead{font-size:clamp(17px,2.4vw,22px);font-weight:700;color:#334155;letter-spacing:-.01em}
.bz-intro-conclude-lead b{color:#ff6b35;font-weight:900}

/* 브랜드 pill (대형 zoom) */
.bz-intro-brand-row{margin-top:20px;opacity:0;transform:scale(.5);transition:opacity .5s,transform .6s cubic-bezier(.18,1.4,.32,1)}
.bz-intro-brand-in{opacity:1;transform:scale(1)}
.bz-intro-brand-wrap{position:relative;display:inline-block}
.bz-intro-brand-big{display:inline-flex;align-items:center;gap:10px;padding:14px 28px 14px 22px;border-radius:22px;background:linear-gradient(135deg,#ff6b35,#e85d2a);color:#fff;box-shadow:0 14px 40px rgba(255,107,53,.4)}
.bz-intro-brand-big b{color:#fff;font-weight:900;font-size:clamp(28px,4.2vw,38px);letter-spacing:-.02em}
.bz-intro-brand-paw{font-size:clamp(26px,3.8vw,34px);line-height:1}

/* 손그림 밑줄 (SVG draw 애니) */
.bz-intro-underline{position:absolute;left:50%;bottom:-14px;transform:translateX(-50%);width:80%;height:14px}
.bz-intro-underline path{stroke-dasharray:260;stroke-dashoffset:260}
.bz-intro-brand-in .bz-intro-underline path{animation:bzIntroDraw .7s ease .5s forwards}
@keyframes bzIntroDraw{to{stroke-dashoffset:0}}

/* 꼬리 카피 */
.bz-intro-tail{margin-top:32px;font-size:clamp(17px,2.4vw,22px);font-weight:700;color:#334155;opacity:0;transform:translateY(10px);transition:opacity .5s ease-out,transform .5s ease-out}
.bz-intro-tail-in{opacity:1;transform:translateY(0)}
.bz-intro-tail b{color:#0f172a;font-weight:900}

/* 컨페티 (낙하 애니 6색) */
.bz-intro-confetti{position:absolute;inset:0;z-index:8;pointer-events:none;overflow:hidden}
.bz-intro-confetti i{position:absolute;top:-40px;width:12px;height:14px;opacity:0;border-radius:3px;animation-name:bzIntroConfetti;animation-timing-function:cubic-bezier(.4,.2,.7,.9);animation-fill-mode:forwards}
@keyframes bzIntroConfetti{0%{opacity:1;transform:translateY(-40px) rotate(0)}100%{opacity:0;transform:translateY(120vh) rotate(720deg)}}

/* 모바일 컴팩트 (< 600px) — kicker+제목+체크5+결론+브랜드+꼬리 다 화면에 담김 */
@media(max-width:600px){
  .bz-intro{padding:16px 14px}
  .bz-intro-inner{padding:8px 4px}
  .bz-intro-kicker{font-size:13px;margin-bottom:8px}
  .bz-intro-title{font-size:19px;margin-bottom:14px;line-height:1.28}
  .bz-intro-list{gap:7px;max-width:520px}
  .bz-intro-item{font-size:13px;padding:9px 12px;gap:10px;line-height:1.5;border-radius:12px}
  .bz-intro-box{width:22px;height:22px;border-radius:7px}
  .bz-intro-hl{padding:0 3px;font-size:1.06em}
  .bz-intro-conclude{margin-top:22px}
  .bz-intro-conclude-lead{font-size:15px}
  .bz-intro-brand-row{margin-top:12px}
  .bz-intro-brand-big{padding:10px 20px 10px 16px;border-radius:18px;gap:8px}
  .bz-intro-brand-big b{font-size:22px}
  .bz-intro-brand-paw{font-size:20px}
  .bz-intro-underline{bottom:-10px;height:10px}
  .bz-intro-tail{font-size:15px;margin-top:18px}
  .bz-intro-obj{transform:scale(.7)}
  .bz-intro-obj-1{left:2%;top:6%}
  .bz-intro-obj-2{right:2%;top:5%}
  .bz-intro-obj-3{right:1%;bottom:8%}
  .bz-intro-obj-4{left:2%;bottom:10%}
}
/* 초소형 폰 (아이폰 SE 1st, 갤럭시 fold outer 등, < 380px) */
@media(max-width:380px){
  .bz-intro{padding:10px 12px}
  .bz-intro-kicker{font-size:12px;margin-bottom:6px}
  .bz-intro-title{font-size:17px;margin-bottom:10px;line-height:1.25}
  .bz-intro-list{gap:6px}
  .bz-intro-item{font-size:12px;padding:8px 11px;gap:8px}
  .bz-intro-box{width:20px;height:20px;border-radius:6px}
  .bz-intro-conclude{margin-top:16px}
  .bz-intro-conclude-lead{font-size:14px}
  .bz-intro-brand-row{margin-top:10px}
  .bz-intro-brand-big{padding:9px 18px 9px 14px;gap:6px}
  .bz-intro-brand-big b{font-size:20px}
  .bz-intro-brand-paw{font-size:18px}
  .bz-intro-tail{font-size:14px;margin-top:14px}
}
.bz-btn{display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:17px;padding:16px 32px;border-radius:16px;cursor:pointer;text-decoration:none;transition:.15s;background:#ff6b35;color:#fff;box-shadow:0 8px 24px rgba(255,107,53,.28);margin-top:30px;border:none;font-family:inherit}
.bz-btn:hover{background:#e55a2b;transform:translateY(-1px)}
.bz-btnlg{font-size:18px;padding:18px 40px;margin-top:0}
.bz-ctarow{display:flex;gap:12px;justify-content:center;align-items:center;flex-wrap:wrap}
.bz-btn2{display:inline-flex;align-items:center;gap:7px;font-weight:700;font-size:16px;padding:17px 30px;border-radius:16px;background:#fff;color:#3b82f6;border:1.5px solid #dbeafe;text-decoration:none;transition:.15s}
.bz-btn2:hover{border-color:#3b82f6;background:#eff6ff}
@media(max-width:600px){.bz-btn2{font-size:15px;padding:15px 26px}}
.bz-btndemo{display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:17px;padding:16px 32px;border-radius:16px;cursor:pointer;text-decoration:none;transition:.15s;background:#3b82f6;color:#fff;box-shadow:0 8px 24px rgba(59,130,246,.30);border:none;font-family:inherit}
.bz-btndemo:hover{background:#2563eb;transform:translateY(-1px)}
.bz-btndemolg{font-size:18px;padding:18px 40px}
.bz-herocta{display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-top:30px}
.bz-herocta .bz-btn{margin-top:0}
@media(max-width:600px){.bz-btndemo{font-size:15px;padding:14px 26px}.bz-btndemolg{font-size:15px;padding:15px 28px}.bz-herocta{margin-top:24px}}
.bz-trust{margin-top:24px;display:flex;gap:18px;flex-wrap:wrap;color:#64748b;font-size:13px;font-weight:600}
.bz-trust b{color:#0f172a}
.bz-finalnote{color:#94a3b8;font-size:13px;margin-top:13px}
.bz-surface{background:#f8fafc}

/* scroll cue */
.bz-scrollcue{position:absolute;bottom:24px;left:50%;display:flex;flex-direction:column;align-items:center;gap:3px;color:#64748b;font-size:13px;font-weight:600;animation:bzbob 1.8s ease-in-out infinite}
@keyframes bzbob{0%,100%{transform:translate(-50%,0)}50%{transform:translate(-50%,7px)}}

/* hero */
.bz-hero{background:linear-gradient(180deg,#eff6ff,#fff 72%)}
.bz-herowrap{margin:0}
.bz-bizbrand{margin-bottom:22px}
.bz-bizrow{display:flex;align-items:center;gap:9px;margin-bottom:8px}
.bz-bizlogo{font-size:23px}
.bz-bizname{font-size:23px;font-weight:800;color:#ff6b35;letter-spacing:-.02em}
.bz-bizfree{font-size:11px;font-weight:800;color:#fff;background:#22c55e;padding:3px 9px;border-radius:7px;letter-spacing:.04em}
.bz-bizdesc{font-size:15.5px;color:#475569;font-weight:600}
@media(max-width:600px){.bz-bizname,.bz-bizlogo{font-size:20px}.bz-bizdesc{font-size:13.5px}}
.bz-feats{display:flex;flex-wrap:wrap;align-items:center;gap:7px;margin-top:24px}
.bz-featlabel{font-size:13px;font-weight:700;color:#64748b;margin-right:2px}
.bz-feat{font-size:13px;font-weight:700;color:#3b82f6;background:#eff6ff;border:1px solid #dbeafe;padding:7px 13px;border-radius:10px}
@media(max-width:600px){.bz-feat,.bz-featlabel{font-size:12px;padding:6px 11px}}
.bz-trust2{margin-top:14px;font-size:13px;color:#94a3b8;font-weight:600}
.bz-trust2 b{color:#64748b}
.bz-herovis{height:470px}
@media(max-width:860px){.bz-herovis{height:340px}}
.bz-heroscatter{position:relative;width:100%;height:100%}
.bz-htool{position:absolute;background:#fff;border:1px solid #e8edf3;border-radius:16px;padding:12px 15px;box-shadow:0 10px 28px rgba(15,23,42,.1);font-weight:700;font-size:13px;color:#334155;display:flex;align-items:center;gap:9px;white-space:nowrap}
.bz-dot{width:28px;height:28px;border-radius:8px;display:grid;place-items:center}
.bz-ht1{top:5%;left:3%;transform:rotate(-6deg)}
.bz-ht2{top:0;right:9%;transform:rotate(5deg)}
.bz-ht3{top:39%;left:23%;transform:rotate(-2deg)}
.bz-ht4{bottom:21%;left:1%;transform:rotate(4deg)}
.bz-ht5{bottom:5%;right:5%;transform:rotate(-5deg)}
.bz-heroscatter .bz-scnote{position:absolute;bottom:0;left:50%;transform:translateX(-50%);font-size:13px;font-weight:700;color:#e55a2b;background:#fff3ec;padding:6px 14px;border-radius:20px;border:1px solid #ffd9c4;white-space:nowrap}
.bz-herosol{width:100%;max-width:560px}

/* problem-solution */
.bz-pstext{position:relative}
.bz-phasewrap{position:relative;display:grid}
.bz-phase{grid-area:1/1;opacity:0;transform:translateY(18px);transition:opacity .55s ease,transform .55s ease;pointer-events:none}
.bz-phase.on{opacity:1;transform:none;pointer-events:auto}
.bz-toggle{display:inline-flex;gap:5px;margin-top:18px;background:#eef2f7;padding:5px;border-radius:13px}
.bz-toggle button{border:none;background:transparent;padding:9px 18px;border-radius:9px;font-weight:700;font-size:13px;color:#94a3b8;cursor:pointer;transition:.2s;font-family:inherit}
.bz-toggle button.on{background:#fff;color:#0f172a;box-shadow:0 2px 8px rgba(15,23,42,.1)}
.bz-toggle button.on.bz-tprob{color:#e55a2b}
.bz-psvisual{position:relative;height:440px}
@media(max-width:860px){.bz-psvisual{height:330px}}
.bz-vis{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0;transform:scale(.96);transition:opacity .55s ease,transform .55s ease;pointer-events:none}
.bz-vis.on{opacity:1;transform:none;pointer-events:auto}

/* pay problem — 미니 프로그램들 */
.bz-scatter3{position:relative;width:100%;height:100%}
.bz-ptool{position:absolute;display:flex;flex-direction:column;align-items:center;gap:7px}
.bz-mini{width:88px;height:66px;border-radius:12px;overflow:hidden;box-shadow:0 10px 24px rgba(15,23,42,.15);background:#fff;border:1px solid #e8edf3}
.bz-plabel{font-size:12.5px;font-weight:700;color:#475569;white-space:nowrap}
.bz-sca{top:8%;left:5%;transform:rotate(-6deg)}
.bz-scb{top:33%;right:3%;transform:rotate(5deg)}
.bz-scc{bottom:13%;left:15%;transform:rotate(-2deg)}
.bz-mkatalk{background:#9bbbd4;padding:9px;display:flex;flex-direction:column;gap:6px}
.bz-mb{height:9px;border-radius:5px;display:block}
.bz-ml{width:62%;background:#fff}
.bz-mr{width:54%;background:#fee500;align-self:flex-end}
.bz-msh{width:42%}
.bz-mexcel{display:flex;flex-direction:column}
.bz-mxhead{height:17px;background:#107c41}
.bz-mxbody{flex:1;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,1fr);gap:1px;background:#cbd5e1;padding:1px}
.bz-mxbody span{background:#fff}
.bz-mpos{background:#1e293b;display:flex;flex-direction:column;padding:8px;gap:5px}
.bz-mposscr{background:#0f172a;color:#4ade80;font-size:10px;font-weight:800;text-align:right;padding:3px 5px;border-radius:3px;letter-spacing:.02em}
.bz-mposkeys{flex:1;display:grid;grid-template-columns:repeat(3,1fr);gap:3px}
.bz-mposkeys span{background:#334155;border-radius:2px}
.bz-scnote{position:absolute;bottom:0;left:50%;transform:translateX(-50%);font-size:13px;font-weight:700;color:#e55a2b;background:#fff3ec;padding:6px 14px;border-radius:20px;border:1px solid #ffd9c4;white-space:nowrap}

/* pay solution — 대시보드 + 토스 단말기 */
.bz-paysol2{position:relative;width:100%;max-width:560px;margin:0 auto}
.bz-terminal{width:130px;background:#1e293b;border-radius:20px;padding:12px 12px 16px;box-shadow:0 18px 40px rgba(15,23,42,.3)}
.bz-termtop{color:#94a3b8;font-size:11px;font-weight:800;text-align:center;letter-spacing:.1em;margin-bottom:8px}
.bz-termscreen{background:linear-gradient(150deg,#3b82f6,#2563eb);border-radius:13px;padding:16px 10px;color:#fff;text-align:center;display:flex;flex-direction:column;align-items:center;gap:2px}
.bz-termok{font-size:12px;font-weight:600;opacity:.9;margin-top:3px}
.bz-termamt{font-size:18px;font-weight:800}
.bz-termslot{height:7px;background:#0f172a;border-radius:4px;margin:13px 8px 0}
.bz-termfloat{position:absolute;bottom:-20px;right:-12px;width:108px;z-index:3;transform:rotate(3deg)}
@media(max-width:860px){.bz-termfloat{width:90px;right:0;bottom:-12px}}

/* talk solution — 알림장 스샷 폰 */
.bz-talkphone{width:225px}
.bz-talkphone .bz-appscreen{height:420px}

/* talk problem (katalk) */
.bz-katalk{width:270px;background:#9bbbd4;border-radius:20px;padding:16px 14px 14px;box-shadow:0 18px 44px rgba(15,23,42,.18)}
.bz-kday{text-align:center;font-size:11px;color:#475569;background:rgba(255,255,255,.5);border-radius:10px;padding:4px;margin-bottom:12px;font-weight:600}
.bz-kbubble{max-width:78%;padding:9px 12px;border-radius:13px;font-size:12.5px;font-weight:500;margin-bottom:8px;line-height:1.35}
.bz-kme{background:#fee500;color:#3a1d1d;margin-left:auto;border-top-right-radius:4px}
.bz-kphoto{height:46px;display:flex;align-items:center;justify-content:center;background:#fde68a}
.bz-ktype{display:flex;gap:4px;align-items:center;width:auto;max-width:60px;justify-content:center;padding:11px 12px}
.bz-ktype span{width:6px;height:6px;border-radius:50%;background:#a16207;animation:bztype 1.2s infinite}
.bz-ktype span:nth-child(2){animation-delay:.2s}
.bz-ktype span:nth-child(3){animation-delay:.4s}
@keyframes bztype{0%,60%,100%{opacity:.3}30%{opacity:1}}
.bz-knote{text-align:center;font-size:12px;font-weight:700;color:#e55a2b;margin-top:6px}

/* phone (talk solution) */
.bz-phone{width:215px;background:#0f172a;border-radius:32px;padding:10px;box-shadow:0 22px 56px rgba(15,23,42,.22)}
.bz-screen{background:#fff;border-radius:23px;overflow:hidden}
.bz-phtop{background:#3b82f6;color:#fff;padding:13px 15px;font-weight:700;font-size:13px}
.bz-phphoto{height:150px;position:relative;overflow:hidden;background:linear-gradient(135deg,#fde68a,#fca5a5)}
.bz-phfade{position:absolute;inset:0}
.bz-phbody{padding:14px}
.bz-phttl{font-weight:800;font-size:13px;margin-bottom:8px}
.bz-ln{height:6px;background:#eef2f7;border-radius:4px;margin:5px 0}
.bz-ln.bz-s{width:65%}
.bz-phsend2{display:flex;align-items:center;justify-content:center;gap:5px;background:#3b82f6;color:#fff;padding:10px;border-radius:11px;font-weight:700;font-size:12px;margin-top:12px}

/* mkt problem (sns) */
.bz-snsmess{position:relative;width:100%;height:100%}
.bz-snsicon{position:absolute;width:56px;height:56px;border-radius:15px;display:grid;place-items:center;color:#fff;font-weight:800;font-size:12px;box-shadow:0 10px 26px rgba(15,23,42,.16)}
.bz-insta{top:12%;left:12%;background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888);transform:rotate(-8deg)}
.bz-yt{top:8%;right:14%;background:#ff0000;transform:rotate(6deg)}
.bz-band{bottom:20%;left:8%;background:#03c75a;transform:rotate(-4deg)}
.bz-news{bottom:14%;right:12%;background:#475569;transform:rotate(7deg)}
.bz-snscenter{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;border:1px solid #ffd9c4;color:#e55a2b;font-weight:700;font-size:13px;padding:9px 16px;border-radius:20px;box-shadow:0 8px 22px rgba(15,23,42,.1);white-space:nowrap}

/* mkt solution */
.bz-mktsol{width:100%;max-width:560px}
.bz-mktcard{background:#fff;border:1px solid #e8edf3;border-radius:13px;padding:12px 14px;font-weight:600;font-size:13px;color:#334155;display:flex;align-items:center;gap:9px;margin-bottom:12px;box-shadow:0 6px 18px rgba(15,23,42,.06)}
.bz-mktic{width:24px;height:24px;border-radius:7px;background:#eff6ff;display:grid;place-items:center;flex:none}
.bz-mktstat{margin-left:auto;font-size:11px;font-weight:700;color:#3b82f6;flex:none}

/* browser/dashboard */
.bz-browser{background:#fff;border:1px solid #e8edf3;border-radius:16px;overflow:hidden;box-shadow:0 22px 56px rgba(15,23,42,.13)}
.bz-mktbrowser{width:100%}
.bz-bar{background:#f1f5f9;padding:10px 13px;display:flex;gap:6px;align-items:center;border-bottom:1px solid #e8edf3}
.bz-bar i{width:10px;height:10px;border-radius:50%;background:#cbd5e1}
.bz-url{margin-left:9px;font-size:11px;color:#94a3b8;font-weight:600}
.bz-shotwrap{position:relative;width:100%;aspect-ratio:16/10;background:#f8fafc;overflow:hidden}
.bz-fadeimg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;opacity:0;transition:opacity .4s ease;image-rendering:-webkit-optimize-contrast}
.bz-dash{display:grid;grid-template-columns:118px 1fr;min-height:230px}
.bz-side{background:#f8fafc;border-right:1px solid #e8edf3;padding:14px 10px}
.bz-biz{background:#3b82f6;color:#fff;border-radius:11px;padding:9px;font-size:11px;font-weight:700;margin-bottom:12px;line-height:1.3}
.bz-biz small{display:block;font-weight:500;opacity:.82;font-size:9px;margin-top:2px}
.bz-nav{font-size:11px;color:#64748b;font-weight:600;padding:7px 6px;border-radius:7px}
.bz-nav.bz-on{background:#eff6ff;color:#3b82f6}
.bz-panel{padding:16px}
.bz-kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-bottom:12px}
.bz-kpi{background:#fff;border:1px solid #e8edf3;border-radius:11px;padding:11px 10px}
.bz-kt{font-size:9px;color:#64748b;font-weight:600}
.bz-kv{font-size:18px;font-weight:800;margin-top:2px;color:#0f172a}
.bz-kv.bz-kb{color:#3b82f6}
.bz-kv.bz-ko{color:#ff6b35}
.bz-pbar{height:54px;display:flex;align-items:flex-end;gap:7px;padding:9px;background:#fff;border:1px solid #e8edf3;border-radius:11px}
.bz-pbar span{flex:1;background:#dbeafe;border-radius:4px 4px 0 0}
.bz-pbar span.bz-phi{background:#3b82f6}

/* sec5 app phone + benefits */
.bz-appphone{width:240px;margin:0 auto;background:#0f172a;border-radius:36px;padding:11px;box-shadow:0 24px 60px rgba(15,23,42,.24);position:relative}
.bz-appnotch{position:absolute;top:11px;left:50%;transform:translateX(-50%);width:90px;height:18px;background:#0f172a;border-radius:0 0 14px 14px;z-index:2}
.bz-appscreen{position:relative;height:430px;border-radius:26px;overflow:hidden;background:#f1f5f9}
.bz-benefits{margin-top:22px;display:flex;flex-direction:column;gap:10px}
.bz-bcard{background:#fff;border:1px solid #e8edf3;border-radius:14px;padding:14px 16px;display:flex;gap:12px;align-items:flex-start}
.bz-bic{flex:none;width:36px;height:36px;border-radius:10px;background:#eff6ff;display:grid;place-items:center}
.bz-bh{font-weight:700;font-size:14.5px;color:#0f172a}
.bz-bp{font-size:12.5px;color:#64748b;margin-top:2px;line-height:1.45}

/* plans */
.bz-plans{background:linear-gradient(180deg,#fff,#eff6ff)}
.bz-freebar{background:#fff3ec;border:1px solid #ffd9c4;border-radius:16px;padding:16px 20px;margin:24px auto 30px;max-width:700px;font-weight:600;color:#334155;font-size:14px;display:flex;gap:11px;align-items:flex-start;line-height:1.55}
.bz-freebar b{color:#0f172a}
.bz-ptable{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
@media(max-width:860px){.bz-ptable{grid-template-columns:1fr 1fr}}
.bz-pcard{background:#fff;border:1px solid #e8edf3;border-radius:16px;padding:20px 16px;position:relative}
.bz-pcard.bz-hot{border:2px solid #3b82f6;box-shadow:0 12px 28px rgba(59,130,246,.15)}
.bz-pcard.bz-soon{opacity:.7}
.bz-pn{font-weight:700;font-size:14px;color:#334155}
.bz-pp{display:flex;align-items:baseline;gap:7px;margin:7px 0 1px;flex-wrap:wrap}
.bz-was{font-size:15px;color:#94a3b8;text-decoration:line-through;font-weight:600}
.bz-pp .bz-free{font-size:25px;font-weight:800;color:#ff6b35}
.bz-pp .bz-price{font-size:25px;font-weight:800;color:#0f172a}
.bz-soontxt{font-size:17px;font-weight:800;color:#94a3b8}
.bz-pu{font-size:11px;color:#94a3b8}
.bz-pd{font-size:12px;color:#64748b;margin-top:11px;line-height:1.65}
.bz-badge{position:absolute;top:-10px;left:16px;background:#3b82f6;color:#fff;font-size:10px;font-weight:700;padding:3px 9px;border-radius:7px}
.bz-badge.bz-bsoon{background:#e2e8f0;color:#64748b}
.bz-badge.bz-bwarm{background:#ff6b35}


@media(max-width:600px){
  .bz-sec{padding:52px 18px}
  .bz-h1{font-size:25px;line-height:1.3}
  .bz-h2{font-size:22px;line-height:1.32}
  .bz-lead{font-size:13.5px;margin-top:12px;line-height:1.55}
  .bz-eyebrow{font-size:12px;margin-bottom:9px}
  .bz-btn{font-size:15px;padding:14px 26px;margin-top:24px}
  .bz-btnlg{font-size:15px;padding:15px 28px}
  .bz-trust{font-size:11.5px;gap:12px;margin-top:18px}
  .bz-num{font-size:11px;top:20px;right:18px}
  .bz-freebar{font-size:13px;padding:14px 15px;gap:9px;margin:18px auto 24px}
  .bz-finalnote{font-size:12px}
  .bz-bh{font-size:13.5px}
  .bz-bp{font-size:12px}
  .bz-scrollcue{font-size:12px}
  .bz-toggle button{font-size:12.5px;padding:8px 15px}
  .bz-pn{font-size:13px}
  .bz-pp .bz-free{font-size:22px}
  .bz-was{font-size:13px}
  .bz-pd{font-size:11.5px}
}
@media(prefers-reduced-motion:reduce){
  .bz-tool,.bz-herodash,.bz-phase,.bz-vis,.bz-fadeimg,.bz-scrollcue,.bz-ktype span{transition:none!important;animation:none!important}
}
`;
