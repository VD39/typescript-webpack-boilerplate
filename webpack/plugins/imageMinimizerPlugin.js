// Import dependencies.
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';

/**
 * ImageMinimizerPlugin()
 * A webpack plugin uses imagemin to optimize your images.
 */
export const imageMinimizerPlugin = new ImageMinimizerPlugin({
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
              removeViewBox: false,
            },
          ],
        },
      ],
    ],
  },
});
