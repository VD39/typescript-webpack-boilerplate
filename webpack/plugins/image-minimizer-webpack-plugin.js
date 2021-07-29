// Import dependencies.
import ImageMinimizerWebpackPlugin from 'image-minimizer-webpack-plugin';

/**
 * ImageMinimizerWebpackPlugin()
 * A webpack plugin uses imagemin to optimize your images.
 */
export const imageMinimizerWebpackPlugin = new ImageMinimizerWebpackPlugin({
  test: /\.(jpe?g|png|gif|svg)$/i,
  minimizerOptions: {
    plugins: [
      [
        'gifsicle',
        {
          interlaced: true,
        },
      ],
      [
        'mozjpeg',
        {
          progressive: true,
          arithmetic: false,
        },
      ],
      [
        'pngquant',
        {
          quality: [0.4, 0.7],
        },
      ],
      [
        'svgo',
        {
          plugins: [
            {
              name: 'removeViewBox',
              active: false,
            },
          ],
        },
      ],
    ],
  },
});
