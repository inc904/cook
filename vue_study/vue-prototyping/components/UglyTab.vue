<template>
  <div>
    <table border="1" cellspacing="0">
      <tr>
        <th>项目名称</th>
        <th>模块名称</th>
        <th>任务名称</th>
        <th>完成进度</th>
      </tr>

      <tr v-for="(item, itemIndex) in mydata" :key="itemIndex">
        <td v-if="item.projectName" :rowspan="item.rowspan1">
          {{ item.projectName }}
        </td>
        <td v-if="item.modelName" :rowspan="item.rowspan2">
          {{ item.modelName }}
        </td>
        <td>{{ item.taskName }}</td>
        <td>{{ item.completeRate }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          projectName: "项目一",
          model: [
            {
              modelName: "博客",
              task: [
                {
                  taskName: "任务一",
                  completeRate: "34%",
                },
                {
                  taskName: "任务二",
                  completeRate: "50%",
                },
                {
                  taskName: "任务三",
                  completeRate: "80%",
                },
              ],
            },
            {
              modelName: "相册",
              task: [
                {
                  taskName: "任务一",
                  completeRate: "50%",
                },
                {
                  taskName: "任务二",
                  completeRate: "14%",
                },
                {
                  taskName: "任务三",
                  completeRate: "62%",
                },
              ],
            },
          ],
        },
      ],
      mydata: [],
      retData: [
        {
          rowspan1: 6,
          projectName: "项目一",
          rowspan2: 3,
          modelName: "博客",
          taskName: "任务一",
          completeRate: "34%",
        },
        { taskName: "任务二", completeRate: "50%" },
        { taskName: "任务三", completeRate: "80%" },
        {
          rowspan2: 3,
          modelName: "相册",
          taskName: "任务一",
          completeRate: "50%",
        },
        { taskName: "任务二", completeRate: "14%" },
        { taskName: "任务三", completeRate: "62%" },
      ],
    };
  },
  mounted() {
    this.fun1();
    this.fun2();
  },
  methods: {
    fun1() {
      this.tableData.map((item) => {
        let rows = 0;
        item.model.forEach((item2) => {
          rows += item2.task.length;
        });
        item.rowspan = rows;
        return item;
      });
    },
    fun2() {
      this.tableData.forEach((projectItem) => {
        projectItem.model.forEach((modelItem, modelIndex) => {
          modelItem.task.forEach((taskItem, taskIndex) => {
            if (modelIndex === 0 && taskIndex === 0) {
              this.mydata.push({
                rowspan1: projectItem.rowspan,
                projectName: projectItem.projectName,
                rowspan2: modelItem.task.length,
                modelName: modelItem.modelName,
                ...taskItem,
              });
            } else if (taskIndex === 0) {
              this.mydata.push({
                rowspan2: modelItem.task.length,
                modelName: modelItem.modelName,
                ...taskItem,
              });
            } else {
              this.mydata.push(taskItem);
            }
          });
        });
      });
    },
  },
};
</script>
