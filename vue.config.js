// const path = require('path');
// const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');
module.exports = {
  baseUrl: '/loVue-elm/',
  outputDir: 'docs',
  css: {
    sourceMap: true
  },
  // configureWebpack: (config) => {
  //   config.plugins.push(new SkeletonWebpackPlugin({
  //     webpackConfig: {
  //       entry: {
  //         app: path.join(__dirname, './src/Skeleton.js'),
  //       }
  //     },
  //     minimize: true,
  //     quiet: true
  //   }))
  // },
  // pwa: {
  //   name: 'loVue ELM App',
  //   themeColor: '#4DBA87',
  //   msTileColor: '#000000',
  //   appleMobileWebAppCapable: 'yes',
  //   appleMobileWebAppStatusBarStyle: 'black',

  //   // 配置 workbox 插件
  //   workboxPluginMode: 'InjectManifest',
  //   workboxOptions: {
  //     // InjectManifest 模式下 swSrc 是必填的。
  //     swSrc: 'dev/sw.js'
  //   }
  // }
}