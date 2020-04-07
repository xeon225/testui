<template>
  <div id="app">
    <ac-header title="sfd"></ac-header>
    <router-view />
    <div ref="scrollPotin"></div>
    <!-- <gc-footer></gc-footer> -->
  </div>
</template>
<script>
export default {
  created() {}
};
</script>
<style lang="scss">
body {
  background-color: #ccc;
  #app {
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }
}
a {
  &,
  &:active {
    color: black;
  }
}
</style>
