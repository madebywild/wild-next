module.exports = {
  extends: ["@madebywild/eslint-config", "plugin:@next/next/recommended"],
  overrides: [
    {
      files: ["**/*.d.ts", "./src/pages/**/*.ts?(x)"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
  rules: {
    "@next/next/no-img-element": "off",
  },
};
