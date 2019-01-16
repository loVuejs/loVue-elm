import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cancel: ''
  },
  mutations: {
    axiosCancel (state, n) {
      // 变更状态
      state.cancel = n
    }
  },
  actions: {

  }
})
