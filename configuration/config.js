// Import dependencies.
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

/**
 * Configuration variables for project.
 */
export const config = {
  CSS_FILE_OUTPUT: 'assets/css/[name].[contenthash].css', // CSS file name once built.
  HOST: process.env.HOST_NAME || 'localhost', // Hostname for the server.
  IS_DEV: process.env.NODE_ENV?.includes('dev'), // If environment is development or not.
  JS_FILE_OUTPUT: 'assets/js/[name].[contenthash].js', // JavaScript file name once built.
  PORT: process.env.PORT_NUMBER || 9000, // Port number for the server.
  TITLE: process.env.TITLE || 'TypeScript Webpack Boilerplate', // Title used in index.html title tag.
};
