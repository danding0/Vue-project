webpackJsonp([14],{183:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(2),s=o(i),a=n(7),r=o(a),u=n(130),d=o(u),c=n(0),l=o(c),p=n(131),f=o(p),h=n(132),m=o(h);n(184),n(185),n(186);var g=n(187),b=o(g),v=n(192),w=o(v),_=n(193),x=o(_);s.default.use(r.default),s.default.use(d.default),s.default.use(f.default),s.default.prototype.$axios=m.default,s.default.filter("fmtDate",function(t,e){var n=e||"YYYY-MM-DD HH:mm:ss";return(0,l.default)(t).format(n)}),new s.default({el:"#app",store:x.default,router:w.default,render:function(t){return t(b.default)}})},184:function(t,e){},185:function(t,e){},186:function(t,e){},187:function(t,e,n){"use strict";function o(t){r||n(188)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(190),s=n.n(i),a=n(191),r=!1,u=n(5),d=o,c=u(s.a,a.a,!1,d,"data-v-04c2046b",null);c.options.__file="src\\App.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.default=c.exports},188:function(t,e,n){var o=n(189);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(6)("af994580",o,!1)},189:function(t,e,n){e=t.exports=n(3)(void 0),e.push([t.i,"\nimg[data-v-04c2046b] {\r\n  width: 42px;\r\n  height: 35px;\n}\n.router-view-style[data-v-04c2046b] {\r\n  margin-top: 40px;\n}\n.backStyle[data-v-04c2046b] {\r\n  position: fixed;\r\n  left: 10px;\r\n  top: 10px;\r\n  z-index: 2;\r\n  color: white;\r\n  font-size: 16px;\r\n  font-weight: 700;\n}\n.hiddenTabBarStyle[data-v-04c2046b] {\r\n  display: none;\n}\n.shoppingCart[data-v-04c2046b] {\r\n  position: relative;\n}\n.shoppingCart .superscript[data-v-04c2046b] {\r\n  position: absolute;\r\n  left: 26px;\r\n  top: -30px;\n}\r\n",""])},190:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{isShowBack:!1,isShowTabBar:!0,shoppingCount:0}},created:function(){this.isShowOrHidden(this.$route.path)},updated:function(){this.shoppingCount=this.$store.getters.getGoodsTotalCount},methods:{goBack:function(){this.$router.go(-1)},isShowOrHidden:function(t){"/home"!=t?(this.isShowBack=!0,this.isShowTabBar=!1):(this.isShowBack=!1,this.isShowTabBar=!0)}},watch:{$route:function(t,e){this.isShowOrHidden(t.path)}}}},191:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-header",{attrs:{fixed:"",title:"Vue"}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowBack,expression:"isShowBack"}],staticClass:"backStyle",on:{click:function(e){t.goBack()}}},[t._v("<返回")]),t._v(" "),n("router-view",{staticClass:"router-view-style"}),t._v(" "),n("mt-tabbar",{staticClass:"is-fixed  hideTabBarStyle",class:t.isShowTabBar?"":"hiddenTabBarStyle",attrs:{fixed:""}},[n("mt-tab-item",[n("router-link",{attrs:{to:"/home"}},[n("img",{attrs:{src:"http://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png"}})])],1),t._v(" "),n("mt-tab-item",[n("router-link",{attrs:{to:"/category"}},[n("img",{attrs:{src:"http://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png"}})])],1),t._v(" "),n("mt-tab-item",[n("router-link",{staticClass:"shoppingCart",attrs:{to:"/shoppingCart"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:this.shoppingCount,expression:"this.shoppingCount"}],staticClass:"superscript  mui-badge mui-badge-danger"},[t._v(t._s(this.shoppingCount))]),t._v(" "),n("img",{attrs:{src:"http://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png"}})])],1),t._v(" "),n("mt-tab-item",[n("router-link",{attrs:{to:"/user"}},[n("img",{attrs:{src:"http://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png"}})])],1)],1)],1)},i=[];o._withStripped=!0;var s={render:o,staticRenderFns:i};e.a=s},192:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),s=o(i),a=n(128),r=o(a);s.default.use(r.default);var u=function(){return n.e(0).then(n.bind(null,194))},d=function(){return n.e(11).then(n.bind(null,195))},c=function(){return n.e(7).then(n.bind(null,196))},l=function(){return n.e(5).then(n.bind(null,197))},p=function(){return n.e(10).then(n.bind(null,198))},f=function(){return n.e(3).then(n.bind(null,199))},h=function(){return n.e(6).then(n.bind(null,200))},m=function(){return n.e(2).then(n.bind(null,201))},g=function(){return n.e(9).then(n.bind(null,202))},b=function(){return n.e(1).then(n.bind(null,203))},v=function(){return n.e(8).then(n.bind(null,204))},w=function(){return n.e(4).then(n.bind(null,205))},_=new r.default({routes:[{path:"/",redirect:"/home"},{path:"/home",component:u},{path:"/category",component:d},{path:"/news/newList",component:c},{path:"/shoppingCart",component:l},{path:"/user",component:p},{path:"/news/newsInfo/:newsId",component:f},{path:"/photo/photoList",component:h},{path:"/photo/photoInfo:photoId",component:m},{path:"/goods/goodsList",component:g},{path:"/goods/goodsInfo/:goodsId",component:b},{path:"/goods/picAndText/:goodsId",component:v},{path:"/goods/goodsComment",component:w}]});e.default=_},193:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),s=o(i),a=n(129),r=o(a);s.default.use(r.default);var u=new r.default.Store({state:{goodsList:[]},getters:{getGoodsTotalCount:function(t){var e=0;return t.goodsList.forEach(function(t){e+=t.count}),e},getGoodsList:function(t){return t.goodsList}},mutations:{addGoods:function(t,e){t.goodsList.push(e)},deleteGoodsByGoodsId:function(t,e){for(var n=t.goodsList.length-1;n>=0;n--){e==t.goodsList[n].goodsId&&t.goodsList.splice(n,1)}}},actions:{addGoodsAsync:function(t,e){setTimeout(function(){t.commit("addGoods",e)},2e3)}}});e.default=u}},[183]);