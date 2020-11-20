const path = require("path");
const withReactSvg = require("next-react-svg");
const withBundleAnalyzer = require("@next/bundle-analyzer");

module.exports = (phase, defaultConfig) => {
  let config = defaultConfig;

  config = withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })(config);
  config = withReactSvg({ ...config, include: path.resolve(__dirname, "src/assets") });

  return {
    reactStrictMode: true,
    ...config,
  };
};
