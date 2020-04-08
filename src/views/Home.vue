<template>
  <div class="home">
    <div class="bg-red" style="height:767px"></div>

    <gc-scroll-load :handler="getproduct">
      <div v-for="(item, index) in productList">
        {{ index }}{{ item.productName }}
      </div>
    </gc-scroll-load>
    <div class="bg-blue" style="height:800px"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  inject: ["$searchweb", "$listener"],
  mate: {
    headerConfig: {
      show: false
    }
  },
  data() {
    return {
      productList: [],
      startNum: 0,
      pageCount: 10
    };
  },
  created() {},
  methods: {
    getproduct() {
      return this.$searchweb
        .items({
          data: {
            words: "酸奶",
            defaultMarketStoreId: "1065",
            startNum: this.startNum,
            pageCount: this.pageCount
          }
        })
        .then(data => {
          this.productList = this.productList.concat(data);
          this.startNum += 10;
          if (this.productList.length > 100 || !data.length) {
            return Promise.reject();
          }
        });
    }
  }
};
</script>
