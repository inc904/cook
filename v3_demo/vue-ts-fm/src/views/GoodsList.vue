<template>
  <el-form :inline="true" :model="selectData" class="demo-form-inline">
    <el-form-item label="标题">
      <el-input v-model="selectData.title" placeholder="请输入关键字" />
    </el-form-item>
    <el-form-item label="详情">
      <el-input v-model="selectData.desc" placeholder="请输入详情" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Query</el-button>
    </el-form-item>
  </el-form>

  <el-table :data="dataList.computedList" border style="width: 100%">
    <el-table-column prop="id" label="ID" width="50" />
    <el-table-column prop="title" label="标题" width="180" />
    <el-table-column prop="introduce" label="详情" />
  </el-table>
  <div class="demo-pagination-block">
    <el-pagination
      v-model:current-page="selectData.page"
      background
      :page-sizes="[5, 10, 15, 20]"
      layout="total, sizes, prev, pager, next"
      :total="selectData.count"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  watch,
  reactive,
  toRefs,
  ref,
  onMounted,
  computed,
} from 'vue'
import { getGoodsList } from '@/request/api'
import { InitData, ListInt } from '@/type/goodsList'

export default defineComponent({
  setup() {
    let goodsData = reactive(new InitData())
    console.log(new InitData())
    // TODO 怎么把这两个值拆分出来？？？
    // let selectData = ref(new InitData().selectData)
    // let tableList = ref(new InitData().tableList)
    console.log({ goodsData })
    console.log(goodsData.selectData)
    // console.log({ selectData, tableList })

    onMounted(() => {
      getPageData()
    })

    // TODO 函数外定义的变量， 在函数内部访问不到？？
    // let backData = []
    const getPageData = () => {
      getGoodsList({ title: '123', desc: 'aaa' }).then((res) => {
        console.log(res)
        goodsData.tableList = res.data.data
        // backData = res.data.data
        goodsData.selectData.count = goodsData.tableList.length
      })
    }
    const handleSizeChange = (size: number) => {
      // console.log(`${size} items per page`)
      goodsData.selectData.pagesize = size
    }

    const handleCurrentChange = (page: number) => {
      // console.log(`current page: ${page}`)
      goodsData.selectData.page = page
    }

    const filterTableData = (origin_data: InitData) => {
      return origin_data
    }

    // TODO computed 数据为什么是一个 对象？
    const dataList = reactive({
      computedList: computed(() => {
        return goodsData.tableList.slice(
          (goodsData.selectData.page - 1) * goodsData.selectData.pagesize,
          goodsData.selectData.page * goodsData.selectData.pagesize
        )
      }),
    })

    const onSubmit = () => {
      console.log(
        'submit!',
        goodsData.selectData.title,
        goodsData.selectData.desc
      )
      let arr: ListInt[] = []
      arr = goodsData.tableList
        .filter((item) => item.title.includes(goodsData.selectData.title))
        .filter((item2) => item2.introduce.includes(goodsData.selectData.desc))
      console.log({ arr })
      goodsData.tableList = arr
      goodsData.selectData.count = arr.length
    }
    watch(
      [() => goodsData.selectData.title, () => goodsData.selectData.desc],
      () => {
        if (!goodsData.selectData.title && !goodsData.selectData.desc) {
          getPageData()
        }
      }
    )

    return {
      // Data:
      ...toRefs(goodsData),
      // selectData,
      // tableList,
      dataList,
      // Functon:
      onSubmit,
      handleSizeChange,
      handleCurrentChange,
    }
  },
})
</script>
<style lang="scss"></style>
