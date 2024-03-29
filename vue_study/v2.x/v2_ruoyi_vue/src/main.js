import Vue from 'vue'
import ElementUI from 'element-ui'
import Antd from 'ant-design-vue'

import 'element-ui/lib/theme-chalk/index.css'
import 'ant-design-vue/dist/antd.css'

import App from './App.vue'
import router from './router'
import store from './store'
import './permission'

Vue.config.productionTip = true
Vue.use(Antd)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
