const path = require("path");
const withReactSvg = require("next-react-svg");

let config = {};

// Set root directory for `next-react-svg`.
config = withReactSvg({
  include: path.resolve(__dirname, "src/assets"),
});

module.exports = config;
