<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleSetLanguage"
  >
    <div>
      <i
        style="color: #ffffff;"
        class="el-icon-menu"
      />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        :disabled="language==='zh'"
        command="zh"
      >
        中文
      </el-dropdown-item>
      <el-dropdown-item
        :disabled="language==='en'"
        command="en"
      >
        English
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {}
    },
    computed: {
      language () {
        return this.$store.state.lang
      }
    },
    methods: {
      handleSetLanguage (lang) {
        this.$i18n.locale = lang
        this.$store.commit('SWITCHLANG', lang)
      }
    }
  }
</script>
