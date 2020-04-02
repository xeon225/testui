<template>
  <div class="bg-white auto-header flex-container" v-if="show">
    <i class="baseIcon baseIcon-back" @click="back()"></i>
    <span class="flex1 text-center">{{ title }}</span>
    <i class="baseIcon baseIcon-more"></i>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
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
<style lang="scss" scoped>
.auto-header {
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
