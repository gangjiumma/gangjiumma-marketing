// src/lib/supabase.ts
// AnimAI 마케팅 사이트 ↔ Supabase 연결 (소통 창구 /voice 용)
// 앱과 동일한 Supabase 프로젝트(druwwrpunuxpvjbsrcls)를 재사용한다.
//
// .env.local 에 아래 두 줄 필요 (Vercel 환경변수에도 동일하게 등록):
//   NEXT_PUBLIC_SUPABASE_URL=https://druwwrpunuxpvjbsrcls.supabase.co
//   NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key>

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // 빌드/런타임에서 환경변수 빠졌을 때 바로 알 수 있게
  console.warn(
    "[supabase] NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY 가 설정되지 않았습니다. .env.local 과 Vercel 환경변수를 확인하세요."
  );
}

export const supabase = createClient(
  // 빌드(prerender) 시점에 환경변수가 없어도 크래시하지 않도록 placeholder fallback
  // (실서비스에선 Vercel 환경변수가 주입되므로 실제 값 사용됨)
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-anon-key",
  {
    auth: { persistSession: false }, // 마케팅 사이트는 로그인 없음
  }
);

// 소통 창구 글 타입
export type FeedbackEntry = {
  id: string;
  nickname: string;
  title: string;
  content: string;
  likes: number;
  created_at: string;
};
