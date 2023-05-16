const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next/dist/server/config').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  // Add support for custom build dirs
  distDir: process.env.DIST_DIR || ".next",

  // https://reactjs.org/docs/strict-mode.html
  reactStrictMode: true,

  // The pre-commit hook takes care of linting
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config) => {
    // https://react-svgr.com/
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      cleanupIds: false,
                      removeViewBox: false,
                    },
                  },
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
