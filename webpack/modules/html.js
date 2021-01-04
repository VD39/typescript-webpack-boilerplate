// Import Configuration.
import { paths } from '../configuration/paths';

/**
 * Default modules loader for HTML.
 */
export const html = {
  test: /\.html$/,
  loader: 'raw-loader',
  exclude: `${paths.public}/index.html`,
};
