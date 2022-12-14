<template>
  <div class="sideBar">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px" class="collapse-box">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
      @close="handleClose" router>
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document />
        </el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>

      <el-menu-item :index="item.path" v-for="item in routerList" :key="item.path">
        <el-icon>
          <setting />
        </el-icon>
        <template #title>{{ item.meta.title }}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";

export default {
  name: "m-asider",
};
</script>
<script lang="ts" setup>
import { ref } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

const router = useRouter();
console.log(router.getRoutes());
let routerList = router.getRoutes().filter((v) => v.meta.isShow);
console.log(routerList);

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style lang="scss" scoped>
.el-menu {
  min-height: 100vh;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}

.el-menu-vertical-demo.el-menu--collapse {
  width: 64px;
  min-height: 100vh;
}

.sideBar {
  min-height: 100vh;

  .collapse-box {
    position: absolute;
    bottom: 10px;
    left: 10px;
    z-index: 9999;
  }
}

a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
