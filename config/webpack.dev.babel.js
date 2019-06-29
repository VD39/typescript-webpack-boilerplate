// Import dependencies.
import merge from 'webpack-merge';

// Import Configuration.
import config from '../config';
import WebpackCommon from './webpack.common.babel';

const { DIST, HOST, PORT } = config;

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
export default merge(WebpackCommon, WebpackConfig);
