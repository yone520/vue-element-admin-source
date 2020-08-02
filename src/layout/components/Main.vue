<template>
  <div class="app-main">
    <el-scrollbar style="height: 100%" wrap-class="list">
      <div class="ispadding">
        <transition name="slide-left">
          <router-view :key="key" />
        </transition>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    key() {
      /** 如果有不同的路由使用了相同的组件，使用这种方式可以重新渲染来触发 created 与 mounted 钩子 */
      return this.$route.fullPath;
    }
  },
  data() {
    return {
      transitionName: ""
    };
  }
};
</script>

<style scoped lang="scss">
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(20%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-20%, 0, 0);
}
.app-main {
  box-sizing: border-box;
  height: calc(100% - 50px);
}
.ispadding {
  padding: 15px;
}
</style>
