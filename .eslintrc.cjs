module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'max-depth': ['error', 2],
    'max-lines-per-function': ['error', 15],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    eqeqeq: 'error',
    'no-console': 'warn',
    'no-dupe-args': 'error',
    'no-unreachable': 'error',
    'no-unused-vars': 'warn',
    'import/extensions': ['error', 'ignorePackages'],
  },
  plugins: ['import'],
};
