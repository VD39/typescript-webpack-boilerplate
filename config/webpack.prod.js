// Import dependencies
const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackCommon = require('./webpack.common');

// Import Configuration
const config = require('../config');

/**
 * Set output folder name for .js file for the production build.
 */
const output = {
  path: config.DIST,
  filename: config.JSFILENAME,
};

/**
 * Plugins for production build.
 *
 * CopyWebpackPlugin()
 * A webpack plugin that copies individual files or entire directories to the build directory.
 *
 * UglifyJsPlugin()
 * A webpack plugin to minify your JavaScript.
 *
 * LoaderOptionsPlugin()
 * A webpack plugin to edit loader options.
 */
const plugins = [
  new CopyWebpackPlugin([
    {
      from: `${config.OUTPUT}/favicon.ico`,
    },
    {
      from: `${config.OUTPUT}/assets/`,
      to: `${config.DIST}/assets/`,
    },
  ]),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
  }),
];

/**
 * Webpack configuration.
 */
const WebpackConfig = {
  output,
  plugins,
};

// Merge and export WebpackConfig module
module.exports = merge(WebpackCommon, WebpackConfig);
