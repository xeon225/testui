<template>
  <div id="app">
    <ac-header></ac-header>
    <router-view />
  </div>
</template>
<script>
export default {
  created() {}
};
</script>
<style lang="scss">
body {
  background-color: #eee;
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
