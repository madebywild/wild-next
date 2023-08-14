import React from "react";

type Props = {
  children: React.ReactNode;
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
