"use client";

import { X, ArrowRight, PawPrint } from "lucide-react";

const APPLY_URL = "https://gangji-manage.kr/apply";
const DOWNLOAD_URL = "https://gangjiumma.github.io/gangjiumma_app_download/";

export default function BizSignupModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-5 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm rounded-3xl bg-white p-7 shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="닫기"
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={22} />
        </button>

        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-tint50">
            <PawPrint size={26} className="text-brand" strokeWidth={2.4} />
          </div>
          <h3 className="text-lg font-black leading-snug text-slate-900">
            강쥐 사장님 대시보드는
            <br />
            강쥐엄마 앱 회원가입이 필요해요
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            앱에서 우리 가게(사장님)로 가입하면
            <br />
            대시보드를 바로 쓸 수 있어요.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-2.5">
          <a
            href={APPLY_URL}
            className="flex items-center justify-center gap-1.5 rounded-2xl bg-brand py-3.5 font-black text-white transition-opacity hover:opacity-90"
          >
            이미 가입했어요 — 입점 신청하기 <ArrowRight size={17} />
          </a>
          <a
            href={DOWNLOAD_URL}
            className="flex items-center justify-center gap-1.5 rounded-2xl border-[1.5px] border-slate-200 bg-white py-3.5 font-bold text-slate-700 transition-colors hover:border-brand hover:bg-brand-tint50"
          >
            아직이요 — 앱 먼저 설치할게요
          </a>
        </div>
      </div>
    </div>
  );
}
