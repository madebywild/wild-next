import React from "react";
import tw from "twin.macro";
import { GlobalStyles as TailwindBaseStyles } from "twin.macro";
import { createGlobalStyle } from "styled-components";
import { AppProps } from "next/app";

const GlobalStyles = createGlobalStyle`
  html {
    ${tw`cursor-default overflow-y-scroll overscroll-none`}

    overflow-wrap: anywhere;
    scroll-behavior: smooth;
    height: 100vh;
    height: -webkit-fill-available;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    ${tw`h-full text-base text-black antialiased`}
  }

  #__next {
    ${tw`min-h-full flex flex-col`}
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <TailwindBaseStyles />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
