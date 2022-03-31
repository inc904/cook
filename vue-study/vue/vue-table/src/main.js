import Vue from 'vue'
import App from './App.vue'

import './plugins/element.js'
// import 'lib-flexible/flexible.js'
// import  './utils/rem.js'
// import './rem/rem'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
