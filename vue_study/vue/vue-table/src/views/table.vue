作者：拉布拉多多w
链接：https://zhuanlan.zhihu.com/p/398629588
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

<template>
	<div class="parent">

		<CommonTable :tableData="tableData" :tableColumn="tableColumn" :pageSize="pageSize" :currentPage="currentPage"
			:operate="['edit', 'remove']" @edit="openEdit" @remove="onRemove" />

	</div>
</template>

<script>
	import CommonTable from "@/components/Product/commonTable"
	import {
		productData as request
	} from '../../../http/modules/product'

	export default {
		name: "parent",
		components: {
			CommonTable
		},
		data() {
			return {
				tableData: [],
				tableColumn: [{
						label: "编码",
						value: "Fno",
					},
					{
						label: "名称",
						value: "Fname",
						width: 100,
						setValue: function(value) {
							if (value === 'A') return "张三"
							if (value === 'B') return "李四"
							return value
						}
					},
					{
						label: "备注",
						value: "Fremark",
					}
				],
				currentPage: 1
			}
		},
		computed: {
			pageSize() {
				//表格高度除以每行高度后向上取值
				const tableHeight = this.$store.state.table.tableHeight - 39
				return Math.floor(tableHeight / 30)
			}
		},
		mounted() {
			this.getList()
		},
		methods: {
			openEdit(row) {
				//打开编辑对话框
			},
			//监听删除
			onRemove(row) {
				//删除处理
			},

			//获取列表
			getList(page = 1) {
				this.$store.commit('menuRouteLoaded', false)
				request.getList({
					page,
					limit: this.pageSize
				}).then(res => {
					this.tableData = res.data
					this.currentPage = page
					this.tableTotal = res.totalCount
					this.$store.commit('menuRouteLoaded', true)
				})
			}
		}
	}
</script>
