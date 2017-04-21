# ES6 Boilerplate

My personal ES6 boilerplate built with babel, webpack, SCSS, and eslint.

>Feel free to use. :)

## Folder structure

Below is the folder structure.

```
app
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
