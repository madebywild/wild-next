import React from "react";
import LogoSvg from "~/assets/logo.svg";

interface Props {}

export const AppHeader: React.FC<Props> = () => {
  return (
    <header>
      <LogoSvg />
    </header>
  );
};
