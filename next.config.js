// Uncomment the following and update with all your possible urls to enable the exporting feature

exports.exportPathMap = () => ({
  "/": { page: "/" },
  "/about": { page: "/about" },
  "/product/plant": { page: "/product", query: { slug: "plant" } },
  "/product/tree": { page: "/product", query: { slug: "tree" } },
});
