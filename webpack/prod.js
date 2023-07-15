// Import dependencies.
import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

// Import Configuration.
import {
  cleanWebpackPlugin,
  miniCssExtractPlugin,
  imageMinimizerWebpackPlugin,
} from './plugins/index.js';
import { WebpackCommonConfig } from './common.js';

/**
 * Plugins for production build.
 */
const plugins = [cleanWebpackPlugin, miniCssExtractPlugin];

/**
 * Webpack production configuration.
 */
const WebpackConfig = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
      imageMinimizerWebpackPlugin,
    ],
  },
  plugins,
};

// Export configuration.
export const WebpackProdConfig = merge(WebpackCommonConfig, WebpackConfig);
