"use client";

import { useEffect, useState } from "react";
import {
  CalendarCheck,
  CreditCard,
  NotebookPen,
  MessageCircle,
  Camera,
  Sparkles,
  ArrowRight,
  Gift,
  Ticket,
  Bell,
  BookHeart,
  Bot,
} from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { ScrollProgressBar } from "@/components/ScrollIndicator";

// ✏️ 입점 신청 페이지 (대시보드 /apply — 구현 후 연결)
const APPLY_URL = "https://gangji-manage.kr/apply";

// ✏️ 사진/스크린샷 슬롯 — public/business/ 에 파일만 넣으면 자동 교체.
//    여러 장 넣으면 한 섹션 안에서 자동 슬라이드(크로스페이드). 1장만 넣어도 됩니다.
//    파일이 하나도 없으면 CSS 더미/그라데이션 fallback 이 보입니다.
const PHOTO = {
  heroDash: [
    "/business/dash-1.png", // 1·2장: 대시보드 스크린샷 (여러 장 가능)
    "/business/dash-2.png",
    "/business/dash-3.png",
  ],
  diaryDog: [
    "/business/diary-1.jpg", // 3장: 알림장 강쥐 사진 (여러 장 가능)
    "/business/diary-2.jpg",
  ],
};

export default function BusinessPage() {
  // 앱에서 입점신청→가입 후 넘어온 사람을 위한 진입 게이트 모달 (매 진입 시 노출)
  const [showIntro, setShowIntro] = useState(false);
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

  // 스크롤 진입 시 각 섹션 애니메이션 재생 (나갔다 들어오면 재생)
  useEffect(() => {
    const timers = new WeakMap<Element, number>();
    const gatherDelay: Record<string, number> = { "bz-s1": 2600, "bz-s2": 1400 };
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const el = e.target as HTMLElement;
          if (e.isIntersecting) {
            el.classList.add("bz-play");
            const gd = gatherDelay[el.id];
            if (gd) {
              const t = window.setTimeout(() => el.classList.add("bz-gathered"), gd);
              timers.set(el, t);
            }
          } else {
            el.classList.remove("bz-play", "bz-gathered");
            const t = timers.get(el);
            if (t) window.clearTimeout(t);
          }
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll(".bz-anim").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: BZ_CSS }} />
      <ScrollProgressBar />

      {showIntro && (
        <div className="bz-introbg" onClick={dismissIntro}>
          <div className="bz-intro" onClick={(e) => e.stopPropagation()}>
            <div className="bz-intrologo">🐾</div>
            <div className="bz-introttl">강쥐엄마 사장님</div>
            <p className="bz-introsub">
              펫 유치원·미용실을 위한
              <br />
              예약·결제·고객 통합 대시보드
            </p>
            <a className="bz-introbtn bz-introprimary" href={APPLY_URL}>
              입점 바로 신청하기 <ArrowRight size={18} />
            </a>
            <button className="bz-introbtn bz-introghost" onClick={dismissIntro}>
              프로그램 먼저 둘러보기
            </button>
          </div>
        </div>
      )}

      {/* ───────── 1 · HERO : 흩어진 도구 → 대시보드로 모임 ───────── */}
      <section className="bz-sec bz-hero bz-anim" id="bz-s1">
        <span className="bz-num">01 / 06</span>
        <div className="bz-wrap bz-grid2">
          <div>
            <FadeInSection>
              <span className="bz-eyebrow">펫 유치원·미용실 사장님께</span>
            </FadeInSection>
            <FadeInSection delay={100}>
              <h1 className="bz-h1">
                예약부터 결제, 매출 관리까지
                <br />
                <span className="bz-accent">몇 개의 프로그램</span>을 쓰고 계신가요?
              </h1>
            </FadeInSection>
            <FadeInSection delay={200}>
              <p className="bz-lead">
                예약·결제·고객·홍보가 제각기 흩어져 있습니다.
                <br />
                강쥐엄마는 이 모두를 한 곳에 모았습니다. <span className="bz-free">무료로 시작하세요.</span>
              </p>
            </FadeInSection>
            <FadeInSection delay={300}>
              <a className="bz-btn" href={APPLY_URL}>
                무료로 입점 신청하기 <ArrowRight size={18} />
              </a>
              <div className="bz-trust">
                <span>
                  전국 <b>17,000곳</b> 펫 시설 등록
                </span>
                <span>
                  <b>펫 특화</b> 올인원 솔루션
                </span>
              </div>
            </FadeInSection>
          </div>

          <div className="bz-stage">
            <div className="bz-tool bz-t1">
              <span className="bz-dot" style={{ background: "#dcfce7" }}>
                <CalendarCheck size={15} color="#16a34a" />
              </span>
              예약 프로그램
            </div>
            <div className="bz-tool bz-t2">
              <span className="bz-dot" style={{ background: "#dbeafe" }}>
                <CreditCard size={15} color="#2563eb" />
              </span>
              포스기 결제
            </div>
            <div className="bz-tool bz-t3">
              <span className="bz-dot" style={{ background: "#fef9c3" }}>
                <NotebookPen size={15} color="#ca8a04" />
              </span>
              고객 장부
            </div>
            <div className="bz-tool bz-t4">
              <span className="bz-dot" style={{ background: "#fce7f3" }}>
                <MessageCircle size={15} color="#db2777" />
              </span>
              카톡 알림장
            </div>
            <div className="bz-tool bz-t5">
              <span className="bz-dot" style={{ background: "#ede9fe" }}>
                <Camera size={15} color="#7c3aed" />
              </span>
              인스타 홍보
            </div>
            <div className="bz-herodash">
              <DashboardMock images={PHOTO.heroDash} />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 2 · 따로 노는 시스템 → 한 화면 + 토스 ───────── */}
      <section className="bz-sec bz-anim" id="bz-s2">
        <span className="bz-num">02 / 06</span>
        <div className="bz-wrap bz-grid2">
          <div>
            <FadeInSection>
              <span className="bz-eyebrow">문제 ① · 흩어진 운영 시스템</span>
            </FadeInSection>
            <FadeInSection delay={100}>
              <h2 className="bz-h2">
                예약과 결제, 고객 관리가
                <br />
                서로 따로 움직입니다.
              </h2>
            </FadeInSection>
            <FadeInSection delay={200}>
              <p className="bz-lead">
                강쥐엄마에서는 <b>예약부터 결제, 정산까지 한 화면</b>에서 이어집니다. 토스 단말기와
                연동되어 이용권·선불권 차감도 자동으로 처리됩니다.
              </p>
            </FadeInSection>
          </div>

          <div className="bz-merge">
            <div className="bz-chip bz-c1">
              <CalendarCheck size={15} /> 예약 툴
            </div>
            <div className="bz-chip bz-c2">
              <CreditCard size={15} /> 포스기
            </div>
            <div className="bz-chip bz-c3">
              <NotebookPen size={15} /> 장부
            </div>
            <div className="bz-mergedash">
              <DashboardMock images={PHOTO.heroDash} variant="merge" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 3 · 알림장 노가다 → 보내기 한 번 ───────── */}
      <section className="bz-sec bz-surface bz-anim" id="bz-s3">
        <span className="bz-num">03 / 06</span>
        <div className="bz-wrap bz-grid2">
          <div className="bz-center">
            <div className="bz-phone">
              <div className="bz-screen">
                <div className="bz-phtop">🐶 콩이의 오늘 알림장</div>
                <div className="bz-phphoto">
                  <ImgFade
                    images={PHOTO.diaryDog}
                    className="bz-phfade"
                    imgClassName="bz-fadeimg"
                  />
                </div>
                <div className="bz-phbody">
                  <div className="bz-phttl">오늘 콩이는요 ✨</div>
                  <div className="bz-ln" />
                  <div className="bz-ln" />
                  <div className="bz-ln bz-s" />
                  <div className="bz-phsend">✓ 보호자님께 전송 완료</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <FadeInSection>
              <span className="bz-eyebrow">문제 ② · 반복되는 알림장 작업</span>
            </FadeInSection>
            <FadeInSection delay={100}>
              <h2 className="bz-h2">
                사진을 찍고, 알림장을 쓰고,
                <br />
                <span className="bz-accent">매번 직접 보내고 계십니다.</span>
              </h2>
            </FadeInSection>
            <FadeInSection delay={200}>
              <p className="bz-lead">
                사진만 올리면 <b>AI가 알림장을 작성</b>하고, 전송 한 번으로 고객별 알림장 페이지가
                자동으로 생성·전달됩니다.
              </p>
            </FadeInSection>
            <div className="bz-flow">
              <span className="bz-fchip bz-f1">사진</span>
              <ArrowRight size={16} className="bz-farr" />
              <span className="bz-fchip bz-f2">AI 작성</span>
              <ArrowRight size={16} className="bz-farr" />
              <span className="bz-fchip bz-fwin bz-f3">보내기 ✓</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 4 · 마케팅 + 동네 수요통계 ───────── */}
      <section className="bz-sec bz-anim" id="bz-s4">
        <span className="bz-num">04 / 06</span>
        <div className="bz-wrap bz-grid2">
          <div>
            <FadeInSection>
              <span className="bz-eyebrow">문제 ③④ · 마케팅의 시간과 정보</span>
            </FadeInSection>
            <FadeInSection delay={100}>
              <h2 className="bz-h2">
                운영만으로 하루가 빠듯한데,
                <br />
                광고까지 <span className="bz-accent">직접</span> 만들기는 어렵습니다.
              </h2>
            </FadeInSection>
            <FadeInSection delay={200}>
              <p className="bz-lead">
                <b>AI가 광고와 인스타그램 게시글을 자동으로 작성</b>합니다. 우리 동네 고객의 수요
                데이터를 바탕으로 이벤트와 한 달 운영 계획까지 제안합니다.
              </p>
            </FadeInSection>
          </div>
          <FadeInSection delay={150}>
            <div className="bz-gencard">
              <span className="bz-genic">
                <Sparkles size={14} color="#3b82f6" />
              </span>
              "여름 모질관리 이벤트" 광고
              <span className="bz-genstat">생성됨</span>
            </div>
            <div className="bz-gencard">
              <span className="bz-genic">
                <Camera size={14} color="#3b82f6" />
              </span>
              인스타 게시글 초안 3개
              <span className="bz-genstat">준비됨</span>
            </div>
            <div className="bz-browser" style={{ marginTop: 14 }}>
              <div className="bz-bar">
                <i />
                <i />
                <i />
                <span className="bz-url">우리 동네 수요</span>
              </div>
              <div className="bz-demand">
                <div className="bz-demandttl">이번 달 우리 동네 관심사 TOP</div>
                <div className="bz-barsm">
                  <span className="bz-hi" style={{ height: "92%" }} />
                  <span style={{ height: "70%" }} />
                  <span style={{ height: "55%" }} />
                  <span style={{ height: "44%" }} />
                  <span style={{ height: "34%" }} />
                </div>
                <div className="bz-demandlbl">
                  <span>피부·모질</span>
                  <span>관절</span>
                  <span>치아</span>
                  <span>다이어트</span>
                  <span>호텔</span>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ───────── 5 · 손님이 앱 깔면 (덤) ───────── */}
      <section className="bz-sec bz-surface" id="bz-s5">
        <span className="bz-num">05 / 06</span>
        <div className="bz-wrap">
          <div className="bz-center">
            <FadeInSection>
              <span className="bz-eyebrow">강쥐엄마 앱 고객이라면</span>
            </FadeInSection>
            <FadeInSection delay={100}>
              <h2 className="bz-h2">
                고객이 앱을 사용하면,
                <br />
                운영이 한층 <span className="bz-accent">수월해집니다.</span>
              </h2>
            </FadeInSection>
          </div>
          <div className="bz-dumgrid">
            {[
              {
                Icon: Ticket,
                h: "이용권·구매 이력 자동 관리",
                p: "고객 앱에 잔여 횟수와 구매 내역이 그대로 표시됩니다.",
              },
              {
                Icon: Bell,
                h: "다음 일정 자동 알림",
                p: "미용 주기와 다음 예약을 고객 앱이 먼저 안내해 재방문으로 이어집니다.",
              },
              {
                Icon: BookHeart,
                h: "알림장 기록 보관",
                p: "전송한 알림장이 고객의 일기장에 쌓여, 우리 매장이 추억으로 남습니다.",
              },
              {
                Icon: Bot,
                h: "문의 AI 1차 응대",
                p: "고객 문의에 AI가 먼저 응대해, 영업시간 외에도 놓치지 않습니다.",
              },
            ].map((d, i) => (
              <FadeInSection key={i} delay={i * 80}>
                <div className="bz-dumcard">
                  <div className="bz-dumic">
                    <d.Icon size={20} color="#3b82f6" />
                  </div>
                  <div>
                    <div className="bz-dumh">{d.h}</div>
                    <div className="bz-dump">{d.p}</div>
                  </div>
                </div>
              </FadeInSection>
            ))}
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
                지금은 베이직까지, <span className="bz-free">전부 무료입니다.</span>
              </h2>
            </FadeInSection>
          </div>
          <FadeInSection delay={150}>
            <div className="bz-freebar">
              <Gift size={22} color="#ff6b35" style={{ flex: "none" }} />
              <span>
                <b>~7/31까지 베이직 기능을 전부 무료로 제공합니다.</b> 이후에도{" "}
                <b>결제·예약 관리 대시보드는 계속 무료</b>로 이용하실 수 있습니다. AI 기능과 앱
                연동이 필요해지면, 그때 월 단위로 업그레이드하시면 됩니다.
              </span>
            </div>
            <div className="bz-ptable">
              <div className="bz-pcard">
                <div className="bz-pn">라이트</div>
                <div className="bz-pp bz-free">무료</div>
                <div className="bz-pu">계속 무료</div>
                <div className="bz-pd">
                  예약·고객 관리
                  <br />
                  토스 결제 연동
                  <br />
                  예약 알림톡
                  <br />
                  입점 노출
                </div>
              </div>
              <div className="bz-pcard">
                <div className="bz-pn">미니</div>
                <div className="bz-pp">
                  30,000<span className="bz-won">원</span>
                </div>
                <div className="bz-pu">하루 1,000원 꼴</div>
                <div className="bz-pd">
                  라이트 +<br />
                  매출 관리
                  <br />
                  수요 통계
                  <br />
                  할인쿠폰
                </div>
              </div>
              <div className="bz-pcard bz-hot">
                <span className="bz-badge">추천</span>
                <div className="bz-pn">베이직</div>
                <div className="bz-pp">
                  60,000<span className="bz-won">원</span>
                </div>
                <div className="bz-pu">하루 2,000원 꼴</div>
                <div className="bz-pd">
                  미니 +<br />
                  AI 알림장
                  <br />
                  AI 마케팅 풀세트
                  <br />
                  AI 실험실
                </div>
              </div>
              <div className="bz-pcard bz-soon">
                <span className="bz-badge bz-bsoon">출시 예정</span>
                <div className="bz-pn">프로</div>
                <div className="bz-pp">
                  90,000<span className="bz-won">원</span>
                </div>
                <div className="bz-pu">하루 3,000원 꼴</div>
                <div className="bz-pd">
                  베이직 +<br />
                  전담 AI 에이전트
                  <br />
                  매일 매출 보고
                  <br />
                  담당 직원 배정
                </div>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={250}>
            <div className="bz-center" style={{ marginTop: 36 }}>
              <a className="bz-btn bz-btnlg" href={APPLY_URL}>
                무료로 입점 신청하기 <ArrowRight size={18} />
              </a>
              <p className="bz-finalnote">앱 계정으로 신청하시면, 1~2일 검수 후 문자로 안내드립니다.</p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}

