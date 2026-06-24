// src/app/api/pet-guide/chat/route.ts
// 케이펫페어 수원 AI 가이드 챗봇 — Claude Haiku + 참가업체 169곳 데이터
import { NextRequest } from "next/server";
import { EXHIBITORS, FAIR } from "@/data/petGuideData";

export const runtime = "nodejs";
export const maxDuration = 30;

// 169곳을 토큰 효율적으로 한 줄씩 (부스 | 브랜드 | 카테고리 | 품목)
const CATALOG = EXHIBITORS.map((e) => {
  const co = e.company && e.company !== e.brand ? `(${e.company})` : "";
  return `${e.booths.join(",")} | ${e.brand}${co} | ${e.category} | ${e.items || "-"}`;
}).join("\n");

const SYSTEM = `너는 "${FAIR.name}"(${FAIR.dates}, ${FAIR.hall}) 현장을 안내하는 AI 가이드야.
방문객이 찾는 상품·브랜드·카테고리를 말하면 아래 [참가업체 목록]에서 골라 안내해.

[규칙]
- 반드시 아래 목록 안에서만 추천한다. 목록에 없는 업체·부스는 절대 지어내지 않는다.
- 답변에는 항상 "브랜드명 (부스코드)" 형태로 부스코드를 같이 적는다. 예: 슈퍼포우 (A-03)
- 보통 1~5곳 추천하고, 각 추천에 왜 맞는지 한 줄 이유를 곁들인다.
- 말투는 친근한 반말, 간결하게. 길게 늘어놓지 않는다.
- 이 가이드는 반려견 AI 앱 '강쥐엄마'(부스 F-06)가 제공해. 강쥐엄마/앱/AI 관련 질문이면 F-06으로 안내.
- 목록에 없는 걸 찾으면 솔직히 없다고 말하고, 가장 가까운 카테고리를 대신 제안한다.
- 가격·재고·이벤트는 모르니 단정하지 말고 "부스에서 직접 확인해봐"로 안내한다.

[참가업체 목록] (부스 | 브랜드 | 카테고리 | 전시품목)
${CATALOG}`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const key = process.env.ANTHROPIC_API_KEY;
    if (!key) {
      return Response.json(
        { reply: "AI 설정이 아직 안 됐어요. 잠시 후 다시 시도해주세요." },
        { status: 200 }
      );
    }
    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ reply: "무엇을 찾으세요?" }, { status: 200 });
    }

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1024,
        system: [
          { type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } },
        ],
        messages: messages.slice(-12),
      }),
    });

    const data = await r.json();
    const reply = (data?.content || [])
      .filter((b: { type: string }) => b.type === "text")
      .map((b: { text: string }) => b.text)
      .join("\n")
      .trim();

    return Response.json({ reply: reply || "음, 다시 한 번 물어봐줄래요?" });
  } catch {
    return Response.json(
      { reply: "잠깐 문제가 생겼어요. 다시 시도해주세요." },
      { status: 200 }
    );
  }
}
