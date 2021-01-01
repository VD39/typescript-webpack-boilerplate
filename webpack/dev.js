// Import dependencies.
import { merge } from 'webpack-merge';

// Import Configuration.
import { paths } from './configuration/paths';
import { config } from './configuration/config';
import { WebpackCommonConfig } from './common';
import { hotModuleReplacementPlugin } from './plugins';

/**
 * Default dev server settings.
 */
const devServer = {
  open: true,
  compress: true,
  port: config.PORT,
  host: config.HOST,
  overlay: {
    errors: true,
    warnings: true,
  },
  static: [
    paths.dist,
    {
      watch: true,
    },
  ],
  client: {
    progress: true,
  },
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
