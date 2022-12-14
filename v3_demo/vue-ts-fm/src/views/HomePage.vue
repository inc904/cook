<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <MAsideVue />
      </el-aside>
      <el-container class="content_view">
        <el-header class="header-wrapper">
          <MHeaderVue />
        </el-header>
        <el-main class="main-wrapper">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue'
import MHeaderVue from "@/layout/MHeader.vue";
import MAsideVue from "@/layout/MAside.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
  components: {
    MHeaderVue,
    MAsideVue,
  },
});
</script>
<style lang="scss">
$header-height: 60px;

.content_view {
  width: 100%;
}

.header-wrapper {
  background-color: aquamarine;
}

.main-wrapper {
  // background-color: lightblue;
  height: calc(100vh - $header-height);
}
</style>
