// Import dependencies.
import path from 'path';
import StyleLintWebpackPlugin from 'stylelint-webpack-plugin';

// Import Configuration.
import { paths, config } from '../configuration';

/**
 * StyleLintWebpackPlugin()
 * A webpack plugin to lint your CSS/Sass code using stylelint.
 */
export const styleLintWebpackPlugin = new StyleLintWebpackPlugin({
  emitErrors: true,
  emitWarning: true,
  context: paths.src,
  extensions: ['.css'],
  failOnError: !config.IS_DEV,
  failOnWarning: !config.IS_DEV,
  lintDirtyModulesOnly: config.IS_DEV,
  configFile: path.resolve(__dirname, '../../.stylelintrc.js'),
});
