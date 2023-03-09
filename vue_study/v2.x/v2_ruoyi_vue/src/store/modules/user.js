import { getToken, setToken, removeToken } from '@/utils/auth.js'
import { login, getUserInfo, logout } from '../../api/login'
const user = {
  state: {
    token: getToken(),
    roles: [],
    permissions: [],
    name: '',
    avatar: '',
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_PERMISSIONS: (state, permission) => {
      state.permissions = permission
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
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
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then((res) => {
            const user = res.user
            const avatar = user.avatar
              ? process.env.VUE_APP_BASE_API + user.avatar
              : require('@/assets/images/profile.jpg')
            if (res.roles && res.roles.length > 0) {
              commit('SET_ROLES', res.roles)
              commit('SET_PERMISSIONS', res.permissions)
            } else {
              commit('SET_ROLES', ['ROLE_DEFAULT'])
            }
            commit('SET_NAME', res.user.userName)
            commit('SET_AVATAR', avatar)

            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            commit('SET_PERMISSIONS', [])
            removeToken()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },
}
export default user
