import { NextSeo } from "next-seo";
import { AppLayout, type PageWithLayout } from "~/features/app/layout";

type Props = {};

const Index: PageWithLayout<Props> = () => {
  return (
    <div>
      <h1>Index</h1>
    </div>
  );
};

Index.getLayout = (page) => {
  return (
    <AppLayout>
      <NextSeo title="Index" />
      {page}
    </AppLayout>
  );
};

export default Index;
