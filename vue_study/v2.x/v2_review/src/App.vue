<template>
  <div id="app">
    <el-container class="page-container">
      <el-aside width="200px">
        <Aside />
      </el-aside>

      <el-container>
        <el-header><Navbar /></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Aside from '@/layout/components/Aside'
  import Navbar from '@/layout/components/NavBar'
  export default {
    name: 'App',
    components: {
      Aside,
      Navbar
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    .page-container {
      height: 100vh;
    }
    .el-header,
    .el-footer {
      background-color: #b3c0d1;
      color: #333;
      // text-align: center;
    }

    .el-aside {
      background-color: #d3dce6;
      color: #333;
    }

    .el-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
    }
  }
</style>
