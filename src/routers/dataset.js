import DatasetMain from '@/components/dataset/DatasetMain.vue'
import DatasetQuery from '@/components/dataset/DatasetQuery.vue'
import DatasetImport from '@/components/dataset/DatasetImport.vue' // 添加: 导入DatasetImport组件

export default {
  path: '/dataset/',
  name: 'DatasetMain',
  component: DatasetMain,
  children: [
    {
      path: 'query',
      name: 'DatasetQuery',
      component: DatasetQuery
    },
    {
      path: 'import', // 添加: import路由
      name: 'DatasetImport', // 添加: DatasetImport名称
      component: DatasetImport // 添加: DatasetImport组件
    }
  ]
}