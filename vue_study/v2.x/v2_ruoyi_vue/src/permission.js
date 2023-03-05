import router from './router'
import store from './store'
import { getToken } from '@/utils/auth'
import { Message, MessageBox, Notification } from 'element-ui'

const whiteList = ['login']

router.beforeEach((to, from, next) => {

  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (!store.getters.roles.length) {
        store
          .dispatch('GetInfo')
          .then((res) => {
            next()
          })
          .catch((error) => {
            Notification.error({ title: error })
          })
        next()
      } else {
        next()
      }
    }
  } else {
    if (whiteList.includes(to.path.slice(1))) {
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`)
    }
  }
})
