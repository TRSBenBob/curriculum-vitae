module.exports = {
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  settings: {},
  rules: {},
}
