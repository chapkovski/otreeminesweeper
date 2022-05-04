import Vue from "vue";
import BudgetApp from "./BudgetApp.vue";
 
import vuetify from "./plugins/vuetify";
import store from "./store";
 

new Vue({
  el: "#app",
  vuetify,
  store,
  render: (h) => h(BudgetApp),
});
