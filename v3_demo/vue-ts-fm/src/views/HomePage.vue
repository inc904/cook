<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"> <MAsideVue></MAsideVue></el-aside>
      <el-container>
        <el-header class="header-wapper"><MHeaderVue /></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
  import { defineComponent } from 'vue'
  import MHeaderVue from '@/layout/MHeader.vue'
  import MAsideVue from '@/layout/MAside.vue'
</script>
<style lang="scss">
  .header-wapper {
    background-color: aquamarine;
  }
</style>
