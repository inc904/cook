<template>
  <el-form :inline="true" :model="selectData" class="demo-form-inline">
    <el-form-item label="用户名">
      <el-input v-model="selectData.nickName" placeholder="请输入昵称" />
    </el-form-item>
    <el-form-item label="权限">
      <el-select v-model="selectData.role" class="m-2" placeholder="Select" size="large">
        <el-option label="全部" :value="0"></el-option>
        <el-option v-for="item in roleList" :key="item.roleId" :label="item.roleName" :value="item.roleId" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Query</el-button>
    </el-form-item>
  </el-form>

  <el-table :data="userList" border style="width: 100%">
    <el-table-column prop="id" label="ID" width="50" />
    <el-table-column prop="nickName" label="昵称" width="180" />
    <el-table-column prop="userName" label="用户名" width="180" />
    <el-table-column label="权限">
      <template #default="scope">
        <el-tag class="ml-2" v-for="item in scope.row.role" :type="item.role === 1 ? 'danger' : 'info'"
          :key="item.roleId" disable-transitions>{{ item.roleName }}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
// TODO vue 模块自动导入
// TODO  修改后 项目不会自动刷新
import { getUserList, getRoleList } from '@/request/api'
import {
  reactive,
  toRefs,
  computed,
  watch,
  onMounted,
  defineComponent,
} from 'vue'
import { UserData, IUserInit } from '@/type/userTypes'

export default defineComponent({
  setup() {
    onMounted(() => {
      getUser()
      getRole()
    })
    const userData = reactive(new UserData())

    const getUser = () => {
      getUserList().then((res) => {
        console.log(22, res.data)
        res.data.filter((item: IUserInit) => {
          item.roles = item.role
        })
        userData.userList = res.data
      })
    }
    const getRole = () => {
      getRoleList().then((res) => {
        console.log(res)
        userData.roleList = res.data
      })
    }
    const onSubmit = () => {
      let search_res: IUserInit[] = []

      if (userData.selectData.role === 0) {
        search_res = userData.userList
        return search_res
      }

      search_res = userData.userList
        .filter((item) => item.nickName.includes(userData.selectData.nickName))
        .filter((item2) =>
          item2.roles.find((item3) => item3.role === userData.selectData.role)
        )

      userData.userList = search_res
    }

    watch(
      [() => userData.selectData.nickName, () => userData.selectData.role],
      () => {
        if (!userData.selectData.nickName && !userData.selectData.role) {
          getUser()
        }
      }
    )
    return {
      ...toRefs(userData),
      // filterData,
      onSubmit,
    }
  },
})
</script>
<style lang="scss">
.ml-2 {
  margin-left: 0.5rem;
}
</style>
