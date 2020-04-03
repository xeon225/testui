import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 加载CMUI相关资源
import cmui from "cyanmaple";
import "cyanmaple/src/cyan/cmui.scss";
import "cyanmaple/src/maple/theme/default.scss";
import styleInit from "cyanmaple/src/maple/styleInit";

//注入request
import request from "@/lib/request";
Vue.config.productionTip = false;

class cyanmapleDesign {
  constructor() {
    this._initCMUI();
    this._initAutoComponent();
    this._initVM();
  }
  _initCMUI() {
    styleInit();
    Vue.use(cmui);
  }
  _initAutoComponent() {
    // 导入自动组件，分成全局组件和异步组件
    const globalContext = require.context(
      "./components/global",
      true,
      /\.vue$/
    );
    const asyncContext = require.context(
      "./components/async",
      true,
      /\.vue$/,
      "lazy"
    );
    globalContext.keys().forEach(key => {
      let name = key
        .slice(key.lastIndexOf("/") + 1, -4)
        .replace(/^\w/, w => w.toUpperCase());
      let component = globalContext(key).default;
      Vue.component("gc" + name, component);
    });
    asyncContext.keys().forEach(key => {
      let name = key
        .slice(key.lastIndexOf("/") + 1, -4)
        .replace(/^\w/, w => w.toUpperCase());
      let component = asyncContext(key);
      Vue.component("ac" + name, () => component);
    });
  }
  _initVM() {
    new Vue({
      router,
      provide() {
        return {
          $request: request
        };
      },
      store,
      render: h => h(App)
    }).$mount("#app");
  }
}
new cyanmapleDesign();
