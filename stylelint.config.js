module.exports = {
  extends: 'stylelint-config-recommended',
  // Optional: Add overrides
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};