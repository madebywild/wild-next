import type { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { Layout } from "~/features/page/layout";
import type { PageWithLayout, InferPageProps } from "~/features/page/types";

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};

const Index: PageWithLayout<InferPageProps<typeof getStaticProps>> = () => {
  return (
    <div>
      <h1>Index</h1>
    </div>
  );
};

Index.getLayout = (page) => {
  return (
    <Layout>
      <NextSeo title="Index" />
      {page}
    </Layout>
  );
};

export default Index;
