<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />好的
    <p>{{ person }}</p>
    <div class="red">
      <div class="font">Lorem ipsum dolor sit.</div>
    </div>
  </div>
</template>

<script>
import World from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld: World
  },
  data() {
    return {
      person: ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style lang="scss" scoped>
.red {
  color: red;

  .font {
    font-size: 20px;
  }
}
</style>
