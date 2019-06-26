// Import dependencies.
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

// Import Configuration.
const {
  CSSOUTPUT,
  DIST,
  ENTRY,
  GITIGNORE,
  JSOUTPUT,
  OUTPUT,
  STYLELINTRC,
} = require('../config');

/**
 * Default modules loader for assets.
 */
const assets = {
  test: /\.(woff|woff2|eot|ttf|svg|ico|jpg|jpeg|png)$/,
  loader: 'url-loader?limit=1000000',
};

/**
 * Default modules loader for CSS.
 */
const css = {
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
};

/**
 * Default modules loader for HTML.
 */
const html = {
  test: /\.html$/,
  loader: 'raw-loader',
};

/**
 * Default modules loader for JavaScript.
 */
const javascript = {
  test: /\.js$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/env'],
        plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]],
      },
    },
    'eslint-loader',
  ],
};

/**
 * Shared plugins.
 *
 * CleanWebpackPlugin()
 * A webpack plugin to remove/clean your build folder(s) before building.
 *
 * ExtractTextPlugin()
 * A webpack plugin to extract text from a bundle, or bundles, into a separate file.
 *
 * HtmlWebpackPlugin()
 * A webpack plugin that simplifies creation of HTML files to serve your webpack bundles.
 *
 * StyleLintPlugin()
 * A webpack plugin to lint your CSS/Sass code using stylelint.
 */
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: CSSOUTPUT,
    path: DIST,
  }),
  new HtmlWebpackPlugin({
    template: `${OUTPUT}/index.html`,
    minify: {
      collapseWhitespace: true,
      removeComments: true,
    },
  }),
  new StyleLintPlugin({
    configFile: STYLELINTRC,
    context: ENTRY,
    emitErrors: true,
    failOnError: false,
    files: '**/*.css',
    ignorePath: GITIGNORE,
    quiet: false,
  }),
];

/**
 * Environment mode.
 */
const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

/**
 * Entry point for the bundle.
 */
const entry = [`${ENTRY}/index.js`, `${ENTRY}/css/styles.css`];

/**
 * Set output folder name for .js file for the dev server.
 */
const output = {
  path: DIST,
  filename: JSOUTPUT,
};

/**
 * Array of resolve modules entry and file extension to prevent ESLint errors.
 */
const resolve = { extensions: ['.js', '.json'] };

/**
 * Default modules loaders.
 */
const modules = {
  rules: [assets, css, html, javascript],
};

/**
 * Webpack configuration.
 */
const WebpackConfig = {
  entry,
  mode,
  module: modules,
  output,
  plugins,
  resolve,
};

// Export WebpackConfig.
module.exports = WebpackConfig;
