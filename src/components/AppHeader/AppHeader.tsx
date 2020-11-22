import React from "react";
import LogoSvg from "~/assets/logo.svg";

interface Props {}

const AppHeader: React.FC<Props> = () => {
  return (
    <header>
      <LogoSvg />
    </header>
  );
};

export { AppHeader };
