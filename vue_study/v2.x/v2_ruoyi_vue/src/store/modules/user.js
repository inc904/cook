import { login } from '@/api/login.js'

const user = {
  state: {},
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
  },
  actions: {
    login({ commit }, userinfo) {
      let { username, password, code, uuid } = userinfo
      return new Promise((resolve, reject) => {
        login(username, password, code, uuid)
          .then((res) => {
            // setToken()
            commit('SET_TOKEN', res.token)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
}
export default user
