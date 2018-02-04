// Import dependencies
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');

// Import Configuration
const config = require('../config');

/**
 * Entry point for the bundle.
 */
const entry = {
  app: config.ENTRY,
};

/**
 * Array of resolve modules entry and file extension to prevent ESLint errors.
 */
const resolve = {
  modules: [config.ENTRY, 'node_modules'],
  extensions: ['*', '.js', '.json'],
};

/**
 * Default modules loaders.
 */
const modules = {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader?cacheDirectory',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        {
          loader: 'eslint-loader',
        },
      ],
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: config.SOURCEMAPS,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  browsers: ['last 5 versions'],
                }),
              ],
              sourceMap: 'inline',
            },
          },
        ],
      }),
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=1000000',
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: config.SOURCEMAPS,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  browsers: ['last 5 versions'],
                }),
              ],
              sourceMap: 'inline',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: config.SOURCEMAPS,
            },
          },
        ],
      }),
    },
    {
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'raw-loader',
    },
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
 */
const plugins = [
  new CleanWebpackPlugin([config.DIST], {
    allowExternal: true,
  }),
  new ExtractTextPlugin(config.CSSFILENAME),
  new HtmlWebpackPlugin({
    template: `${config.OUTPUT}/index.html`,
  }),
];

/**
 * Webpack configuration.
 */
const WebpackConfig = {
  entry,
  resolve,
  module: modules,
  plugins,
};

// Export WebpackConfig module
module.exports = WebpackConfig;
