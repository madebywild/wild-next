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
    use: 'styled-jsx-scss-loader'
  });
  // push in our custom loader
  config.resolveLoader.modules.push('internals');
  // Important: return the modified config
  return config;
}
