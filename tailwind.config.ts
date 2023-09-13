import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import addPlugin from "tailwindcss/plugin";

export const BASE_FONT_SIZE = 10;

const pxRem = (val: number) => {
  return `${val / BASE_FONT_SIZE}rem`;
};

const createScale = (min: number, max: number, steps: number) => {
  const scale = {} as Record<string, string>;
  for (let i = min; i <= max; i += steps) {
    scale[String(i)] = i === 0 ? String(i) : pxRem(i);
  }
  return scale;
};

const spacing = {
  ...createScale(0, 32, 1),
  ...createScale(32, 64, 2),
  ...createScale(68, 128, 4),
  ...createScale(136, 256, 8),
  ...createScale(272, 512, 16),
  ...createScale(544, 1024, 32),
} as const;

export const screens = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1600px",
} as const;

export type Screen = keyof typeof screens;

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./features/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens,
    colors: {
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      100: [pxRem(12), "1.5"],
      200: [pxRem(16), " 1.5"],
      300: [pxRem(24), "1.25"],
    },
    extend: {
      spacing,
      minWidth: spacing,
      maxWidth: spacing,
      minHeight: spacing,
      maxHeight: spacing,
      zIndex: {
        behind: "-1",
      },
    },
  },
  plugins: [
    addPlugin(function ({ addBase }) {
      addBase({
        ":root": {
          fontSize: `${(BASE_FONT_SIZE / 16) * 100}%`,
        },
      });
    }),
  ],
} satisfies Config;
