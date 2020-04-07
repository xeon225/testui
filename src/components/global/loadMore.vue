<template>
  <div class="loadMore"></div>
</template>

<script>
export default {
  name: "LoadMore",
  inject: ["$scroll", "$listener"],
  created() {
    this.$nextTick(() => {
      this.$scroll.observe(this.$el, this.loadMore);
    });
  },
  destroyed() {
    this.$scroll.unobserve(this.$el, this.loadMore);
  },
  methods: {
    loadMore(e, { isIntersecting }) {
      if (isIntersecting) {
        // 元素进入可视区，触发加载更多事件
        this.$listener.trigger("loadMore");
      }
    }
  }
};
</script>

<style scoped></style>
