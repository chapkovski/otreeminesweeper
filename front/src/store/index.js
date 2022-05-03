import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    grid_dialog_open_id:null,
    unfrozen_dialog: false,
    budget_dialog: false,
    budget_counter: 0,
    left_click_cost: window.left_click_cost,
    budget: 20,
    freezable_grid_id: window.freezable_grid_id,
    max_clicks: window.max_clicks,
    remaining_clicks: window.max_clicks,
    totclicks: 0,
    grids: window.grids,
    practice: window.practice,
  },
  getters: {
    allGridsDone: (state) => () => {
      return _.every(state.grids, (i) => i.done);
    },
    limitExhausted: (state) => () => {
      return state.totclicks >= state.max_clicks;
    },

    get_grid: (state) => (grid_id) => {
      return state.grids[grid_id];
    },
    penalty_for_unmarked: (state) => (grid_id) => {
      const grid = state.grids[grid_id];

      if (grid.bombs_non_revealed > grid.bombs80) {
        return grid.bombs80 * grid.penalty;
      }
      const num_bombs = Math.max(
        grid.bombs_non_revealed - Math.floor(grid.bombs * 0.2),
        0
      );
      return num_bombs * grid.penalty;
    },
    penalty_for_blown_up: (state) => (grid_id) => {
      const grid = state.grids[grid_id];
      return grid.bombs_blown * grid.penalty;
    },
    total_penalty: (state, { penalty_for_unmarked, penalty_for_blown_up }) => (
      grid_id
    ) => penalty_for_unmarked(grid_id) + penalty_for_blown_up(grid_id),

    benefit_for_work: (state) => (grid_id) => {
      const grid = state.grids[grid_id];
      return (
        (grid.bombs_marked_correctly - grid.bombs_blown) * grid.penalty -
        grid.used_clicks * state.left_click_cost
      );
    },
    clicks_per_grid: (state) => (grid_id) => {
      return state.grids[grid_id].used_clicks;
    },
  },
  mutations: {
    SET_NUM_BLOWN_BOMBS(state, { grid_id, value }) {
      state.grids[grid_id].bombs_blown = value;
    },
    SET_NUM_UNMARKED_BOMBS(state, { grid_id, value }) {
      state.grids[grid_id].bombs_non_revealed = value;
    },
    SET_NUM_MARKED_CORRECTLY(state, { grid_id, value }) {
      state.grids[grid_id].bombs_marked_correctly = value;
    },
    INCREASE_GRID_RIGHT_CLICKS(state, grid_id) {
      state.grids[grid_id].right_clicks++;
    },
    SET_GRID_PARAM(state, { grid_id, param, value }) {
      state.grids[grid_id][param] = value;
    },

    INCREASE_CLICKS(state) {
      state.totclicks++;
    },
    INCREASE_BUDGET_COUNTER(state) {
      state.budget_counter++;
    },
    INCREASE_INDIVIDUAL_CLICKS(state, grid_id) {
      state.grids[grid_id].used_clicks++;
    },
    MARK_GRID_DONE(state, grid_id) {
      state.grids[grid_id].done = true;
    },
    FREEZE_GRID(state, grid_id) {
      state.grids[grid_id].frozen = true;
    },
    UNFREEZE_GRID(state, grid_id) {
      state.grids[grid_id].frozen = false;
    },
    FREEZE_GRID(state, grid_id) {
      state.grids[grid_id].frozen = true;
    },
    OPEN_FROZEN_GRID(state) {
      state.grids[4].dialog_open = true;
    },
    CLOSE_BUDGET_DIALOG(state) {
      state.budget_dialog = false;
    },
    OPEN_BUDGET_DIALOG(state) {
      state.budget_dialog = true;
    },
    OPEN_UNFROZEN_DIALOG(state) {
      state.unfrozen_dialog = true;
    },
    SET_OPEN_GRID(state, grid_id) {
      state.grid_dialog_open_id = grid_id;
    },
  },
  actions: {},
  modules: {},
});
