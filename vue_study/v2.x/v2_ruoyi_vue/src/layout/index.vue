<template lang="">
  <div class="app-wrapper">
   <el-container>
      <Aside />
      <el-container>
        <el-header>
          <Aheader />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Aheader from '@/components/layout/Aheader'
import Aside from '@/components/layout/Aside'

export default {
  name: 'Layout',
  components: { Aside, Aheader }

}
</script>
<style lang="scss">
  .app-wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
    .el-container{
      width: 100%;
      height: 100%;
    }
  }
</style>
