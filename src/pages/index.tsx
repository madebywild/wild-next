import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { DefaultLayout } from "@layouts/Default";

const Index: NextPage = () => {
  return (
    <>
      <NextSeo title="Index" />
      <DefaultLayout>
        <h1>Index</h1>
      </DefaultLayout>
    </>
  );
};

export default Index;
