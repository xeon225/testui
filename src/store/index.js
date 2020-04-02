import Vue from "vue";
import Vuex from "vuex";
import UIGRAD from "cyanmaple/src/maple/uigradients.json";
import _ from "lodash";
Vue.use(Vuex);
const HEADER_CONFIG = { show: true, title: "" };
export default new Vuex.Store({
  state: {
    UIGRAD,
    headerConfig: _.clone(HEADER_CONFIG)
  },
  mutations: {
    setHeader(state, config = {}) {
      _.assign(state.headerConfig, HEADER_CONFIG, config);
    }
  },
  actions: {},
  modules: {}
});
