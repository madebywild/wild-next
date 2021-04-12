module.exports = {
  // Run as function to fix tsc config path
  // https://github.com/okonet/lint-staged/issues/829#issuecomment-618649288
  "src/**/*.{ts,tsx}": () => ["npm run typecheck"],
  "src/**/*.{js,jsx,ts,tsx}": ["npm run lint:fix", "npm run format"],
  "src/**/*.{json,md,css}": ["npm run format"],
};
