import "twin.macro";
import styledImport, { CSSProp, css as cssImport } from "styled-components";

declare module "twin.macro" {
  const styled: typeof styledImport;
  const css: typeof cssImport;

  /**
   * NOTE: Keep this in sync with the Tailwind theme `screens` config.
   * @see https://tailwindcss.com/docs/breakpoints
   */
  type Screen = "sm" | "md" | "lg" | "xl";
}

declare module "react" {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp;
  }

  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSProp;
  }
}
