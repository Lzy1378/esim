<template>
  <BreadNav :items='["数据管理", "数据集管理", "数据集查询","待开发"]' />
  <Content
    :style="{ padding: '24px', minHeight: '200px', background: '#fff', height: '100%' }"
  >
    <Table :columns="columns" :data="data"></Table>
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
      columns: [
        {
          title: "名称",
          key: "name",
        },
        {
          title: "类型",
          key: "type",
        },
        {
          title: "创建时间",
          key: "create_time",
        },
      ],
      data: [],
    };
  },
  created() {
    this.$ajax // 使用全局挂载的 ajax
      .get("/dataset/list")
      .then((data) => {
        console.log(data);
        this.data = data.data;
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  },
};
</script>