// Import dependencies.
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// Import Configuration.
import { config } from '../../configuration/index.js';

/**
 * Default modules loader for CSS.
 */
export const css = {
  test: /\.css$/,
  use: [
    config.IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader',
  ],
  exclude: /node_modules/,
};
