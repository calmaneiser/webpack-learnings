import js from '@eslint/js';
import pluginHtml from 'eslint-plugin-html';

export default [
  js.configs.recommended,
  {
    ignores: [
      'dist',
      'node_modules',
      'coverage',
      'public',
      'build',
      'out',
      'tmp',
      'temp',
    ],
  },
  {
    env: {
      browser: true,
      es2021: true,
    },
    files: ['**/*.js', '**/*.html'],
    plugins: {
      html: pluginHtml,
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
];
