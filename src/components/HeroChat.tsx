"use client";

import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const DOWNLOAD_URL = "https://gangjiumma.github.io/gangjiumma_app_download/";
const VIDEOS = ["/hero-puppy.mp4", "/hero-allergy.mp4"];

export default function HeroChat() {
  const [idx, setIdx] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-tint50 via-white to-white pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* 카피 */}
          <div className="text-center md:text-left">
            <p className="inline-flex items-center gap-1.5 text-sm md:text-base text-brand font-bold mb-4">
              <Sparkles size={16} strokeWidth={2.4} /> 강아지 전용 AI · 강쥐엄마
            </p>
            <h1 className="text-[2rem] md:text-5xl font-black text-ink-1 tracking-tighter leading-[1.18]">
              우리 아이를 아는 AI에게,
              <br />
              다 물어보세요
            </h1>
            <p className="mt-5 md:mt-6 text-base md:text-lg text-ink-3 font-medium leading-relaxed">
              처음 키워서 잘 모를 때도, 갑자기 궁금한 것도,
              <br className="hidden md:block" /> 우리 동네 미용실 물어볼 때도 —{" "}
              <span className="text-ink-1 font-bold">우리 아이만을 위한 답변.</span>
            </p>
            <p className="mt-4 inline-flex items-center gap-1.5 text-sm md:text-base text-brand font-bold">
              <Sparkles size={15} strokeWidth={2.4} /> 우리 아이만을 기억하는 강아지 전용 AI
            </p>
            <div className="mt-8 md:mt-10">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-brand text-white font-extrabold text-base md:text-xl rounded-2xl shadow-brand hover:bg-brand-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
              >
                강쥐엄마 앱 다운로드 <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* 영상 — 폰 목업, 콩이↔마음이 번갈아 재생 */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[290px]">
              <div className="relative overflow-hidden rounded-[2.6rem] border-[7px] border-ink-1 bg-ink-1 shadow-elevated aspect-[9/17.5]">
                <video
                  key={idx}
                  src={VIDEOS[idx]}
                  autoPlay
                  muted
                  playsInline
                  onEnded={() => setIdx((i) => (i + 1) % VIDEOS.length)}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
