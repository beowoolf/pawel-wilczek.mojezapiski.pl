/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
  // Vue/HTML CSS blocks via postcss-html (peer of recommended-vue)
  overrides: [
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    // Nuxt root mount IDs (#__nuxt, #__layout)
    'selector-id-pattern': null,
  },
}
