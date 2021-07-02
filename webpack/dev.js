// Import dependencies.
import { merge } from 'webpack-merge';

// Import Configuration.
import { WebpackCommonConfig } from './common';
import { paths, config } from './configuration';
import { hotModuleReplacementPlugin } from './plugins';

/**
 * Default dev server settings.
 */
const devServer = {
  open: true,
  compress: true,
  port: config.PORT,
  host: config.HOST,
  client: {
    progress: true,
  },
  static: [
    {
      watch: true,
      directory: paths.dist,
    },
  ],
};

/**
 * Plugins for development.
 */
const plugins = [hotModuleReplacementPlugin];

/**
 * Webpack development configuration.
 */
const WebpackConfig = {
  plugins,
  devServer,
  devtool: 'cheap-module-source-map',
};

// Export configuration.
export const WebpackDevConfig = merge(WebpackCommonConfig, WebpackConfig);
