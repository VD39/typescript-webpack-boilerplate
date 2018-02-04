# ES6 Boilerplate With Webpack

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/VD39/es6-webpack-boilerplate/blob/master/LICENSE)

My personal ES6 boilerplate built with Babel, Webpack, SCSS, and ESLint.

> Feel free to use. :)

## Folder structure

Below is the folder structure.

```
src
└── sass
│    ├── _init
│    ├── site
│    └── styles.scss
└── index.js
public
├── assets
├── index.html
└── favicon.ico
```

Add your styles to the `site` folder and use the `@import` to add to the `main.scss` file. The styles include `breakpoint-sass` which you can use for easy breakpoints. Try it, you won't be disappointed. :)

Add your assets, such as images to the `assets` folder.

The `index.js` is the main ES6 file, import all libraries there.

Edit the `index.html` in the public folder.

Replace the `favicon.ico` with your own icon.

## Configuration

You can change a few configuration for Webpack in the `.config.js` file within the root folder (default settings below).

```
const hostName = 'localhost';
const portNumber = 9000;
const jsFileName = './assets/js/bundle.js';
const cssFileName = './assets/css/styles.css';
const sourceMaps = true;
const devtool = 'inline-source-map';
```

Changes to Webpack can be made in the `config` folder.

## To Use

### Install dependencies

```sh
npm install

or

yarn install
```

### Server

```sh
npm run serve

or

yarn serve
```

Will create a server at `http://localhost:9000/` or the port number if you changed this in the `config.js` file.

### Build

```sh
npm run build

or

yarn build
```

### ESLint

```sh
npm run lint

or

yarn lint
```

## License

[MIT](https://github.com/VD39/es6-webpack-boilerplate/blob/master/LICENSE)
