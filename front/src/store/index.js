import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    budget: 20,
    max_clicks: 400,
    remaining_clicks: 400,
    totclicks: 0,
    grids: [
      {
        rows: 9,
        columns: 9,
        bombs: 11,
        lb: 0.04,
        ub: 0.06,
        used_clicks: 0,
        recommended_clicks: 95,
        done: false,
      },
      {
        rows: 9,
        columns: 9,
        bombs: 11,
        lb: 0.04,
        ub: 0.06,
        used_clicks: 0,
        recommended_clicks: 95,
        done: false,
      },
      {
        rows: 16,
        columns: 16,
        bombs: 40,
        lb: 0.06,
        ub: 0.09,
        used_clicks: 0,
        recommended_clicks: 95,
        done: false,
      },
      {
        rows: 16,
        columns: 16,
        bombs: 40,
        lb: 0.06,
        ub: 0.09,
        used_clicks: 0,
        recommended_clicks: 95,
        done: false,
      },
      {
        rows: 18,
        columns: 20,
        bombs: 60,
        lb: 0.09,
        ub: 0.12,
        used_clicks: 0,
        recommended_clicks: 95,
        done: false,
      },
      {
        rows: 18,
        columns: 20,
        bombs: 60,
        lb: 0.09,
        ub: 0.12,
        used_clicks: 0,
        recommended_clicks: 95,
        done: false,
      },
    ],
  },
  getters: {
    allGridsDone: (state) => () => {
      return _.every(state.grids, (i) => i.done);
    },
    get_grid: (state) => (grid_id) => {
      return state.grids[grid_id];
    },
    clicks_per_grid: (state) => (grid_id) => {
      return state.grids[grid_id].used_clicks;
    },
  },
  mutations: {
    SET_GRID_PARAM(state, { grid_id, param, value }) {
      console.debug("PIZDA", grid_id, param, value);
      state.grids[grid_id][param] = value;
    },

    INCREASE_CLICKS(state) {
      state.totclicks++;
    },
    INCREASE_INDIVIDUAL_CLICKS(state, grid_id) {
      state.grids[grid_id].used_clicks++;
    },
    MARK_GRID_DONE(state, grid_id) {
      state.grids[grid_id].done = true;
    },
  },
  actions: {},
  modules: {},
});
