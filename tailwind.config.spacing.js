const unitToPx = (val) => `${val}px`;
const unitToRem = (val) => `${val}rem`;

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

/**
 * Creates a custom spacing scale, where the classname maps
 * 1:1 to its pixel value. iE `w-16 => width: 16px;`
 *
 * @return {object} spacing - Use to extend your tailwind config.
 * @return {string} rootFontSize - Use as your html font-size.
 * @return {function} pxToRem - Use when converting pixels to rem units.
 *
 * Available classes:
 *
 * ```
 * 1-32 = 1px steps.
 * 32-64 = 2px steps.
 * 64-128 = 4px steps.
 * 128-256 = 8px steps.
 * 256-512 = 16px steps.
 * 512-1024 = 32px steps.
 * ```
 */
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
    },
  };
};

module.exports = { createSpacing };
