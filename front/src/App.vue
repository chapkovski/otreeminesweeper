<template>
  <div id="app">
    <v-app>
      <v-app-bar app>
        <div v-if="limitExhausted()">
          <v-alert type="danger" color="red"
            >You exhausted number of allowed clicks</v-alert
          >
        </div>

        <div v-if="!limitExhausted()">
          Total number of clicks: {{ totclicks }}
        </div>
        <div v-if="false">
          <div class="mx-3">Total number of clicks allowed: 400</div>
          <div class="mx-3">Clicks left:</div>
          <div class="mx-3">Endowment: $20</div>
        </div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <budget />
        </div>
      </v-app-bar>
      <v-main>
        <div class="form-data" v-show="false">
          <input type="hidden" name="total_clicks" :value="totclicks" />
          <input type="hidden" name="budget_counter" :value="budget_counter" />
          <div v-for="(grid, ind) in grids" :key="ind">
            <input
              type="hidden"
              :name="`total_penalty_${ind + 1}`"
              :value="total_penalty(ind)"
            />
            <input
              type="hidden"
              :name="`used_clicks_${ind + 1}`"
              :value="grid.used_clicks"
            />
            <input
              type="hidden"
              :name="`clicks100_${ind + 1}`"
              :value="grid.clicksTo100"
            />
            <input
              type="hidden"
              :name="`clicks80_${ind + 1}`"
              :value="grid.clicksTo80"
            />
          </div>
        </div>
        <v-container>
          <v-row>
            <v-col>
              <v-card>
                <v-card-text>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">
                            Grid Number
                          </th>
                          <th class="text-left">
                            Potential financial loss
                          </th>

                          <th class="text-left">
                            Clicks used per grid
                          </th>
                          <th class="text-left"></th>
                          <th class="text-left">Grid done:</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(grid, i) in grids" :key="i">
                          <td>{{ i + 1 }}</td>
                          <td>${{ grid.penalty }}</td>

                          <td>{{ grid.used_clicks }}</td>
                          <td>
                            <game-dialog
                              v-if="!limitExhausted()"
                              v-bind="grid"
                              :id="i"
                            ></game-dialog>
                          </td>
                          <td>{{ grid.done ? "Yes" : "No" }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
      <transition
        enter-active-class="animate__animated animate__backInUp animate__slow"
      >
        <v-bottom-navigation grow v-if="allGridsDone() || limitExhausted()">
          <v-btn
            elevation="2"
            color="error"
            x-large
            class="my-btn"
            type="submit"
          >
            Next
          </v-btn>
        </v-bottom-navigation>
      </transition>
    </v-app>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Budget from "./Budget.vue";
export default {
  name: "app",
  components: { Budget },
  data() {
    return {};
  },
  computed: {
    ...mapState(["totclicks", "grids", "budget_counter"]),
    ...mapGetters(["allGridsDone", "limitExhausted", "total_penalty"]),
  },
  methods: {},
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.my-btn {
  -webkit-text-size-adjust: 100%;
  word-break: normal;
  tab-size: 4;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  overflow-wrap: break-word;
  border-collapse: collapse;
  border-spacing: 0;
  font: inherit;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  user-select: none;
  white-space: nowrap;
  font-size: 0.875rem !important;
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1 0 auto;
  justify-content: inherit;
  line-height: normal;
  position: relative;
  transition: inherit;
  transition-property: opacity;
}

html,
body {
  margin: 0;
}

button {
  text-transform: uppercase;
  font-size: 0.7em;
  background-color: #333;
  color: #efefef;
  border: none;
  padding: 6px 10px;
  border-radius: 2px;
}

#app {
  font-family: "M PLUS Rounded 1c", Arial, sans-serif;
  color: #333;
}

#header,
#game,
#footer {
  // position: absolute;
}

#header {
  top: 0;
  width: 100%;
  height: 80px;
}

#game {
  top: 80px;
  width: 100%;
  min-height: calc(100%-200px);
  height: calc(100%-200px);
  bottom: 60px;
}

#footer {
  bottom: 0;
  height: 44px;
  width: 100%;
}
</style>
