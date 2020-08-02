<template>
  <div class="slidebar">
    <el-menu
      :default-active="activeMenu"
      :collapse="!isCollapse"
      class="el-menu-vertical-demo"
      router
      unique-opened
      @open="handleOpen"
      @close="handleClose"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409eff"
    >
      <template v-for="(item, index) in routes">
        <el-submenu :index="resolvePath(item.path)" v-if="item.children && item.children.length > 1" :key="index">
          <template slot="title">
            <i :class="item.meta.icon"></i>
            <span>{{ item.meta.title }}</span>
          </template>
          <el-menu-item
            v-for="(subMenu, subIndex) in item.children"
            :index="resolvePath(item.path, subMenu.path)"
            :key="subIndex"
            >{{ subMenu.meta.title }}</el-menu-item
          >
        </el-submenu>
        <el-menu-item :index="resolvePath(item.path, item.children[0]['path'])" v-else-if="item.children && item.children.length === 1" :key="index">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import path from 'path';
import { getFilterRoutes } from "@/utils/common";
import {mapState} from 'vuex';
export default {
  name: "Nav",
  data() {
    return {
      route: getFilterRoutes(),
    };
  },
  computed: {
    ...mapState({
      isCollapse: 'isCollapse'
    }),
    routes() {
      return this.route;
    },
    activeMenu() {
      const route = this.$route
      console.log(route)
      const { path, matched } = route
      if (Array.isArray(matched) && matched.length >= 2) {
        return matched[1]['path']
      }
      return path
    },
  },
  methods: {
    resolvePath(...args) {
        return path.resolve(...args)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped></style>
