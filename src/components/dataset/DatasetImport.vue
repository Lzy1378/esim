<template>
  <BreadNav :items='["数据管理", "数据集管理", "数据集导入"]' />
  <Content
    :style="{ padding: '24px', minHeight: '200px', background: '#fff', height: '100%' }"
  >
    <Form :model="formItem" :label-width="80">
      <FormItem label="名称">
        <Input v-model="formItem.name" placeholder="请输入数据集名称"></Input>
      </FormItem>
      <FormItem label="类型">
        <Select v-model="formItem.type" placeholder="请选择数据集类型">
          <Option value="type1">类型1</Option>
          <Option value="type2">类型2</Option>
          <Option value="type3">类型3</Option>
        </Select>
      </FormItem>
      <FormItem label="上传文件">
        <Upload
          action=""
          :on-success="handleSuccess"
          :on-error="handleError"
          accept=".zip" 
          :before-upload="beforeUpload"
        >
          <Button icon="ios-cloud-upload-outline">上传文件</Button>
        </Upload>
        <!-- 添加: 显示文件名 -->
        <div v-if="formItem.file">{{ formItem.file.name }}</div>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit">提交</Button>
        <Button @click="handleReset" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
  </Content>
</template>

<script>
import BreadNav from "@/components/common/BreadNav.vue";

export default {
  components: {
    BreadNav,
  },
  data() {
    return {
      formItem: {
        name: '',
        type: '',
        file: null,
      },
    };
  },
  methods: {
    handleSuccess(response, file, fileList) {
      this.formItem.file = file;
      console.log('Upload success', response, file, fileList);
    },
    handleError(error, file, fileList) {
      console.error('Upload error', error, file, fileList);
    },
    handleSubmit() {
      if (!this.formItem.file || !this.formItem.name || !this.formItem.type) {
        this.$Message.error('请填写完整信息并上传文件');
        return;
      }

      const formData = new FormData();
      formData.append('file', this.formItem.file);
      formData.append('name', this.formItem.name);
      formData.append('type', this.formItem.type);

      this.$ajax.postBinary('/dataset/import', formData)
        .then(response => {
          this.$Message.success('数据集导入成功');
          console.log('Dataset imported successfully', response);
        })
        .catch(error => {
          this.$Message.error('数据集导入失败');
          console.error('Dataset import failed', error);
        });
    },
    handleReset() {
      this.formItem.name = '';
      this.formItem.type = '';
      this.formItem.file = null;
    },
    beforeUpload(file) {
      this.formItem.file = file;
      return false; // 阻止默认上传行为
    },
  },
};
</script>