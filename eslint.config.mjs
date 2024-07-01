import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import jestConfig from 'eslint-plugin-jest';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  eslintPluginPrettierRecommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  jestConfig.configs['flat/recommended'],
  {
    ignores: [
      'dist',
      'website/build',
      'website/node_modules',
      'website/src/code',
      'node_modules',
      'package-lock.json',
      'website',
    ],
  },
  {},
];
