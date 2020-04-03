<template>
  <div id="app">
    <ac-header title="sfd"></ac-header>
    <router-view />

    <ac-footer></ac-footer>
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
}
a {
  &,
  &:active {
    color: black;
  }
}
</style>
