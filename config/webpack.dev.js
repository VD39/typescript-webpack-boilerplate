// Import dependencies
const merge = require('webpack-merge');
const WebpackCommon = require('./webpack.common');

// Import Configuration
const config = require('../config');

/**
 * Set output folder name for .js file for the dev server.
 */
const output = {
  path: config.OUTPUT,
  filename: config.JSFILENAME,
};

/**
 * Default dev server settings.
 */
const devServer = {
  contentBase: config.OUTPUT,
  host: config.HOST,
  port: config.PORT,
};

/**
 * Webpack configuration.
 */
const WebpackConfig = {
  output,
  devServer,
  watch: true,
};

// Check if DEVTOLL is set and add to Webpack configuration
if (config.DEVTOOL) {
  WebpackConfig.devtool = config.DEVTOOL; // Set devtool
}

// Merge and export WebpackConfig module
module.exports = merge(WebpackCommon, WebpackConfig);
