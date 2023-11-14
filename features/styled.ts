import { createTailwindMerge, getDefaultConfig, mergeConfigs } from "tailwind-merge";
import { defineConfig } from "cva";

// Extend the Tailwind Merge config with custom TW classes.
// @see https://github.com/dcastil/tailwind-merge/blob/v1.14.0/src/lib/default-config.ts#L122
const customTwMerge = createTailwindMerge(getDefaultConfig, (config) =>
  mergeConfigs(config, {
    extend: {
      classGroups: {
        z: [{ z: ["behind"] }],
      },
    },
  })
);

const Cva = defineConfig({
  hooks: {
    onComplete: customTwMerge,
  },
});

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
 * CX Class values.
 */
export type ClassValues = Parameters<typeof cx>;

/**
 * Shallow merge any number of `cva` components into a single component.
 * @see https://github.com/joe-bell/cva
 */
export const compose = Cva.compose;

/**
 * Extract variant props from a `cva` component.
 */
export { type VariantProps } from "cva";
