<template>
  <div @click="handler()" class="pos-r">
    <slot></slot>
    <div class="dropdown_container">
      <div class="dropdown_arrow"></div>
      <div class="dropdown_warp">
        <ul>
          <li>分享</li>
          <li>首页</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handler() {}
  }
};
</script>
<style lang="scss" scoped>
.dropdown_container {
  line-height: initial;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
  min-width: 100px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .dropdown_arrow {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 6px;
    filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));
    top: -6px;
    left: 50%;
    margin-right: 3px;
    border-top-width: 0;
    border-bottom-color: #ebeef5;
    &:after {
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
      content: " ";
      border-width: 6px;
      top: 1px;
      margin-left: -6px;
      border-top-width: 0;
      border-bottom-color: #fff;
    }
  }
  .dropdown_warp {
    line-height: 26px;
  }
}
</style>
