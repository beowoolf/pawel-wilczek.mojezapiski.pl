// const { resolve } = require('path')
import { resolve } from 'path'
// const contentModule = require('@nuxt/content')
import contentModule from '@nuxt/content'

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  modules: [contentModule],
}
