<template>
  <el-form style="position: absolute; left: 45%; " ref="formRef" :model="form" label-width="auto">
    <el-form-item label="用户名">
      <el-input v-model="form.name" size="small" />
    </el-form-item>

    <el-form-item label="密码">
      <el-input v-model="form.password" type="password" size="small" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit" :loading="loading">
        登录
      </el-button>
      <el-button type="primary" @click="onSubmit2" :loading="loading">
        登录2
      </el-button>
      <el-button type="primary" @click="onSubmit3" :loading="loading">
        登录3
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import { login, login2, login3 } from '../api/apis'
import { Message } from 'element3'
import { useRouter } from 'vue-router'

export default {

  setup() {
    const formRef = ref(null)
    const loading = ref(false)
    const data = reactive({
      form: {
        name: '',
        password: '',
      }
    })
    const router = useRouter()

    const onSubmit = async () => {
      loading.value = true
      try {
        const res = await login(data.form)
        console.log('try', res);

        // router.replace('/')
      } catch (error) {
        Message({
          type: 'warning',
          message: error
        })
      } finally {
        loading.value = false
      }
    }

    const onSubmit2 = async () => {
      loading.value = true
      try {
        const res = await login2(data.form)
        // console.log(res);
        console.log('try', res);

        // router.replace('/')
      } catch (error) {
        Message({
          type: 'warning',
          message: error
        })
      } finally {
        loading.value = false
      }
    }

    const onSubmit3 = async () => {
      loading.value = true
      try {
        const res = await login3(data.form)
        // console.log(res);
        console.log('try', res);

        // router.replace('/')
      } catch (error) {
        Message({
          type: 'warning',
          message: error
        })
      } finally {
        loading.value = false
      }
    }

    return {
      ...toRefs(data),
      loading,
      formRef,
      onSubmit,
      onSubmit2,
      onSubmit3
    }
  }
}
</script>
