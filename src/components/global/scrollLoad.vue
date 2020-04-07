<template>
  <div>
    <slot></slot>
    <div ref="scrollLoadEnd"></div>
  </div>
</template>
<script>
export default {
  props: {
    handler: { type: Function, default: () => {} }
  },
  data() {
    return { observerLazyLoad: null, loading: false };
  },
  created() {
    this.observerLazyLoad = new IntersectionObserver(entries => {
      let [entrie] = entries;
      let _this = this;
      if (this.loading) {
        return;
      }
      (function load() {
        if (
          entrie.target.getBoundingClientRect().top <= entrie.rootBounds.height
        ) {
          _this.loading = true;
          _this.handler().then(() => {
            _this.loading = false;
            _this.$nextTick(load);
          });
        }
      })();
    });
  },
  mounted() {
    this.observerLazyLoad.observe(this.$refs.scrollLoadEnd);
  }
};
</script>
