module.exports = {
  root: true,
  extends: ["plugin:@next/next/recommended", "@madebywild/eslint-config"],
  overrides: [
    {
      files: ["**/*.d.ts", "./src/pages/**/*.ts?(x)"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
  rules: {
    "jsx-a11y/anchor-is-valid": "off",
    "@next/next/no-img-element": "off",
    "react/no-unknown-property": [
      "warn",
      {
        ignore: ["css", "tw"],
      },
    ],
  },
};
