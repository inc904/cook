const app = {
  state: {
    sidebar: {
      opened: true,
    },
  },
  mutations: {
    SET_COLLAPSE_STATUS: (state) => {
      state.sidebar.opened = !state.sidebar.opened
    },
  },
  actions: {
    toggleSidebar({ commit }) {
      commit('SET_COLLAPSE_STATUS')
    },
  },
}
export default {
  namespaced: true,
  ...app
}
