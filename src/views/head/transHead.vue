<template>
  <div>
    <ac-header transparent fixed> </ac-header>
    <div style="height:2000px">
      <ac-random-pic></ac-random-pic>
    </div>
  </div>
</template>
<script>
export default {
  mate: {
    headerConfig: {
      show: false
    }
  },
  data() {
    return {
      active: 0
    };
  }
  // created() {
  //   document.addEventListener("scroll", e => {
  //     this.active = (document.scrollingElement.scrollTop / 100) | 0;
  //     console.log(this.active);
  //   });
  // }
};
</script>
