<template>
  <div class="treeSelect">
    <cmui-tabbar position="left" style="height:calc(100vh - 44px)" :nav="[true, true]">
      <cmui-tabbar-item :title="sheng.name" v-for="sheng in cityList" :key="sheng.name">
        <div class="list bg-white border" v-if="sheng.child">
          <div class="list-item padding20" v-for="shi in sheng.child" :key="shi.name">
            {{ shi.name }}
          </div>
        </div>
      </cmui-tabbar-item>
    </cmui-tabbar>
  </div>
</template>
<script>
import cityList from "@/lib/baseData/city.json";
export default {
  data() {
    return {
      cityList
    };
  }
};
</script>
<style lang="scss" scoped></style>
