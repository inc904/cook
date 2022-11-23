<template>
  <div class="mheader">
    <el-row :gutter="20">
      <el-col :span="4" class="header-logo"> <img class="" src="../assets/logo.png" alt="" /> hello </el-col>
      <el-col :span="16"><h2>后台管理系统</h2></el-col>
      <el-col :span="4">个人中心</el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
  'mheader'
</script>
<style lang="scss" scoped>
  $mheaderHeight: 60px;
  .mheader {
    height: $mheaderHeight;
    line-height: $mheaderHeight;
    background-color: #d2d2d2;
    .header-logo {
      height: $mheaderHeight;
      line-height: $mheaderHeight;
      img {
        width: 40px;
        height: 40px;
        vertical-align: middle;
      }
    }
  }
  h1 {
    color: red;
    span {
      color: blue;
    }
  }
</style>
