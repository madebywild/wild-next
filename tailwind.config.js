const defaultTheme = require("tailwindcss/defaultTheme");
const wildConfig = require("./tailwind.config.wild.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [wildConfig.preset],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      100: [wildConfig.utils.pxRem(12), 1.5],
      200: [wildConfig.utils.pxRem(16), 1.5],
      300: [wildConfig.utils.pxRem(24), 1.25],
    },
  },
};
