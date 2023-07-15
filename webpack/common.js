// Import Configuration.
import {
  htmlWebpackPlugin,
  copyWebpackPlugin,
  eSLintWebpackPlugin,
  dotenvWebpackPlugin,
  styleLintWebpackPlugin,
} from './plugins/index.js';
import { paths, config } from '../configuration/index.js';
import { css, fonts, images, javaScript, typeScript } from './modules/index.js';

/**
 * Entry point for the bundle.
 */
const entry = [`${paths.src}/index.ts`, `${paths.src}/css/styles.css`];

/**
 * Set output file name and path.
 */
const output = {
  filename: config.JS_FILE_OUTPUT,
  path: paths.dist,
  publicPath: '/',
};

/**
 * Shared plugins.
 */
const plugins = [
  htmlWebpackPlugin,
  copyWebpackPlugin,
  eSLintWebpackPlugin,
  dotenvWebpackPlugin,
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
  alias: {
    '@': paths.src,
  },
  extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
};

/**
 * Webpack common configuration.
 */
export const WebpackCommonConfig = {
  context: paths.root,
  entry,
  mode: config.IS_DEV ? 'development' : 'production',
  module: modules,
  output,
  plugins,
  resolve,
  target: config.IS_DEV ? 'web' : 'browserslist',
};
