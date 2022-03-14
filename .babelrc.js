module.exports = {
  presets: [
    [
      "next/babel",
      {
        "preset-react": {
          runtime: "automatic",
        },
      },
    ],
  ],
  plugins: [
    "twin",
    "macros",
    [
      "styled-components",
      {
        ssr: true,
        pure: true,
      },
    ],
  ],
};
