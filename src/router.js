import Vue from "vue";
import Router from "vue-router";

import HomeComponent from "./components/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/home", name: "home", component: HomeComponent },
    { path: "/", redirect: { name: "home" } },
    { path: "**", redirect: { name: "home" } },
  ],
});
