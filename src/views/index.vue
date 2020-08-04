<template>
  <div>
    <img src="https://zhang-yue.oss-cn-beijing.aliyuncs.com/bingshan/1212.png" alt="" />

    <router-link :to="item.path" v-for="item in list" :key="item.title">
      <gc-cell :title="item.title" class="radius3 margin20">{{ item.sub }}</gc-cell>
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
  },
  data() {
    return {
      list: [
        { path: "/about", title: "header属性配置", sub: "用于设置页面的title和显示页面的通用头部" },
        { path: "/scrollLoad", title: "滚动加载组件", sub: "展示如何在页面中使用滚动加载" },
        { path: "/cell", title: "cell", sub: "一个经常在列表页面用到的通用样式" },
        { path: "/gradient", title: "渐变", sub: "这里展示了CMUI中自带的334种渐变" },
        { path: "/login", title: "系统登录", sub: "通用系统登录DEMO点击K可以切换背景" },
        { path: "/form", title: "表单组件", sub: "使用JSON快速完成表单布局" }
      ]
    };
  }
};
</script>
