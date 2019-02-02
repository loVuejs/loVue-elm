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
import './registerServiceWorker'

Vue.use(VueLazyload, {
  loading: 'https://raw.githubusercontent.com/loVuejs/loVue-elm/master/src/assets/loading.gif',
  error: 'https://raw.githubusercontent.com/loVuejs/loVue-elm/master/src/assets/error.jpg',
  attempt: 3
})
Vue.use(MintUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (store.state.cancel.length > 0) {
    // 路由切换时都将上个路由的请求全部清除
    MintUI.Indicator.close()
    store.state.cancel.forEach((value) => {
      value()
    })
  }
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
