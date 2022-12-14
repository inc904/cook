import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/HomePage.vue'
import GoodsListVue from '@/views/GoodsList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/goodslist',
        name: 'goodsList',
        component: GoodsListVue,
        meta: {
          isShow: true,
          title: '商品列表',
        },
      },
      {
        path: '/userlist',
        name: 'userlist',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/UserList.vue'),
        meta: {
          isShow: true,
          title: '用户列表',
        },
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/AboutPage.vue'),
        meta: {
          isShow: true,
          title: '关于我们',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/login/loginPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
