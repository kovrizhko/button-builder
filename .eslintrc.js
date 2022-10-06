module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-use-before-define': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'no-param-reassign': 0,
    'max-len': 0,
    'import/extensions': 0,
  },
};
