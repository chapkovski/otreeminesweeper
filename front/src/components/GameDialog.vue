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
        Grid {{ id }}
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col>
            <minesweeper-game
              :rows="rows"
              :columns="columns"
              :bombs="bombs"
              :id="id"
            ></minesweeper-game>
          </v-col>
          <v-col v-if="practice">
            <v-card class="my-3">
              <v-card-title>Info:</v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item-group>
                    <v-list-item
                      >Number of left clicks:
                      <div class="ml-auto">{{ mygrid.used_clicks }}</div>
                    </v-list-item>
                    <v-list-item
                      >Number of right clicks:
                      <div class="ml-auto">{{ mygrid.right_clicks }}</div>
                    </v-list-item>
                    <v-list-item
                      >Cost of left clicks:
                      <div class="ml-auto">
                        ${{ $store.state.left_click_cost }}
                      </div>
                    </v-list-item>
                    <v-list-item
                      >Penalty for accidental bombs:
                      <div class="ml-auto">$ {{ mygrid.penalty }}</div>
                    </v-list-item>
                    <v-list-item
                      >Penalty for remaining unmarked bombs:
                      <div class="ml-auto">
                        {{ this.penalty_for_unmarked }}
                      </div></v-list-item
                    >
                    <v-list-item
                      >Benefit for work on grid:
                      <div class="ml-auto">{{ this.benefit }}</div>
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
import { mapGetters } from "vuex";
export default {
  props: {
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
  data: () => ({
    dialog: false,
  }),
  computed: {
    ...mapGetters(["get_grid", "get_practice_grid"]),
    mygrid() {
      if (this.practice) {
        return this.get_practice_grid(this.id);
      } else {
        return this.get_grid(this.id);
      }
    },
    benefit() {
      return;
    },
    penalty_for_unmarked() {
      return;
    },
  },
};
</script>
