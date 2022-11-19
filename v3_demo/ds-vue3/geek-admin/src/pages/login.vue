<template >
  <div class="login-page">
    <el-form style="position: absolute; left: 45%; " :model="ruleForm" :rules="rules" ref="form" label-width="100px"
      class="demo-ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name" size="small"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" size="small" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script >
import { ref, reactive, toRefs } from 'vue'
export default {
  setup() {
    const form = ref(null)
    const data = reactive({
      ruleForm: {
        name: '',
        password: ''
      }
    })
    const rules = reactive({
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ]
      }
    })
    function submitForm() {
      form.value.validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
    function resetForm() {
      form.value.resetFields()
    }

    return {
      form,
      ...toRefs(data),
      ...toRefs(rules),
      submitForm,
      resetForm
    }
  }
}
</script>
<style>

</style>
