<template>
  <div>
    <gc-back-top></gc-back-top>
    <gc-scroll-load :handler="getProduct" class="padding10">
      <div class="list list-col2">
        <div class="list-item padding10" v-for="(item, index) in productList">
          <div class="bg-white radius4 overflow-h">
            <div class="ratio-container">
              <img :src="`https:${item}`" alt="" />
            </div>

            <p class="fs-12 text-dark text-limit2 padding10 text-center">第{{ index }}张图片</p>
          </div>
        </div>
      </div>
    </gc-scroll-load>
  </div>
</template>
<script>
let testData = [
  "//ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1116817046,2559600550&fm=26&gp=0.jpg",
  "//ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2335596138,3700517441&fm=26&gp=0.jpg",
  "//ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3723286315,824666652&fm=26&gp=0.jpg",
  "//ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2810922757,524152031&fm=26&gp=0.jpg",
  "//ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3107839243,1395897386&fm=26&gp=0.jpg",
  "//ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3791594121,3447933130&fm=26&gp=0.jpg",
  "//ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2940238599,2043972110&fm=26&gp=0.jpg",
  "//ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3671021438,2388828409&fm=26&gp=0.jpg",
  "//ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=122459423,2111094886&fm=26&gp=0.jpg",
  "//ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2488413669,3867453374&fm=26&gp=0.jpg",
  "//ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2614528469,93777471&fm=26&gp=0.jpg",
  "//ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3532198689,3697408878&fm=26&gp=0.jpg",
  "//ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3688209598,521068154&fm=26&gp=0.jpg",
  "//ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2049652389,3919460287&fm=26&gp=0.jpg",
  "//ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2060746730,197650394&fm=26&gp=0.jpg",
  "//ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2906722365,3279617902&fm=26&gp=0.jpg",
  "//ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3747131324,3920387563&fm=26&gp=0.jpg",
  "//ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2308268782,311353791&fm=26&gp=0.jpg",
  "//ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3729487672,2875608635&fm=26&gp=0.jpg",
  "//ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=327088567,1967596155&fm=26&gp=0.jpg"
];
export default {
  mate: {
    headerConfig: {
      title: "滚动加载DEMO"
    }
  },
  inject: ["$request"],
  data() {
    return {
      productList: []
    };
  },
  methods: {
    getProduct() {
      return this.$request({
        url: "test",
        testData
      }).then(data => {
        this.productList = this.productList.concat(data);
      });
    }
  }
};
</script>
