/**
 * Default modules loader for font assets.
 */
export const fonts = {
  test: /\.(eot|ttf|woff?2)$/,
  loader: 'file-loader',
  options: {
    name: 'assets/fonts/[contenthash].[ext]',
  },
};
