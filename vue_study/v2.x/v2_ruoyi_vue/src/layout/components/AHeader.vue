<template lang="">
  <div class="a-header">
    <Hamburger @toggleClick="collapseMenuBar" :is-active="sidebar.opened" />
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
export default {
  data() {
    return {
      // isCollapse: false
    }
  },
  components: {
    Hamburger,
  },
  computed: {
    ...mapGetters(['sidebar']),
  },
  methods: {
    collapseMenuBar() {
      console.log(123)
      this.$store.dispatch('app/toggleSidebar')
    },
  },
}
</script>
<style lang="scss">
.a-header {
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
</style>
