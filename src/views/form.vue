<template>
  <div class="padding20 radius">
    <gc-form :data="data" v-model="model"></gc-form>
    {{ model }}
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
      cityList: ["1", "2", "3"],
      btnValue: ["2"],
      data: [
        { label: "姓名", prop: "name", props: { append: "sdf", prepend: "asdf" } },
        {
          label: "性别",
          prop: "sex",
          type: "radio",
          options: [
            { label: "男", value: 0 },
            { label: "女", value: 1 }
          ],
          props: { targetClass: "btn radius3 reverse" },
          group: true
        },
        {
          label: "热门城市",
          options: [
            { label: "北京", value: 0 },
            { label: "上海", value: 1 },
            { label: "大连", value: 2 }
          ],
          prop: "hotCity",
          type: "checkbox",
          group: true,
          props: { targetClass: "btn radius3" }
        },
        {
          label: "department",
          prop: "department",
          type: "select",
          props: { multiple: true },
          options: [
            { label: "技术", value: 0 },
            { label: "业务", value: 1 },
            { label: "产品", value: 2 }
          ]
        }
      ],
      model: { sex: 1, hotCity: [2], department: 2 }
    };
  },
  created() {
    setTimeout(() => {
      this.data[3].options.push({ label: "ui", value: 3 });
    }, 2000);
  }
};
</script>
<style lang="scss" scoped></style>
