<template>
  <v-app>
    <div class="form-data" v-show="false">
      <input type="hidden" name="grid_info" :value="jsonData" />
    </div>
    <v-navigation-drawer permanent app>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            Think of the main objective for the experiment and answer these
            questions.
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            I will prioritize working on grids by
            <v-text-field
              hide-details
              single-line
              type="text"
              v-model="ego_priority"
              name="ego_priority"
            />
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            I will stop clicking on a grid when I have
            <v-text-field
              hide-details
              type="text"
              name="ego_click_stop"
              v-model="ego_click_stop"
            />
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            Please arrange the grids in the order in which you would like to
            work on them and then input the number of clicks you would like to
            use for each grid in the final column. You may allocate up to
            {{ max_clicks }} clicks total, but are not required to allocate all
            {{ max_clicks }}.
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <table class="table table-sm table-striped">
              <thead class="thead-dark">
                <tr>
                  <th></th>
                  <th scope="col">Grid number</th>
                  <th scope="col">Penalty per bomb</th>
                  <th scope="col">Potential Financial Loss</th>
                  <th scope="col">Allocated Clicks Limit ({{ max_clicks }})</th>
                </tr>
              </thead>
              <draggable v-model="grids" tag="tbody">
                <tr v-for="(item, ind) in grids" :key="ind">
                  <td><v-icon>mdi-drag-horizontal</v-icon></td>
                  <td scope="row">{{ item.number }}</td>
                  <td>${{ item.penalty }}</td>
                  <td>${{ item.potential_loss }}</td>
                  <td>
                    <v-text-field
                      v-model.number="item.clicks"
                      type="number"
                      dense
                      label=""
                      placeholder=""
                      outlined
                    ></v-text-field>
                  </td>
                </tr>
              </draggable>
            </table>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-bottom-navigation app color="primary">
      <v-btn
        class="nextbtn"
        type="'submit"
        outlined
        elevation="2"
        rounded
        large
        v-if="allowProceeding"
      >
        Next
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import _ from "lodash";
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data() {
    return {
      ego_click_stop:'',
      ego_priority:'',
      max_clicks: window.max_clicks,
      grids: window.grids,
      dragging: false,
    };
  },
  computed: {
    jsonData() {
      return JSON.stringify(this.grids);
    },
    total_clicks() {
      return _.sumBy(this.grids, _.property("clicks"));
    },
    allNumbers() {
      const clicks = _.map(this.grids, (i) => _.isNumber(i.clicks));
      return _.every(clicks, Boolean);
    },
    allowProceeding() {
      return this.total_clicks <= this.max_clicks && this.allNumbers && this.ego_click_stop.length>0 && this.ego_priority.length>0;
    },
  },
};
</script>

<style scoped>
tr * {
  cursor: all-scroll !important;
}
.nextbtn {
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
  --animate-duration: 1s;
  --animate-delay: 1s;
  --animate-repeat: 1;
  pointer-events: auto;
  font: inherit;
  font-weight: 500 !important;
  letter-spacing: 0.0892857143em;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  user-select: none;
  white-space: nowrap;
  cursor: pointer;
  font-size: 0.875rem !important;
  background-repeat: no-repeat;
  box-sizing: inherit;
  padding: 0;
  margin: 0;
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1 0 auto;
  justify-content: inherit;
  line-height: normal;
  position: relative;
  transition: inherit;
  transition-property: opacity;
  border-radius: 10px !important;
  text-transform: uppercase !important;
}
.nextbtn span {
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
    "Liberation Mono", "Courier New", monospace !important;
  --animate-duration: 1s;
  --animate-delay: 1s;
  --animate-repeat: 1;
  pointer-events: auto;
  font: inherit;
  font-weight: 500;

  letter-spacing: 0.0892857143em;
  text-indent: 0.0892857143em;
  text-transform: uppercase !important;
  user-select: none;
  white-space: nowrap;
  cursor: pointer;
  font-size: 0.875rem;
  background-repeat: no-repeat;
  box-sizing: inherit;
  padding: 0;
  margin: 0;
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
</style>
