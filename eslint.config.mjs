import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPrettierConfig from 'eslint-config-prettier';
import eslintPrettierPluginRecommended from 'eslint-plugin-prettier/recommended';

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    languageOptions: { globals: globals.browser },
    ignores: ['node_modules', 'dist'],
    plugins: {
      eslintPrettierPluginRecommended
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  eslintPrettierConfig
];
