<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <transition-group name="listgrp" tag="p">
      <el-breadcrumb-item :to="{ path: '/' }" key="/">系统</el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="(item) in breadList"
        :key="item.path"
        :to="{ path: item.path }"
        >{{ item.meta.title }}</el-breadcrumb-item
      >
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      breadList: [] // 路由集合
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  mounted() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      const { matched } = this.$route;
      this.breadList = matched;
    }
  }
};
</script>

<style scoped lang="scss">
.listgrp-enter-active{
  transition: all 1s;
}
.listgrp-leave-active {
  transition: all 1s;
  position: absolute;
}
.listgrp-enter, .listgrp-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
</style>