// 자동 크로스페이드 슬라이더 — 여러 장이면 순환, 1장이면 정지, 전부 실패면 onAllFail
function ImgFade({
  images,
  interval = 3800,
  className,
  imgClassName,
  onAllFail,
}: {
  images: string[];
  interval?: number;
  className?: string;
  imgClassName?: string;
  onAllFail?: () => void;
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
    <div className={className} style={{ position: "relative" }}>
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src + i}
          src={src}
          alt=""
          onError={() => setFailed((f) => (f.includes(i) ? f : [...f, i]))}
          className={imgClassName}
          style={{ opacity: i === idx && !failed.includes(i) ? 1 : 0 }}
        />
      ))}
    </div>
  );
}

// 대시보드 미니 목업 — 스크린샷 있으면 슬라이더, 없으면 CSS 더미
function DashboardMock({
  images,
  variant,
}: {
  images: string[];
  variant?: "merge";
}) {
  const [allFailed, setAllFailed] = useState(false);
  return (
    <div className="bz-browser">
      <div className="bz-bar">
        <i />
        <i />
        <i />
        <span className="bz-url">
          {variant === "merge" ? "예약 · 결제 · 정산" : "gangji-manage.kr"}
        </span>
      </div>

      {!allFailed ? (
        <ImgFade
          images={images}
          className="bz-shotwrap"
          imgClassName="bz-fadeimg"
          onAllFail={() => setAllFailed(true)}
        />
      ) : (
        <div className="bz-dash">
          <div className="bz-side">
            <div className="bz-biz">
              {variant === "merge" ? "한 화면" : "마음이네유치원"}
              <small>
                {variant === "merge" ? "예약→결제→정산" : "인천 연수구 · BASIC"}
              </small>
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

// ───────────────────────── 스타일 (일반 CSS, prefix bz-) ─────────────────────────
const BZ_CSS = `
.bz-sec{min-height:100vh;display:flex;align-items:center;padding:72px 24px;position:relative;overflow:hidden}
.bz-wrap{max-width:1080px;margin:0 auto;width:100%}
.bz-grid2{display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:center}
@media(max-width:860px){.bz-grid2{grid-template-columns:1fr;gap:36px}}
.bz-num{position:absolute;top:30px;right:28px;font-size:12px;font-weight:700;color:#94a3b8;letter-spacing:.06em}
.bz-center{text-align:center}
.bz-eyebrow{font-size:13px;font-weight:700;color:#3b82f6;margin-bottom:16px;display:inline-block}
.bz-eyebrow.bz-warm{color:#ff6b35}
.bz-h1{font-size:clamp(30px,5.4vw,56px);font-weight:800;letter-spacing:-.04em;line-height:1.16;color:#0f172a}
.bz-h2{font-size:clamp(26px,4.2vw,42px);font-weight:800;letter-spacing:-.035em;line-height:1.22;color:#0f172a}
.bz-lead{font-size:clamp(15px,1.9vw,19px);color:#64748b;margin-top:18px;max-width:440px;font-weight:500}
.bz-lead b{color:#0f172a;font-weight:700}
.bz-accent{color:#3b82f6}
.bz-free{color:#ff6b35;font-weight:800}
.bz-btn{display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:17px;padding:16px 32px;border-radius:16px;cursor:pointer;text-decoration:none;transition:.15s;background:#ff6b35;color:#fff;box-shadow:0 8px 24px rgba(255,107,53,.28);margin-top:32px}
.bz-btn:hover{background:#e55a2b;transform:translateY(-1px)}
.bz-btnlg{font-size:18px;padding:18px 40px;margin-top:0}
.bz-trust{margin-top:26px;display:flex;gap:18px;flex-wrap:wrap;color:#64748b;font-size:13px;font-weight:600}
.bz-trust b{color:#0f172a}
.bz-finalnote{color:#94a3b8;font-size:13px;margin-top:13px}

.bz-hero{background:linear-gradient(180deg,#eff6ff,#fff 72%)}

/* sec1 hero gather */
.bz-stage{position:relative;height:400px}
.bz-tool{position:absolute;background:#fff;border:1px solid #e8edf3;border-radius:16px;padding:12px 15px;box-shadow:0 10px 28px rgba(15,23,42,.09);font-weight:700;font-size:13px;color:#334155;display:flex;align-items:center;gap:9px;opacity:0;transform:translateY(10px) scale(.92);transition:opacity .8s ease,transform 1s ease,left 1.2s ease,top 1.2s ease;white-space:nowrap}
.bz-dot{width:28px;height:28px;border-radius:8px;display:grid;place-items:center}
.bz-t1{top:6%;left:4%;transition-delay:0s}
.bz-t2{top:0;right:8%;transition-delay:.4s}
.bz-t3{top:40%;left:26%;transition-delay:.8s}
.bz-t4{bottom:20%;left:0;transition-delay:1.2s}
.bz-t5{bottom:4%;right:4%;transition-delay:1.6s}
.bz-play .bz-tool{opacity:1;transform:none}
.bz-play.bz-gathered .bz-tool{left:50%!important;top:44%!important;right:auto!important;bottom:auto!important;transform:translate(-50%,-50%) scale(.25)!important;opacity:0!important;transition-delay:0s!important}
.bz-herodash{position:absolute;top:44%;left:50%;transform:translate(-50%,-50%) scale(.9);opacity:0;transition:.9s ease;width:92%;max-width:380px}
.bz-play.bz-gathered .bz-herodash{opacity:1;transform:translate(-50%,-50%) scale(1)}

/* sec2 merge */
.bz-merge{position:relative;height:330px}
.bz-chip{position:absolute;background:#fff;border:1px solid #e8edf3;border-radius:13px;padding:11px 14px;font-weight:700;font-size:13px;color:#334155;display:flex;align-items:center;gap:8px;box-shadow:0 8px 22px rgba(15,23,42,.08);opacity:0;transition:opacity .7s ease,transform 1.1s ease,top 1.1s ease,left 1.1s ease}
.bz-c1{top:0;left:6%;transition-delay:0s}
.bz-c2{top:14%;right:4%;transition-delay:.3s}
.bz-c3{top:30%;left:22%;transition-delay:.6s}
.bz-play .bz-chip{opacity:1}
.bz-play.bz-gathered .bz-chip{top:50%!important;left:50%!important;right:auto!important;transform:translate(-50%,-50%) scale(.3);opacity:0;transition-delay:0s}
.bz-mergedash{position:absolute;bottom:0;left:50%;transform:translateX(-50%) scale(.92);opacity:0;transition:.9s ease;width:100%}
.bz-play.bz-gathered .bz-mergedash{opacity:1;transform:translateX(-50%) scale(1)}

/* sec3 flow */
.bz-surface{background:#f8fafc}
.bz-phone{width:210px;margin:0 auto;background:#0f172a;border-radius:32px;padding:10px;box-shadow:0 22px 56px rgba(15,23,42,.22)}
.bz-screen{background:#fff;border-radius:23px;overflow:hidden}
.bz-phtop{background:#3b82f6;color:#fff;padding:13px 15px;font-weight:700;font-size:13px}
.bz-phphoto{height:110px;position:relative;overflow:hidden;background:linear-gradient(135deg,#fde68a,#fca5a5)}
.bz-phfade{position:absolute;inset:0}
.bz-phbody{padding:13px}
.bz-phttl{font-weight:800;font-size:13px;margin-bottom:7px}
.bz-ln{height:6px;background:#eef2f7;border-radius:4px;margin:5px 0}
.bz-ln.bz-s{width:65%}
.bz-phsend{background:#e2e8f0;color:#94a3b8;text-align:center;padding:10px;border-radius:11px;font-weight:700;font-size:12px;margin-top:11px;transition:.6s ease}
.bz-play .bz-phsend{background:#3b82f6;color:#fff;transition-delay:1.1s}
.bz-flow{display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin-top:24px}
.bz-fchip{background:#fff;border:1px solid #e8edf3;border-radius:11px;padding:9px 13px;font-weight:600;font-size:13px;color:#64748b;opacity:.4;transform:scale(.96);transition:.5s ease}
.bz-play .bz-fchip{opacity:1;transform:none;color:#334155}
.bz-play .bz-f1{transition-delay:.2s}
.bz-play .bz-f2{transition-delay:.7s}
.bz-play .bz-f3{transition-delay:1.2s}
.bz-play .bz-fwin{background:#fff3ec;border-color:#ffd9c4;color:#e55a2b}
.bz-farr{color:#94a3b8}

/* sec4 */
.bz-gencard{background:#fff;border:1px solid #e8edf3;border-radius:13px;padding:13px 15px;font-weight:600;font-size:13px;color:#334155;display:flex;align-items:center;gap:9px;margin-bottom:10px;box-shadow:0 6px 18px rgba(15,23,42,.06)}
.bz-genic{width:24px;height:24px;border-radius:7px;background:#eff6ff;display:grid;place-items:center}
.bz-genstat{margin-left:auto;font-size:11px;font-weight:700;color:#3b82f6}

/* shared browser/dashboard */
.bz-browser{background:#fff;border:1px solid #e8edf3;border-radius:16px;overflow:hidden;box-shadow:0 22px 56px rgba(15,23,42,.13)}
.bz-bar{background:#f1f5f9;padding:10px 13px;display:flex;gap:6px;align-items:center;border-bottom:1px solid #e8edf3}
.bz-bar i{width:10px;height:10px;border-radius:50%;background:#cbd5e1}
.bz-url{margin-left:9px;font-size:11px;color:#94a3b8;font-weight:600}
.bz-shotimg{display:block;width:100%;height:auto}
.bz-shotwrap{position:relative;width:100%;aspect-ratio:16/10;background:#f8fafc;overflow:hidden}
.bz-fadeimg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;opacity:0;transition:opacity 1s ease}
.bz-demand{padding:13px 16px}
.bz-demandttl{font-size:11px;color:#64748b;font-weight:600;margin-bottom:8px}
.bz-barsm{height:54px;display:flex;align-items:flex-end;gap:7px}
.bz-barsm span{flex:1;background:#dbeafe;border-radius:4px 4px 0 0}
.bz-barsm span.bz-hi{background:#3b82f6}
.bz-demandlbl{display:flex;justify-content:space-between;font-size:9px;color:#94a3b8;margin-top:6px;font-weight:600}
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

/* sec5 dum */
.bz-dumgrid{display:grid;grid-template-columns:1fr 1fr;gap:13px;margin-top:32px}
@media(max-width:860px){.bz-dumgrid{grid-template-columns:1fr}}
.bz-dumcard{background:#fff;border:1px solid #e8edf3;border-radius:16px;padding:20px;display:flex;gap:13px;align-items:flex-start;height:100%}
.bz-dumic{flex:none;width:40px;height:40px;border-radius:11px;background:#eff6ff;display:grid;place-items:center}
.bz-dumh{font-weight:700;font-size:15px;margin-bottom:3px;color:#0f172a}
.bz-dump{font-size:13px;color:#64748b;line-height:1.45}

/* sec6 plans */
.bz-plans{background:linear-gradient(180deg,#fff,#eff6ff)}
.bz-freebar{background:#fff3ec;border:1px solid #ffd9c4;border-radius:16px;padding:16px 20px;margin:24px auto 30px;max-width:680px;font-weight:600;color:#334155;font-size:14px;display:flex;gap:11px;align-items:flex-start;line-height:1.5}
.bz-freebar b{color:#0f172a}
.bz-ptable{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
@media(max-width:860px){.bz-ptable{grid-template-columns:1fr 1fr}}
.bz-pcard{background:#fff;border:1px solid #e8edf3;border-radius:16px;padding:20px 16px;position:relative}
.bz-pcard.bz-hot{border:2px solid #3b82f6;box-shadow:0 12px 28px rgba(59,130,246,.15)}
.bz-pcard.bz-soon{opacity:.7}
.bz-pn{font-weight:700;font-size:14px;color:#334155}
.bz-pp{font-size:24px;font-weight:800;margin:7px 0 1px;color:#0f172a}
.bz-pp.bz-free{color:#ff6b35}
.bz-won{font-size:14px}
.bz-pu{font-size:11px;color:#94a3b8}
.bz-pd{font-size:12px;color:#64748b;margin-top:11px;line-height:1.65}
.bz-badge{position:absolute;top:-10px;left:16px;background:#3b82f6;color:#fff;font-size:10px;font-weight:700;padding:3px 9px;border-radius:7px}
.bz-badge.bz-bsoon{background:#e2e8f0;color:#64748b}

@media(prefers-reduced-motion:reduce){
  .bz-tool,.bz-chip,.bz-herodash,.bz-mergedash,.bz-fchip,.bz-phsend{transition:none!important}
}

/* intro gate modal */
.bz-introbg{position:fixed;inset:0;z-index:100;background:rgba(15,23,42,.55);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:24px;animation:bzfade .25s ease}
@keyframes bzfade{from{opacity:0}to{opacity:1}}
.bz-intro{background:#fff;border-radius:24px;padding:38px 30px;max-width:380px;width:100%;text-align:center;box-shadow:0 30px 80px rgba(15,23,42,.3);animation:bzpop .3s ease}
@keyframes bzpop{from{opacity:0;transform:translateY(14px) scale(.97)}to{opacity:1;transform:none}}
.bz-intrologo{font-size:40px;margin-bottom:10px}
.bz-introttl{font-size:22px;font-weight:800;color:#0f172a;letter-spacing:-.02em}
.bz-introsub{font-size:15px;color:#64748b;margin-top:12px;line-height:1.5;font-weight:500}
.bz-introbtn{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;font-weight:700;font-size:16px;padding:15px;border-radius:14px;cursor:pointer;text-decoration:none;border:none;transition:.15s}
.bz-introprimary{background:#ff6b35;color:#fff;margin-top:26px;box-shadow:0 8px 22px rgba(255,107,53,.28)}
.bz-introprimary:hover{background:#e55a2b}
.bz-introghost{background:#fff;color:#334155;border:1.5px solid #e8edf3;margin-top:10px}
.bz-introghost:hover{border-color:#3b82f6;color:#3b82f6}
`;
