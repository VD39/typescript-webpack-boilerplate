/**
 * Configuration variables for Webpack.
 * Set your own values here.
 */
const portNumber = 9000; // Port number for the server
const hostName = 'localhost'; // Hostname for the server
const jsFileOutput = 'assets/js/[name].[contenthash].js'; // JavaScript file name once built
const cssFileOutput = 'assets/css/[name].[contenthash].css'; // CSS file name once built

/**
 * Set and export configuration.
 */
export const config = {
  HOST: hostName,
  PORT: portNumber,
  JS_FILE_OUTPUT: jsFileOutput,
  CSS_FILE_OUTPUT: cssFileOutput,
  IS_DEV: process.env.NODE_ENV === 'development',
};
