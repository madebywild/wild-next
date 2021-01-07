const defaultTheme = require("tailwindcss/defaultTheme");
const createSpacingPlugin = require("./tailwind.plugin.spacing.js");
const { plugin: spacingPlugin, pxToRem } = createSpacingPlugin();

module.exports = {
  theme: {
    extend: {
      zIndex: {
        behind: -1,
      },
      screens: {
        max: "1920px",
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: [pxToRem(12), 1.5],
      base: [pxToRem(16), 1.5],
      lg: [pxToRem(24), 1.25],
    },
  },
  plugins: [spacingPlugin],
};
