import { login } from '@/api/login.js'
import { getToken, setToken, removeToken } from '@/utils/auth.js'
const user = {
  state: {
    token: getToken()
  },
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
            setToken(res.token)
            commit('SET_TOKEN', res.token)
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    getInfo() {
      getToken()
    },
    logOut() {
      removeToken()
    },
  },
}
export default user
