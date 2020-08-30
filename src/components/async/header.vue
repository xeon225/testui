<template>
  <div class="c-header" :class="[{ transparent: this.transparent, 'fixed-top': this.fixed }, `c${this.c}`]">
    <div class="flex-container">
      <i class="baseIcon baseIcon-back" @click="back()"></i>
      <div class="flex1 title-container">
        <p class="text-center" v-if="!$slots.default" v-text="title"></p>
        <slot v-else></slot>
      </div>
      <router-link to="/"><i class="baseIcon baseIcon-home"></i></router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      c: 0
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    scrollEvent() {
      let top = document.scrollingElement.scrollTop;
      this.c = top > this.dis ? 10 : (top / (this.dis / 10)) | 0;
    }
  },
  created() {
    document.addEventListener("scroll", this.scrollEvent);
    this.$once("hook:beforeDestroy", () => document.removeEventListener("scroll", this.scrollEvent));
  },
  props: {
    title: { type: String, default: "" },
    transparent: { type: Boolean, default: false },
    fixed: { type: Boolean, default: false },
    dis: { type: Number, default: 100 }
  }
};
</script>
<style lang="scss" scoped>
.c-header {
  background-color: white;
  i {
    font-size: 20px;
    display: inline-block;
    min-width: 30px;
    line-height: 30px;
    text-align: center;
    vertical-align: bottom;
    margin: 7px;
  }
  &.transparent {
    background-color: transparent;
    i {
      background-color: #666;
      border-radius: 44px;
      color: white;
    }
  }
  @for $i from 0 through 10 {
    &.c#{$i} {
      background-color: rgba(255, 255, 255, $i/10);
      i {
        color: if($i > 4, black, white);
        background-color: lighten($color: #666, $amount: $i * 10);
      }
      .title-container {
        opacity: $i/10;
      }
    }
  }
}
</style>
