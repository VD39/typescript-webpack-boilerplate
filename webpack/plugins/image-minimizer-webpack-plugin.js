// Import dependencies.
import ImageMinimizerWebpackPlugin from 'image-minimizer-webpack-plugin';

/**
 * ImageMinimizerWebpackPlugin()
 * A webpack plugin uses imagemin to optimize your images.
 */
export const imageMinimizerWebpackPlugin = new ImageMinimizerWebpackPlugin({
  minimizer: {
    implementation: ImageMinimizerWebpackPlugin.imageminMinify,
    options: {
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
            arithmetic: false,
            progressive: true,
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
              'preset-default',
              {
                active: false,
                name: 'removeViewBox',
              },
              {
                name: 'addAttributesToSVGElement',
                params: {
                  attributes: [
                    {
                      xmlns: 'http://www.w3.org/2000/svg',
                    },
                  ],
                },
              },
            ],
          },
        ],
      ],
    },
  },
});
