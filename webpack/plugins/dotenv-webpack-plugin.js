// Import dependencies.
import { config } from 'dotenv';
import webpack from 'webpack';

/**
 * dotenvWebpackPlugin()
 * A custom webpack plugin for .env.
 */
export const dotenvWebpackPlugin = new webpack.DefinePlugin({
  'process.env': JSON.stringify(config().parsed),
});
