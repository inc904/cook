<template>
  <div class="login-container">

    <el-form :model="formLabelAlign" class="login-form">
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>
      <el-form-item>
        <el-input v-model="formLabelAlign.uname" placeholder="username or email"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="formLabelAlign.pwd" placeholder="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="remember">remember me</el-checkbox>
      </el-form-item>
      <el-button type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login
      </el-button>
    </el-form>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Login',
  components: {
  },
  data () {
    return {
      formLabelAlign: {
        uname: '',
        pwd: ''
      },
      remember: false
    }
  },
  methods: {
    // 假的
    handleLogin () {
      const that = this
      // 发送模拟 登录请求  POST 请求
      axios({
        method: 'get',
        url: '/data/login.json'
      }).then(res => {
        console.log(res)

        that.$message('登录成功 即将跳转')

        // 将用户名写入 本地存储 localstorage
        const uname = res.data.uname
        const email = res.data.email
        this.setLocalStorage(JSON.stringify({ uname, email }))

        setTimeout(function () {
          that.$router.push('/comment')
        }, 1500)
      })
    },
    setLocalStorage (data) {
      localStorage.setItem('user', data)
    },
    // 真的
    handleLogin2 () {
      // 发送 登录请求,POST 请求

      axios({
        method: 'post',
        url: '/user/login',
        data: {
          uname: this.formLabelAlign.uname,
          password: this.formLabelAlign.password,
          remember: this.remember
        }
      }).then(res => {
        console.log(res)
        if (res.error_code) {
          // 登录失败 ， 弹窗提示 错误信息
          this.$message.error('登录失败， 错误信息')
        } else {
          if (this.remember) {
            // 记住我， 写入 cookie
            const ck = document.cookie
            document.cookie = ck + `TOKEN=${res.access_token}`
          }

          // 同样写入localstorage
          // this.setLocalStorage({ user, email })

          // 登录成功， 跳转 commet 页面
          this.$router.push('/commet')
        }
      })
    }
  }
}
</script>
<style>
.login-container {
  min-height: 100vh;
  width: 100%;
  background-color: rgba(11, 34, 62, 0.8);
}

.login-form {
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

.el-checkbox {
  color: #fff;
}
</style>
