<template>
  <div id="app">
    <div class="sys-header">
      <div class="bg-white  flex-container" v-if="show">
        <i class="baseIcon baseIcon-back" @click="back()"></i>
        <span class="flex1 text-center">{{ title }}</span>
        <router-link to="/"><i class="baseIcon baseIcon-home"></i></router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  created() {},
  methods: {
    back() {
      this.$router.back();
    }
  },
  computed: {
    ...mapState({
      title: state => state.headerConfig.title,
      show: state => state.headerConfig.show
    })
  }
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
.sys-header {
  line-height: 44px;
  i {
    font-size: 20px;
    display: inline-block;
    min-width: 44px;
    text-align: center;
    vertical-align: bottom;
  }
}
</style>
