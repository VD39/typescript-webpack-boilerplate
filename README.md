# Typescript Webpack Boilerplate

[![License][license-image]][license-url]
[![Version][version-image]][version-url]
[![CI][ci-image]][ci-url]
[![Test coverage][coverage-image]][coverage-url]
[![GitHub last commit][commit-image]][commit-url]

A starter frontend boilerplate built with:

- [TypeScript](https://www.typescriptlang.org/)
- [Babel](https://babeljs.io/)
- [Webpack 5](https://webpack.js.org/)
- [PostCSS](https://postcss.org/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)

This also uses [lint-staged](https://github.com/okonet/lint-staged) for running pre-commit checks.

## Features

- Support for both TypeScript and JavaScript as needed.
- Loads environment variables via `.env` file.
- May be extended to be used with [React](https://reactjs.org/), [Vue.js](https://vuejs.org/), or [Angular](https://angular.io/).
- Minification of TypeScript/JavaScript and CSS processed files.
- Assets optimization.
- Webpack Dev Server plugin for local development.
- Webpack Bundle Analyzer for visualising script output and usage.
- CI workflow.

## Prerequisites

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com)

## Folder structure

```none
src
└── css
│    ├── all
│    └── styles.css
├── index.ts
public
├── assets
├── favicon.ico
└── index.html
```

- src
  - The entry typescript file is [index.ts](src/index.ts).
  - The [helpers/set-message](src/helpers/set-message) folder is a sample folder for how to test using Jest.
  - Local files are imported using the `'@/'` alias. See [index.ts](src/index.ts) file for example.
- scr/css
  - Add your styles here and `@import` them to the entry [styles.css](src/css/styles.css) file.
- public
  - Edit the [index.html](public/index.html) in the public folder to suite your needs.
  - Replace the [favicon.ico](public/favicon.ico) with your own icon.
- public/assets.
  - Add your assets, to the [assets](public/assets) folder.

## Configuration

### Webpack

You may change the configuration for Webpack within the [webpack](webpack) folder.

### Environment Variables

You may set the following in your `.env` for setting up your project ([default values shown](configuration/config.js)).

```sh
PORT_NUMBER=9000
HOST_NAME=localhost
TITLE=TypeScript Webpack Boilerplate
```

## Setup

### Install dependencies

Run:

```sh
  yarn install
```

## Development

### Server

Run:

```sh
  yarn serve
```

This will create a server at `http://localhost:9000/` or server data specified in your `.env` file.

Automatically reloads after each file change.

### Production build

Run:

```sh
  yarn build
```

Will output all build files into the `dist` folder.

## Testing (Jest)

Run:

```sh
  yarn test
```

or watch files

```sh
  yarn test:watch
```

## Linting

### All files

Run:

```sh
  yarn lint
```

To fix all possible errors automatically run:

```sh
  yarn lint:fix
```

### TypeScript (tsc)

Run:

```sh
  yarn lint:check-types
```

There is no automatic fix option for TypeScript.

### TypeScript and JavaScript (ESLint)

Run:

```sh
  yarn lint:scripts
```

To fix all possible errors automatically run:

```sh
  yarn lint:scripts:fix
```

### Styles (StyleLint)

Run:

```sh
  yarn lint:styles
```

To fix all possible errors automatically run:

```sh
  yarn lint:styles:fix
```

## Check bundle size

Run:

```sh
  yarn check-size
```

This will create a server at `http://localhost:8888/` or at the port number specified using the `-p or --port` option via the `cli`.

## License

Released under [MIT](LICENSE) by [@VD39](https://github.com/VD39).

<!-- Image URls -->

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[version-image]: https://img.shields.io/github/package-json/v/VD39/typescript-webpack-boilerplate/master?logo=github&style=flat-square
[ci-image]: https://img.shields.io/github/actions/workflow/status/VD39/typescript-webpack-boilerplate/ci.yml?logo=githubactions&style=flat-square
[coverage-image]: https://img.shields.io/badge/coverage-100%25-brightgreen.svg?&logo=jest&style=flat-square
[commit-image]: https://img.shields.io/github/last-commit/VD39/typescript-webpack-boilerplate.svg?logo=git&style=flat-square

<!-- Page URLs -->

[license-url]: LICENSE
[version-url]: package.json
[ci-url]: https://github.com/VD39/typescript-webpack-boilerplate/actions?query=branch%3Amaster
[coverage-url]: https://github.com/VD39/typescript-webpack-boilerplate?branch=master
[commit-url]: https://github.com/VD39/typescript-webpack-boilerplate/commits/master
