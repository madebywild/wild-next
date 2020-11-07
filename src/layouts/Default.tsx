import "twin.macro";
import React from "react";
import { SiteHeader } from "@components/SiteHeader";
import { SiteFooter } from "@components/SiteFooter";

interface Props {}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <SiteHeader />
      <main tw="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
};

export { DefaultLayout };
