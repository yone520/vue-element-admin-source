<template>
  <div class="user-info">
    <el-autocomplete
      class="inline-input"
      v-model="formData.state1"
      :fetch-suggestions="querySearch"
      placeholder="快速导航😁"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
    <el-dropdown size="small" split-button type="primary">
      {{ userinfo.username }}
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item, name) in dropUserInfo" :key="item">
          <a
            style="color: #909399;text-decoration: none"
            target="_blank"
            :href="name"
            >{{ item }}</a
          >
        </el-dropdown-item>
        <el-dropdown-item divided>
          <logout />
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import Logout from "@/components/Logout";
import _ from "lodash";
import { getFilterRoutes } from "@/utils/common";
import { publicRoutes } from "@/router/modules/publicRoute";
import { mapState } from "vuex";
import path from "path";

export default {
  name: "UserInfo",
  components: { Logout },
  data() {
    return {
      dropUserInfo: {
        "http://www.juejin.com": "掘金地址",
        "https://www.github.com": "Github"
      },
      restaurants: [],
      formData: {
        state1: ""
      }
    };
  },
  computed: {
    ...mapState({
      userinfo: "userinfo"
    })
  },
  mounted() {
    this.restaurants = this.filterSelectData(
      this.getSelectData(this.getRoutesList())
    );
  },
  methods: {
    /**
     * 递归搜索路由
     */
    getSelectData(arr) {
      let arra = [];
      function gt(arr) {
        let obj = {};
        _.cloneDeep(arr).forEach(item => {
          const tmp = _.cloneDeep(item);
          if (tmp.children) {
            tmp.children.forEach(cItem => {
              cItem.parentPath = path.resolve(
                tmp.parentPath ? tmp.parentPath : tmp.path,
                cItem.path
              );
            });
            tmp.children = gt(tmp.children);
          }
          obj = _.cloneDeep(tmp);
          arra.push(obj);
        });
        return arra.map(item => {
          return {
            value: item.meta.title,
            address: item.parentPath ? item.parentPath : item.path
          };
        });
      }
      return gt(arr);
    },
    /**
     * 移除带有冒号的路由，带有冒号不能直接跳转
     */
    filterSelectData(arr) {
      return arr.filter(item => item.address.indexOf(":") === -1);
    },
    getRoutesList() {
      // return [..._.cloneDeep(getFilterRoutes()), ..._.cloneDeep(publicRoutes)]
      return _.cloneDeep(getFilterRoutes());
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    handleSelect(item) {
      this.$router.push(item.address)
    }
  }
};
</script>

<style scoped lang="scss">
.user-info {
  display: flex;
  align-items: center;
  > .inline-input {
    margin-right: 5px;
  }
}
</style>
