import React from "react";
import { TwFn, TemplateFn } from "twin.macro";
import styledComponent, { css as cssProperty } from "styled-components";

declare module "twin.macro" {
  type TwComponentWrapper = <T extends React.ComponentType<any>>(component: T) => TemplateFn<T>;

  const tw: TwFn & TwComponentMap & TwComponentWrapper;
  const css: typeof cssProperty;
  const styled: typeof styledComponent;

  export { css, styled };
  export = tw;
}
