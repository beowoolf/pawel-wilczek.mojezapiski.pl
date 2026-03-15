const pluginVue = require('eslint-plugin-vue')
const pluginNuxt = require('eslint-plugin-nuxt')
const pluginJest = require('eslint-plugin-jest')
const prettierConfig = require('eslint-config-prettier')
const babelParser = require('@babel/eslint-parser')
const vueParser = require('vue-eslint-parser')
const globals = require('globals')

module.exports = [
  // Ignore patterns (similar to .gitignore)
  {
    ignores: [
      'node_modules/**',
      '.nuxt/**',
      'dist/**',
      '.next/**',
      'coverage/**',
      '*.log',
      '.cache/**',
      '.idea/**',
      '.vscode/**',
      'sw.*',
      '.DS_Store',
      '*.swp',
    ],
  },

  // Vue 2 recommended config for .vue files
  ...pluginVue.configs['flat/vue2-recommended'],

  // Configuration for .vue files
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: babelParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false,
      },
    },
  },

  // Configuration for .js files
  {
    files: ['**/*.js'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      nuxt: pluginNuxt,
      jest: pluginJest,
    },
  },

  // Nuxt plugin configuration
  {
    plugins: {
      nuxt: pluginNuxt,
    },
    rules: {
      // Nuxt recommended rules
      'nuxt/no-cjs-in-config': 'error',
      'nuxt/no-env-in-hooks': 'error',
      'nuxt/no-globals-in-created': 'error',
      'nuxt/no-this-in-fetch-data': 'error',
      'nuxt/no-timing-in-fetch-data': 'error',
    },
  },

  // Prettier config (must be last to override other configs)
  prettierConfig,

  // Global configuration
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      vue: pluginVue,
      nuxt: pluginNuxt,
      jest: pluginJest,
    },
    rules: {
      // Add your custom rules here
    },
  },
]
