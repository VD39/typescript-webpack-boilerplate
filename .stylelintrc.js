module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    'selector-max-id': 0,
    'string-quotes': 'single',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin', 'mixin-content', 'define-mixin'],
      },
    ],
  },
};
