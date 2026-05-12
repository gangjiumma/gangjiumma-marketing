"use client";

interface PhoneMockupProps {
  videoSrc: string;
  className?: string;
}

export default function PhoneMockup({
  videoSrc,
  className = "",
}: PhoneMockupProps) {
  return (
    <div className={`relative mx-auto ${className}`}>
      {/* 휴대폰 외부 프레임 — 검정 베젤 */}
      <div
        className="relative mx-auto bg-ink-1 rounded-[3rem] p-2.5 shadow-elevated"
        style={{
          width: "min(300px, 70vw)",
          aspectRatio: "10 / 20.5",
        }}
      >
        {/* 휴대폰 내부 스크린 */}
        <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] bg-white">
          {/* 영상 */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* 상단 노치/펀치홀 (Android 스타일 — 가운데 작은 카메라) */}
          <div
            className="absolute top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5
                       bg-ink-1 rounded-full z-10"
            aria-hidden
          />
        </div>

        {/* 사이드 버튼 디테일 (오른쪽) */}
        <div
          className="absolute right-[-2px] top-24 w-[3px] h-12 bg-ink-2 rounded-r-sm"
          aria-hidden
        />
        <div
          className="absolute left-[-2px] top-20 w-[3px] h-8 bg-ink-2 rounded-l-sm"
          aria-hidden
        />
        <div
          className="absolute left-[-2px] top-32 w-[3px] h-14 bg-ink-2 rounded-l-sm"
          aria-hidden
        />
      </div>
    </div>
  );
}
