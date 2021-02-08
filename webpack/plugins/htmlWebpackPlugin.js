// Import dependencies.
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Import Configuration.
import { paths } from '../configuration';

/**
 * HtmlWebpackPlugin()
 * A webpack plugin that simplifies creation of HTML files to serve your webpack bundles.
 */
export const htmlWebpackPlugin = new HtmlWebpackPlugin({
  inject: 'body',
  template: `${paths.public}/index.html`,
});
