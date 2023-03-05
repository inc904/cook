import router from './router'
import { getToken } from '@/utils/auth'

const whiteList = ['login']

router.beforeEach((to, from, next) => {
  if (getToken()) {
    next()
  } else {
    if (whiteList.includes(to.path.slice(1))) {
      next()
    } else {
      next('/login')
    }
  }
})
