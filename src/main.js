import { createApp } from 'vue'
import App from './App.vue'

//添加router
import router from './router'

//按需引入ant-design-vue组件
import {Form, Button, Input} from 'ant-design-vue'

//添加粒子特效
import VueParticles from 'vue-particles'  

createApp(App)
    .use(Form)
    .use(Button)
    .use(Input)
    .use(VueParticles)
    .use(router)
    .mount('#app')