import { NextSeo } from "next-seo";
import { AppLayout, type PageWithLayout } from "~/features/app/layout";

type Props = {};

const Index: PageWithLayout<Props> = () => {
  return (
    <>
      <NextSeo title="Index" />
      <h1>Index</h1>
    </>
  );
};

Index.getLayout = (page) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Index;
