<template>
  <div class="app-header">
    <div class="navbar">
      <div class="left">
        <div class="hamburger-container" @click="changeCollapse">
          <svg
            data-v-49e15297=""
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            class="hamburger is-active"
          >
            <path
              data-v-49e15297=""
              d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
            ></path>
          </svg>
        </div>
        <breadcrumb />
      </div>
      <div class="right">
        <user-info />
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../Breadcrumb";
import UserInfo from "@/components/User/UserInfo";

export default {
  name: "AppHeader",
  components: { Breadcrumb, UserInfo },
  methods: {
    changeCollapse() {
      this.$store.commit("CHANGE_COLLAPSE", !this.$store.state.isCollapse);
    }
  }
};
</script>

<style scoped lang="scss">
.app-header {
  height: 50px;
  > .navbar {
    height: 50px;
    box-sizing: border-box;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .left {
      display: flex;
      align-items: center;
      height: 100%;
    }
    > .right {
      padding-right: 15px;
    }
  }
}
.fixed-header {
  position: absolute;
}
.hamburger-container {
  padding: 0px 15px;
  line-height: 46px;
  height: 100%;
  float: left;
  cursor: pointer;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
}
</style>
