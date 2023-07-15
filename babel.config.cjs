module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: {
          proposals: true,
          version: '3',
        },
        loose: true,
        useBuiltIns: 'usage',
      },
    ],
    '@babel/preset-typescript',
  ],
};
