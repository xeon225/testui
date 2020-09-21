<template>
  <div class="list padding10">
    <div class="list-item padding10" v-for="item in list" :key="item.head">
      <gc-cell v-bind="item" class="radius3">
        {{ item.sub }}
        <template v-slot:ext>
          <div v-html="item.ext"></div>
        </template>
      </gc-cell>
    </div>
  </div>
</template>
<script>
export default {
  mate: {
    headerConfig: {
      title: "cell组件"
    }
  },
  data() {
    return {
      list: [
        { title: "系统设置" },
        { title: "帮助中心", sub: "你可以选择人工客服或AI客服" },
        {
          title: "我的消息",
          ext: "<span class='badge red round'>1</span>"
        },
        {
          mainIcon: "check",
          title: "认证中心",
          sub: "真实头像认证"
        }
      ]
    };
  }
};
</script>
