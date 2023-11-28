import React from "react";
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
 * A record of all Tailwind screens.
 */
export type Screen = keyof typeof screens;

/**
 * Create media queries for responsive breakpoints
 * that match the Tailwind theme `screens` config.
 */
export const MediaQuery = {
  up: (bp: Screen) => {
    return `@media only screen and (min-width: ${screens[bp]})`;
  },
  down: (bp: Screen) => {
    const next = `${parseInt(screens[bp]) - 0.02}px`;
    return `@media only screen and (max-width: ${next})`;
  },
  between: (bpMin: Screen, bpMax: Screen) => {
    const next = `${parseInt(screens[bpMax]) - 0.02}px`;
    return `@media only screen and (min-width: ${screens[bpMin]}) and (max-width: ${next})`;
  },
  only: (bp: Screen) => {
    const keys = Object.keys(screens) as Screen[];
    const nextBp = keys[keys.indexOf(bp) + 1];
    return nextBp ? MediaQuery.between(bp, nextBp) : MediaQuery.up(bp);
  },
};

/**
 * Use responsive breakpoints that match the Tailwind
 * theme `screens` config. Works with standard media queries,
 * as well as with the `MediaQuery` helpers.
 *
 * @example
 * useMediaQuery("(min-width: 768px)")
 * useMediaQuery(MediaQuery.up("md"))
 */
export const useMediaQuery = (query: string, defaultState = false) => {
  const [state, setState] = React.useState(defaultState);
  const useIsoEffect = IS_CLIENT ? React.useLayoutEffect : React.useEffect;

  useIsoEffect(() => {
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
