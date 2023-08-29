import { DefaultSeo, type DefaultSeoProps } from "next-seo";

const defaultSeo: DefaultSeoProps = {
  title: "wild-next",
  titleTemplate: "%s | wild-next",
  description: "This is the wild-next boilerplate.",
  twitter: {
    cardType: "summary_large_image",
  },
  openGraph: {
    type: "website",
    images: [{ url: "/social-embed.png" }],
  },
};

export const AppSeo = () => {
  return <DefaultSeo {...defaultSeo} />;
};
