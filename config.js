// Import dependencies
const path = require('path');

/**
 * Configuration variables for Webpack.
 * Set you own values here.
 */
const hostName = 'localhost'; // Hostname for the server
const portNumber = 9000; // Port number for the server
const jsFileName = './assets/js/bundle.js'; // JavaScript file name once built
const cssFileName = './assets/css/styles.css'; // CSS file name once built
const sourceMaps = true; // If source maps should be generated(only in dev mode)
const devtool = 'inline-source-map'; // Source map type. Refer to: https://webpack.js.org/configuration/devtool/

/**
 * Set config.
 * These don't need to change, but feel free to change to your needs.
 */
const config = {};
config.ENTRY = path.join(__dirname, '/src');
config.OUTPUT = path.join(__dirname, '/public');
config.DIST = path.join(__dirname, '/dist');
config.HOST = hostName;
config.PORT = portNumber;
config.JSFILENAME = jsFileName;
config.CSSFILENAME = cssFileName;
config.SOURCEMAPS = sourceMaps;
config.DEVTOOL = devtool;

// Export config
module.exports = config;
