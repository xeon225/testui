<template>
  <div>
    <gc-form :data="data" v-model="model"></gc-form>
  </div>
</template>
<script>
export default {
  mate: {
    headerConfig: {
      title: "JSON表单"
    }
  },
  data() {
    return {
      data: [
        { label: "name", prop: "name" },
        {
          label: "sex",
          options: [
            { label: "nan", value: "1" },
            { label: "nv", value: "2" }
          ],
          type: "checkbox"
        }
      ],
      model: { sex: ["2"] }
    };
  }
};
</script>
