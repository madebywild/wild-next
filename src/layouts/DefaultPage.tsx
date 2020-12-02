import "twin.macro";
import React from "react";
import { AppHeader } from "~/components/AppHeader/AppHeader";
import { AppFooter } from "~/components/AppFooter/AppFooter";

interface Props {}

export const DefaultPage: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <main tw="flex-1">{children}</main>
      <AppFooter />
    </>
  );
};
