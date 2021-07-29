/**
 * Default modules loader for image assets.
 */
export const images = {
  test: /\.(gif|ico|jpe?g|png|svg|webp)$/,
  type: 'asset/resource',
  generator: {
    filename: 'assets/images/[contenthash][ext]',
  },
};
