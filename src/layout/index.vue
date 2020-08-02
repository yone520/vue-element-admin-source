<template>
  <div class="app-wrapper">
    <!-- <navbar/>
    <slidebar/>
    <app-main/> -->
    <div class="slidebar">
      <div class="content" style="background:#304156">
        <el-scrollbar style="height: 100%" wrap-class="list">
          <slidebar />
        </el-scrollbar>
      </div>
    </div>
    <div class="navbar-main">
      <div class="content" style="overflow: hidden">
        <app-header/>
        <app-main />
      </div>
    </div>
  </div>
</template>

<script>
import AppMain from "./components/Main";
import Slidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AppHeader from './components/Header';

export default {
  name: "DefaultLayout",
  components: { AppMain, Slidebar, Navbar, AppHeader },
  data() {
    return {
      isHover: true
    };
  }
};
</script>

<style scoped lang="scss">
.app-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  > .slidebar {
    height: 100%;
  }
  > .navbar-main {
    height: 100%;
    flex: 1;
  }
  .content {
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>
