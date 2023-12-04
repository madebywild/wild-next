import React from "react";
import * as R from "remeda";
import { defineConfig } from "cva";
import { IS_CLIENT } from "~/features/constants";
import { screens, twMerge } from "~/tailwind.config";

const Cva = defineConfig({
  hooks: {
    onComplete: twMerge,
  },
});

export { type VariantProps } from "cva";
export type ClassValues = Parameters<typeof cx>;

/**
 * Create class name variants and resolve Tailwind rule conflicts.
 * @see https://github.com/joe-bell/cva
 * @see https://github.com/dcastil/tailwind-merge
 */
export const cva = Cva.cva;

/**
 * Conditionally join class names and resolve Tailwind rule conflicts.
 * @see https://github.com/lukeed/clsx
 * @see https://github.com/dcastil/tailwind-merge
 */
export const cx = Cva.cx;

/**
 * Shallow merge any number of `cva` components into a single component.
 * @see https://github.com/joe-bell/cva
 */
export const compose = Cva.compose;

/**
 * Create media queries based on Tailwind screens.
 */
export const MediaQuery = {
  hasHover: () => {
    return `@media (hover: hover)` as const;
  },
  up: <S extends keyof typeof screens>(bp: S) => {
    return `@media only screen and (min-width: ${screens[bp]})` as const;
  },
  down: <S extends keyof typeof screens>(bp: S) => {
    const next = `${Number(screens[bp]) - 0.02}px`;
    return `@media only screen and (max-width: ${next})` as const;
  },
  between: <SMax extends keyof typeof screens, SMin extends keyof typeof screens>(min: SMin, max: SMax) => {
    const next = `${Number(screens[max]) - 0.02}px`;
    return `@media only screen and (min-width: ${screens[min]}) and (max-width: ${next})` as const;
  },
  only: <S extends keyof typeof screens>(bp: S) => {
    const keys = R.keys.strict(screens);
    const nextBp = keys[keys.indexOf(bp) + 1];
    return nextBp ? MediaQuery.between(bp, nextBp) : MediaQuery.up(bp);
  },
};

/**
 * Use responsive breakpoints and detect whether a single media query matches.
 * Works with standard media queries, as well as with the `MediaQuery` helpers.
 * @example
 * useMediaQuery("(min-width: 768px)")
 * useMediaQuery(MediaQuery.up("md"))
 */
export const useMediaQuery = (query: string, defaultState = false) => {
  const [state, setState] = React.useState(defaultState);
  const useIsoEffect = IS_CLIENT ? React.useLayoutEffect : React.useEffect;

  useIsoEffect(() => {
    let mounted = true;

    // Remove the everything before the first parenthesis.
    // This includes the `@media` prefix and any whitespace.
    const processedQuery = query.substring(query.indexOf("(")).trim();
    const mql = window.matchMedia(processedQuery);

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
