<template>
  <div id="app">
    <ac-hello-world></ac-hello-world>
    <router-view />
    <div class="fixed-bottom flex-container bg-white padding10 round">
      <router-link to="/About" v-for="i in 5">
        <i class="baseIcon baseIcon-right"></i>
        <p>h</p>
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
}
</style>
