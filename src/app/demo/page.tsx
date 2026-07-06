'use client';

// ═════════════════════════════════════════════════════════════════════════
// /demo — AnimAI Biz 데모 진입 페이지 (2026.07.05)
//
// 목적:
//   마케팅 팀이 전화·이메일로 안내하는 URL. 사장님이 진입 →
//   [돌봄센터] or [미용실] 카드 선택 → 진짜 대시보드에서 자유롭게 체험.
//
// 흐름:
//   1. 사장님 카드 탭
//   2. gangji-demo Edge에 { type } POST → access_token/refresh_token
//   3. gangji-manage.kr/bridge?at=&rt=&app=1&demo=1 리다이렉트
//   4. 대시보드 자동 로그인 완성 + 데모 배너 노출
//
// 안전장치:
//   · password는 Edge secret에만 (프론트는 anon key만 사용)
//   · 저장한 내용은 매일 새벽 KST 04:00 자동 초기화 (pg_cron)
// ═════════════════════════════════════════════════════════════════════════

import { useState } from 'react';
import {
  Heart,
  Scissors,
  Loader2,
  PartyPopper,
  ChevronRight,
  Info,
  AlertCircle,
} from 'lucide-react';

// ⚠️ 지침서 계승 — 마케팅 사이트는 이 URL·anon key 사용 (v2.0/v3.0 확정값)
const EDGE_URL = 'https://druwwrpunuxpvjbsrcls.supabase.co/functions/v1/gangji-demo/session';
const SB_ANON =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRydXd3cnB1bnV4cHZqYnNyY2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3NTA4NzEsImV4cCI6MjA4NzMyNjg3MX0.EMsDe8KoYotGTPirlutKJERBb5EF1vmNs449Xihd9N0';
const BRIDGE_URL = 'https://gangji-manage.kr/bridge';

type DemoType = 'care' | 'grooming';

function friendlyError(code?: string): string {
  if (code === 'demo_not_configured') return '데모가 아직 준비 중이에요. 잠시만 기다려주세요.';
  if (code === 'sign_in_failed') return '데모 접속에 실패했어요. 잠시 후 다시 시도해주세요.';
  if (code === 'invalid_type') return '잘못된 요청이에요.';
  return '데모 준비 중 문제가 생겼어요. 잠시 후 다시 시도해주세요.';
}

