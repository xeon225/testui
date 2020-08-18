<template>
  <div class="padding20 radius">
    <gc-form :data="data" v-model="model" label-width="100px" ref="form" class="padding20 bg-white shadow radius3 marginb30"></gc-form>
    <div class="btn blue block radius4" @click="check">submit</div>
  </div>
</template>
<script>
import * as validator from "@/lib/validator.js";
let maple = window.maple;
export default {
  mate: {
    headerConfig: {
      title: "JSON表单"
    }
  },
  data() {
    return {
      data: [
        { label: "姓名", prop: "name", rules: [validator.typeCheck("input", "姓名不能为空")] },
        { label: "手机号", prop: "phone", rules: [validator.phone()] },
        { label: "邮箱", prop: "email", rules: [validator.email()] },
        {
          label: "部门",
          prop: "department",
          type: "select",
          options: [
            { label: "技术部", value: "1" },
            { label: "设计部", value: "2" },
            { label: "产品部", value: "3" },
            { label: "业务部", value: "4" }
          ],
          rules: [validator.typeCheck("select", "必须选择部门")]
        },
        {
          label: "性别",
          prop: "sex",
          type: "radio",
          options: [
            { label: "男", value: 0 },
            { label: "女", value: 1 }
          ],
          rules: [validator.typeCheck("radio", "性别不能为空")],
          props: { targetClass: "small square" }
        },
        {
          label: "办公用品",
          prop: "tools",
          type: "checkbox",
          options: [
            { label: "电脑", value: 0 },
            { label: "桌子", value: 1 },
            { label: "椅子", value: 2 },
            { label: "文具", value: 3 }
          ],
          rules: [validator.typeCheck("checkbox", "至少选择一项")],
          props: { targetClass: "small switch" }
        }
      ],
      model: {}
    };
  },
  methods: {
    check() {
      let rs = this.$refs.form.validate();
      rs && maple.alert("验证通过");
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped></style>
