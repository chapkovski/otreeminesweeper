(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"0565":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"minefield",oncontextmenu:"return false;"}},e._l(e.minefield,(function(t){return i("div",{key:t.x,staticClass:"gamerow"},e._l(t,(function(t){return i("minesweeper-field-cell",{key:t.y,attrs:{cellData:t,bombIcon:e.bombIcon,flagIcon:e.flagIcon},on:{onCellLeftClicked:e.onCellLeftClicked,onCellRightClicked:e.onCellRightClicked}})})),1)})),0)},s=[],r={props:{minefield:Array,bombIcon:{type:String,default:"💣"},flagIcon:{type:String,default:"❗"}},data:function(){return{}},methods:{onCellLeftClicked:function(e){this.$emit("onCellLeftClicked",e)},onCellRightClicked:function(e){this.$emit("onCellRightClicked",e)}}},l=r,a=(i("9920"),i("2877")),o=Object(a["a"])(l,n,s,!1,null,null,null);t["a"]=o.exports},"23be":function(e,t,i){},"25e6":function(e,t,i){},"3c34":function(e,t,i){"use strict";i("b6bc")},"402c":function(e,t,i){"use strict";var n=i("a026"),s=i("f309");n["a"].use(s["a"]),t["a"]=new s["a"]({icons:{iconfont:"mdi"}})},4360:function(e,t,i){"use strict";var n=i("a026"),s=i("2f62"),r=i("2ef0"),l=i.n(r);n["a"].use(s["a"]),t["a"]=new s["a"].Store({state:{budget_counter:0,left_click_cost:window.left_click_cost,budget:20,max_clicks:window.max_clicks,remaining_clicks:window.max_clicks,totclicks:0,grids:window.grids,practice:window.practice},getters:{allGridsDone:function(e){return function(){return l.a.every(e.grids,(function(e){return e.done}))}},limitExhausted:function(e){return function(){return e.totclicks>=e.max_clicks}},get_grid:function(e){return function(t){return e.grids[t]}},penalty_for_unmarked:function(e){return function(t){var i=e.grids[t],n=Math.max(i.bombs_non_revealed-Math.floor(.2*i.bombs),0);return n*i.penalty}},penalty_for_blown_up:function(e){return function(t){var i=e.grids[t];return i.bombs_blown*i.penalty}},total_penalty:function(e,t){var i=t.penalty_for_unmarked,n=t.penalty_for_blown_up;return function(e){return i(e)+n(e)}},benefit_for_work:function(e){return function(t){var i=e.grids[t];return(i.bombs_marked_correctly-i.bombs_blown)*i.penalty-i.used_clicks*e.left_click_cost}},clicks_per_grid:function(e){return function(t){return e.grids[t].used_clicks}}},mutations:{SET_NUM_BLOWN_BOMBS:function(e,t){var i=t.grid_id,n=t.value;e.grids[i].bombs_blown=n},SET_NUM_UNMARKED_BOMBS:function(e,t){var i=t.grid_id,n=t.value;e.grids[i].bombs_non_revealed=n},SET_NUM_MARKED_CORRECTLY:function(e,t){var i=t.grid_id,n=t.value;e.grids[i].bombs_marked_correctly=n},INCREASE_GRID_RIGHT_CLICKS:function(e,t){e.grids[t].right_clicks++},SET_GRID_PARAM:function(e,t){var i=t.grid_id,n=t.param,s=t.value;e.grids[i][n]=s},INCREASE_CLICKS:function(e){e.totclicks++},INCREASE_BUDGET_COUNTER:function(e){e.budget_counter++},INCREASE_INDIVIDUAL_CLICKS:function(e,t){e.grids[t].used_clicks++},MARK_GRID_DONE:function(e,t){e.grids[t].done=!0}},actions:{},modules:{}})},"6ed8":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"header"}},[i("h1",{staticClass:"title"},[e._v(e._s(e.title))])])},s=[],r={data:function(){return{title:"Minesweeper"}}},l=r,a=(i("abe6"),i("2877")),o=Object(a["a"])(l,n,s,!1,null,null,null);t["a"]=o.exports},"94e7":function(e,t,i){"use strict";i("d21c")},9874:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"gamecell",class:{revealed:e.isRevealed},on:{click:e.onCellLeftClicked,contextmenu:function(t){return e.onCellRightClicked.apply(null,arguments)}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isValueVisible,expression:"isValueVisible"}],staticClass:"content"},[e._v(e._s(e.value))])])},s=[],r={props:{cellData:Object,bombIcon:{type:String,default:"💣"},flagIcon:{type:String,default:"❗"}},data:function(){return{}},methods:{onCellLeftClicked:function(){this.$emit("onCellLeftClicked",{x:this.cellData.x,y:this.cellData.y})},onCellRightClicked:function(){this.$emit("onCellRightClicked",{x:this.cellData.x,y:this.cellData.y})}},computed:{value:function(){return this.isRevealed?this.cellData.isBomb?this.bombIcon:this.cellData.proximityCount>0?this.cellData.proximityCount:"":this.cellData.isMarked?this.flagIcon:""},isValueVisible:function(){return this.isRevealed||this.cellData.isMarked},isRevealed:function(){return this.cellData.isRevealed}}},l=r,a=(i("3c34"),i("2877")),o=Object(a["a"])(l,n,s,!1,null,null,null);t["a"]=o.exports},9920:function(e,t,i){"use strict";i("d2d0")},abe6:function(e,t,i){"use strict";i("25e6")},b6bc:function(e,t,i){},d21c:function(e,t,i){},d2d0:function(e,t,i){},d5ce:function(e,t,i){"use strict";i("ed87")},de8a:function(e,t,i){"use strict";i("23be")},ed87:function(e,t,i){},ef3b:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"game"}},[i("h4",{staticClass:"game-state"},[e._v("Number of clicks used in this grid: "+e._s(e.clicks))]),i("h4",{staticClass:"game-state"},[e._v("Total number of clicks used: "+e._s(e.totclicks))]),i("p",[e._v(e._s(e.bombStateText))]),i("minesweeper-field",{attrs:{minefield:e.minefield},on:{onCellLeftClicked:e.onCellClicked,onCellRightClicked:e.onCellFlagged}})],1)},s=[],r=i("5530"),l=(i("a9e3"),i("4de4"),i("a434"),i("2ef0")),a=i.n(l),o=i("2f62"),c={props:{id:Number,practice:{type:Boolean,default:!1},bombIcon:{type:String,default:"💣"},flagIcon:{type:String,default:"❗"},rows:{type:Number,default:10},columns:{type:Number,default:10},bombs:{type:Number,default:10}},data:function(){return{fieldSizeDefault:10,fieldSizeMin:5,fieldSizeMax:50,fieldSize:10,mineModeEnabled:!0,minefield:[[{x:0,y:0,isBomb:!1,isRevealed:!1,isMarked:!1,proximityCount:0}]],firstClickHappened:!1,bombList:[],totBombsTriggered:0,amountOfCellsMarked:0,amountOfBombs:0,gameOver:!1,gameStateText:""}},created:function(){console.debug("do we initialize??"),this.prepareNewGame()},watch:{penalty_for_unmarked:function(e){this.$emit("onPenaltyForUnmarked",e)},bombList:{handler:function(e,t){var i=a.a.filter(e,a.a.matches({isRevealed:!0}));i&&(this.totBombsTriggered=i.length,this.monitorBombs())},deep:!0},amountOfCellsMarked:function(e){this.monitorBombs()},numBlownBombs:function(e){this.setNumBlownBombs({grid_id:this.id,value:e})},numMarkedCorrectly:function(e){this.setNumMarkedCorrectly({grid_id:this.id,value:e})},numUnmarkedBombs:function(e){this.setNumUnmarkedBombs({grid_id:this.id,value:e})},fieldDone:function(e){!0===e&&this.mark_grid_done(this.id)}},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(o["d"])(["totclicks"])),Object(o["b"])(["clicks_per_grid","get_grid"])),{},{numBlownBombs:function(){return a.a.filter(this.bombList,a.a.matches({isBomb:!0,isMarked:!1,isRevealed:!0})).length},numUnmarkedBombs:function(){return a.a.filter(this.bombList,a.a.matches({isBomb:!0,isMarked:!1,isRevealed:!1})).length},numMarkedCorrectly:function(){return a.a.filter(this.bombList,a.a.matches({isBomb:!0,isMarked:!0,isRevealed:!1})).length},mygrid:function(){return this.get_grid(this.id)},fieldDone:function(){var e=a.a.flattenDeep(this.minefield);return a.a.every(e,(function(e){return e.isMarked||e.isRevealed}))},clicks:function(){return this.clicks_per_grid(this.id)},bombStateText:function(){return this.amountOfCellsMarked+" "+this.flagIcon+" / "+this.amountOfBombs+"g "+this.bombIcon}}),methods:Object(r["a"])(Object(r["a"])({monitorBombs:function(){var e=this.amountOfCellsMarked+this.totBombsTriggered;a.a.has(this.mygrid,"clicksTo80")||e/this.bombs>=.8&&this.set_grid_param({grid_id:this.id,param:"clicksTo80",value:this.clicks_per_grid(this.id)}),e==this.bombs&&this.set_grid_param({grid_id:this.id,param:"clicksTo100",value:this.clicks_per_grid(this.id)})}},Object(o["c"])({set_grid_param:"SET_GRID_PARAM",increase_clicks:"INCREASE_CLICKS",increase_my_clicks:"INCREASE_INDIVIDUAL_CLICKS",mark_grid_done:"MARK_GRID_DONE",setNumBlownBombs:"SET_NUM_BLOWN_BOMBS",setNumUnmarkedBombs:"SET_NUM_UNMARKED_BOMBS",increaseGridRightClicks:"INCREASE_GRID_RIGHT_CLICKS",setNumMarkedCorrectly:"SET_NUM_MARKED_CORRECTLY"})),{},{prepareNewGame:function(){this.gameOver=!1,this.firstClickHappened=!1,this.minefield.splice(0),this.bombList.splice(0),this.amountOfCellsMarked=0,this.size=this.fieldSize;var e=this.rows*this.columns;this.amountOfBombs=this.bombs,console.log(this.amountOfBombs+" / "+e+" cells will be bombs.");for(var t=0;t<this.rows;t++){this.$set(this.minefield,t,[]);for(var i=0;i<this.columns;i++)this.$set(this.minefield[t],i,{x:t,y:i,isBomb:!1,isRevealed:!1,isMarked:!1,proximityCount:0})}this.placeMines()},placeMines:function(){console.log("Creating field ("+this.rows+" x "+this.columns+") ...");for(var e=[],t=0;t<this.rows;t++)for(var i=0;i<this.columns;i++)e.push({x:t,y:i});d(e);var n=this.amountOfBombs;while(n>0&&e.length>0){var s=e.pop(),r=this.minefield[s.x][s.y];r.isBomb=!0,this.bombList.push(r),n--}for(var l=0;l<this.bombList.length;l++){var a=this.bombList[l];this.doForAdjecentCells(a,(function(e){e.proximityCount++}))}},onCellClicked:function(e){this.onCellMined(e)},onCellMined:function(e){this.firstClickHappened||(this.firstClickHappened=!0);var t=this.minefield[e.x][e.y];if(t.isRevealed||(this.increase_clicks(),this.increase_my_clicks(this.id)),!this.gameOver&&void 0!==t){if(t.isMarked)return console.log("Can't mine marked tile: "+e.x+", "+e.y);if(console.log("Mining: "+e.x+", "+e.y+"..."),t.isRevealed=!0,t.isBomb)return;if(0==t.proximityCount){var i=this,n=function e(t){t.isRevealed||(t.isMarked&&(t.isMarked=!1,i.amountOfCellsMarked--),t.isRevealed=!0,0==t.proximityCount&&i.doForAdjecentCells(t,e))};i.doForAdjecentCells(t,n)}}},onCellFlagged:function(e){var t=this.minefield[e.x][e.y];if(!this.gameOver&&void 0!==t){if(t.isRevealed)return console.log("Can't flag revealed tile: "+e.x+", "+e.y);if(!t.isMarked&&this.amountOfCellsMarked>=this.bombs)return console.log("youve exhausted number of available markers");console.log("(Un)Flagging: "+e.x+", "+e.y+"..."),t.isMarked=!t.isMarked,this.increaseGridRightClicks(this.id),this.amountOfCellsMarked+=t.isMarked?1:-1;for(var i=!0,n=0;n<this.bombList.length;n++)if(!this.bombList[n].isMarked){i=!1;break}this.firstClickHappened&&this.bombList.length==this.amountOfCellsMarked&&i&&this.setGameWon()}},doForAdjecentCells:function(e,t){for(var i=-1;i<2;i++)for(var n=-1;n<2;n++){var s=e.x+i,r=e.y+n;s>=0&&s<this.rows&&r>=0&&r<this.columns&&t(this.minefield[s][r])}},setGameOver:function(){this.gameOver=!0;for(var e=0;e<this.bombList.length;e++)this.bombList[e].isRevealed=!0},setGameWon:function(){this.gameOver=!0}})};function d(e){var t,i,n=e.length;while(0!==n)i=Math.floor(Math.random()*n),n-=1,t=e[n],e[n]=e[i],e[i]=t;return e}var u=c,f=(i("d5ce"),i("2877")),m=Object(f["a"])(u,n,s,!1,null,null,null);t["a"]=m.exports},f124:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"footer"}},[e._v(" Made by Jeroen Smienk ❤ - "),i("a",{attrs:{href:"https://github.com/jsmienk/MinesweeperVue",target:"_blank"}},[e._v("GitHub")])])}],r={data:function(){return{}}},l=r,a=(i("94e7"),i("2877")),o=Object(a["a"])(l,n,s,!1,null,null,null);t["a"]=o.exports},f46e:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-dialog",{scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,s=t.attrs;return[i("v-btn",e._g(e._b({staticClass:"my-3",attrs:{color:"red lighten-2",disabled:e.mygrid.done}},"v-btn",s,!1),n),[e._v(" Open grid ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5 grey lighten-2"},[e._v(" Grid "+e._s(e.id)+" ")]),i("v-card-text",[i("v-row",[i("v-col",[i("minesweeper-game",{attrs:{practice:!0,rows:e.rows,columns:e.columns,bombs:e.bombs,id:e.id},on:{onPenaltyForUnmarked:e.onPenaltyForUnmarked}})],1),e.practice?i("v-col",[i("v-card",{staticClass:"my-3"},[i("v-card-title",[e._v("Info:")]),i("v-card-text",[i("v-list",[i("v-list-item-group",[i("v-list-item",[e._v("Number of left clicks: "),i("div",{staticClass:"ml-auto"},[e._v(e._s(e.mygrid.used_clicks))])]),i("v-list-item",[e._v("Number of right clicks: "),i("div",{staticClass:"ml-auto"},[e._v(e._s(e.mygrid.right_clicks))])]),i("v-list-item",[e._v("Cost of left clicks: "),i("div",{staticClass:"ml-auto"},[e._v(" $"+e._s(e.$store.state.left_click_cost)+" ")])]),i("v-list-item",[e._v("Penalty for accidental bombs: "),i("div",{staticClass:"ml-auto"},[e._v(" $ "+e._s(e.penalty_for_blown_up(this.id).toFixed(2))+" ")])]),i("v-list-item",[e._v("Penalty for remaining unmarked bombs: "),i("div",{staticClass:"ml-auto"},[e._v(" "+e._s(e.penalty_for_unmarked(this.id).toFixed(2))+" ")])]),i("v-list-item",[e._v("Benefit for work on grid: "),i("div",{staticClass:"ml-auto"},[e._v(" "+e._s(e.benefit_for_work(this.id).toFixed(2))+" ")])])],1)],1)],1)],1)],1):e._e()],1)],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Close ")])],1)],1)],1)},s=[],r=i("5530"),l=(i("a9e3"),i("2f62")),a={props:{practice:{type:Boolean,default:!1},id:Number,rows:{type:Number,default:10},columns:{type:Number,default:10},bombs:{type:Number,default:10}},data:function(){return{dialog:!1}},computed:Object(r["a"])(Object(r["a"])({},Object(l["b"])(["get_grid","get_practice_grid","penalty_for_unmarked","penalty_for_blown_up","benefit_for_work"])),{},{mygrid:function(){return this.get_grid(this.id)},benefit:function(){}}),methods:{onPenaltyForUnmarked:function(e){this.penalty_for_unmarked=e}}},o=a,c=i("2877"),d=i("6544"),u=i.n(d),f=i("8336"),m=i("b0af"),_=i("99d9"),b=i("62ad"),h=i("169a"),v=i("ce7e"),g=i("8860"),k=i("da13"),p=i("1baa"),C=i("0fd9"),y=i("2fa4"),w=Object(c["a"])(o,n,s,!1,null,null,null);t["a"]=w.exports;u()(w,{VBtn:f["a"],VCard:m["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VCol:b["a"],VDialog:h["a"],VDivider:v["a"],VList:g["a"],VListItem:k["a"],VListItemGroup:p["a"],VRow:C["a"],VSpacer:y["a"]})},fcc2:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"button-switch clear"},[i("button",{staticClass:"button-switch-button first",class:{selected:e.firstSelected},on:{click:e.selectFirst}},[e._v(" "+e._s(e.firstValue))]),i("button",{staticClass:"button-switch-button second",class:{selected:!e.firstSelected},on:{click:e.selectSecond}},[e._v(" "+e._s(e.secondValue)+" ")])])},s=[],r={props:{firstValue:{default:"⛏",type:String},secondValue:{default:"🚩",type:String}},data:function(){return{firstSelected:!0}},methods:{selectFirst:function(){this.firstSelected=!0,this.$emit("onSelected",this.firstSelected)},selectSecond:function(){this.firstSelected=!1,this.$emit("onSelected",this.firstSelected)}}},l=r,a=(i("de8a"),i("2877")),o=Object(a["a"])(l,n,s,!1,null,null,null);t["a"]=o.exports}}]);