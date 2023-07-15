// Import dependencies.
import { merge } from 'webpack-merge';

// Import Configuration.
import { WebpackCommonConfig } from './common.js';
import { paths, config } from '../configuration/index.js';

/**
 * Default dev server settings.
 */
const devServer = {
  client: {
    progress: true,
  },
  compress: false,
  host: config.HOST,
  hot: true,
  open: true,
  port: config.PORT,
  static: [
    {
      directory: paths.dist,
      watch: true,
    },
  ],
};

/**
 * Webpack development configuration.
 */
const WebpackConfig = {
  devServer,
  devtool: 'cheap-module-source-map',
};

// Export configuration.
export const WebpackDevConfig = merge(WebpackCommonConfig, WebpackConfig);
