import React from "react";
import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as TailwindBaseStyles } from "twin.macro";

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
    ${tw`h-full flex flex-col`}
  }
`;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <TailwindBaseStyles />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
