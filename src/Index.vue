<template>
    <div class="demo-split">
        <Split v-model="split">
            <template #left>
                <div class="demo-split-pane">
                    <!-- 添加 Menu 组件 -->
                    <Menu :style="{ width: 'auto', height: '100%' }">
                        <MenuItem name="1" style="margin-bottom: 20px; border-radius: 5px; background-color: lightblue;" @click="navigateTo('/dataset/')">
                            数据管理
                        </MenuItem>
                        <MenuItem name="2" style="margin-bottom: 20px; border-radius: 5px; background-color: lightblue;" @click="navigateTo('/datasyn/')">
                            数据生成
                        </MenuItem>
                        <MenuItem name="3" style="border-radius: 5px; background-color: lightblue;" @click="navigateTo('/evaluation/')">
                            AI算法评测
                        </MenuItem>
                    </Menu>
                </div>
            </template>
            <template #right>
                <div class="demo-split-pane">
                 待建设中
                </div>
            </template>
        </Split>
       
    </div>
  </template>
  
  <script>
  export default {
      data () {
          return {
              split: 0.2
          }
      },
      methods: {
          navigateTo(path) {
              this.$router.push({ path: path })
          }
      }
  }
  </script>
  
  <style>
  html, body, #app {
      height: 100%;
      margin: 0;
  }
  
  .demo-split {
      height: 100%;
      width: 100%;
      border: 1px solid #dcdee2;
  }
  
  .demo-split-pane {
      padding: 10px;
  }
  </style>