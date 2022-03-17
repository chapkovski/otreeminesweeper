<template>
  <div id="app">
    <v-app>
      <v-app-bar app> Total number of clicks: {{ totclicks }} </v-app-bar>
      <v-main>
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
                            Low penalty
                          </th>
                          <th class="text-left">
                            High penalty
                          </th>
                          <th class="text-left">
                            Recommended number of clicks
                          </th>
                          <th class="text-left"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(grid, i) in grids" :key="i">
                          <td>{{ i + 1 }}</td>
                          <td>${{ grid.lb }}</td>
                          <td>${{ grid.ub }}</td>
                          <td>{{ grid.recommended_clicks }}</td>
                          <td>
                            <game-dialog v-bind="grid" :id="i"></game-dialog>
                          </td>
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
    </v-app>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "app",
  data() {
    return {
      grids: [
        {
          rows: 9,
          columns: 9,
          bombs: 11,
          lb: 0.09,
          ub: 0.12,
          used_clicks:0,
          recommended_clicks: 95,
        },
        {
          rows: 9,
          columns: 9,
          bombs: 11,
          lb: 0.09,
          ub: 0.12,
          used_clicks:0,
          recommended_clicks: 95,
        },
        {
          rows: 16,
          columns: 16,
          bombs: 40,
          lb: 0.09,
          ub: 0.12,
          used_clicks:0,
          recommended_clicks: 95,
        },
        {
          rows: 16,
          columns: 16,
          bombs: 40,
          lb: 0.09,
          ub: 0.12,
          used_clicks:0,
          recommended_clicks: 95,
        },
        {
          rows: 18,
          columns: 20,
          bombs: 60,
          lb: 0.09,
          ub: 0.12,
          used_clicks:0,
          recommended_clicks: 95,
        },
        {
          rows: 18,
          columns: 20,
          bombs: 60,
          lb: 0.09,
          ub: 0.12,
          used_clicks:0,
          recommended_clicks: 95,
        },
      ],
    };
  },
  computed: {
    ...mapState(["totclicks"]),
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
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
