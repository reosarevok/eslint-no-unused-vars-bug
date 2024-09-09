import hermesParser from 'hermes-eslint';

export default [
  {
    languageOptions: {
      parser: hermesParser,
    },
    rules: {
      'no-unused-vars': ['error'],
    },
  },

];
