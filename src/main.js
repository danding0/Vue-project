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
// 设置路由
const router = new vueRouter({
  routes:[
  { path: "/" , redirect : "/home"},
  { path: "/home" , component:home},
  { path: "/category" , component:category},
  { path: "/news/newList" , component:newList},
  { path: "/shoppingCart" , component:shoppingCart},
  { path: "/user" , component:user},
]
})
// 创建根实例(View-Model),让根实例显示App.vue
var vm = new Vue({
  el:'#app',
  router,
  render:createElement=>createElement(App)    // es6 箭头函数
  
})