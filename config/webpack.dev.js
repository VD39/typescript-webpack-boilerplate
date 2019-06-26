// Import dependencies.
const merge = require('webpack-merge');

// Import Configuration.
const { DIST, HOST, PORT } = require('../config');
const WebpackCommon = require('./webpack.common');

/**
 * Default dev server settings.
 */
const devServer = {
  contentBase: DIST,
  host: HOST,
  port: PORT,
};

/**
 * Webpack configuration.
 */
const WebpackConfig = {
  devServer,
  watch: true,
};

// Merge and export WebpackConfig module.
module.exports = merge(WebpackCommon, WebpackConfig);
