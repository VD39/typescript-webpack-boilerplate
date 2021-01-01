// Import dependencies.
import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

// Import Configuration.
import {
  cleanWebpackPlugin,
  miniCssExtractPlugin,
  imageMinimizerPlugin,
} from './plugins';
import { WebpackCommonConfig } from './common';

/**
 * Plugins for production build.
 */
const plugins = [
  cleanWebpackPlugin,
  miniCssExtractPlugin,
  imageMinimizerPlugin,
];

/**
 * Webpack production configuration.
 */
const WebpackConfig = {
  plugins,
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
};

// Export configuration.
export const WebpackProdConfig = merge(WebpackCommonConfig, WebpackConfig);
