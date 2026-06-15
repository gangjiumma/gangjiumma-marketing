import type { Metadata } from "next";
import RetireCountdown from "@/components/RetireCountdown";
import FunButtons from "@/components/FunButtons";

export const metadata: Metadata = {
  title: "김해원 퇴사까지 🐾",
  description: "지금까지 고생 많으셨습니다.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function Page() {
  return (
    <main className="min-h-[100svh] bg-brand-tint50 flex items-center justify-center px-5 py-20 md:py-28">
      <div className="w-full max-w-3xl mx-auto text-center">
        {/* 라벨 */}
        <p className="text-sm md:text-base font-bold text-brand mb-4 tracking-wide">
          2026. 06. 19 · 오후 5시 (KST)
        </p>

        {/* Hero */}
        <h1 className="text-4xl md:text-6xl font-black text-ink-1 tracking-tightest leading-tight mb-12 md:mb-16">
          김해원 퇴사까지
        </h1>

        {/* 카운트다운 */}
        <RetireCountdown />

        {/* 응원 문구 */}
        <div className="mt-14 md:mt-20">
          <p className="text-2xl md:text-4xl font-black text-ink-1 tracking-tight leading-snug">
            지금까지 <span className="text-brand">고생 많으셨습니다.</span>
          </p>
          <p className="mt-4 md:mt-5 text-base md:text-lg text-ink-3 leading-relaxed">
            매일 누군가를 돌보느라 애쓴 당신, 이제 조금은 당신을 위한 시간이에요. 🐾
          </p>
        </div>

        {/* 재밌는 버튼 */}
        <div className="mt-14 md:mt-16">
          <FunButtons />
        </div>

        {/* 푸터 */}
        <p className="mt-16 md:mt-20 text-sm text-ink-4">
          made with ❤️ by 남편
        </p>
      </div>
    </main>
  );
}
