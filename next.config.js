const withBundleAnalyzer = require("@next/bundle-analyzer");

module.exports = (phase, defaultConfig) => {
  let nextConfig = defaultConfig;

  // https://reactjs.org/docs/strict-mode.html
  nextConfig.reactStrictMode = true;

  nextConfig.webpack = (wp) => {
    // Convert svg files to React components.
    wp.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          },
        },
      ],
    });

    return wp;
  };

  // Enable bundle analyzer for `npm run analyze`.
  nextConfig = withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
  })(nextConfig);

  return nextConfig;
};
