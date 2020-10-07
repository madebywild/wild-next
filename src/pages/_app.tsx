import React from "react";
import { AppProps } from "next/app";

import "tailwindcss/dist/base.min.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
