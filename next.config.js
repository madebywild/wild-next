const withBundleAnalyzer = require("@next/bundle-analyzer");

module.exports = (phase, defaultConfig) => {
  let nextConfig = defaultConfig;

  // https://reactjs.org/docs/strict-mode.html
  nextConfig.reactStrictMode = true;

  // Convert svg files to React components.
  nextConfig.webpack = (wp) => {
    wp.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return wp;
  };

  // Enable bundle analyzer for `npm run analyze`.
  nextConfig = withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
  })(nextConfig);

  return nextConfig;
};
