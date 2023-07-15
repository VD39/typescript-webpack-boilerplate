// Import dependencies.
import path from 'path';
import StyleLintWebpackPlugin from 'stylelint-webpack-plugin';

// Import Configuration.
import { paths, config } from '../../configuration/index.js';

/**
 * StyleLintWebpackPlugin()
 * A webpack plugin to lint your CSS/SASS code using stylelint.
 */
export const styleLintWebpackPlugin = new StyleLintWebpackPlugin({
  configFile: path.resolve(paths.root, './stylelint.config.cjs'),
  context: paths.src,
  emitErrors: true,
  emitWarning: true,
  extensions: ['.css'],
  failOnError: !config.IS_DEV,
  failOnWarning: !config.IS_DEV,
  lintDirtyModulesOnly: config.IS_DEV,
});
