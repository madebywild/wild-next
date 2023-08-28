import "twin.macro";
import type * as SC from "styled-components";

declare module "twin.macro" {
  const styled: typeof SC.default;
  const css: typeof SC.css;
}

declare module "react" {
  interface Attributes {
    tw?: string;
    css?: SC.CSSProp;
  }
}
