import React from "react";
import LogoSvg from "@src/assets/logo.svg";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header>
      <LogoSvg />
    </header>
  );
};

export default Header;
