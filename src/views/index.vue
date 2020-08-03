<template>
  <div>
    <img
      src="https://zhang-yue.oss-cn-beijing.aliyuncs.com/bingshan/1212.png"
      alt=""
    />
    <router-link to="/about">
      <gc-cell title="header" class="radius3 margin20"
        >一个简单的页面head设置</gc-cell
      >
    </router-link>
    <router-link to="/scrollLoad">
      <gc-cell title="滚动加载" class="radius3 margin20"
        >展示如何在页面中使用滚动加载</gc-cell
      >
    </router-link>
    <router-link to="/cell">
      <gc-cell title="cell" class="radius3 margin20"
        >一个经常在列表页面用到的通用样式</gc-cell
      >
    </router-link>
    <router-link to="/gradient">
      <gc-cell title="渐变" class="radius3 margin20"
        >这里展示了CMUI中自带的334种渐变</gc-cell
      >
    </router-link>
    <router-link to="/login">
      <gc-cell title="系统登录" class="radius3 margin20"
        >通用系统登录DEMO</gc-cell
      >
    </router-link>
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
