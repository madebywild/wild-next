import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  html {
    ${tw`font-sans leading-none cursor-default overflow-y-scroll overscroll-none`}

    scroll-behavior: smooth;
    height: 100vh;
    height: -webkit-fill-available;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    ${tw`h-full bg-white text-base text-black antialiased`}
  }

  #__next {
    ${tw`h-full flex flex-col`}
  }
`;

export const GlobalStyles: React.FC = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);
