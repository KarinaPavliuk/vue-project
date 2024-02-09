// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

//import List from "./components/List.vue"; // імпортуєм компонент глобально

Vue.config.productionTip = false;

//Vue.component("List", List); // імпортуєм компонент глобально

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
});
