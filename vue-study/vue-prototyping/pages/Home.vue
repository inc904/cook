<template>
  <div>
    <p>App</p>
    <UglyTable />
    <router-link to="/foo">foo</router-link>
    <router-link to="/bar">bar</router-link>
  </div>
</template>
<script>
import UglyTable from "../components/UglyTab.vue";
export default {
  components: {
    UglyTable,
  },
};
</script>
