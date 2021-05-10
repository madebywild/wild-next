module.exports = {
  // Run as function to fix tsc config path
  // https://github.com/okonet/lint-staged/issues/829#issuecomment-618649288
  "src/**/*.{ts,tsx}": () => ["tsc --noEmit"],
  "src/**/*.{json,md,css,scss}": ["prettier --write"],
  "src/**/*.{js,jsx,ts,tsx}": ["eslint --color --fix", "prettier --write"],
};
