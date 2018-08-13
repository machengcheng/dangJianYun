<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    beforeRouteEnter (to, from, next) {
      console.log('beforeRouteEnter');
    },
    beforeRouteUpdate (to, from, next) {
      console.log('beforeRouteUpdate');
    },
    beforeRouteLeave (to, from, next) {
      console.log('beforeRouteLeave');
    }
  }
</script>
<style lang="scss">
  @import './assets/styles/index.scss';
</style>
