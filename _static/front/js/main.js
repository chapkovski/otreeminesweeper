(function(t){function e(e){for(var n,i,l=e[0],c=e[1],s=e[2],u=0,p=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,l=1;l<a.length;l++){var c=a[l];0!==o[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={main:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/front/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var d=c;r.push([0,"chunk-vendors","chunk-common"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("unfrozen-dialog"),a("v-app-bar",{attrs:{app:""}},[a("v-sheet",{staticClass:"d-flex align-center ml-1 pa-2 rounded-pill mr-3 ",attrs:{outlined:""}},[a("div",{staticClass:"d-flex align-center  "},[t._v(" Round: "),a("div",{staticClass:"ml-1 pa-2 primary   white--text text-no-wrap rounded-pill"},[t._v(" "+t._s(t.round_number)+" ")])])]),t.limitExhausted()?a("div",[a("v-alert",{attrs:{type:"danger",color:"red"}},[t._v("You exhausted all your left clicks for the period")])],1):t._e(),t.limitExhausted()?t._e():a("div",[t._v(" Total number of clicks: "+t._s(t.totclicks)+" ")]),t._e(),a("v-spacer"),a("div",{staticClass:"ml-auto"},[a("budget")],1)],1),a("v-main",[a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"form-data"},[a("input",{attrs:{type:"hidden",name:"total_clicks"},domProps:{value:t.totclicks}}),a("input",{attrs:{type:"hidden",name:"budget_counter"},domProps:{value:t.budget_counter}}),a("input",{attrs:{type:"hidden",name:"return_to_frozen"},domProps:{value:t.return_to_frozen}}),t._l(t.grids,(function(e,n){return a("div",{key:n},[a("input",{attrs:{type:"hidden",name:"total_penalty_"+(n+1)},domProps:{value:t.total_penalty(n)}}),a("input",{attrs:{type:"hidden",name:"used_clicks_"+(n+1)},domProps:{value:e.used_clicks}}),a("input",{attrs:{type:"hidden",name:"clicks100_"+(n+1)},domProps:{value:e.clicksTo100}}),a("input",{attrs:{type:"hidden",name:"clicks80_"+(n+1)},domProps:{value:e.clicksTo80}}),a("input",{attrs:{type:"hidden",name:"note_"+(n+1)},domProps:{value:e.note}})])}))],2),a("v-container",[a("v-row",[a("v-col",[a("v-card",[a("v-card-text",[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v(" Grid Number ")]),a("th",{staticClass:"text-left"},[t._v(" Potential financial loss ")]),a("th",{staticClass:"text-left"},[t._v(" Clicks used per grid ")]),a("th",{staticClass:"text-left"})])]),a("tbody",t._l(t.grids,(function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(n+1))]),a("td",[t._v("$"+t._s(e.potential_loss))]),a("td",[t._v(t._s(e.used_clicks))]),a("td",[t.limitExhausted()?t._e():a("game-dialog",t._b({attrs:{id:n}},"game-dialog",e,!1))],1)])})),0)]},proxy:!0}])})],1)],1)],1)],1)],1)],1),a("transition",{attrs:{"enter-active-class":"animate__animated animate__backInUp animate__slow"}},[a("v-bottom-navigation",{attrs:{grow:""}},[a("v-btn",{staticClass:"my-btn",attrs:{elevation:"2",color:"error","x-large":"",type:"submit"}},[t._v(" Next ")])],1)],1)],1)],1)},r=[],i=a("5530"),l=a("2f62"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{scrollable:"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"m-1",attrs:{text:"",color:"yellow",outlined:""},on:{click:t.increaseCounter}},"v-btn",o,!1),n),[t._v(" Budget recommendations ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1),a("v-toolbar-title",[t._v("Budget recommendations")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")])],1)],1),a("v-card-text",{domProps:{innerHTML:t._s(t.budgetText)}})],1)],1)},s=[],d={name:"Budget",data:function(){return{budgetText:document.getElementById("budget").innerHTML,dialog:!1}},watch:{budget_dialog:function(t){this.dialog=t}},computed:Object(i["a"])({},Object(l["d"])(["budget_dialog"])),methods:Object(i["a"])(Object(i["a"])({},Object(l["c"])(["OPEN_BUDGET_DIALOG","CLOSE_BUDGET_DIALOG"])),{},{increaseCounter:function(){this.OPEN_BUDGET_DIALOG(),this.$store.commit("INCREASE_BUDGET_COUNTER")}})},u=d,p=a("2877"),_=a("6544"),v=a.n(_),f=a("8336"),m=a("b0af"),b=a("99d9"),g=a("169a"),h=a("132d"),O=a("2fa4"),y=a("71d9"),k=a("2a7f"),x=Object(p["a"])(u,c,s,!1,null,null,null),w=x.exports;v()(x,{VBtn:f["a"],VCard:m["a"],VCardText:b["b"],VDialog:g["a"],VIcon:h["a"],VSpacer:O["a"],VToolbar:y["a"],VToolbarItems:k["a"],VToolbarTitle:k["b"]});var E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"500",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"warning"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")])],1)],1),a("v-card-text",{staticClass:"my-3"},[t._v(" Grid 5 is available for you to work on it. You have used "+t._s(t.num_frozen_clicks())+" clicks on that grid. Would you like to return to that previous grid? ")]),a("v-card-actions",[a("v-btn",{on:{click:function(e){return t.openGrid()}}},[t._v("Yes")]),a("v-btn",{on:{click:function(e){t.dialog=!1}}},[t._v("No")]),t._e()],1)],1)],1)},T=[],V={name:"UnfrozenDialog",data:function(){return{dialog:!1}},watch:{unfrozen_dialog:function(t){this.dialog=t}},computed:Object(i["a"])(Object(i["a"])({},Object(l["d"])(["unfrozen_dialog"])),Object(l["b"])(["num_frozen_clicks"])),methods:Object(i["a"])(Object(i["a"])({},Object(l["c"])(["OPEN_BUDGET_DIALOG","CLOSE_BUDGET_DIALOG","OPEN_FROZEN_GRID","SET_OPEN_GRID","SET_RETURN_TO_FROZEN"])),{},{openGrid:function(){this.SET_RETURN_TO_FROZEN(),this.SET_OPEN_GRID(window.freezable_grid_id),this.dialog=!1},openBudget:function(){this.OPEN_BUDGET_DIALOG(),this.dialog=!1}})},C=V,j=Object(p["a"])(C,E,T,!1,null,null,null),P=j.exports;v()(j,{VBtn:f["a"],VCard:m["a"],VCardActions:b["a"],VCardText:b["b"],VDialog:g["a"],VIcon:h["a"],VSpacer:O["a"],VToolbar:y["a"],VToolbarItems:k["a"]});var D={name:"app",components:{Budget:w,UnfrozenDialog:P},data:function(){return{round_number:window.round_number}},computed:Object(i["a"])(Object(i["a"])({},Object(l["d"])(["totclicks","grids","return_to_frozen","budget_counter"])),Object(l["b"])(["allGridsDone","limitExhausted","total_penalty"])),methods:{}},G=D,N=(a("5c0b"),a("0798")),S=a("7496"),B=a("40dc"),I=a("b81c"),R=a("62ad"),U=a("a523"),z=a("f6c4"),A=a("0fd9"),L=a("8dd9"),M=a("1f4f"),$=Object(p["a"])(G,o,r,!1,null,null,null),F=$.exports;v()($,{VAlert:N["a"],VApp:S["a"],VAppBar:B["a"],VBottomNavigation:I["a"],VBtn:f["a"],VCard:m["a"],VCardText:b["b"],VCol:R["a"],VContainer:U["a"],VMain:z["a"],VRow:A["a"],VSheet:L["a"],VSimpleTable:M["a"],VSpacer:O["a"]});var Y=a("6ed8"),Z=a("f124"),H=a("ef3b"),J=a("0565"),W=a("fcc2"),q=a("9874"),K=a("f46e"),Q=a("402c"),X=a("4360");n["a"].component("minesweeper-header",Y["a"]),n["a"].component("minesweeper-game",H["a"]),n["a"].component("minesweeper-field",J["a"]),n["a"].component("minesweeper-field-cell",q["a"]),n["a"].component("minesweeper-footer",Z["a"]),n["a"].component("app-button-switch",W["a"]),n["a"].component("game-dialog",K["a"]),new n["a"]({el:"#app",vuetify:Q["a"],store:X["a"],render:function(t){return t(F)}})},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){}});