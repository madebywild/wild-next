import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Header } from "@components/Header";

const Index: NextPage = () => {
  return (
    <>
      <NextSeo title="Index" />
      <div>
        <Header />
        <h1>Index</h1>
      </div>
    </>
  );
};

export default Index;
