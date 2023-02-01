import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: false,
  state: {
    isCollapse: false
  },
  mutations: {
    set_iscollapse_status: (state, p) => {
      state.isCollapse = p
    }
  },
  actions: {},
  modules: {}
})
