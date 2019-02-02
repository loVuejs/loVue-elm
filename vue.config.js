module.exports = {
  baseUrl: '/loVue-elm/',
  outputDir: 'docs',
  css: {
    sourceMap: true
  },
  pwa: {
    name: 'loVue ELM App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // 配置 workbox 插件
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // InjectManifest 模式下 swSrc 是必填的。
      swSrc: 'dev/sw.js'
    }
  }
}