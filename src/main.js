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
// 创建根实例(View-Model),让根实例显示App.vue
new Vue({
  el:'#app',
  router,
  render:createElement=>createElement(App)    // es6 箭头函数
  
})