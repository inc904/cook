import { getToken, setToken, removeToken } from '@/utils/auth.js'
import { login, getUserInfo } from '../../api/login'
const user = {
  state: {
    token: getToken(),
    roles: [],
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
  },
  actions: {
    Login({ commit }, userinfo) {
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
    GetInfo({ commit }) {
      // commit
      getToken()
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then((res) => {
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    LogOut() {
      removeToken()
    },
  },
}
export default user
