import "twin.macro";
import styledImport, { type CSSProp, css as cssImport } from "styled-components";

declare module "twin.macro" {
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module "react" {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp;
  }

  interface SVGProps extends SVGProps<SVGSVGElement> {
    css?: CSSProp;
  }

  interface SVGAttributes extends SVGAttributes<SVGSVGElement> {
    css?: CSSProp;
  }
}
