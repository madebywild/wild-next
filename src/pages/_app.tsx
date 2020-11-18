import NextHead from "next/head";
import { AppProps } from "next/app";
import { DefaultSeo, DefaultSeoProps } from "next-seo";
import { GlobalStyles } from "@styles/GlobalStyles";

// FIXME: Declaring custom fonts in a styled-component context, can
// cause undesired flickering effects during SSR rehydration.
// @see https://styled-components.com/docs/faqs#how-do-i-fix-flickering-text-after-server-side-rendering
import "@styles/fonts.css";

// FIXME: Opengraph tags do not update, when intial value is undefined.
// @see https://github.com/garmeeh/next-seo/issues/544
const defaultSeo: DefaultSeoProps = {
  title: "wild-next",
  titleTemplate: "%s | wild-next",
  description: "This is the wild-next boilerplate.",
  openGraph: {},
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preload" href="/fonts/Inter-Regular.otf" as="font" type="font/otf" />
      </NextHead>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
