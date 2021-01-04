// Import dependencies.
import path from 'path';

/**
 * Object of paths used in Webpack configuration.
 */
export const paths = {
  src: path.resolve(__dirname, '../../src'), // Source directory.
  dist: path.resolve(__dirname, '../../dist'), // Destination build directory.
  public: path.resolve(__dirname, '../../public'), // Public directory
};
