import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { DefaultPage } from "~/layouts/DefaultPage";
import LogoSvg from "~/assets/logo.svg";

interface Props {}

const Index: NextPage<Props> = () => {
  return (
    <>
      <NextSeo title="Index" />
      <DefaultPage>
        <LogoSvg tw="w-256 h-256" />
        <h1>Index</h1>
      </DefaultPage>
    </>
  );
};

export default Index;
