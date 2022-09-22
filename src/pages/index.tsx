import { NextSeo } from "next-seo";
import { type NextPageWithLayout } from "~/pages/_app";
import { DefaultPage } from "~/layouts/DefaultPage";
import LogoSvg from "~/assets/logo.svg";

interface Props {}

const Index: NextPageWithLayout<Props> = () => {
  return (
    <>
      <NextSeo title="Index" />
      <LogoSvg tw="w-256 h-256" />
      <h1>Index</h1>
    </>
  );
};

Index.getLayout = (page) => {
  return <DefaultPage>{page}</DefaultPage>;
};

export default Index;
