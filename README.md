# ES6 Boilerplate With Webpack

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/VD39/es6-webpack-boilerplate/blob/master/LICENSE)

My personal ES6 boilerplate built with babel, webpack, SCSS, and eslint.

>Feel free to use. :)

## Folder structure

Below is the folder structure.

```
src
└── styles
│    ├── main.scss
│    └── reset.scss
└── index.js
public
├── index.html
└── favicon.ico
```

Add your styles to a new .scss file and use the `@import` to add to the `main.scss` file.
The `index.js` is the main ES6 file, import all libraries there.
Edit your `index.html` in the public folder.
Replace the `favicon.ico` with your own icon.

# To Use

### Install dependencies

```sh
npm install
```

### Server

```sh
npm run dev
```
Will create a server at `http://localhost:9100/`.

### Build

```sh
npm run build
```

## License
[MIT](https://github.com/VD39/es6-webpack-boilerplate/blob/master/LICENSE)
