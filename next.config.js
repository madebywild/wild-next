const path = require("path");

// Uncomment the following and update with all your possible urls to enable the exporting feature
// exports.exportPathMap = () => ({
//   "/": { page: "/" },
//   "/about": { page: "/about" },
//   "/product/plant": { page: "/product", query: { slug: "plant" } },
//   "/product/tree": { page: "/product", query: { slug: "tree" } },
// });

exports.webpack = config => {
  // Perform customizations to webpack config
  config.module.rules.push(
    // SCSS support
    {
      test: /\.scss/,
      use: [
        {
          loader: "emit-file-loader",
          options: {
            name: "dist/[path][name].[ext].js",
          },
        },
        {
          loader: "babel-loader",
          options: {
            babelrc: false,
            extends: path.resolve(__dirname, "./.babelrc"),
          },
        },
        "styled-jsx-css-loader",
      ]
    },
    // shader import support
    {
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
    }
  );
  return config;
};
