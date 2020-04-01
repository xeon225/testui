import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// config
import cliConfig from "../cli.config";
// cmui
import cmui from "cyanmaple";
import "cyanmaple/src/cyan/cmui.scss";
import "cyanmaple/src/cyan/cmui.scss";
import "cyanmaple/src/maple/theme/default.scss";
import styleInit from "cyanmaple/src/maple/styleInit";
styleInit();
Vue.use(cmui);
// autoComponent
import autoComponent from "@/components/autoImport";
autoComponent.forEach(component => {
  Vue.component(
    (cliConfig.autoComponentPrefix || "ac") + component.name,
    component
  );
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
