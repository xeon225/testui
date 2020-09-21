import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import _ from "lodash";
import autoPage from "./autoPage";
Vue.use(VueRouter);
/**
 * require.context会导致文件一次性加载，暂时使用node临时生成的方式
 */
// const componentContext = require.context("../views", true, /\.vue$/, "lazy");
// let autoView = [];
// componentContext.keys().forEach(key => {
//   let name = key.slice(key.lastIndexOf("/") + 1, -4);
//   // .replace(/^\w/, w => w.toUpperCase());
//   let component = componentContext(key).default;
//   autoView = autoView.concat({
//     name,
//     ...component
//   });
// });
// console.log(autoView);
// const routes = [
//   {
//     path: "/",
//     redirect: "/index"
//   }
// ].concat(
//   autoView.map(item => ({
//     path: `/${item.name}`,
//     name: `${item.name}`,
//     component: () => import(/* webpackChunkName: "[request]" */ `../views/${item.name}`),
//     // component: resolve => require([`../views/${item.name}`], resolve),
//     mate: item.mate
//   }))
// );
const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/index" },
    ...autoPage.map(i => {
      let routerPath = i.path.slice(10, -4);
      console.log(routerPath);
      return {
        path: `/${routerPath}`,
        name: _.camelCase(routerPath),
        component: () => import(/* webpackChunkName: "[request]" */ `../views/${routerPath}`)
      };
    })
  ]
});

router.beforeResolve((to, from, next) => {
  let views = to.matched.map(item => item.components.default);
  views.forEach(view => {
    store.commit("setHeader", _.get(view, "mate.headerConfig", {}));
  });
  next();
});
export default router;
