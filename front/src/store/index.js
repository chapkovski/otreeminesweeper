import Vue from "vue";
import Vuex from "vuex";

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
        lb: 0.09,
        ub: 0.12,
        used_clicks: 0,
        recommended_clicks: 95,
      },
      {
        rows: 9,
        columns: 9,
        bombs: 11,
        lb: 0.09,
        ub: 0.12,
        used_clicks: 0,
        recommended_clicks: 95,
      },
      {
        rows: 16,
        columns: 16,
        bombs: 40,
        lb: 0.09,
        ub: 0.12,
        used_clicks: 0,
        recommended_clicks: 95,
      },
      {
        rows: 16,
        columns: 16,
        bombs: 40,
        lb: 0.09,
        ub: 0.12,
        used_clicks: 0,
        recommended_clicks: 95,
      },
      {
        rows: 18,
        columns: 20,
        bombs: 60,
        lb: 0.09,
        ub: 0.12,
        used_clicks: 0,
        recommended_clicks: 95,
      },
      {
        rows: 18,
        columns: 20,
        bombs: 60,
        lb: 0.09,
        ub: 0.12,
        used_clicks: 0,
        recommended_clicks: 95,
      },
    ],
  },
  getters: {
    clicks_per_grid: (state) => (grid_id) => {
      return state.grids[grid_id].used_clicks;
    },
  },
  mutations: {
    INCREASE_CLICKS(state) {
      state.totclicks++;
    },
    INCREASE_INDIVIDUAL_CLICKS(state, grid_id) {
      state.grids[grid_id].used_clicks++;
    },
  },
  actions: {},
  modules: {},
});
