const nextRoutes = require("@yolkai/next-routes").default;
const routes = module.exports = nextRoutes();

routes.add("index", "/", "Index");
