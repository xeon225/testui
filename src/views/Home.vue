<template>
  <div class="home">
    <div class="list list-col2">
      <div class="list-item padding10" v-for="item in productList">
        <div class="ratio-container img-container">
          <img src="" alt="" />
        </div>
        <p>{{ item.productName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  inject: ["$request"],
  mate: {
    headerConfig: {
      show: false
    }
  },
  data() {
    return {
      productList: []
    };
  },
  created() {
    console.log(this.$request);
    this.$request({
      url: "http://searchweb.test.66buy.com.cn/search/platform/items",
      data: {
        words: "面膜",
        defaultMarketStoreId: "1065",
        startNum: 10,
        pageCount: 10
      },
      useCache: 1
    }).then(data => {
      this.productList = data;
    });
  }
};
</script>
