export default {
  extends: 'stylelint-config-standard',
  rules: {
    // Customize your CSS lint rules here, example:
    'color-no-invalid-hex': true,
    'declaration-block-trailing-semicolon': 'always',
  },
  ignoreFiles: ['dist/**'],
};
