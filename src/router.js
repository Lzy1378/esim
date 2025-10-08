import { createRouter, createWebHistory } from 'vue-router'
import Index from './Index.vue'
import datasetRoutes from './routers/dataset.js' // 引入 dataset.js 文件
import datasynRoutes from './routers/datasyn.js' // 引入 datasyn.js 文件
import evaluationRoutes from './routers/evaluation.js' // 引入 evaluation.js 文件

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  datasetRoutes, // 使用 dataset.js 中的路由配置
  datasynRoutes, // 使用 datasyn.js 中的路由配置
  evaluationRoutes // 使用 evaluation.js 中的路由配置
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router