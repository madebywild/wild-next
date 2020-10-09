module.exports = {
  presets: ["next/babel"],
  plugins: [
    "macros",
    "lodash",
    [
      "styled-components",
      {
        ssr: true,
        pure: true,
      },
    ],
  ],
};
