<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>
<script>
 export default {
  }
</script>
<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  #nav {
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
<style scoped>
  .el-container {
    width: 100%;
    height: 100%;
  }
</style>
