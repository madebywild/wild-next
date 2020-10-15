const path = require("path");
const withReactSvg = require("next-react-svg");

let config = {};

config = {
  // Set root directory for `next-react-svg`.
  include: path.resolve(__dirname, "src/assets"),

  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module.
    if (!isServer) config.node = { fs: "empty" };
    return config;
  },
};

config = withReactSvg(config);

module.exports = config;
