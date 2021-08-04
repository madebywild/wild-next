module.exports = {
  extends: "@madebywild/eslint-config",
  overrides: [
    {
      files: ["**/*.d.ts", "./src/pages/**/*.ts?(x)"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
};
