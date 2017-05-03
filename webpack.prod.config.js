const config = require('./webpack.config');
const webpack = require('webpack');

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    minimize: true
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  })
);

module.exports = config;
