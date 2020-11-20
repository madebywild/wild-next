const withBundleAnalyzer = require("@next/bundle-analyzer");

module.exports = (phase, defaultConfig) => {
  let nextConfig = defaultConfig;

  // https://reactjs.org/docs/strict-mode.html
  nextConfig.reactStrictMode = true;

  // Enable bundle analyzer for `npm run analyze`
  nextConfig = withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
  })(nextConfig);

  nextConfig.webpack = (wp) => {
    // Convert svg files to React components
    wp.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return wp;
  };

  return nextConfig;
};
