import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import app from './modules/app'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: false,
  state: {
    isActive: false,
  },
  mutations: {
    SET_COLLAPSE_STATUS: (state, status) => {
      state.isActive = status
    },
  },
  actions: {},
  modules: {
    user,
    app
  },
  getters,
})
