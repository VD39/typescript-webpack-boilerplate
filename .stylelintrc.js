module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    'selector-max-id': 0,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin', 'mixin-content', 'define-mixin'],
      },
    ],
  },
};
