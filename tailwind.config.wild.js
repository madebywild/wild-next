const addPlugin = require("tailwindcss/plugin");

const baseFontSize = 10;
const pxRem = (val) => `${val / baseFontSize}rem`;

const createScale = (min, max, steps, formatVal) => {
  const scale = {};
  for (let i = min; i <= max; i += steps) {
    scale[String(i)] = i === 0 ? String(i) : formatVal(i);
  }
  return scale;
};

const spacing = {
  ...createScale(0, 32, 1, pxRem),
  ...createScale(32, 64, 2, pxRem),
  ...createScale(68, 128, 4, pxRem),
  ...createScale(136, 256, 8, pxRem),
  ...createScale(272, 512, 16, pxRem),
  ...createScale(544, 1024, 32, pxRem),
};

module.exports = {
  utils: {
    pxRem,
  },
  preset: {
    theme: {
      extend: {
        spacing,
        screens: {
          "2xl": "1600px",
        },
        zIndex: {
          behind: "-1",
        },
      },
    },
    plugins: [
      addPlugin(function ({ addBase, theme }) {
        addBase({
          ":root": {
            fontSize: `${(baseFontSize / 16) * 100}%`,
          },
        });
      }),
    ],
  },
};
