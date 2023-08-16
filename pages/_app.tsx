import "~/features/styles/fonts.css";

import NextHead from "next/head";
import { type AppProps } from "next/app";
import { type NextPage } from "next";
import { DefaultSeo, type DefaultSeoProps } from "next-seo";
import { GlobalStyles } from "~/features/styles/global-styles";

export type NextPageWithLayout<PageProps = {}> = NextPage<PageProps> & {
  getLayout?: (page: React.ReactElement<PageProps>) => React.ReactNode;
};

type Props = AppProps & {
  Component: NextPageWithLayout;
};

const defaultSeo: DefaultSeoProps = {
  title: "wild-next",
  titleTemplate: "%s | wild-next",
  description: "This is the wild-next boilerplate.",
  twitter: {
    cardType: "summary_large_image",
  },
  openGraph: {
    type: "website",
    images: [{ url: "/social-embed.png" }],
  },
};

const App = ({ Component, pageProps }: Props) => {
  const withLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <DefaultSeo {...defaultSeo} />
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
      <GlobalStyles />
      {withLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
