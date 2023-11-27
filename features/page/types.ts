import { type NextPage } from "next";

type Unwrap<P> = P extends Promise<unknown> ? Awaited<P> : P;

export type PageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: React.ReactElement<P>) => React.ReactNode;
};

export type InferPageProps<P extends (...args: [never]) => unknown> = NonNullable<
  Unwrap<NonNullable<Extract<NonNullable<Awaited<ReturnType<P>>>, { props: unknown }>["props"]>>
>;
