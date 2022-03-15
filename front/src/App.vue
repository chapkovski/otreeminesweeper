<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-row>
          <v-col>
            <v-card>
              <v-card-text>
                <div class="text-center d-flex flex-column">
                  <game-dialog
                    v-for="(grid, i) in grids"
                    :key="i"
                    v-bind="grid"
                  ></game-dialog>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      grids: [
        { rows: 9, columns: 9, bombs: 11 },
        { rows: 9, columns: 9, bombs: 11 },
        { rows: 16, columns: 16, bombs: 40 },
        { rows: 16, columns: 16, bombs: 40 },
        { rows: 18, columns: 20, bombs: 60 },
        { rows: 18, columns: 20, bombs: 60 },
      ],
    };
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
