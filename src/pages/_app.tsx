import NextHead from "next/head";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { GlobalStyles } from "@styles/GlobalStyles";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        title="wild-next"
        titleTemplate="%s | wild-next"
        description="This is the wild-next boilerplate."
        openGraph={{}} // FIXME: https://github.com/garmeeh/next-seo/issues/544
      />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </NextHead>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
