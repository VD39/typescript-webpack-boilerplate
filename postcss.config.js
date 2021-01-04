module.exports = {
  plugins: {
    'postcss-url': {
      url: 'inline',
    },
    'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-preset-env': {
      stage: 0,
    },
    'postcss-simple-vars': {},
    'postcss-easy-import': {},
  },
  module: true,
  url: false,
};
