import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityInfo: {},
    addressInfo: {}
  },
  mutations: {
    setCityInfo (state, n) {
      state.cityInfo = n
    },
    setAddressInfo (state, n) {
      state.addressInfo = n
    }
  },
  actions: {

  }
})
