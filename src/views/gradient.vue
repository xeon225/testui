<template>
  <div class="">
    <gc-cell title="以下色彩来源于uigradients" @click="change()" class="marginh20 margint20 radius5">一个专注于渐变色彩搭配的网站</gc-cell>
    <div class="list list-col3 padding10">
      <div class="list-item padding10" v-for="(i, index) in listName" :key="i">
        <div class="ratio-container" :class="`gradient_${i}`"></div>
        <div class="padding12 bg-white">
          <p class="text-light fs-12">{{ index + 1 }}号渐变</p>
          <p class="text-limit1 text-dark">{{ i }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import listName from "@/lib/baseData/gradientName.json";
export default {
  mate: {
    headerConfig: {
      title: "渐变色彩展示"
    }
  },
  data() {
    return {
      listName
    };
  },
  methods: {
    change() {
      location.href = "http://www.uigradients.com";
    }
  }
};
</script>
