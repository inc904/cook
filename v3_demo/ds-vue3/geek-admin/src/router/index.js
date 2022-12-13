import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../pages/about.vue'
import Home from '../pages/home.vue'
import Login from '../pages/login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/about',
        name: 'About',
        component: About,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    hidden: true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
