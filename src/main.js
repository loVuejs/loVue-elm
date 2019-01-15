import Vue from 'vue'
import './style/normalize.css'
import './plugins/axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(MintUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  console.log(next)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
