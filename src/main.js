import Vue from 'vue'
import './style/normalize.css'
import './plugins/axios'
import VueLazyload from 'vue-lazyload'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './iconfont/iconfont.css'

import skeletonRect from './components/skeleton/rect/index.js'
import skeletonCircle from './components/skeleton/circle/index.js'

Vue.use(MintUI)
Vue.use(skeletonRect)
Vue.use(skeletonCircle)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  MintUI.Indicator.close()
  next()

  // if (!auth.loggedIn()) {
  //   next({
  //     path: '/login',
  //     query: { redirect: to.fullPath }
  //   })
  // } else {
  //   next()
  // }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
