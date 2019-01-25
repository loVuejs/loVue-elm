import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cancel: [],
    cityInfo: {}
  },
  mutations: {
    axiosCancel (state, n) {
      // 变更状态
      state.cancel.push(n)
    },
    setCityInfo (state, n) {
      state.cityInfo = n
    }
  },
  actions: {

  }
})
