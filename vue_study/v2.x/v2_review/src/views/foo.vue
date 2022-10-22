<template>
  <div>
    <div>hello foo, {{ msg }}--{{ this.msg }}</div>
    <button @click="show">click</button>
    <router-link to="/foo/12?a=1">Foo</router-link>
    <el-row :gutter="20" style="background: #dedede">
      <el-col :span="6">
        <div class="grid-content bg-purple">1231</div>
        <div class="grid-content bg-purple">1231</div>
        <div class="grid-content bg-purple">1231</div>
        <div class="grid-content bg-purple">1231</div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple">1231</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">dasda</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">dasdasdasd</div></el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'foo',
    data() {
      return {
        test: 'hello',
        msg: '11'
      }
    },
    watch: {
      // $route: function () {
      //   // this.init();
      //   console.log(999)
      // },
      $route: {
        handler: function () {
          console.log(888)
        },
        immediate: true
      }
    },
    mounted() {
      this.msg = 'JackJunce'
      console.log(this.$router)
      console.log(this.$route)
      console.log(this.$route.matched)
    },
    methods: {
      show() {
        console.log(this.msg)
        window.location.reload()
      }
    }
  }
</script>
<style lang="scss">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
