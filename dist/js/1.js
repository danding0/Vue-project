webpackJsonp([1],{203:function(t,o,n){"use strict";function e(t){a||n(253)}Object.defineProperty(o,"__esModule",{value:!0});var s=n(255),r=n.n(s),i=n(261),a=!1,d=n(5),u=e,c=d(r.a,i.a,!1,u,"data-v-c632f544",null);c.options.__file="src\\components\\goods\\goodsInfo.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.default=c.exports},206:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={apihost:"http://vue.studyit.io/"}},212:function(t,o,n){"use strict";function e(t){a||n(213)}Object.defineProperty(o,"__esModule",{value:!0});var s=n(215),r=n.n(s),i=n(216),a=!1,d=n(5),u=e,c=d(r.a,i.a,!1,u,"data-v-262c9492",null);c.options.__file="src\\components\\subcomments\\subswipe.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.default=c.exports},213:function(t,o,n){var e=n(214);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n(6)("cc85d99a",e,!1)},214:function(t,o,n){o=t.exports=n(3)(void 0),o.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\r\n/* 轮播图样式 */\n.mint-swipe[data-v-262c9492] {\r\n  width: 100%;\r\n  height: 260px;\n}\n.mint-swipe img[data-v-262c9492] {\r\n  width: 100%;\r\n  height: 100%;\n}\r\n",""])},215:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=n(206),s=function(t){return t&&t.__esModule?t:{default:t}}(e);o.default={props:["lunbo_url","lunbo_time"],data:function(){return{lunboArray:[]}},created:function(){this.getLunboArrayData()},methods:{getLunboArrayData:function(){var t=this,o=""+s.default.apihost+this.lunbo_url;this.$http.get(o).then(function(o){o.body.message.forEach(function(t){t.src&&(t.img=t.src)}),t.lunboArray=o.body.message})}}}},216:function(t,o,n){"use strict";var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("mt-swipe",{attrs:{auto:t.lunbo_time}},t._l(t.lunboArray,function(t,o){return n("mt-swipe-item",{key:o},[n("img",{attrs:{src:t.img,alt:""}})])}))],1)},s=[];e._withStripped=!0;var r={render:e,staticRenderFns:s};o.a=r},253:function(t,o,n){var e=n(254);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n(6)("a311f34a",e,!1)},254:function(t,o,n){o=t.exports=n(3)(void 0),o.push([t.i,"\n.carousel[data-v-c632f544],\r\n.goodsList[data-v-c632f544],\r\n.goodsParameter[data-v-c632f544],\r\n.goodScomment[data-v-c632f544] {\r\n  margin: 5px;\r\n  padding: 5px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 8px;\n}\n.carousel[data-v-c632f544] {\r\n  margin-top: 45px;\n}\n.goodsList h5[data-v-c632f544] {\r\n  color: #0094ff;\r\n  font-size: 16px;\r\n  border-bottom: 1px solid #ccc;\r\n  padding-bottom: 8px;\n}\n.goodsList p span[data-v-c632f544] {\r\n  color: red;\r\n  font-size: 16px;\n}\n.goodsParameter h6[data-v-c632f544] {\r\n  color: #ccc;\r\n  border-bottom: 1px solid #ccc;\r\n  padding-bottom: 8px;\n}\n.goodsParameter p[data-v-c632f544] {\r\n  color: #333;\r\n  font-size: 12px;\r\n  margin-bottom: 2px;\n}\n.goodScomment .btnComment[data-v-c632f544] {\r\n  margin-top: 15px;\n}\r\n",""])},255:function(t,o,n){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(o,"__esModule",{value:!0});var s=n(206),r=e(s),i=n(212),a=e(i),d=n(256),u=e(d),c=n(7);o.default={data:function(){return{goodsInfo:{},goodsCount:1}},created:function(){this.getGoodsInfoData()},methods:{getGoodsInfoData:function(){var t=this,o=r.default.apihost+"api/goods/getinfo/"+this.$route.params.goodsId;this.$http.get(o).then(function(o){t.goodsInfo=o.body.message[0]})},goToPicAndText:function(){this.$router.push({path:"/goods/picAndText/"+this.$route.params.goodsId})},goToComment:function(){this.$router.push({path:"/goods/goodsComment",query:{goodsId:this.$route.params.goodsId}})},getsubgoodscountchange:function(t){this.goodsCount=t},addShoppingCart:function(){(0,c.Toast)({message:"加入购物车成功",position:"middle",duration:2e3});var t={goodsId:this.$route.params.goodsId,count:this.goodsCount};this.$store.commit("addGoods",t)}},components:{subswipe:a.default,subgoodsnum:u.default}}},256:function(t,o,n){"use strict";function e(t){a||n(257)}Object.defineProperty(o,"__esModule",{value:!0});var s=n(259),r=n.n(s),i=n(260),a=!1,d=n(5),u=e,c=d(r.a,i.a,!1,u,"data-v-738dcb48",null);c.options.__file="src\\components\\subcomments\\subGoodsNum.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.default=c.exports},257:function(t,o,n){var e=n(258);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n(6)("5190f2ce",e,!1)},258:function(t,o,n){o=t.exports=n(3)(void 0),o.push([t.i,"\n.count[data-v-738dcb48] {\r\n  height: 40px;\n}\n.count span[data-v-738dcb48] {\r\n  display: inline-block;\r\n  width: 30px;\r\n  height: 30px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  line-height: 30px;\n}\r\n",""])},259:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=n(206);!function(t){t&&t.__esModule}(e);o.default={props:["goodsId","stock_quantity"],data:function(){return{goodsCount:1}},created:function(){},methods:{minus:function(){this.goodsCount<=1||(this.goodsCount--,this.notify())},add:function(){this.goodsCount>=this.stock_quantity||(this.goodsCount++,this.notify())},notify:function(){this.$emit("addShopping",this.goodsCount)}}}},260:function(t,o,n){"use strict";var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("div",{staticClass:"count"},[n("span",{on:{click:function(o){t.minus()}}},[t._v("-")]),t._v(" "),n("span",[t._v(t._s(t.goodsCount))]),t._v(" "),n("span",{on:{click:function(o){t.add()}}},[t._v("+")])])])},s=[];e._withStripped=!0;var r={render:e,staticRenderFns:s};o.a=r},261:function(t,o,n){"use strict";var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("div",{staticClass:"carousel"},[n("subswipe",{attrs:{lunbo_url:"api/getthumimages/"+this.$route.params.goodsId,lunbo_time:1e3}})],1),t._v(" "),n("div",{staticClass:"goodsList"},[n("h5",[t._v(t._s(t.goodsInfo.title))]),t._v(" "),n("p",[t._v("市场价:"),n("del",[t._v("¥"+t._s(t.goodsInfo.market_price))]),t._v("  销售价:"),n("span",[t._v("¥"+t._s(t.goodsInfo.sell_price))])]),t._v(" "),t.goodsInfo.stock_quantity?n("subgoodsnum",{attrs:{stock_quantity:t.goodsInfo.stock_quantity},on:{addShopping:t.getsubgoodscountchange}}):t._e(),t._v(" "),n("mt-button",{attrs:{type:"primary",size:"small"}},[t._v("立即购买")]),t._v(" "),n("mt-button",{attrs:{type:"danger",size:"small"},on:{click:function(o){t.addShoppingCart()}}},[t._v("加入购物车")])],1),t._v(" "),n("div",{staticClass:"goodsParameter"},[n("h6",[t._v("商品参数")]),t._v(" "),n("p",[t._v("商品货号:"+t._s(t.goodsInfo.goods_no))]),t._v(" "),n("p",[t._v("库存情况:剩余"+t._s(t.goodsInfo.stock_quantity)+"件")]),t._v(" "),n("p",[t._v("上架时间:"+t._s(t._f("fmtDate")(t.goodsInfo.add_time)))])]),t._v(" "),n("div",{staticClass:"goodScomment"},[n("mt-button",{attrs:{type:"primary",size:"large",plain:""},on:{click:function(o){t.goToPicAndText()}}},[t._v("图文介绍")]),t._v(" "),n("mt-button",{staticClass:"btnComment",attrs:{type:"danger",size:"large",plain:""},on:{click:function(o){t.goToComment()}}},[t._v("商品评论")])],1)])},s=[];e._withStripped=!0;var r={render:e,staticRenderFns:s};o.a=r}});