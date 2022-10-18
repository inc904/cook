<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <router-link to="/foo">Foo</router-link>
    <el-row :gutter="10">
      <el-col :span="3">今日推荐：</el-col>
      <el-col :span="7">{{ gushiText }}</el-col>
    </el-row>
    <el-button type="primary">hello</el-button>
  </div>
</template>

<script>
  import axios from 'axios'

  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    data() {
      return {
        gushiText: ''
      }
    },
    components: {
      HelloWorld
    },
    mounted() {
      axios.get('https://v2.jinrishici.com/info').then(res => {
        console.log(res)
        this.gushiText = res.data.data.content
        console.log(this.gushiText,res.data.data.content)
      })
      axios.get('https://v2.jinrishici.com/one.json').then(res => {
        console.log(res)
        this.gushiText = res.data.data.content
      })
    }
  }
</script>

<style></style>
