const withTM = require("next-transpile-modules");
const styledJsxLoader = require("styled-jsx/webpack");

module.exports = withTM({
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
      test: /\.s([ac])ss$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: styledJsxLoader.loader,
          options: {
            type: fileName => fileName.toLowerCase().indexOf("global") === -1 ? "scoped" : "global",
          },
        },
        {
          loader: "sass-loader",
          options: {
            includePaths: [
              "./",
            ],
          },
        },
        {
          loader: "sass-resources-loader",
          options: {
            sourceMap: true,
            resources: [
              "./vars.scss",
            ],
          },
        },
      ],
    });
    return config;
  },
  transpileModules: ["gsap"],
  exportPathMap: () => ({
    "/": { page: "/index" },
  }),
});
