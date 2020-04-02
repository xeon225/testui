import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 加载CMUI相关资源
import cmui from "cyanmaple";
import "cyanmaple/src/cyan/cmui.scss";
import "cyanmaple/src/cyan/cmui.scss";
import "cyanmaple/src/maple/theme/default.scss";
import styleInit from "cyanmaple/src/maple/styleInit";
import _ from "lodash";
styleInit();
Vue.use(cmui);
// 导入自动组件，分成全局组件和异步组件
import autoComponent from "@/components/autoImport";
autoComponent.global.forEach(({ name, component }) => {
  Vue.component("gc" + name, component);
});
autoComponent.async.forEach(({ name, component }) => {
  Vue.component("ac" + name, () => component);
});
//注入http
import http from "@/lib/http";
Vue.prototype.$http = http;
Vue.config.productionTip = false;
//
router.beforeResolve((to, from, next) => {
  let views = to.matched.map(item => item.components.default);
  views.forEach(view => {
    store.commit("setHeader", _.get(view, "mate.headerConfig", {}));
  });
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
