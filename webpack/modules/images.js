/**
 * Default modules loader for image assets.
 */
export const images = {
  test: /\.(gif|ico|jpe?g|png|svg|webp)$/,
  loader: 'file-loader',
  options: {
    name: 'assets/images/[contenthash].[ext]',
  },
};
