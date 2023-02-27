<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="parentChange">parentChange</button>
    <li v-for="(item, i) in list" :key="i">{{ item.name }}--{{ item.score }}</li>

    <HelloWorld :list="list" msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    data(){
      return {
        list: [
          {name: 'Jack', score: 87},
          {name: 'Jack2', score: 67},
          {name: 'Jack3', score: 37},
        ]
      }
    },
    components: {
      HelloWorld
    },
    methods:{
      parentChange(){
        this.list.splice(1,0)
      }
    }
  }
</script>
