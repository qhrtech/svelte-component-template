module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['svelte3', '@typescript-eslint', 'jest'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    'jest/globals': true,
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
    },
  ],
  settings: {
    'svelte3/typescript': () => require('typescript'),
  },
};
