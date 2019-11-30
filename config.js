// Import dependencies.
import path from 'path';

/**
 * Configuration variables for Webpack.
 * Set your own values here.
 */
const hostName = 'localhost'; // Hostname for the server
const portNumber = 9000; // Port number for the server
const jsOutput = './assets/js/[name].[chunkhash:22].js'; // JavaScript file name once built
const cssOutput = './assets/css/[name].[chunkhash:22].css'; // CSS file name once built

/**
 * Set config.
 * These don't need to change, but feel free to change to your needs.
 */
const config = {
  CSSOUTPUT: cssOutput,
  DIST: path.resolve(__dirname, 'dist'),
  ENTRY: path.resolve(__dirname, 'src'),
  GITIGNORE: path.resolve(__dirname, '.gitignore'),
  HOST: hostName,
  JSOUTPUT: jsOutput,
  OUTPUT: path.resolve(__dirname, 'public'),
  PORT: portNumber,
  STYLELINTRC: path.resolve(__dirname, '.stylelintrc'),
};

// Export config.
export default config;
