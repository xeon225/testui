<template>
  <div>
    <slot></slot>
    <div ref="scrollLoadEnd"></div>
  </div>
</template>
<script>
export default {
  props: {
    handler: { type: Function, default: () => {} },
    dis: {
      type: [Number, String],
      default: document.scrollingElement.clientHeight
    }
  },
  data() {
    return { observerLazyLoad: null, loading: false };
  },
  created() {
    this.observerLazyLoad = new IntersectionObserver(
      entries => {
        let [entrie] = entries;
        let _this = this;
        if (this.loading) {
          return;
        }
        (function load() {
          if (entrie.target.getBoundingClientRect().top <= entrie.rootBounds.height + +_this.dis) {
            _this.loading = true;
            let handlerResult = _this.handler();
            handlerResult.then &&
              handlerResult
                .then(() => {
                  _this.loading = false;
                  _this.$nextTick(load);
                })
                .catch(() => {
                  _this.loading = false;
                });
          }
        })();
      },
      {
        rootMargin: `0px 0px ${this.dis}px 0px`
      }
    );
  },
  mounted() {
    this.observerLazyLoad.observe(this.$refs.scrollLoadEnd);
  },
  beforeDestroy() {
    this.observerLazyLoad.disconnect();
  }
};
</script>
