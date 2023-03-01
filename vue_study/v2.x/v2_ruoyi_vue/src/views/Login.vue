<template>
  <div class="login-container">
    <a-card title="RuoYi Vue Dashboard" class="form-card">
      <el-form ref="loginForm" :model="loginForm" :rules="rules" class="loginForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item class="codeWrapper" prop="code">
          <el-input class="codeInput" v-model="loginForm.code" placeholder="Code"></el-input>
          <img class="codeImg" :src="codeUrl" alt="" />
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%;" type="primary" @click="submitForm('loginForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </a-card>
  </div>
</template>

<script>

import { getCodeImg } from '@/api/login.js'
export default {
  beforeCreate() {},
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin123',
        code: '',
        uuid: ''
      },
      codeUrl: '',
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'change' },
        ],
      }
    }
  },
  created() {
    this.getCode()
  },
  methods: {
    getCode() {
      getCodeImg().then(res => {
        console.log(res)
        this.codeUrl = 'data:image/gif;base64,' + res.img
        this.loginForm.uuid = res.uuid
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('login', this.loginForm).then(res => {
            console.log('res:', res)
          })
          // // 对于简单抛出错误消息的catch，可以统一在request中处理
          // .catch((error) => {
          //   console.log({error})
          //   const h = this.$createElement
          //   this.$notify({
          //     title: '错误',
          //     message: h('i', { style: 'color: teal' }, error.message)
          //   })
          // })
        } else {
          // // 对于没有通过验证的错误信息，还没有搞明白 怎么手动抛出来，
          // const h = this.$createElement
          // console.log('error submit!!')
          // this.$notify({
          //   title: '标题名称',
          //   message: h('i', { style: 'color: teal' }, valid)
          // })

          return false
        }
      })

    }
  },
}
</script>
<style lang="scss">
.login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../assets/images/wall.jpg) no-repeat;
  background-size: cover;

  .form-card {
    background-color: rgb(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center center;

    .loginForm {
      .codeWrapper .el-form-item__content {
        display: flex;
        justify-content: space-between;
      }

      input,
      img {
        height: 50px;
      }

      img {
        margin-left: 20px;
      }
    }
  }

  .login-form-forgot {
    float: right;
  }

  .login-form-button {
    width: 100%;
  }
}
</style>
