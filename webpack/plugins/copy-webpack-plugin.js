// Import dependencies.
import CopyWebpackPlugin from 'copy-webpack-plugin';

// Import Configuration.
import { paths } from '../configuration';

/**
 * CopyWebpackPlugin()
 * A webpack plugin that copies individual files or entire directories to the build directory.
 */
export const copyWebpackPlugin = new CopyWebpackPlugin({
  patterns: [
    {
      from: paths.public,
      to: paths.dist,
      globOptions: {
        dot: true,
        ignore: ['**/.DS_Store', '**/.gitkeep', '**/index.html'],
      },
    },
  ],
});
