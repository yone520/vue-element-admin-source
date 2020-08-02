<template>
  <div class="signOut" @click="signOut">
    登出
  </div>
</template>

<script>
  import store           from '@/store'
  import { resetRouter } from '@/router'

  export default {
    name: 'Logout',
    methods: {
      signOut () {
        store.commit('SIGN_OUT')
        resetRouter()
        this.$router.push(`/login?redirect=${this.$route.path}`)
      }
    }
  }
</script>

<style scoped>

</style>
