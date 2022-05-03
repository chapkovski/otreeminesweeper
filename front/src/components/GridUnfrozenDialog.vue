<template>
  <v-dialog v-model="dialog" width="500" transition="dialog-bottom-transition">
    <v-card>
      <v-toolbar dark color="warning">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="dialog = false">
            Close
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-card-text class="my-3">
        Grid 5 is available for you to work on it. Would you like to return to
        that previous grid?
      </v-card-text>
      <v-card-actions>
        <v-btn @click="openGrid()">Yes</v-btn>
        <v-btn @click="dialog = false">No</v-btn>
        <v-btn @click="openBudget()">View budget</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "UnfrozenDialog",
  data() {
    return {
      dialog: false,
    };
  },
  watch: {
    unfrozen_dialog(v) {
      this.dialog = v;
    },
  },
  computed: {
    ...mapState(["unfrozen_dialog"]),
  },
  methods: {
    ...mapMutations([
      "OPEN_BUDGET_DIALOG",
      "CLOSE_BUDGET_DIALOG",
      "OPEN_FROZEN_GRID",
      "SET_OPEN_GRID",
    ]),
    openGrid() {
      this.SET_OPEN_GRID(window.freezable_grid_id);

      this.dialog = false;
    },
    openBudget() {
      this.OPEN_BUDGET_DIALOG();
      this.dialog = false;
    },
  },
};
</script>
