module.exports = {
  root: true,
  extends: ["plugin:@next/next/recommended", "@madebywild/eslint-config"],
  overrides: [
    {
      files: ["**/*.d.ts", "./pages/**/*.ts?(x)", "./*.ts?(x)"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
  rules: {
    "jsx-a11y/anchor-is-valid": "off",
    "@next/next/no-img-element": "off",
  },
};
