import { NextSeo } from "next-seo";
import { type NextPageWithLayout } from "~/pages/_app";
import { AppLayout } from "~/features/app/layout";

interface Props {}

const Index: NextPageWithLayout<Props> = () => {
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
