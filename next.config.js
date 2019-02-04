const path = require("path");
const withSass = require("@zeit/next-sass");
const withTM = require("next-plugin-transpile-modules");

module.exports = withSass({
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
        "webpack-glsl-loader"
      ]
    });
    return config;
  },
  transpileModules: ["gsap"],
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: "[local]___[hash:base64:5]",
  },
  exportPathMap: () => ({
    "/": { page: "/Index" },
  }),
});
