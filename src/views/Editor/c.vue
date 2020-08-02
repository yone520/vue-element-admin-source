<template>
  <div>
    CCC
    <router-link :to="$route.matched[1]['path'] + '/cccc/123'">文章1</router-link>
    <router-link :to="$route.matched[1]['path'] + '/cccc/456'">文章2</router-link>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'CCCC',
    mounted() {
      console.log(this.$route)
    },
  }
</script>

<style scoped>

</style>
