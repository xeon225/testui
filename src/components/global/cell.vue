<template>
  <div class="bg-white flex-container c_cell" v-on="$listeners">
    <i
      v-if="mainIcon && !$slots.mainIcon"
      class="baseIcon bg-blue main_icon"
      :class="`baseIcon-${mainIcon}`"
    ></i>
    <slot v-else name="mainIcon"></slot>
    <div class="flex1 content">
      <p class="title" v-text="title"></p>
      <p class="sub" v-if="$slots.default"><slot></slot></p>
    </div>
    <div class="ext"><slot name="ext"></slot></div>
    <i
      class="baseIcon opt_icon"
      :class="`baseIcon-${optIcon}`"
      v-if="optIcon && !$slots.optIcon"
    ></i>
    <slot v-else name="optIcon"></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: "" },
    mainIcon: { type: String, default: "" },
    optIcon: { type: String, default: "right" }
  }
};
</script>
<style lang="scss" scoped>
.c_cell {
  padding: px(12);
  .main_icon {
    margin-right: px(12);
    padding: px(1) px(4);
    color: white;
    border-radius: 3px;
  }
  .content {
    .title {
      font-size: 15px;
    }
    .sub {
      margin-top: px(3);
      font-size: 12px;
      color: #8a8a8a;
    }
  }
  .ext {
  }
  .opt_icon {
    color: #8a8a8a;
    margin-left: px(6);
  }
}
</style>
