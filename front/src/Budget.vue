<template>
    <v-dialog v-model="dialog" scrollable transition="dialog-bottom-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            color="yellow"
            v-bind="attrs"
            v-on="on"
            class="m-1"
            outlined
            @click="increaseCounter"
          >
            Budget recommendations
          </v-btn>
</template>

    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Budget recommendations</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="dialog = false">
            Close
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-card-text v-html="budgetText"> </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: "Budget",
    data() {
        return {
            budgetText: document.getElementById("budget").innerHTML,
            dialog: false,
        };
    },
    watch: {
        budget_dialog(v) {
            this.dialog = v;
        }
    },
    computed: {
        ...mapState(["budget_dialog"]),
    },
    methods: {
        ...mapMutations(["OPEN_BUDGET_DIALOG", "CLOSE_BUDGET_DIALOG"]),
        increaseCounter() {
            this.OPEN_BUDGET_DIALOG();
            this.$store.commit("INCREASE_BUDGET_COUNTER");
        },
    },
};
</script>
