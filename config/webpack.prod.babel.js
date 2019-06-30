// Import dependencies.
import CopyWebpackPlugin from 'copy-webpack-plugin';
import merge from 'webpack-merge';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

// Import Configuration.
import config from '../config';
import WebpackCommon from './webpack.common.babel';

const { DIST, OUTPUT } = config;

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

// Merge and export WebpackConfig module.
export default merge(WebpackCommon, WebpackConfig);
