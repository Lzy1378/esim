import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import App from './App.vue'
import router from './router'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import ajax from './ajax.js' // 引入 ajax.js

const app = createApp(App)

app.use(router)
  .use(ViewUIPlus)
  .mount('#app')

// 将 ajax 挂载到 Vue 实例上，使其全局可用
app.config.globalProperties.$ajax = ajax