import NextHead from "next/head";
import { AppProps } from "next/app";
import { DefaultSeo, DefaultSeoProps } from "next-seo";
import { GlobalStyles } from "~/styles/GlobalStyles";

import "~/styles/fonts.css";

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
        <link rel="preload" href="/fonts/Inter-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      </NextHead>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
