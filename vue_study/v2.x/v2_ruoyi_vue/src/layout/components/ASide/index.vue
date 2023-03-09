<template lang="">
  <div class="aside" :class="{ closed: isCollapse }">
    <!-- <router-link to="/">
      <div class="logo">
        <img alt="Vue logo" src="@/assets/logo.png" />
        <span v-show="!isCollapse">若依管理系统</span>
      </div>
    </router-link> -->
    <logo :collapse="isCollapse" />
    <el-menu
      background-color="#304156"
      text-color="#fff"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import logo from './logo'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['sidebar']),
    isCollapse() {
      return !this.sidebar.opened
    },
  },
  components: { logo },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>
<style lang="scss" scoped>
$logoWidth: 20px;


.el-menu-vertical-demo {
  height: calc(100% - 60px);
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  text-align: left;
}

.aside {
  background-color: #304156;

  span {
    display: inline-block;
  }

  &.closed {

    // width: 64px;
    span {
      display: none;
    }
  }

  transition: width 1s ease;

  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }

  .logo {
    height: 60px;
    line-height: 60px;

    img {
      width: $logoWidth;
      height: $logoWidth;
      vertical-align: middle;
    }

    background-color: #fff;
  }
}
</style>
