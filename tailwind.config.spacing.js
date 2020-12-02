const unitToPx = (val) => `${val}px`;
const unitToVh = (val) => `${val}vh`;
const unitToVw = (val) => `${val}vw`;
const unitToRem = (val) => `${val}rem`;
const unitToPercent = (val) => `${val}%`;

const createScale = ({ min = 0, max = 100, steps = 1, valFM, keyFM }) => {
  const limit = Math.round((max - min) / steps);
  const scale = [...new Array(limit + 1)].map((_, i) => min + i * steps);

  const sizes = scale.reduce((prev, curr) => {
    const key = keyFM ? keyFM(curr) : curr;
    const val = valFM && curr !== 0 ? valFM(curr) : curr;

    return { ...prev, [String(key)]: val };
  }, {});

  return sizes;
};

const createSpacing = (baseFontSizePx = 10) => {
  const pxToRem = (val) => val / baseFontSizePx;
  const pxUnitToRem = (val) => unitToRem(pxToRem(val));

  return {
    pxToRem: pxUnitToRem,
    rootFontSize: unitToPx(baseFontSizePx),
    spacing: {
      ...createScale({ max: 32, steps: 1, valFM: pxUnitToRem }),
      ...createScale({ min: 32, max: 64, steps: 2, valFM: pxUnitToRem }),
      ...createScale({ min: 68, max: 128, steps: 4, valFM: pxUnitToRem }),
      ...createScale({ min: 136, max: 256, steps: 8, valFM: pxUnitToRem }),
      ...createScale({ min: 272, max: 512, steps: 16, valFM: pxUnitToRem }),
      ...createScale({ min: 544, max: 1024, steps: 32, valFM: pxUnitToRem }),
      ...createScale({ valFM: unitToPercent, keyFM: (val) => `${val}/100` }),
      ...createScale({ valFM: unitToVh, keyFM: (val) => `${val}vh` }),
      ...createScale({ valFM: unitToVw, keyFM: (val) => `${val}vw` }),
    },
  };
};

module.exports = { createSpacing };
