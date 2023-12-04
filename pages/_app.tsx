import "~/features/global.css";

import NextHead from "next/head";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import type { PageWithLayout } from "~/features/page/types";
import { defaultSeo } from "~/next-seo.config";

type Props = AppProps & {
  Component: PageWithLayout;
};

const App = ({ Component, pageProps }: Props) => {
  const withLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <NextHead>
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0" />
        <link key="icon-svg" rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link key="icon-32" rel="icon" href="/favicon.ico" sizes="32x32" />
        <link key="icon-180" rel="apple-touch-icon" href="/icon-180x180.png" />
        <meta key="tile" name="msapplication-TileColor" content="#000000" />
        <meta key="theme" name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/site.webmanifest" crossOrigin="use-credentials" />
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </NextHead>
      <DefaultSeo {...defaultSeo} />
      {withLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
