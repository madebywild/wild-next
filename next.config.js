const withPlugins = require("next-compose-plugins");
const bundleAnalyzer = require("@next/bundle-analyzer");
const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === "true" });

const nextConfig = {
  // https://reactjs.org/docs/strict-mode.html
  reactStrictMode: true,

  webpack: (config, options) => {
    // https://react-svgr.com/
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: { svgoConfig: { plugins: [{ removeViewBox: false }] } },
        },
      ],
    });

    return config;
  },
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
