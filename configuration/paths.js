// Import dependencies.
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '../');

/**
 * Object of paths used in Webpack configuration.
 */
export const paths = {
  root, // Root directory.
  src: path.resolve(root, './src'), // Source directory.
  dist: path.resolve(root, './dist'), // Destination build directory.
  public: path.resolve(root, './public'), // Public directory.
};
