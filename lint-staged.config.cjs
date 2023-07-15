module.exports = {
  '*.css': 'stylelint',
  '*.{js,jsx,cjs,json,ts,tsx}': 'eslint',
  '*.{ts,tsx}': () => 'yarn check-types',
};
