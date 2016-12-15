module.exports = {
  extends: 'airbnb-base',
  installedESLint: true,
  plugins: [
    'import',
    'json',
  ],
  globals: {
    p5: true
  },
  rules: {
    'no-new': 'off',
  },
};
