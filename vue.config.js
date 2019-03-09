module.exports = {
  publicPath: '/loVue-elm/',
  outputDir: 'docs',
  css: {
    sourceMap: true
  },
  pwa: {
    name: 'loVue-elm',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    // 配置 workbox 插件
    workboxPluginMode: 'GenerateSW'
  }
}