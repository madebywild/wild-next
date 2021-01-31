const addPlugin = require("tailwindcss/plugin");
const aspectRatioPlugin = require("@tailwindcss/aspect-ratio");

const BASE_FONT_SIZE_PX = 10;

const noop = (val) => val;
const unitToPx = (val) => `${val}px`;
const unitToRem = (val) => `${val}rem`;
const pxToRem = (val) => val / BASE_FONT_SIZE_PX;
const pxUnitToRem = (val) => unitToRem(pxToRem(val));

const createScale = ({ min = 0, max = 100, steps = 1, formatVal = noop, formatKey = noop }) => {
  const limit = Math.round((max - min) / steps);
  const scale = [...new Array(limit + 1)].map((_, i) => min + i * steps);

  return scale.reduce((prev, curr) => {
    const key = String(formatKey(curr));
    const val = curr === 0 ? curr : formatVal(curr);
    return { ...prev, [key]: val };
  }, {});
};

const spacing = {
  ...createScale({ max: 32, steps: 1, formatVal: pxUnitToRem }),
  ...createScale({ min: 32, max: 64, steps: 2, formatVal: pxUnitToRem }),
  ...createScale({ min: 68, max: 128, steps: 4, formatVal: pxUnitToRem }),
  ...createScale({ min: 136, max: 256, steps: 8, formatVal: pxUnitToRem }),
  ...createScale({ min: 272, max: 512, steps: 16, formatVal: pxUnitToRem }),
  ...createScale({ min: 544, max: 1024, steps: 32, formatVal: pxUnitToRem }),
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
      aspectRatioPlugin,
      addPlugin(function ({ addBase, theme }) {
        addBase({
          ":root": {
            fontSize: unitToPx(BASE_FONT_SIZE_PX),
          },
        });
      }),
    ],
  },
};
