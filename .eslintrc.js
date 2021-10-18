module.exports = {
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
    "@next/next/no-img-element": "off",
  },
};
