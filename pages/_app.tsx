import "~/features/app/fonts.css";

import NextHead from "next/head";
import { DefaultSeo } from "next-seo";
import { type AppProps } from "next/app";
import { defaultSeo } from "~/next-seo.config";
import { AppStyles } from "~/features/app/styles";
import { type PageWithLayout } from "~/features/app/layout";

type Props = AppProps & {
  Component: PageWithLayout;
};

const App = ({ Component, pageProps }: Props) => {
  const withLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
        <link key="icon-32" rel="icon" href="/favicon.ico" sizes="32x32" />
        <link key="icon-svg" rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link key="icon-180" rel="apple-touch-icon" href="/icon-180x180.png" />
        <meta name="msapplication-TileColor" content="#000000" key="tile" />
        <meta name="theme-color" content="#ffffff" key="theme" />
        <link rel="manifest" href="/site.webmanifest" crossOrigin="use-credentials" />
        <link rel="preload" href="/fonts/Inter-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      </NextHead>
      <DefaultSeo {...defaultSeo} />
      <AppStyles />
      {withLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
