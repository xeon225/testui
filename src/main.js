import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import _ from "lodash";
// 加载CMUI相关资源
import cmui from "cyanmaple";
import "cyanmaple/src/cyan/cmui.scss";
import "cyanmaple/src/maple/theme/default.scss";
import styleInit from "cyanmaple/src/maple/styleInit";
//注入request
Vue.config.productionTip = false;
function _initCMUI() {
  styleInit();
  Vue.use(cmui);
}
function _initAutoComponent() {
  // 导入自动组件，分成全局组件和异步组件
  const globalContext = require.context("./components/global", true, /\.vue$/);
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
function _initAutoProvied(app) {
  const context = require.context("./lib", true, /\.js$/);
  context.keys().forEach(key => {
    _.forEach(context(key), module => {
      _.isFunction(module.inject) && module.inject(app);
    });
  });
}
class cyanmapleDesign {
  constructor() {
    _initCMUI();
    _initAutoComponent();
    _initAutoProvied(this);
    this.app = this._initVM();
  }
  _initVM() {
    let _this = this;
    return new Vue({
      router,
      provide() {
        return {
          ..._this.injections
        };
      },
      store,
      render: h => h(App)
    }).$mount("#app");
  }
  inject(name, module) {
    if (name in this) {
      throw new Error(`${name} 已存在，不能重复注入`);
    } else {
      // todo 当调用此处时，constructor 中的 injection 还未初始化
      this.injections || (this.injections = Object.create(null));
      Object.defineProperty(this.injections, name, {
        enumerable: true,
        get() {
          return module;
        }
      });

      Object.defineProperty(this, name, {
        get() {
          return module;
        }
      });
    }
  }
}
export default new cyanmapleDesign();
