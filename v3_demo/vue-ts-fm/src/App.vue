<template>
  <div id="nav"></div>
  <!-- <HomePage></HomePage> -->
  <router-view></router-view>
</template>
<script lang="ts" setup>
  import HomePage from '@/views/HomePage.vue'
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body {
    width: 100%;
    height: 100%;
  }
  #app {
    width: 100%;
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #f1f1f1;
  }

  // #nav {
  //   padding: 30px;
  // }
</style>
