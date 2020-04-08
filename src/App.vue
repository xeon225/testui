<template>
  <div id="app">
    <ac-header></ac-header>
    <router-view />
    <div ref="scrollPotin"></div>
    <div class="bg-white auto-footer flex-container padding5 fixed-bottom">
      <router-link to="/about" class="text-center flex1">
        <i class="baseIcon baseIcon-share paddingb3"></i>
        <p>关于我们</p>
      </router-link>
      <router-link to="/scrollLoad" class="text-center flex1">
        <i class="baseIcon baseIcon-share paddingb3"></i>
        <p>滚动加载</p>
      </router-link>
    </div>
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
