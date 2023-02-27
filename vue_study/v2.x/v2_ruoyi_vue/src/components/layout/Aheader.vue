<template lang="">
  <div class="aheader">
    <el-radio-group v-model="isCollapse" @change="collapseMenuBar">
      <el-radio-button v-show="isCollapse" :label="false"><i class="el-icon-s-unfold"></i></el-radio-button>
      <el-radio-button v-show="!isCollapse" :label="true"><i class="el-icon-s-fold"></i></el-radio-button>
    </el-radio-group>
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isCollapse: false
      }
    },
    methods: {
      collapseMenuBar(status) {
        this.$store.commit('set_iscollapse_status', status)
      }
    }
  }
</script>
<style lang="scss">
  .aheader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
