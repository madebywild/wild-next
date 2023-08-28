import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as TwinReset } from "twin.macro";

const GlobalStyles = createGlobalStyle`
  html {
    ${tw`bg-white text-black cursor-default leading-none`}
  }

  body {
    ${tw`font-sans antialiased overflow-x-hidden min-w-[320px]`}
  }

  html,
  body,
  #__next {
    ${tw`h-full`}
  }
`;

export const AppStyles = () => (
  <>
    <TwinReset />
    <GlobalStyles />
  </>
);
