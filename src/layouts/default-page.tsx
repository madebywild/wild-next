import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const DefaultPage = ({ children }: Props) => {
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
