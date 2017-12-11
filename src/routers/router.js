import Vue from 'vue'
// 路由包
import vueRouter from 'vue-router'
Vue.use(vueRouter)  // 使用,相当于在Vue的原型上增加$route属性  Vue.prototype.$route

// 和路由相关的代码
// import home from '../components/home/home'
// import category from '../components/category/category'
// import newList from './components/news/newsList.vue'
// import shoppingCart from './components/shoppingCart/shoppingcart.vue'
// import user from './components/user/user.vue'
// import newsInfo from './components/news/newsInfo.vue'
// import photoList from './components/photo/photoList.vue'
// import photoInfo from './components/photo/photoInfo.vue'
// import goodsList from './components/goods/goodsList.vue'
// import goodsInfo from './components/goods/goodsInfo.vue'
// import picAndText from './components/goods/picAndText.vue'
// import goodsComment from './components/goods/goodsComment.vue'

const home = () => import('../components/home/home.vue')
const category = () => import('../components/category/category.vue')
const newList = () => import('../components/news/newsList.vue')
const shoppingCart = () => import('../components/shoppingCart/shoppingcart.vue')
const user = () => import('../components/user/user.vue')
const newsInfo = () => import('../components/news/newsInfo.vue')
const photoList = () => import('../components/photo/photoList.vue')
const photoInfo = () => import('../components/photo/photoInfo.vue')
const goodsList = () => import('../components/goods/goodsList.vue')
const goodsInfo = () => import('../components/goods/goodsInfo.vue')
const picAndText = () => import('../components/goods/picAndText.vue')
const goodsComment = () => import('../components/goods/goodsComment.vue')


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


// 导出,,暴露路由
export default router