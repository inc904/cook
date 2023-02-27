<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
      <li v-for="(item, i) in localList" :key="i">{{ item.name }}--{{ item.score }}</li>
      <button @click="change">change</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    list: Array
  },
  data(){
    return {
      localList: Object.assign([], this.list)
    }
  },
  // watch:{
  //   list:{
  //     handler:function(newValue){
  //       console.log('list changed!')
  //       console.log(this.list, newValue)
  //       // this.list = newValue
  //     },
  //     immediate: true,
  //     deep: true
  //   }
  // },
  // computed:{
  //   localList(){
  //     return Object.assign([], this.list)
  //   }
  // },
  methods:{
    change(){
      console.log('son-change')
      this.localList.splice(1,1,{name: 'Jack', score: 33})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
