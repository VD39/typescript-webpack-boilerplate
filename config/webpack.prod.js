// Import dependencies
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Import Configuration
const { DIST, OUTPUT } = require('../config');
const WebpackCommon = require('./webpack.common');

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
      from: `${OUTPUT}/favicon.ico`,
    },
    {
      from: `${OUTPUT}/assets/`,
      to: `${DIST}/assets/`,
    },
  ]),
  new OptimizeCssAssetsPlugin(),
  new UglifyJsPlugin(),
];

/**
 * Webpack configuration.
 */
const WebpackConfig = {
  plugins,
};

// Merge and export WebpackConfig module
module.exports = merge(WebpackCommon, WebpackConfig);
