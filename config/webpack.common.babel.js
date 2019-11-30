// Import dependencies.
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';

// Import Configuration.
import config from '../config';

const {
  CSSOUTPUT,
  DIST,
  ENTRY,
  GITIGNORE,
  JSOUTPUT,
  OUTPUT,
  STYLELINTRC,
} = config;

/**
 * Default modules loader for assets.
 */
const assets = {
  test: /\.(eot|gif|ico|jpe?g|png|svg|ttf|woff?2)$/,
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
  use: ['babel-loader', 'eslint-loader'],
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
  new CopyWebpackPlugin([
    {
      from: `${OUTPUT}/favicon.ico`,
    },
    {
      from: `${OUTPUT}/assets/`,
      to: `${DIST}/assets/`,
    },
  ]),
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
 * Entry point for the bundle.
 */
const entry = [
  'core-js/stable',
  'regenerator-runtime/runtime',
  `${ENTRY}/index.js`,
  `${ENTRY}/css/styles.css`,
];

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
const resolve = {
  extensions: ['.js', '.json'],
  alias: {
    '@': ENTRY,
  },
};

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
  module: modules,
  output,
  plugins,
  resolve,
};

// Export WebpackConfig.
export default WebpackConfig;
