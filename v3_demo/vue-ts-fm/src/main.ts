import { createApp } from "vue"
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
import "@/assets/style.scss"
import App from "./App.vue"
import router from "./router"
import store from "./store"

// createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
createApp(App).use(store).use(router).mount("#app")
