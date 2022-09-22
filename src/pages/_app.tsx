import "~/styles/fonts.css";

import NextHead from "next/head";
import { type AppProps } from "next/app";
import { type NextPage } from "next";
import { DefaultSeo, type DefaultSeoProps } from "next-seo";
import { GlobalStyles } from "~/styles/GlobalStyles";

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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" key="apple" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" key="icon32" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" key="icon16" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" key="mask" />
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
