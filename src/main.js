// Import Libraries
import Vue from "vue";
import VueResource from "vue-resource";
import VueTouch from "vue-touch";
import router from "./router";

// Import Global Components
import App from "./App.vue";
import PostComponent from "./components/SinglePost.vue";

// Register Libraries
Vue.use(VueResource);
Vue.use(VueTouch);

// Register Global Components
Vue.component("single-post", PostComponent);

// Import All CSS Files
import "./assets/css/animate.css";
import "./assets/css/jquery.fullpage.min.css";
import "./assets/css/materialize.css";
import "./assets/css/styles.css";

// Import All JS Files
import "./assets/js/jquery.fullpage.min.js";
import "./assets/js/materialize.min.js";
import "./assets/js/init.js";

// Initialize App
new Vue({
  el: "#app",
  router,
  render: h => h(App),
});
