<template>
  <div>
    <img
      src="https://zhang-yue.oss-cn-beijing.aliyuncs.com/bingshan/1212.png"
      alt=""
    />

    <div class="bg-white radius4 padding20 margin20">
      <router-link to="/about"> 关于我们 </router-link>
    </div>
    <div class="bg-white radius4 padding20 margin20">
      <router-link to="/scrollLoad"> 滚动加载案例 </router-link>
    </div>
  </div>
</template>
<script>
export default {
  mate: {
    headerConfig: {
      title: "CyanMaple_Cli",
      show: false
    }
  }
};
</script>
