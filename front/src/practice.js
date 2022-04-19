import Vue from "vue";
import App from "./PracticeApp.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Game from "./Game.vue";
import Minefield from "./Minefield.vue";
import ButtonSwitch from "./ButtonSwitch.vue";
import MinefieldCell from "./MinefieldCell.vue";
import GameDialog from "./components/GameDialog.vue";

import vuetify from "./plugins/vuetify";
import store from "./store";
import vueAwesomeCountdown from "vue-awesome-countdown";

Vue.use(vueAwesomeCountdown, "vac");

Vue.component("minesweeper-header", Header);
Vue.component("minesweeper-game", Game);
Vue.component("minesweeper-field", Minefield);
Vue.component("minesweeper-field-cell", MinefieldCell);
Vue.component("minesweeper-footer", Footer);
Vue.component("app-button-switch", ButtonSwitch);
Vue.component("game-dialog", GameDialog);

new Vue({
  el: "#app",
  vuetify,
  store,
  render: (h) => h(App),
});
