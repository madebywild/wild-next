import "twin.macro";
import type styledImport, { type CSSProp, type css as cssImport } from "styled-components";

declare module "twin.macro" {
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module "react" {
  interface Attributes {
    tw?: string;
    css?: CSSProp | undefined;
  }
}
