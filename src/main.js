import Vue from 'vue'
import './style/normalize.css'
import './plugins/axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './iconfont/iconfont.css'
import VueProgressBar from 'vue-progressbar'
import './style/custom.styl'

import skeletonRect from './components/skeleton/rect/index.js'
import skeletonCircle from './components/skeleton/circle/index.js'

Vue.use(MintUI)
Vue.use(skeletonRect)
Vue.use(skeletonCircle)

const options = {
  color: '#3eaf7c',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  }
}

Vue.use(VueProgressBar, options)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
