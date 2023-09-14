import React from "react";
import { useIsoLayoutEffect } from "~/features/utils";
import { screens } from "~/tailwind.config";

type Screen = keyof typeof screens;

// The maximum value is calculated as the minimum of the next one less 0.02px.
// @see https://www.w3.org/TR/mediaqueries-4/#mq-min-max
const getNextBpValue = (bp: string) => {
  return `${parseInt(bp) - 0.02}px`;
};

const up = (bp: Screen) => {
  return `@media only screen and (min-width: ${screens[bp]})`;
};

const down = (bp: Screen) => {
  return `@media only screen and (max-width: ${getNextBpValue(screens[bp])})`;
};

const between = (bpMin: Screen, bpMax: Screen) => {
  return `@media only screen and (min-width: ${screens[bpMin]}) and (max-width: ${getNextBpValue(screens[bpMax])})`;
};

const only = (bp: Screen) => {
  const keys = Object.keys(screens) as Screen[];
  const nextBp = keys[keys.indexOf(bp) + 1];
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
