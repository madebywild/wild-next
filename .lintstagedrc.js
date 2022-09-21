module.exports = {
  // Run as function to fix tsc config path
  // https://github.com/okonet/lint-staged/issues/829#issuecomment-618649288
  "*.{ts,tsx}": () => ["tsc --noEmit"],
  "*.{json,md,css,scss}": ["prettier --write"],
  "*.{js,jsx,ts,tsx}": ["eslint --quiet --fix"],
};
