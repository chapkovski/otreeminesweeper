<template>
  <div id="game">
    <h4 class="game-state">Number of clicks used in this grid: {{ clicks }}</h4>

    <h4 class="game-state">Total number of clicks used: {{ totclicks }}</h4>

    <p v-if="$store.state.practice">{{ bombStateText }}</p>

    <minesweeper-field
      :minefield="minefield"
      @onCellLeftClicked="onCellClicked"
      @onCellRightClicked="onCellFlagged"
    ></minesweeper-field>
  </div>
</template>

<script>
import _ from "lodash";
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  props: {
    id: Number,
    practice: { type: Boolean, default: false },
    bombIcon: {
      type: String,
      default: "💣",
    },
    flagIcon: {
      type: String,
      default: "❗",
    },

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
  data() {
    return {
      fieldSizeDefault: 10,
      fieldSizeMin: 5,
      fieldSizeMax: 50,
      fieldSize: 10,
      mineModeEnabled: true,

      minefield: [
        [
          {
            x: 0,
            y: 0,
            isBomb: false,
            isRevealed: false,
            isMarked: false,
            proximityCount: 0,
          },
        ],
      ],
      firstClickHappened: false,
      bombList: [],
      totBombsTriggered: 0,
      amountOfCellsMarked: 0,
      amountOfBombs: 0,
      gameOver: false,
      gameStateText: "",
    };
  },
  created() {
    console.debug("do we initialize??");
    this.prepareNewGame();
  },
  watch: {
    penalty_for_unmarked(value) {
      this.$emit("onPenaltyForUnmarked", value);
    },
    bombList: {
      handler(newValue, oldValue) {
        const bombRevealed = _.filter(
          newValue,
          _.matches({ isRevealed: true })
        );
        if (bombRevealed) {
          this.totBombsTriggered = bombRevealed.length;
          this.monitorBombs();
        }
      },
      deep: true,
    },
    amountOfCellsMarked(value) {
      this.monitorBombs();
    },
    numBlownBombs(val) {
      this.setNumBlownBombs({ grid_id: this.id, value: val });
    },
    numMarkedCorrectly(val) {
      this.setNumMarkedCorrectly({ grid_id: this.id, value: val });
    },
    numUnmarkedBombs(val) {
      this.setNumUnmarkedBombs({ grid_id: this.id, value: val });
    },
    fieldDone(v) {
      if (v === true) {
        this.mark_grid_done(this.id);
      }
    },
  },
  computed: {
    ...mapState(["totclicks"]),
    ...mapGetters(["clicks_per_grid", "get_grid"]),
    numBlownBombs() {
      return _.filter(
        this.bombList,
        _.matches({ isBomb: true, isMarked: false, isRevealed: true })
      ).length;
    },

    numUnmarkedBombs() {
      return _.filter(
        this.bombList,
        _.matches({ isBomb: true, isMarked: false, isRevealed: false })
      ).length;
    },
    numMarkedCorrectly() {
      return _.filter(
        this.bombList,
        _.matches({ isBomb: true, isMarked: true, isRevealed: false })
      ).length;
    },

    mygrid() {
      return this.get_grid(this.id);
    },
    fieldDone() {
      const flatfield = _.flattenDeep(this.minefield);
      return _.every(flatfield, (i) => i.isMarked || i.isRevealed);
    },
    clicks() {
      return this.clicks_per_grid(this.id);
    },
    bombStateText() {
      return (
        this.amountOfCellsMarked +
        " " +
        this.flagIcon +
        " / " +
        this.amountOfBombs +
        "g " +
        this.bombIcon
      );
    },
  },
  methods: {
    monitorBombs() {
      const v = this.amountOfCellsMarked + this.totBombsTriggered;
      if (!_.has(this.mygrid, "clicksTo80")) {
        if (v / this.bombs >= 0.8) {
          this.set_grid_param({
            grid_id: this.id,
            param: "clicksTo80",
            value: this.clicks_per_grid(this.id),
          });
        }
      }
      if (v == this.bombs) {
        this.set_grid_param({
          grid_id: this.id,
          param: "clicksTo100",
          value: this.clicks_per_grid(this.id),
        });
      }
    },
    ...mapMutations({
      set_grid_param: "SET_GRID_PARAM",
      increase_clicks: "INCREASE_CLICKS",
      increase_my_clicks: "INCREASE_INDIVIDUAL_CLICKS",
      mark_grid_done: "MARK_GRID_DONE",
      setNumBlownBombs: "SET_NUM_BLOWN_BOMBS",
      setNumUnmarkedBombs: "SET_NUM_UNMARKED_BOMBS",
      increaseGridRightClicks: "INCREASE_GRID_RIGHT_CLICKS",
      setNumMarkedCorrectly: "SET_NUM_MARKED_CORRECTLY",
    }),

    prepareNewGame() {
      // Reset variables
      this.gameOver = false;
      this.firstClickHappened = false;
      this.minefield.splice(0);
      this.bombList.splice(0);
      this.amountOfCellsMarked = 0;

      // Save the current field size
      this.size = this.fieldSize;

      const amountOfCells = this.rows * this.columns;
      // Determine the amount of bombs
      this.amountOfBombs = this.bombs;

      console.log(
        this.amountOfBombs + " / " + amountOfCells + " cells will be bombs."
      );

      // Create empty field
      for (let x = 0; x < this.rows; x++) {
        this.$set(this.minefield, x, []);
        for (let y = 0; y < this.columns; y++) {
          // Create a data tile for every coord
          this.$set(this.minefield[x], y, {
            x: x,
            y: y,
            isBomb: false,
            isRevealed: false,
            isMarked: false,
            proximityCount: 0,
          });
        }
      }
      this.placeMines();
    },
    placeMines() {
      console.log(
        "Creating field (" + this.rows + " x " + this.columns + ") ..."
      );

      // Linaer list of all coords
      let coords = [];

      // Fill the minefield
      for (let x = 0; x < this.rows; x++) {
        for (let y = 0; y < this.columns; y++) {
          // Save the coords in a linear array
          coords.push({ x: x, y: y });
        }
      }

      // Shuffle the coords array so we can pick random unique bomb locations
      shuffle(coords);

      // Place the set amount of bombs in random unique locations
      let amountOfBombLeftToPlace = this.amountOfBombs;
      // Keep track of the placed bombs
      while (amountOfBombLeftToPlace > 0 && coords.length > 0) {
        // Get a unique random coord
        const selectedCoord = coords.pop();
        // Get the tile data
        let bombCell = this.minefield[selectedCoord.x][selectedCoord.y];
        // Set it to a bomb
        bombCell.isBomb = true;
        // Keep track of it
        this.bombList.push(bombCell);
        // One bomb less to place
        amountOfBombLeftToPlace--;
      }

      // Calculate the proximity for all tiles around a bomb
      for (let b = 0; b < this.bombList.length; b++) {
        const bombCell = this.bombList[b];
        this.doForAdjecentCells(bombCell, function(adjecentCell) {
          // Increase its proximity count by 1
          adjecentCell.proximityCount++;
        });
      }
    },
    onCellClicked(coord) {
      this.onCellMined(coord);
    },
    onCellMined(coord) {
      if (!this.firstClickHappened) {
        this.firstClickHappened = true;
      }

      let cell = this.minefield[coord.x][coord.y];
      if (!cell.isRevealed) {
        this.increase_clicks();
        this.increase_my_clicks(this.id);
      }

      if (!this.gameOver && cell !== undefined) {
        if (cell.isMarked) {
          return console.log(
            "Can't mine marked tile: " + coord.x + ", " + coord.y
          );
        }
        console.log("Mining: " + coord.x + ", " + coord.y + "...");
        cell.isRevealed = true;

        // If it is a bomb
        if (cell.isBomb) {
          // Game over
          // this.setGameOver(); //PHILIPP: this one should be commented out for Kyle
          return;
        }

        // If it is an empty cell, clear all adjecent cells
        if (cell.proximityCount == 0) {
          const vm = this;
          const closure = function(adjecentCell) {
            if (!adjecentCell.isRevealed) {
              // If marked, remove the mark
              if (adjecentCell.isMarked) {
                adjecentCell.isMarked = false;
                vm.amountOfCellsMarked--;
              }
              // Reveal the tile
              adjecentCell.isRevealed = true;
              // Repeat for that cell if it is also a blank
              if (adjecentCell.proximityCount == 0) {
                vm.doForAdjecentCells(adjecentCell, closure);
              }
            }
          };
          vm.doForAdjecentCells(cell, closure);
        }
      }
    },
    onCellFlagged(coord) {
      let cell = this.minefield[coord.x][coord.y];
      if (!this.gameOver && cell !== undefined) {
        if (cell.isRevealed) {
          return console.log(
            "Can't flag revealed tile: " + coord.x + ", " + coord.y
          );
        }
        if (!cell.isMarked && this.amountOfCellsMarked >= this.bombs) {
          return console.log("youve exhausted number of available markers");
        }
        console.log("(Un)Flagging: " + coord.x + ", " + coord.y + "...");
        cell.isMarked = !cell.isMarked;
        this.increaseGridRightClicks(this.id);
        this.amountOfCellsMarked += cell.isMarked ? 1 : -1;

        // Check if all bombs are marked
        let allBombsMarked = true;
        for (let b = 0; b < this.bombList.length; b++) {
          if (!this.bombList[b].isMarked) {
            allBombsMarked = false;
            break;
          }
        }
        // All bombs are marked? No more markings than bombs?
        if (
          this.firstClickHappened &&
          this.bombList.length == this.amountOfCellsMarked &&
          allBombsMarked
        ) {
          // Winner!
          this.setGameWon();
        }
      }
    },
    // helper method
    doForAdjecentCells(middleCell, closure) {
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          // Calculate adjecent cell coords
          const adjecentX = middleCell.x + i;
          const adjecentY = middleCell.y + j;

          // Check if the cell it within the field's borders
          if (
            adjecentX >= 0 &&
            adjecentX < this.rows &&
            adjecentY >= 0 &&
            adjecentY < this.columns
          ) {
            // Execute whatever it wants
            closure(this.minefield[adjecentX][adjecentY]);
          }
        }
      }
    },
    // Lose the game when a bomb is clicked
    setGameOver() {
      this.gameOver = true;
      // Reveal all bombs
      for (let b = 0; b < this.bombList.length; b++) {
        this.bombList[b].isRevealed = true;
      }
    },
    setGameWon() {
      this.gameOver = true;
      // Reveal all cells
      // for (let x = 0; x < this.rows; x++) {
      //   for (let y = 0; y < this.columns; y++) {
      //     let cell = this.minefield[x][y];
      //     cell.isRevealed = cell.isBomb ? false : true;
      //   }
      // }
    },
  },
};

// HELPER METHODS

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
</script>

<style lang="scss">
#game {
  display: flex;
  flex-direction: column;
  text-align: center;
}

#minefield {
  // position: absolute;
  top: 200px;
  width: calc(100%-16px);
  left: 8px;
  right: 8px;
  min-height: calc(100%-180px);
  height: calc(100%-180px);
  bottom: 50px;
}

#mine-mode-switch {
  position: absolute;
  bottom: 16px;
  left: 8px;
  right: 8px;
}

p {
  margin: 0;
  font-size: 0.9em;
}

.game-state {
  margin: 10px 0 0 0;
}

.number-input {
  border: 1px solid #eee;
  padding: 4px 10px;
  border-radius: 2px;
  width: 80px;
  margin: 0 12px;
}
</style>
