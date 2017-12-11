// 导入第三方包
import Vue from 'vue'
//  引入 mint-ui组件
import Mint from 'mint-ui';
Vue.use(Mint);
// 资源包
import vueResource from "vue-resource"
Vue.use(vueResource)
// 时间包
import moment from 'moment'
// 图片预览包
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
  // 导入 axios
import axios from 'axios'
  // 在Vue原型上增加axios属性
Vue.prototype.$axios = axios
// css样式
// 导入mint-ui样式
import 'mint-ui/lib/style.css';
import './statics/mui/css/mui.css';
import './statics/css/site.css';


// 导入 .vue 文件
import App from './App.vue' // es6
// 导入抽出的路由对象
import router from './routers/router.js'
// 导入抽出的vuex对象
import store from './vuex/store.js'

// 全局时间格式过滤器
Vue.filter('fmtDate',(input,formatString)=>{
  const lastFormatString = formatString || "YYYY-MM-DD HH:mm:ss"
  // moment 里面接的参数 , 要过滤的原始时间 ,
  // format里面的参数, 要格式化成的字符串
  return moment(input).format(lastFormatString)
})


// 创建根实例(View-Model),让根实例显示App.vue
new Vue({
  el:'#app',
  store,  // 将vuex仓库注入到根实例中,可以全局使用
  router,  // 将路由注入到根实例中,可以全局使用
  render:createElement=>createElement(App)    // es6 箭头函数
  
})