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
        <minesweeper-game
          :rows="rows"
          :columns="columns"
          :bombs="bombs"
          :id="id"
        ></minesweeper-game>
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
    ...mapGetters(["get_grid"]),
    mygrid() {
      return this.get_grid(this.id);
    },
  },
};
</script>
