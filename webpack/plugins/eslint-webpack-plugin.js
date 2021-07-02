// Import dependencies.
import path from 'path';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';

// Import Configuration.
import { paths, config } from '../configuration';

/**
 * ESLintWebpackPlugin()
 * A webpack plugin to lint your JavaScript/TypeScript code using ESLint.
 */
export const eSLintWebpackPlugin = new ESLintWebpackPlugin({
  emitError: true,
  emitWarning: true,
  context: paths.src,
  failOnError: !config.IS_DEV,
  failOnWarning: !config.IS_DEV,
  lintDirtyModulesOnly: config.IS_DEV,
  extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  overrideConfigFile: path.resolve(__dirname, '../../.eslintrc.js'),
});
