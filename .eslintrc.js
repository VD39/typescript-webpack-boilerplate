const path = require('path');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jest-formatting/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
    project: path.resolve(__dirname, './tsconfig.json'),
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single', 'avoid-escape'],
    'prettier/prettier': ['error', require('./.prettierrc')],
  },
  overrides: [
    {
      files: ['*.json'],
      rules: {
        quotes: ['error', 'double'],
      },
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
      },
    },
  ],
};
