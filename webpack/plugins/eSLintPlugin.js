// Import dependencies.
import path from 'path';
import ESLintPlugin from 'eslint-webpack-plugin';

// Import Configuration.
import { paths, config } from '../configuration';

/**
 * ESLintPlugin()
 * A webpack plugin to lint your JavaScript/TypeScript code using ESLint.
 */
export const eSLintPlugin = new ESLintPlugin({
  emitError: true,
  emitWarning: true,
  context: paths.src,
  failOnError: !config.IS_DEV,
  failOnWarning: !config.IS_DEV,
  lintDirtyModulesOnly: config.IS_DEV,
  extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  overrideConfigFile: path.resolve(__dirname, '../../.eslintrc.js'),
});
