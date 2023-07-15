// Import dependencies.
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

// Import Configuration.
import { paths } from '../../configuration/index.js';

/**
 * CleanWebpackPlugin()
 * A webpack plugin to remove/clean your build folder(s) before building.
 */
export const cleanWebpackPlugin = new CleanWebpackPlugin({
  root: paths.dist,
});
