<template>
  <div class="bg-white auto-footer flex-container padding5 fixed-bottom">
    <router-link to="/About" class="text-center flex1">
      <i class="baseIcon baseIcon-share paddingb3"></i>
      <p>关于我们</p>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: "" }
  }
};
</script>
<style lang="scss" scoped>
.auto-footer {
}
</style>
