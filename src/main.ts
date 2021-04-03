import { createApp } from 'vue'
import App from './App.vue'

//引入ant-design-vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import store from './store'
import router from './router'

const app = createApp(App).use(router).use(store)
//注册ant-design-vue
app.use(Antd)
//在id为app的div上，挂载vue根组件
app.mount('#app')
