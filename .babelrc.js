module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: {
          version: 3,
          proposals: true,
        },
        loose: true,
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties'],
    [
      '@babel/plugin-proposal-private-methods',
      {
        loose: false,
      },
    ],
  ],
};
