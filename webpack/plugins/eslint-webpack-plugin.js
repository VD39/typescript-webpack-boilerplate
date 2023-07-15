// Import dependencies.
import path from 'path';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';

// Import Configuration.
import { paths, config } from '../../configuration/index.js';

/**
 * ESLintWebpackPlugin()
 * A webpack plugin to lint your JavaScript/TypeScript code using ESLint.
 */
export const eSLintWebpackPlugin = new ESLintWebpackPlugin({
  context: paths.src,
  emitError: true,
  emitWarning: true,
  extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  failOnError: !config.IS_DEV,
  failOnWarning: !config.IS_DEV,
  lintDirtyModulesOnly: config.IS_DEV,
  overrideConfigFile: path.resolve(paths.root, './.eslintrc.cjs'),
});
