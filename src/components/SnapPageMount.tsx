"use client";

import { useEffect } from "react";

/**
 * 이 컴포넌트가 마운트된 페이지에만 스냅 스크롤 활성화
 * (globals.css의 html.snap-page 셀렉터와 연동)
 *
 * 사용법:
 *   메인 page.tsx 같은 곳에서:
 *   <SnapPageMount />
 *
 * 모바일(max-width: 767px)에서만 스냅 동작
 * proximity 모드 — 가까울 때만 자석처럼 끌림 (강제 X)
 */
export default function SnapPageMount() {
  useEffect(() => {
    document.documentElement.classList.add("snap-page");
    return () => {
      document.documentElement.classList.remove("snap-page");
    };
  }, []);

  return null;
}
