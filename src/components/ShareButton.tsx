"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "AnimAI - 우리 아이만의 AI 비서",
      text: "강쥐엄마가 AnimAI로 바뀌었어요. 강아지·고양이 모두 함께해요 🐾",
      url: typeof window !== "undefined" ? window.location.href : "https://www.animai.kr/renew",
    };

    try {
      if (typeof navigator !== "undefined" && "share" in navigator && navigator.share) {
        // 모바일·최신 브라우저 = 네이티브 공유 시트
        await navigator.share(shareData);
      } else if (typeof navigator !== "undefined" && navigator.clipboard) {
        // 폴백 = 클립보드 복사 + 2초 안내
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // 유저가 공유 취소한 경우 무시
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 rounded-2xl bg-white border-2 border-biz text-biz text-base font-black hover:bg-biz-tint50 transition-colors"
    >
      <Share2 size={19} strokeWidth={2.4} />
      <span>{copied ? "링크가 복사됐어요!" : "지인 집사에게 추천하기"}</span>
    </button>
  );
}
