# ES6 Boilerplate

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/VD39/es6-webpack-boilerplate/blob/master/LICENSE)

My personal ES6 boilerplate built with [Babel 7](https://babeljs.io/), [Webpack 4](https://webpack.js.org/), [PostCSS](https://postcss.org/), [Jest](https://jestjs.io/), [ESLint](https://eslint.org/), and [Stylelint](https://stylelint.io/).

This also uses [Husky](https://github.com/typicode/husky) for Git pre-commit hook.

> Feel free to use. :) This may be extended to be used with [React](https://reactjs.org/), [Vue.js](https://vuejs.org/), and [Angular](https://angular.io/).

# Prerequisites

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com)

# Folder structure

Below is the folder structure.

```
src
└── css
│    ├── all
│    └── styles.css
├── index.js
└── index.test.js
public
├── assets
├── favicon.ico
└── index.html
```

Add your styles to the `all` folder and use the `@import` to add to the `styles.css` file.

Add your assets, such as images to the `assets` folder.

The `index.js` is the main JavaScript file, import all libraries there.

The `index.text.js` is a sample of how to test using Jest.

Edit the `index.html` in the public folder to suite your needs.

Replace the `favicon.ico` with your own icon.

# Configuration

You may change a few configuration for Webpack within the `.config.js` file within the root folder (default settings below).

```
  const hostName = 'localhost';
  const portNumber = 9000;
  const jsOutput = './assets/js/bundle.js';
  const cssOutput = './assets/css/styles.css';
```

Changes to Webpack configurations may be made within the `config` folder.

# To Use

## Install dependencies

```sh
  yarn install
```

## Server

```sh
  yarn serve
```

This will create a server at `http://localhost:9000/` or at the port number specified in the `config.js` file.

## Build

```sh
  yarn build
```

## Test

For testing JavaScript this boilerplate uses Jest along with [babel-plugin-rewire](https://github.com/speedskater/babel-plugin-rewire) for testing non-exported functions.

```sh
  yarn test
```

### Watch

```sh
  yarn test:watch
```

## Lint

### JavaScript

```sh
  yarn lint:js
```

### CSS

```sh
  yarn lint:css
```

### Fix

This will fix both JavaScript and CSS files.

```sh
  yarn lint:fix
```

## License

[MIT](https://github.com/VD39/es6-webpack-boilerplate/blob/master/LICENSE)
