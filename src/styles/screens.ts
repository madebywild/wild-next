import { theme } from "twin.macro";

/**
 * NOTE: Keep this in sync with the (custom) Tailwind theme `screens` config.
 * @see https://tailwindcss.com/docs/breakpoints
 */
export type Screen = "sm" | "md" | "lg" | "xl" | "2xl" | "max";
export const screens = theme<Record<Screen, string>>("screens");

// The maximum value is calculated as the minimum of the next one less 0.02px.
// @see https://www.w3.org/TR/mediaqueries-4/#mq-min-max
const getNextBpValue = (bp: string) => {
  return `${parseInt(bp) - 0.02}px`;
};

export const up = (bp: Screen) => {
  const screen = screens[bp];
  return `@media only screen and (min-width: ${screen})`;
};

export const down = (bp: Screen) => {
  const screen = getNextBpValue(screens[bp]);
  return `@media only screen and (max-width: ${screen})`;
};

export const between = (bpMin: Screen, bpMax: Screen) => {
  const screenMin = screens[bpMin];
  const screenMax = getNextBpValue(screens[bpMax]);
  return `@media only screen and (min-width: ${screenMin}) and (max-width: ${screenMax})`;
};

export const only = (bp: Screen) => {
  const screenKeys = Object.keys(screens) as Screen[];
  const currentKeyIndex = screenKeys.indexOf(bp);
  const nextBp = screenKeys[currentKeyIndex + 1];
  return nextBp ? between(bp, nextBp) : up(bp);
};
