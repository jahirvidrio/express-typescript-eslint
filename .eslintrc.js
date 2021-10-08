module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  'extends': [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: 'tsconfig.eslint.json',
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['.eslintrc.js', 'esbuild.js'],
  rules: {
    'no-multiple-empty-lines': ['warn', { max: 2, maxBOF:0 , maxEOF: 1 }],
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    'no-console': 'off',
  }
};

