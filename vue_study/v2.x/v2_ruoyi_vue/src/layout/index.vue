<template lang="">
  <div class="app-wrapper">
   <el-container>
      <Aside />
      <el-container>
        <el-header>
          <AHeader />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import AHeader from '@/components/layout/AHeader'
import Aside from '@/components/layout/Aside'

export default {
  name: 'Layout',
  components: { Aside, AHeader },
  mounted() {
  }

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

  .el-container {
    width: 100%;
    height: 100%;
  }
}
</style>
