import React from "react";
import { theme } from "twin.macro";
import { useIsoLayoutEffect } from "~/features/utils";

/**
 * Keep this in sync with the (custom) Tailwind theme `screens` config.
 * @see https://tailwindcss.com/docs/breakpoints
 */
export type Screen = "sm" | "md" | "lg" | "xl" | "2xl";
export const screens = theme<Record<Screen, string>>("screens");

// The maximum value is calculated as the minimum of the next one less 0.02px.
// @see https://www.w3.org/TR/mediaqueries-4/#mq-min-max
const getNextBpValue = (bp: string) => {
  return `${parseInt(bp) - 0.02}px`;
};

const up = (bp: Screen) => {
  const screen = screens[bp];
  return `@media only screen and (min-width: ${screen})`;
};

const down = (bp: Screen) => {
  const screen = getNextBpValue(screens[bp]);
  return `@media only screen and (max-width: ${screen})`;
};

const between = (bpMin: Screen, bpMax: Screen) => {
  const screenMin = screens[bpMin];
  const screenMax = getNextBpValue(screens[bpMax]);
  return `@media only screen and (min-width: ${screenMin}) and (max-width: ${screenMax})`;
};

const only = (bp: Screen) => {
  const screenKeys = Object.keys(screens) as Screen[];
  const currentKeyIndex = screenKeys.indexOf(bp);
  const nextBp = screenKeys[currentKeyIndex + 1];
  return nextBp ? between(bp, nextBp) : up(bp);
};

/**
 * Create media queries for responsive breakpoints
 * that match the Tailwind theme `screens` config.
 */
export const MediaQuery = {
  up,
  down,
  between,
  only,
};

/**
 * Track changes in a media query.
 *
 * @param query - The media query to be evaluated.
 * @param defaultState - The initial state (default: false).
 * @returns The current state of the media query evaluation.
 */
export const useMediaQuery = (query: string, defaultState = false) => {
  const [state, setState] = React.useState(defaultState);

  useIsoLayoutEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query.replaceAll("@media only screen and", "").trim());

    const onChange = () => {
      if (!mounted) return;
      setState(mql.matches);
    };

    mql.addEventListener("change", onChange);
    onChange();

    return () => {
      mounted = false;
      mql.removeEventListener("change", onChange);
    };
  }, [query]);

  return state;
};
