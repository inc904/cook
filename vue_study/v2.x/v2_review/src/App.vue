<template>
  <div id="app">
        <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',

  mounted() {
    axios.get('https://v2.jinrishici.com/info').then(res=> {
      console.log(res)
    })
    axios.get('https://v2.jinrishici.com/one.json').then(res=> {
      console.log(res)
    })
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  p {
    color: red;
  }
}
</style>
