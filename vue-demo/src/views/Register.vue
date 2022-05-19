<template>
  <div class="reg-container">

    <el-form :model="formLabelAlign" class="reg-form">

      <div class="title-container">
        <h3 class="title">Register Form</h3>
      </div>
      <el-form-item>
        <el-input v-model="formLabelAlign.uname" placeholder="username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formLabelAlign.pwd" placeholder="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="formLabelAlign.pwd" placeholder="email"></el-input>
      </el-form-item>
      <el-button type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleRegister">Register
      </el-button>
    </el-form>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Register',
  components: {
  },
  data () {
    return {
      formLabelAlign: {
        uname: '',
        pwd: '',
        email: ''
      }
    }
  },
  methods: {
    open () {
      this.$message.error('这是一条消息提示')
    },
    handleRegister () {
      const that = this
      // 发送 注册请求
      axios.get('/data/login.json').then(res => {
        console.log(res)

        that.$message('注册成功 即将跳转')
        setTimeout(function () {
          that.$router.push('/login')
        }, 1500)
      })
    },
    handleRegister2 () {
      // 发送 注册请求,POST 请求
      axios({
        method: 'post',
        url: '/user/register',
        data: {
          uname: this.formLabelAlign.uname,
          password: this.formLabelAlign.password,
          email: this.formLabelAlign.email
        }
      }).then(res => {
        console.log(res)
        if (res.error_code) {
          //  注册失败 ， 弹窗提示 错误信息
          this.$message.error(' 注册失败， 错误信息')
        } else {
          //  注册成功， 跳转 登录页面 页面
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>
<style>
.reg-container {
  min-height: 100vh;
  width: 100%;
  background-color: rgba(11, 34, 62, 0.8);
}

.reg-form {
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 260px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}

.title-container {
  position: relative;
}

.title-container .title {
  font-size: 26px;
  color: #eee;
  margin: 0px auto 40px auto;
  text-align: center;
  font-weight: bold;
}
</style>
