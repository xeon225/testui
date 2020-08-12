import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import _ from "lodash";
const componentContext = require.context("../views", true, /\.vue$/, "lazy");
let autoView = [];
componentContext.keys().forEach(key => {
  let name = key.slice(key.lastIndexOf("/") + 1, -4);
  // .replace(/^\w/, w => w.toUpperCase());
  let component = componentContext(key).default;
  autoView = autoView.concat({
    name,
    ...component
  });
});
console.log(autoView);
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/index"
  }
].concat(
  autoView.map(item => ({
    path: `/${item.name}`,
    name: `${item.name}`,
    component: () => import(/* webpackChunkName: "[request]" */ `../views/${item.name}`),
    mate: item.mate
  }))
);
const router = new VueRouter({
  mode: "history",
  routes
});
router.beforeResolve((to, from, next) => {
  let views = to.matched.map(item => item.components.default);
  views.forEach(view => {
    store.commit("setHeader", _.get(view, "mate.headerConfig", {}));
  });
  next();
});
export default router;
