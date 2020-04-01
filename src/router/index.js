import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import autoView from "@/views/autoImport.js";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
].concat(
  autoView.map(item => ({
    path: `/${item.name}`,
    name: `${item.name}`,
    component: () =>
      import(/* webpackChunkName: "[request]" */ `../views/${item.name}`)
  }))
);
const router = new VueRouter({
  routes
});

export default router;
