import type React from "react";
import { twMerge } from "tailwind-merge";
import { defineConfig, type VariantProps as _VariantProps } from "cva";

const Cva = defineConfig({
  hooks: {
    onComplete: twMerge,
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
 * Shallow merge any number of `cva` components into a single component.
 * @see https://github.com/joe-bell/cva
 */
export const compose = Cva.compose;

/**
 * Extract variant props from a `cva` component.
 */
export type VariantProps<T extends (...args: any) => any> = _VariantProps<T>;

/**
 * Augment polymorphic components that use the radix-ui `Slot` component.
 */
export type MaybeAsChild<P = {}, El extends keyof JSX.IntrinsicElements = "div"> =
  | ({ asChild?: true; children: React.ReactElement } & React.ComponentPropsWithoutRef<El> & P)
  | ({ asChild?: never; children: React.ReactNode } & React.ComponentPropsWithoutRef<El> & P);
