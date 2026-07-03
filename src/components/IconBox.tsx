import { LucideIcon } from "lucide-react";

/**
 * IconBox — AnimAI 컬러 박스 아이콘 시스템 (Web 버전)
 *
 * 앱의 src/theme/iconBoxes.ts와 1:1 매핑.
 * 컬러 박스(기본 48×48, radius 12) 안에 Lucide 아이콘.
 *
 * 사용 예시:
 *   import { IconBox } from "@/components/IconBox";
 *   import { Pencil } from "lucide-react";
 *
 *   <IconBox category="paw" icon={Pencil} />
 *   <IconBox category="schedule" icon={Calendar} size="lg" />
 */

// 카테고리별 컬러 매핑 (앱 iconBoxes.ts와 동일)
export const ICON_BOX_COLORS = {
  paw: { bg: "#FFF4E6", color: "#FF6B35" },           // AnimAI 시그니처 오렌지
  schedule: { bg: "#EFF6FF", color: "#2563EB" },       // 일정 (파랑)
  dog: { bg: "#ECFDF5", color: "#16A34A" },            // 강쥐 (초록)
  chat: { bg: "#F5F3FF", color: "#7C3AED" },           // 글/댓글/대화 (보라)
  market: { bg: "#FEF3C7", color: "#D97706" },         // 마켓 (앰버)
  coupon: { bg: "#FCE7F3", color: "#DB2777" },         // 쿠폰 (핑크)
  business: { bg: "#F1F5F9", color: "#475569" },       // 사장님 (슬레이트)
  like: { bg: "#FEE2E2", color: "#DC2626" },           // 좋아요 (빨강)
  neutral: { bg: "#F3F4F6", color: "#6B7280" },        // 기타 (회색)
} as const;

export type IconBoxCategory = keyof typeof ICON_BOX_COLORS;

interface IconBoxProps {
  category: IconBoxCategory;
  icon: LucideIcon;
  /** 사이즈 — sm: 36×36, md: 48×48 (기본), lg: 64×64 */
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SIZE_MAP = {
  sm: { box: "w-9 h-9 rounded-[10px]", icon: 20, stroke: 2 },
  md: { box: "w-12 h-12 rounded-xl", icon: 24, stroke: 2 },
  lg: { box: "w-16 h-16 rounded-2xl", icon: 32, stroke: 2 },
} as const;

export function IconBox({
  category,
  icon: Icon,
  size = "md",
  className = "",
}: IconBoxProps) {
  const colors = ICON_BOX_COLORS[category];
  const sizing = SIZE_MAP[size];

  return (
    <div
      className={`inline-flex items-center justify-center ${sizing.box} ${className}`}
      style={{ backgroundColor: colors.bg }}
    >
      <Icon size={sizing.icon} strokeWidth={sizing.stroke} color={colors.color} />
    </div>
  );
}
