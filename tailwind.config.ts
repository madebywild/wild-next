import { type Config } from "tailwindcss";
import addPlugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";

const BASE_FONT_SIZE = 10;

export const screens = {
  min: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  max: "1600px",
};

const createFluidSize = (min: number, max: number) => {
  const minScreen = parseInt(screens.min);
  const maxScreen = parseInt(screens.max);
  const size = `calc(${min} * 1px + (${max - min}) * (100vw - ${minScreen} * 1px) / (${maxScreen - minScreen}))`;
  return `clamp(${min}px, ${size}, ${max}px)`;
};

const createScale = (min: number, max: number, steps: number) => {
  const scale = {} as Record<string, string>;
  for (let i = min; i <= max; i += steps) {
    scale[String(i)] = i === 0 ? String(i) : `${i / BASE_FONT_SIZE}rem`;
  }
  return scale;
};

export const spacing = {
  ...Object.fromEntries(Object.entries(screens).map(([k, v]) => [`screen-${k}`, v])),
  ...createScale(0, 32, 1),
  ...createScale(32, 64, 2),
  ...createScale(68, 128, 4),
  ...createScale(136, 256, 8),
  ...createScale(272, 512, 16),
  ...createScale(544, 1024, 32),
};

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./features/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens,
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      white: {
        DEFAULT: "#ffffff",
      },
      black: {
        DEFAULT: "#000000",
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      sm: createFluidSize(12, 14),
      base: createFluidSize(14, 18),
      lg: createFluidSize(18, 24),
    },
    extend: {
      spacing: spacing,
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
    addPlugin(({ addBase }) => {
      addBase({
        ":root": {
          fontSize: `${(BASE_FONT_SIZE / 16) * 100}%`,
        },
      });
    }),
  ],
} satisfies Config;
