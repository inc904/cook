import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import 'element3/lib/theme-chalk/index.css'

import Element3 from 'element3'

import store from '@/store'
import router from './router'

createApp(App).use(router).use(store).use(Element3).mount('#app')
