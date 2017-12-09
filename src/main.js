// 导入第三方包
import Vue from 'vue'
//  引入 mint-ui组件
import Mint from 'mint-ui';
Vue.use(Mint);
// 路由包
import vueRouter from 'vue-router'
Vue.use(vueRouter)
// 资源包
import vueResource from "vue-resource"
Vue.use(vueResource)
// 时间包
import moment from 'moment'
// 图片预览包
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
// 导入 vuex
import Vuex from 'vuex'
Vue.use(Vuex)
// css样式
// 导入mint-ui样式
import 'mint-ui/lib/style.css';
import './statics/mui/css/mui.css';
// import "./statics/mui/fonts/mui.ttf"
import './statics/css/site.css';

// 导入 .vue 文件
import App from './App.vue' // es6
import home from '@/home/home'
import category from '@/category/category'
import newList from './components/news/newsList.vue'
import shoppingCart from './components/shoppingCart/shoppingcart.vue'
import user from './components/user/user.vue'
import newsInfo from './components/news/newsInfo.vue'
import photoList from './components/photo/photoList.vue'
import photoInfo from './components/photo/photoInfo.vue'
import goodsList from './components/goods/goodsList.vue'
import goodsInfo from './components/goods/goodsInfo.vue'
import picAndText from './components/goods/picAndText.vue'
import goodsComment from './components/goods/goodsComment.vue'
// 全局时间格式过滤器
Vue.filter('fmtDate',(input,formatString)=>{
  const lastFormatString = formatString || "YYYY-MM-DD HH:mm:ss"
  // moment 里面接的参数 , 要过滤的原始时间 ,
  // format里面的参数, 要格式化成的字符串
  return moment(input).format(lastFormatString)
})
// 设置路由
const router = new vueRouter({
  routes:[
  { path: "/" , redirect : "/home"},
  { path: "/home" , component:home},
  { path: "/category" , component:category},
  { path: "/news/newList" , component:newList},
  { path: "/shoppingCart" , component:shoppingCart},
  { path: "/user" , component:user},
  { path: "/news/newsInfo/:newsId" , component:newsInfo},
  { path: "/photo/photoList" , component:photoList},
  { path: "/photo/photoInfo:photoId", component:photoInfo},
  { path: "/goods/goodsList" , component:goodsList},
  { path: "/goods/goodsInfo/:goodsId" , component:goodsInfo},
  { path: "/goods/picAndText/:goodsId" ,component:picAndText},
  { path: "/goods/goodsComment",component:goodsComment}
]
})

// 创建 vuex 创库
const store = new Vuex.Store({
  // 创建小仓库,值为对象,里面是我们需要存储的数据,
  state:{
    addShoppingCartGoodsList:[]
  },
  // 从仓库中取值,getters为一个对象, 里面也是一个方法,函数第一个参数必须是state,并且需要有返回值
  getters:{
    getGoodsTotalCount(state){
      // 声明一个变量记录添加的总数
      let totalCount = 0
      state.addShoppingCartGoodsList.forEach(goods=>{
        totalCount+=goods.count
      })
      return totalCount
    },
    // 获取购物车所有的数据
    getGoodsList(state){
      return state.addShoppingCartGoodsList
    }
  },
  // 同步存储,也是一个对象,里面为一个函数(函数第一个参数必须是state)
  // 调用的时候使用this.$store.commit('方法名称',载荷),载荷也就是参数
  mutations:{
    /**
     * 这个方法,将来是goodsinfo.vue调用,把商品信息传递过来保存的仓库中的
     * addShoppingCartGoodsList数组中
     */
    addGoods(state,goods){
      state.addShoppingCartGoodsList.push(goods)
    },
    // 根据商品id删除相应的数据
    deleteGoodsByGoodsId(state,goodsId){
      for(var i=state.addShoppingCartGoodsList.length-1;i>=0;i--){
          const everyGoodsItem = state.addShoppingCartGoodsList[i]
          if(goodsId == everyGoodsItem.goodsId){
              state.addShoppingCartGoodsList.splice(i,1)
          }
      }
  }
  },
  actions:{
    //context 有点类似于 $store的感觉
    addGoodsAsync(context,goods){
        setTimeout(()=>{
            context.commit('addGoods',goods)
        },2000)
    }
}
})
// 创建根实例(View-Model),让根实例显示App.vue
new Vue({
  el:'#app',
  store,  // 将vuex仓库注入到根实例中,可以全局使用
  router,  // 将路由注入到根实例中,可以全局使用
  render:createElement=>createElement(App)    // es6 箭头函数
  
})