export default function DemoPage() {
  const [busy, setBusy] = useState<DemoType | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function startDemo(type: DemoType) {
    setBusy(type);
    setErr(null);
    try {
      const res = await fetch(EDGE_URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          apikey: SB_ANON,
          authorization: `Bearer ${SB_ANON}`,
        },
        body: JSON.stringify({ type }),
      });
      const data = await res.json().catch(() => ({}));
      if (!data.ok || !data.access_token || !data.refresh_token) {
        setErr(friendlyError(data.error));
        setBusy(null);
        return;
      }
      const bridge = `${BRIDGE_URL}?at=${encodeURIComponent(data.access_token)}&rt=${encodeURIComponent(
        data.refresh_token,
      )}&app=1&demo=1`;
      window.location.href = bridge;
    } catch (e) {
      console.error('[demo] fetch error', e);
      setErr('네트워크 문제로 데모를 시작하지 못했어요. 잠시 후 다시 시도해주세요.');
      setBusy(null);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-tint50 via-white to-brand-tint50">
      <div className="mx-auto max-w-2xl px-6 py-14 md:py-20">
        {/* 브랜드 헤더 */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-[12.5px] font-bold text-brand shadow-sm ring-1 ring-brand-tint200">
            <PartyPopper className="h-3.5 w-3.5" />
            AnimAI Biz 데모
          </div>
          <h1 className="mt-6 text-[26px] font-extrabold tracking-tight text-ink-1 md:text-[34px]">
            어떤 업종 데모를 볼까요?
          </h1>
          <p className="mt-3 text-[14px] leading-relaxed text-ink-3 md:text-[15px]">
            사장님 업종에 맞춘 데모 매장을 골라주세요.
            <br />
            <span className="font-semibold text-ink-2">
              진짜 대시보드에서 실제로 만져볼 수 있어요.
            </span>
          </p>
        </div>

        {/* 2카드 선택 */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {/* 돌봄센터 */}
          <button
            onClick={() => startDemo('care')}
            disabled={busy !== null}
            className="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-brand-tint200 bg-white p-6 text-left shadow-sm transition hover:border-brand-tint300 hover:shadow-md disabled:opacity-60 md:p-7"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-tint50">
              <Heart className="h-7 w-7 text-brand" strokeWidth={2.2} />
            </span>
            <h2 className="mt-4 text-[19px] font-extrabold text-ink-1">돌봄센터 데모</h2>
            <p className="mt-1 text-[12.5px] font-medium text-ink-3">유치원 · 호텔 · 훈련소</p>
            <ul className="mt-4 space-y-1.5 text-[12.5px] leading-relaxed text-ink-2">
              <li>· 오늘 등원한 강쥐 명단 자동 로드</li>
              <li>· 명단형 AI 알림장 (사진 · 컨디션 · 특이사항)</li>
              <li>· 월권 · 주권 · 일권 이용권 관리</li>
              <li>· 매출 · AI 마케팅 · 통계</li>
            </ul>
            <div className="mt-6 flex w-full items-center justify-center gap-1.5 rounded-2xl bg-brand px-5 py-3.5 text-[14px] font-extrabold text-white shadow-sm transition group-hover:shadow-md group-hover:brightness-105">
              {busy === 'care' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  데모 준비 중…
                </>
              ) : (
                <>
                  데모 시작하기
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </>
              )}
            </div>
          </button>

          {/* 미용실 */}
          <button
            onClick={() => startDemo('grooming')}
            disabled={busy !== null}
            className="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-emerald-200 bg-white p-6 text-left shadow-sm transition hover:border-emerald-300 hover:shadow-md disabled:opacity-60 md:p-7"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">
              <Scissors className="h-7 w-7 text-emerald-600" strokeWidth={2.2} />
            </span>
            <h2 className="mt-4 text-[19px] font-extrabold text-ink-1">미용실 데모</h2>
            <p className="mt-1 text-[12.5px] font-medium text-ink-3">강쥐살롱 · Before/After</p>
            <ul className="mt-4 space-y-1.5 text-[12.5px] leading-relaxed text-ink-2">
              <li>· 오늘 예약 · 시술 관리</li>
              <li>· 미용 AI 알림장 (Before/After 자동 정리)</li>
              <li>· 횟수권 · 회당 단가 자동 계산</li>
              <li>· 매출 · AI 마케팅 · 통계</li>
            </ul>
            <div className="mt-6 flex w-full items-center justify-center gap-1.5 rounded-2xl bg-emerald-600 px-5 py-3.5 text-[14px] font-extrabold text-white shadow-sm transition group-hover:shadow-md group-hover:brightness-105">
              {busy === 'grooming' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  데모 준비 중…
                </>
              ) : (
                <>
                  데모 시작하기
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </>
              )}
            </div>
          </button>
        </div>

        {/* 안내 */}
        <div className="mt-8 flex items-start gap-2.5 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <p className="text-[12.5px] leading-relaxed text-amber-800">
            <b>참고:</b> 자유롭게 이것저것 눌러보세요. 예약 추가 · 알림장 발송 · 매출 편집 등 모든
            기능을 실제로 사용하실 수 있어요.
            <br />
            <b>저장한 내용은 매일 새벽에 자동으로 초기화돼요</b> (여러 사장님이 함께 둘러보시니까요
            🐾).
          </p>
        </div>

        {/* 에러 */}
        {err && (
          <div className="mt-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
            <p className="text-[13px] font-bold text-red-700">{err}</p>
          </div>
        )}

        {/* 소개 페이지 링크 */}
        <div className="mt-10 text-center">
          <a
            href="https://www.animai.kr/business"
            className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-ink-3 transition hover:text-brand"
          >
            먼저 AnimAI Biz 소개부터 보기
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
