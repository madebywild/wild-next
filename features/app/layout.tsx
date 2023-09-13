import React from "react";
import { type NextPage } from "next";

type Props = {
  children: React.ReactNode;
};

export type PageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: React.ReactElement<P>) => React.ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  return (
    <>
      <header>
        <h1>header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>footer</p>
      </footer>
    </>
  );
};
