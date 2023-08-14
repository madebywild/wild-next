import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  html {
    ${tw`bg-white text-black cursor-default leading-none`}
  }

  body {
    ${tw`font-sans text-base antialiased`}
  }

  html,
  body,
  #__next {
    ${tw`h-full`}
  }
`;

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);
