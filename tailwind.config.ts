import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 강쥐엄마 브랜드 컬러
        brand: {
          DEFAULT: "#FF6B35",
          primary: "#FF6B35",
          dark: "#E55A2B",
          light: "#FF8A5C",
          tint50: "#FFFBF7",
          tint100: "#FFF4E6",
          tint200: "#FFE4CC",
          tint300: "#FFCDB8",
        },
        // 텍스트 컬러
        ink: {
          1: "#111827",
          2: "#374151",
          3: "#6B7280",
          4: "#9CA3AF",
          disabled: "#D1D5DB",
        },
        // 배경 컬러
        surface: {
          base: "#FFFFFF",
          subtle: "#F9FAFB",
          muted: "#F3F4F6",
        },
        // 보더
        line: {
          light: "#F3F4F6",
          DEFAULT: "#E5E7EB",
          medium: "#D1D5DB",
          brand: "#FFE4CC",
        },
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // 강쥐엄마 타이포 스케일 (px 단위 그대로)
        xs: ["11px", { lineHeight: "1.5" }],
        sm: ["12px", { lineHeight: "1.5" }],
        base: ["14px", { lineHeight: "1.6" }],
        md: ["15px", { lineHeight: "1.6" }],
        lg: ["16px", { lineHeight: "1.6" }],
        xl: ["18px", { lineHeight: "1.5" }],
        "2xl": ["20px", { lineHeight: "1.4" }],
        "3xl": ["24px", { lineHeight: "1.3" }],
        "4xl": ["32px", { lineHeight: "1.25" }],
        "5xl": ["40px", { lineHeight: "1.2" }],
        "6xl": ["48px", { lineHeight: "1.15" }],
        "7xl": ["56px", { lineHeight: "1.1" }],
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        DEFAULT: "8px",
        md: "10px",
        lg: "12px",
        xl: "14px",
        "2xl": "16px",
        "3xl": "20px",
        "4xl": "28px",
        "5xl": "32px",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.04)",
        card: "0 4px 16px rgba(0, 0, 0, 0.06)",
        elevated: "0 8px 24px rgba(0, 0, 0, 0.08)",
        brand: "0 8px 24px rgba(255, 107, 53, 0.24)",
        "brand-soft": "0 4px 12px rgba(255, 107, 53, 0.12)",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.02em",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in": "fadeIn 0.8s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
