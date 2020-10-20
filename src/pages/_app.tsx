import React from "react";
import NextHead from "next/head";
import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { DefaultSeo, DefaultSeoProps } from "next-seo";
import tw, { GlobalStyles as TailwindBaseStyles } from "twin.macro";

const defaultSeo: DefaultSeoProps = {
  title: "wild-next",
  description: "wild-next boilerplate",
};

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
      <DefaultSeo {...defaultSeo} />
      <NextHead>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </NextHead>
      <TailwindBaseStyles />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
