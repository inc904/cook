import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// import App from '../App.vue'
import Foo from '../components/Foo'
import Bar from '../components/Bar'
import Home from '../pages/Home'

const routes = [
  { path: '/', component: Home },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
export default router
