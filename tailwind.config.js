const defaultTheme = require("tailwindcss/defaultTheme");
const wildConfig = require("./tailwind.config.wild.js");

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
      xs: [wildConfig.utils.pxRem(12), 1.5],
      base: [wildConfig.utils.pxRem(16), 1.5],
      lg: [wildConfig.utils.pxRem(24), 1.25],
    },
  },
};
