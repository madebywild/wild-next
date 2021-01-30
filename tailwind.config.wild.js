const plugin = require("tailwindcss/plugin");

const BASE_FONT_SIZE_PX = 10;

const unitToPx = (val) => `${val}px`;
const unitToRem = (val) => `${val}rem`;
const pxToRem = (val) => val / BASE_FONT_SIZE_PX;
const pxUnitToRem = (val) => unitToRem(pxToRem(val));

const createScale = ({ min = 0, max = 100, steps = 1, valFM, keyFM }) => {
  const limit = Math.round((max - min) / steps);
  const scale = [...new Array(limit + 1)].map((_, i) => min + i * steps);

  return scale.reduce((prev, curr) => {
    const key = keyFM ? keyFM(curr) : curr;
    const val = valFM && curr !== 0 ? valFM(curr) : curr;

    return { ...prev, [String(key)]: val };
  }, {});
};

const spacing = {
  ...createScale({ max: 32, steps: 1, valFM: pxUnitToRem }),
  ...createScale({ min: 32, max: 64, steps: 2, valFM: pxUnitToRem }),
  ...createScale({ min: 68, max: 128, steps: 4, valFM: pxUnitToRem }),
  ...createScale({ min: 136, max: 256, steps: 8, valFM: pxUnitToRem }),
  ...createScale({ min: 272, max: 512, steps: 16, valFM: pxUnitToRem }),
  ...createScale({ min: 544, max: 1024, steps: 32, valFM: pxUnitToRem }),
};

module.exports = {
  utils: {
    pxRem: pxUnitToRem,
  },
  preset: {
    theme: {
      extend: {
        spacing,
        zIndex: {
          behind: -1,
        },
        screens: {
          max: "1920px",
        },
      },
    },
    plugins: [
      plugin(function ({ addBase, theme }) {
        addBase({
          ":root": {
            fontSize: unitToPx(BASE_FONT_SIZE_PX),
          },
        });
      }),
    ],
  },
};
