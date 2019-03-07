const path = require("path");
const withTypescript = require("@zeit/next-typescript");
const withTM = require("next-plugin-transpile-modules");
const styledJsxLoader = require("styled-jsx/webpack");

module.exports = withTypescript(withTM({
  webpack(config, options) {
    // Perform customizations to webpack config
    config.module.rules.push({
      // shader import support
      test: /\.glsl$/,
      use: [
        {
          loader: "emit-file-loader",
          options: {
            name: "dist/[path][name].[ext]",
          },
        },
        "babel-loader",
        "webpack-glsl-loader",
      ],
    });
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: styledJsxLoader.loader,
          options: {
            type: "scoped",
          },
        },
      ],
    });
    return config;
  },
  transpileModules: ["gsap"],
  exportPathMap: () => ({
    "/": { page: "/Index" },
  }),
}));
