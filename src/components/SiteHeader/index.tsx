import React from "react";
import LogoSvg from "@assets/logo.svg";

interface Props {}

const SiteHeader: React.FC<Props> = () => {
  return (
    <header>
      <LogoSvg />
    </header>
  );
};

export { SiteHeader };
