const path = require("path");
const withSass = require("@zeit/next-sass");

// Uncomment the following and update with all your possible urls to enable the exporting feature
// exports.exportPathMap = () => ({
//   "/": { page: "/" },
//   "/about": { page: "/about" },
//   "/product/plant": { page: "/product", query: { slug: "plant" } },
//   "/product/tree": { page: "/product", query: { slug: "tree" } },
// });

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
});
