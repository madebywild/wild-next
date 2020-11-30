import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { DefaultPage } from "~/layouts/DefaultPage";

interface Props {}

const Index: NextPage<Props> = () => {
  return (
    <>
      <NextSeo title="Index" />
      <DefaultPage>
        <h1>Index</h1>
      </DefaultPage>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default Index;
