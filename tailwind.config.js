const defaultTheme = require("tailwindcss/defaultTheme");
const wildConfig = require("./tailwind.config.wild.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [wildConfig.preset],
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./features/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      100: [wildConfig.pxRem(12), 1.5],
      200: [wildConfig.pxRem(16), 1.5],
      300: [wildConfig.pxRem(24), 1.25],
    },
  },
};
