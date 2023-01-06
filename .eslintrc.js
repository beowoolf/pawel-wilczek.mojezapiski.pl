module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'prettier',
    // 'prettier/vue',
    // 'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'nuxt/no-cjs-in-config': 'off',
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.spec.js', '**/*.spec.jsx'],
      env: {
        jest: true,
      },
    },
  ],
}
