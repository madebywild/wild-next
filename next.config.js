const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next/dist/next-server/server/config').NextConfig} */
const nextConfig = {
  // https://reactjs.org/docs/strict-mode.html
  reactStrictMode: true,

  // https://nextjs.org/docs/messages/webpack5
  future: {
    webpack5: true,
  },

  webpack: (config, options) => {
    // https://react-svgr.com/
    config.module.rules.push({
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

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
