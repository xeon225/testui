<template>
  <div class=" clearfix login " :class="`gradient_${gradientNumber}`" style="height:100vh">
    <div class="topIcon" @click="gradientNumber = (Math.random() * 334) | 0">
      K
    </div>
    <cmui-form>
      <cmui-form-item label="账号">
        <cmui-input target-class="reverse"></cmui-input>
      </cmui-form-item>
      <cmui-form-item label="密码">
        <cmui-input target-class="reverse" type="password"></cmui-input>
      </cmui-form-item>
      <span class="btn block  margint50 " style="background:transparent" @click="login">登录</span>
    </cmui-form>
  </div>
</template>
<script>
let maple = window.maple;
export default {
  mate: {
    headerConfig: {
      title: "系统登录",
      show: false
    }
  },
  data() {
    return {
      gradientNumber: (Math.random() * 334) | 0
    };
  },
  methods: {
    login() {
      maple.alert("登录成功");
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  /deep/ {
    .cmui-form-item__label {
      color: rgb(222, 222, 222);
    }
    input {
      color: white;
    }
    .cmui-form {
      padding: 30px;
      max-width: 500px;
      margin: 0 auto;
    }
  }
}
.topIcon {
  width: 150px;
  height: 150px;
  border: 1px solid white;
  border-radius: 150px;
  line-height: 150px;
  color: white;
  text-align: center;
  font-size: 80px;
  margin: 40px auto;
}
</style>
