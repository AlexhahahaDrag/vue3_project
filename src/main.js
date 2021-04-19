import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ElButton, ElRow } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App)
    .use(ElButton)
    .use(ElRow)
    .use(router)
    .mount('#app')