module.exports = {
  plugins: {
    'postcss-url': {
      url: 'inline',
    },
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-preset-env': {
      stage: 0,
    },
    'postcss-simple-vars': {},
    'postcss-custom-media': {},
  },
  module: true,
  url: false,
};
