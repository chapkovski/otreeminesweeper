<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="red lighten-2"
        v-bind="attrs"
        v-on="on"
        :disabled="mygrid.done"
        class="my-3"
      >
        Open grid
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Grid {{ id + 1 }}
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col>
            <minesweeper-game
              :practice="true"
              :rows="rows"
              :columns="columns"
              :bombs="bombs"
              :id="id"
              @onPenaltyForUnmarked="onPenaltyForUnmarked"
            ></minesweeper-game>
          </v-col>
          <v-col v-if="$store.state.notes">
            <v-card class="my-3">
              <v-card-text>
                <div>
                  {{ notes_message }}
                </div>
                <v-textarea outlined @input="processNote"></v-textarea>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col v-if="practice">
            <v-card class="my-3">
              <v-card-title>Info:</v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item-group>
                    <v-list-item
                      >Left clicks used:
                      <div class="ml-auto">{{ mygrid.used_clicks }}</div>
                    </v-list-item>
                    <v-list-item
                      >Right clicks used:
                      <div class="ml-auto">{{ mygrid.right_clicks }}</div>
                    </v-list-item>
                    <v-list-item
                      >Cost of each left click:
                      <div class="ml-auto">
                        ${{ $store.state.left_click_cost }}
                      </div>
                    </v-list-item>
                    <v-list-item
                      >Penalty for accidental bombs:
                      <div class="ml-auto">
                        $ {{ penalty_for_blown_up(this.id).toFixed(2) }}
                      </div>
                    </v-list-item>
                    <v-list-item
                      >Penalty for remaining unmarked bombs:
                      <div class="ml-auto">
                        ${{ penalty_for_unmarked(this.id).toFixed(2) }}
                      </div></v-list-item
                    >
                    <v-list-item
                      >Current earnings for grid grid:
                      <div class="ml-auto">
                        ${{ benefit_for_work(this.id).toFixed(2) }}
                      </div>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  props: {
    dialog_open: { type: Boolean, default: false },
    practice: { type: Boolean, default: false },

    id: Number,
    rows: {
      type: Number,
      default: 10,
    },
    columns: {
      type: Number,
      default: 10,
    },
    bombs: {
      type: Number,
      default: 10,
    },
  },
  data: (instance) => ({
    dialog: instance.dialog_open,
    notes_message: window.notes_message,
  }),
  watch: {
    grid_dialog_open_id(v) {
      this.dialog = this.id === v;
    },
  },
  computed: {
    ...mapState(["grid_dialog_open_id"]),
    ...mapGetters([
      "get_grid",
      "get_practice_grid",
      "penalty_for_unmarked",
      "penalty_for_blown_up",
      "benefit_for_work",
    ]),
    mygrid() {
      return this.get_grid(this.id);
    },
    benefit() {
      return;
    },
  },
  methods: {
    ...mapMutations({ setNote: "SET_NOTE" }),
    onPenaltyForUnmarked(value) {
      this.penalty_for_unmarked = value;
    },
    processNote(v) {
      this.setNote({ noteText: v, grid_id: this.id });
    },
  },
};
</script>
