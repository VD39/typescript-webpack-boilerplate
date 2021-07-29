// Import Configuration.
import {
  htmlWebpackPlugin,
  copyWebpackPlugin,
  eSLintWebpackPlugin,
  styleLintWebpackPlugin,
} from './plugins';
import { paths, config } from './configuration';
import { css, fonts, images, javaScript, typeScript } from './modules';

/**
 * Entry point for the bundle.
 */
const entry = [`${paths.src}/index.ts`, `${paths.src}/css/styles.css`];

/**
 * Set output file name and path.
 */
const output = {
  publicPath: '/',
  path: paths.dist,
  filename: config.JS_FILE_OUTPUT,
};

/**
 * Shared plugins.
 */
const plugins = [
  htmlWebpackPlugin,
  copyWebpackPlugin,
  eSLintWebpackPlugin,
  styleLintWebpackPlugin,
];

/**
 * Shared modules.
 */
const modules = {
  rules: [css, fonts, images, javaScript, typeScript],
};

/**
 * Resolve extensions.
 * Alias for @ set to paths.src directory.
 */
const resolve = {
  extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  alias: {
    '@': paths.src,
  },
};

/**
 * Webpack common configuration.
 */
export const WebpackCommonConfig = {
  entry,
  output,
  plugins,
  resolve,
  module: modules,
  context: __dirname,
  target: config.IS_DEV ? 'web' : 'browserslist',
  mode: config.IS_DEV ? 'development' : 'production',
};
