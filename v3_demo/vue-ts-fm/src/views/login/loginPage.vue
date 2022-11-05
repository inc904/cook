<template>
  <div class="loginPage">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
      <el-form-item label="username" prop="username">
        <el-input v-model="ruleForm.username" type="tetx" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input show-password v-model="ruleForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <!-- <el-form-item label="Confirm" prop="checkPass">
        <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Age" prop="age">
        <el-input v-model.number="ruleForm.age" />
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import type { FormInstance } from 'element-plus'
  import { useRouter } from 'vue-router'

  import { login } from '@/request/api'

  const router = useRouter()
  const ruleFormRef = ref<FormInstance>()

  // const checkAge = (rule: any, value: any, callback: any) => {
  //   if (!value) {
  //     return callback(new Error('Please input the age'))
  //   }
  //   setTimeout(() => {
  //     if (!Number.isInteger(value)) {
  //       callback(new Error('Please input digits'))
  //     } else {
  //       if (value < 18) {
  //         callback(new Error('Age must be greater than 18'))
  //       } else {
  //         callback()
  //       }
  //     }
  //   }, 1000)
  // }

  const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('Please input the password'))
    } else {
      // if (ruleForm.checkPass !== '') {
      //   if (!ruleFormRef.value) return
      //   ruleFormRef.value.validateField('checkPass', () => null)
      // }
      callback()
    }
  }
  const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== ruleForm.password) {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  }

  const ruleForm = reactive({
    username: '',
    password: ''
    // checkPass: '',
    // age: ''
  })

  const rules = reactive({
    name: [{ required: true, trigger: 'blur' }],
    pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
    checkPass: [{ required: true, validator: validatePass2, trigger: 'blur' }]
    // age: [{ required: true, validator: checkAge, trigger: 'blur' }]
  })

  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate(valid => {
      if (valid) {
        console.log('submit!')
        login(ruleForm).then(res => {
          console.log(res)
          localStorage.setItem('token', res.data.token)
          router.push('/home')
        })
      } else {
        console.log('error submit!')
        return false
      }
    })
  }

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
</script>
<style lang="scss">
  .loginPage {
    .demo-ruleForm {
      width: 500px;
      padding: 40px;
      margin: 20px auto;
      background-color: #fff;
      border-radius: 15px;
    }
  }
</style>
