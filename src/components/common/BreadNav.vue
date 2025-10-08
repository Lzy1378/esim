<template>
  <Breadcrumb :style="{ margin: '24px 0' }">
    <BreadcrumbItem v-for="(item, index) in items" :key="index">{{ item }}</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>