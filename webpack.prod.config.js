const config = require('./webpack.config');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

config.plugins.push(
  new ExtractTextPlugin('style.css'),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  })
);

module.exports = config;
