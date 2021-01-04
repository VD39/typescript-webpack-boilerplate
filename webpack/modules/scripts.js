/**
 * Default modules loader for TypeScript.
 */
export const typeScript = {
  test: /\.(ts|tsx)$/,
  loader: 'ts-loader',
  exclude: /node_modules/,
};

/**
 * Default modules loader for JavaScript.
 */
export const javaScript = {
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
};
