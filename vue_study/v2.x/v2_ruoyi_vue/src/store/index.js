import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: false,
  state: {
    isCollapse: false,
  },
  mutations: {
    set_iscollapse_status: (state, p) => {
      state.isCollapse = p
    },
  },
  actions: {},
  modules: {
    user,
  },
  getters,
})
