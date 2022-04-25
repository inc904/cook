作者：拉布拉多多w
链接：https://zhuanlan.zhihu.com/p/398629588
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

<template>
	<div class="table">

		<el-table ref="table" :data="tableData" :height="tableHeight" :size="size" :stripe="stripe" :border="border"
			style="width: 100%" :highlight-current-row="highlightRow" :row-key="rowKey" @row-click="clickRow"
			@current-change="currentRowChange" @selection-change="selectionChange">
			<el-table-column v-if="selector" type="selection" header-align="center" align="center" width="45">
			</el-table-column>
			<el-table-column align="center" header-align="center" type="index" label="序号" width="75">
				<template slot-scope="scope">
					{{ currentPage ? (currentPage - 1) * pageSize + scope.$index + 1 : scope.$index + 1 }}
				</template>
			</el-table-column>
			<el-table-column v-for="(item, key) in tableColumn" :key="key" :sortable="sortable" show-overflow-tooltip
				resizable :prop="item.value" :label="item.label"
				:formatter="(row, column)=>formatting(row, column, item)" :min-width="item.width">
			</el-table-column>
			<el-table-column v-if="operate" fixed="right" label="操作" align="left" header-align="left" width="80">
				<template slot-scope="scope">
					<el-image v-if="operate.indexOf('edit') !== -1" class="icon"
						:src="require('../../assets/SystemManage/list-edit.png')" @click="$emit('edit', scope.row)" />
					<el-image v-if="operate.indexOf('remove') !== -1" class="icon"
						:src="require('../../assets/SystemManage/list-remove.png')" @click="onRemove(scope.row)" />
				</template>
			</el-table-column>
		</el-table>

	</div>
</template>

作者：拉布拉多多w
链接：https://zhuanlan.zhihu.com/p/398629588
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

<script>
	import dayjs from "dayjs";

	export default {
		name: "commonTable",
		props: {
			//表格大小
			size: {
				type: String,
				default: 'small'
			},
			//是否带斑马纹
			stripe: {
				type: Boolean,
				default: true
			},
			//是否带边框
			border: {
				type: Boolean,
				default: true
			},
			//是否多选
			selector: {
				type: Boolean,
				default: false
			},
			//是否可排序
			sortable: {
				type: Boolean,
				default: true
			},
			//是否高亮行
			highlightRow: {
				type: Boolean,
				default: false
			},
			//表格高度 不传默认是计算后的高度
			height: {
				type: Number,
				default: null
			},
			//每一行的唯一标识, 用于后端分页保存多选状态
			rowKey: {
				type: String,
				default: null
			},
			//操作栏
			operate: {
				type: Array,
				default: null
			},

			//当前页
			currentPage: {
				type: Number,
				default: null
			},
			//每页数据条数
			pageSize: {
				type: Number,
				default: 25
			},
			//表内容
			tableData: {
				type: Array,
				default: () => []
			},
			//表头
			tableColumn: {
				type: Array,
				default: () => []
			}
		},
		computed: {
			//table高度
			tableHeight() {
				//若父组件传了 height 且传的值是正数，则返回父组件传入的值
				if (this.height && this.height > 0) return this.height

				//更新 store 的 tableHeight 状态
				//之后判断 若父组件传入的 height 是负数，则返回 store 的 tableHeight + height 的计算结果
				//否则返回 store 的 tableHeight
				this.$store.commit("tableHeightUpdate")
				return this.height && this.height < 0 ? parseInt(this.$store.state.table.tableHeight) + this.height : this
					.$store.state.table.tableHeight
			}
		},
		mounted() {
			//监听浏览器的 resize 事件，更新 store 的 tableHeight 状态
			const that = this
			window.addEventListener("resize", () => {
				that.$store.commit("tableHeightUpdate")
			})
		},
		methods: {
			//格式化值
			formatting(row, column, item) {
				//当前单元格的 value
				const value = row[item.value]
				//当前单元格值 是否为 空 值
				const isNullValue = value === null || value === '' || value === ' '

				//判断值若为 空 则返回 '-'
				//否则判断值若为 date 则将值按 年-月-日 格式化后返回
				//否则判断值若 自定义格式化 则返回自己的 setValue() 方法的返回值
				//否则返回 value
				return isNullValue ? '—' : (item.date ? (dayjs(value).format('YYYY-MM-DD')) : (item.setValue ? item
					.setValue(value) : value))
			},
			//当前行变化
			currentRowChange(row) {
				if (row) this.$emit('currentRowChange', row)
			},
			//点击行
			clickRow(row) {
				//改变当前行的选择框样式
				this.$refs.table.toggleRowSelection(row)
				this.$emit('clickRow', row)
			},
			//选集变化
			selectionChange(values) {
				//values 为已勾选的集合
			}
		}
	}
</script>

<style>
</style>
