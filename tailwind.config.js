const defaultTheme = require("tailwindcss/defaultTheme");
const { createSpacing } = require("./tailwind.config.spacing.js");
const { rootFontSize, pxToRem, spacing } = createSpacing();

module.exports = {
  theme: {
    extend: {
      spacing,
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        root: rootFontSize,
        xs: [pxToRem(12), 1.5],
        base: [pxToRem(16), 1.5],
        lg: [pxToRem(24), 1.25],
        xl: [pxToRem(48), 1],
      },
      zIndex: {
        behind: -1,
      },
      screens: {
        max: "1920px",
      },
    },
  },
};
