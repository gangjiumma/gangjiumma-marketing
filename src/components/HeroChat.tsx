"use client";

import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const DOWNLOAD_URL = "https://gangjiumma.github.io/gangjiumma_app_download/";
// 히어로 폰 목업 영상 (강아지·고양이·알러지 순환 재생)
const VIDEOS = ["/hero-puppy.mp4", "/hero-cat.mp4", "/hero-allergy.mp4"];
const POSTERS = ["/hero-puppy.jpg", "/hero-cat.jpg", "/hero-allergy.jpg"];

export default function HeroChat() {
  const [idx, setIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const next = () => {
    setLoaded(false);
    setIdx((i) => (i + 1) % VIDEOS.length);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-tint50 via-white to-white pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* 카피 */}
          <div className="text-center md:text-left">
            <p className="inline-flex items-center gap-1.5 text-sm md:text-base text-brand font-bold mb-4">
              <Sparkles size={16} strokeWidth={2.4} /> 반려동물 전용 AI · AnimAI
            </p>
            <h1 className="text-[2rem] md:text-5xl font-black text-ink-1 tracking-tighter leading-[1.18]">
              우리 아이를 학습 하는 AI에게
              <br />
              물어보세요
            </h1>
            <p className="mt-5 md:mt-6 text-base md:text-lg text-ink-3 font-medium leading-relaxed">
              처음 키워서 잘 모를 때도, 갑자기 궁금한 것도,
              <br className="hidden md:block" /> 우리 동네 미용실·병원 물어볼 때도 —{" "}
              <span className="text-ink-1 font-bold">우리 아이만을 위한 맞춤 답변.</span>
            </p>
           
            <div className="mt-8 md:mt-10">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-brand text-white font-extrabold text-base md:text-xl rounded-2xl shadow-brand hover:bg-brand-dark hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200"
              >
                AnimAI 앱 다운로드 <ArrowRight size={20} />
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
                  poster={POSTERS[idx]}
                  preload="auto"
                  autoPlay
                  muted
                  playsInline
                  onPlaying={() => setLoaded(true)}
                  onLoadedData={() => setLoaded(true)}
                  onEnded={next}
                  className="h-full w-full object-cover"
                />
                {/* 영상 준비 전 로딩 표시 (포스터 위에) */}
                {!loaded && (
                  <div className="absolute inset-0 flex items-end justify-center pb-10 bg-gradient-to-t from-black/15 to-transparent">
                    <div className="flex items-center gap-2 rounded-full bg-white/85 px-3.5 py-2 shadow-sm backdrop-blur-sm">
                      <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-brand/30 border-t-brand" />
                      <span className="text-xs font-bold text-ink-2">불러오는 중</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
