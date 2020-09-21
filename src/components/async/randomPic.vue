<template>
  <img class="c_randomPic" :src="`http://www.dmoe.cc/random.php?${tag}`" :width="width" :height="height" />
</template>
<script>
export default {
  data() {
    return {
      tag: +new Date()
    };
  },
  props: {
    width: { type: String, default: "" },
    height: { type: String, default: "" }
  }
};
</script>
