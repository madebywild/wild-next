const path = require("path");
const withCSS = require("@zeit/next-css");

let config = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module.
    if (!isServer) config.node = { fs: "empty" };
    return config;
  },
};

config = withCSS(config);

module.exports = config;
