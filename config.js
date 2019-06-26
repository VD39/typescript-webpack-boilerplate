// Import dependencies.
const path = require('path');

/**
 * Configuration variables for Webpack.
 * Set your own values here.
 */
const hostName = 'localhost'; // Hostname for the server
const portNumber = 9000; // Port number for the server
const jsOutput = './assets/js/bundle.js'; // JavaScript file name once built
const cssOutput = './assets/css/styles.css'; // CSS file name once built

/**
 * Set config.
 * These don't need to change, but feel free to change to your needs.
 */
const config = {
  ENTRY: path.resolve(__dirname, 'src'),
  OUTPUT: path.resolve(__dirname, 'public'),
  DIST: path.resolve(__dirname, 'dist'),
  STYLELINTRC: path.resolve(__dirname, '.stylelintrc'),
  GITIGNORE: path.resolve(__dirname, '.gitignore'),
  HOST: hostName,
  PORT: portNumber,
  JSOUTPUT: jsOutput,
  CSSOUTPUT: cssOutput,
};

// Export config
module.exports = config;
