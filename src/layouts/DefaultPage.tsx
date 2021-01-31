import "twin.macro";
import React from "react";

interface Props {}

export const DefaultPage: React.FC<Props> = ({ children }) => {
  return (
    <>
      <header>
        <h1>header</h1>
      </header>
      <main tw="flex-1">{children}</main>
      <footer>
        <p>footer</p>
      </footer>
    </>
  );
};
