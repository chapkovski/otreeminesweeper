(function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={practice:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/front/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([1,"chunk-vendors","chunk-common"]),n()})({1:function(e,t,n){e.exports=n("2f3a")},"2f3a":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("Timer",{attrs:{secsToEnd:e.time_for_practice,progressMessage:"You can quit the practice round in",timerFinish:"You can proceed to the next page now"},on:{timerDone:function(t){e.timerDone=!0}}})],1),n("v-main",[n("v-container",[n("v-row",[n("v-col",[n("v-card",[n("v-card-text",[n("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[e._v(" Grid Number ")]),n("th",{staticClass:"text-left"},[e._v(" Number of bombs ")]),n("th",{staticClass:"text-left"},[e._v(" Cells ")]),n("th",{staticClass:"text-left"},[e._v("Penalty")]),n("th",{staticClass:"text-left"})])]),n("tbody",e._l(e.grids,(function(t,r){return n("tr",{key:r},[n("td",[e._v(e._s(r+1))]),n("td",[e._v(" "+e._s(t.bombs)+" ")]),n("td",[e._v(e._s(t.rows)+"X"+e._s(t.columns))]),n("td",[e._v("$"+e._s(t.penalty))]),n("td",[n("game-dialog",e._b({attrs:{id:r,practice:!0}},"game-dialog",t,!1))],1)])})),0)]},proxy:!0}])})],1)],1)],1)],1)],1)],1),n("transition",{attrs:{"enter-active-class":"animate__animated animate__backInUp animate__slow"}},[e.timerDone?n("v-bottom-navigation",{attrs:{grow:""}},[n("v-btn",{staticClass:"my-btn",attrs:{elevation:"2",color:"error","x-large":"",type:"submit"}},[e._v(" Next ")])],1):e._e()],1)],1)],1)},a=[],i=n("5530"),s=n("2f62"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("countdown",{style:{width:"100%"},attrs:{"end-time":e.endTime},on:{finish:function(t){return e.toDo()}},scopedSlots:e._u([{key:"process",fn:function(t){return[e.showProgress?n("v-progress-linear",{attrs:{width:"100%",height:"25px",color:e.color,value:t.timeObj.leftTime/1e3/e.secsToEnd*100}},[e._v(" "+e._s(e.progressMessage)+": "+e._s(t.timeObj.m)+": "+e._s(t.timeObj.s)+" ")]):e._e()]}},{key:"finish",fn:function(){return[n("span",[e._v(e._s(e.timerFinish))])]},proxy:!0}])})},l=[],u=(n("a9e3"),n("0adb")),p={name:"Timer",props:{secsToEnd:Number,progressMessage:String,whatToDo:String,color:String,timerFinish:String,showProgress:{type:Boolean,default:!0}},data:function(){var e=Object(u["a"])(new Date,this.secsToEnd);return{endTime:e}},methods:{toDo:function(){this.$emit("timerDone")}}},f=p,d=n("2877"),m=n("6544"),v=n.n(m),b=n("8e36"),_=Object(d["a"])(f,c,l,!1,null,null,null),h=_.exports;v()(_,{VProgressLinear:b["a"]});var g={name:"app",components:{Timer:h},data:function(){return{timerDone:!1,time_for_practice:window.time_for_practice}},computed:Object(i["a"])(Object(i["a"])({},Object(s["d"])(["totclicks","grids"])),Object(s["b"])(["allGridsDone"])),methods:{}},w=g,y=(n("d956"),n("7496")),x=n("40dc"),O=n("b81c"),j=n("8336"),T=n("b0af"),S=n("99d9"),V=n("62ad"),C=n("a523"),P=n("f6c4"),k=n("0fd9"),D=n("1f4f"),M=Object(d["a"])(w,o,a,!1,null,null,null),E=M.exports;v()(M,{VApp:y["a"],VAppBar:x["a"],VBottomNavigation:O["a"],VBtn:j["a"],VCard:T["a"],VCardText:S["b"],VCol:V["a"],VContainer:C["a"],VMain:P["a"],VRow:k["a"],VSimpleTable:D["a"]});var N=n("6ed8"),B=n("f124"),$=n("ef3b"),F=n("0565"),A=n("fcc2"),G=n("9874"),J=n("f46e"),Y=n("402c"),q=n("4360"),I=n("c986"),L=n.n(I);r["a"].use(L.a,"vac"),r["a"].component("minesweeper-header",N["a"]),r["a"].component("minesweeper-game",$["a"]),r["a"].component("minesweeper-field",F["a"]),r["a"].component("minesweeper-field-cell",G["a"]),r["a"].component("minesweeper-footer",B["a"]),r["a"].component("app-button-switch",A["a"]),r["a"].component("game-dialog",J["a"]),new r["a"]({el:"#app",vuetify:Y["a"],store:q["a"],render:function(e){return e(E)}})},"638c":function(e,t,n){},d956:function(e,t,n){"use strict";n("638c")}});