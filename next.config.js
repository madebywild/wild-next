// Uncomment the following and update with all your possible urls to enable the exporting feature

exports.exportPathMap = () => ({
  "/": { page: "/" },
  "/about": { page: "/about" },
  "/product/plant": { page: "/product", query: { slug: "plant" } },
  "/product/tree": { page: "/product", query: { slug: "tree" } },
});

exports.webpack = (config, { buildId, dev }) => {
  // Perform customizations to webpack config
  config.module.rules.push({
    test: /\.scss/,
    use: [
      {
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]',
        },
      },
      'babel-loader',
      'styled-jsx-css-loader',
    ]
  });
  return config;
}
