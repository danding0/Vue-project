<template>
  <div>
    <!-- 顶部通栏 -->
   <mt-header fixed title="Vue"></mt-header>
   <div @click="goBack()" v-show="isShowBack" class="backStyle">&lt;返回</div>
    <!-- 中间部分 -->
    <!-- 占位符 -->
   <router-view class="router-view-style"></router-view>
   <!-- 底部通栏 -->
   <mt-tabbar :class="isShowTabBar ? '':'hiddenTabBarStyle' " fixed class="is-fixed  hideTabBarStyle">
  <mt-tab-item >
    <router-link to="/home">
    <img src="http://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png">
    </router-link>
  </mt-tab-item>
  <mt-tab-item >
    <router-link to="/category">
    <img src="http://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png">
    </router-link>
  </mt-tab-item>
  <mt-tab-item >
    <router-link class="shoppingCart" to="/shoppingCart">
    <span v-show="this.shoppingCount" class="superscript  mui-badge mui-badge-danger">{{this.shoppingCount}}</span>
    <img src="http://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png">
    </router-link>
  </mt-tab-item>
  <mt-tab-item >
    <router-link to="/user">
    <img src="http://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png">
    </router-link>
  </mt-tab-item>
</mt-tabbar>
  </div>
</template>

<style scoped>
img {
  width: 42px;
  height: 35px;
}
.router-view-style {
  margin-top: 40px;
}
.backStyle {
  position: fixed;
  left: 10px;
  top: 10px;
  z-index: 2;
  color: white;
  font-size: 16px;
  font-weight: 700;
}
.hiddenTabBarStyle {
  display: none;
}
.shoppingCart {
  position: relative;
}
.shoppingCart .superscript {
  position: absolute;
  left: 26px;
  top: -30px;
}
</style>

<script>
// import bus from "./common/commonargument .js"

export default {
  data() {
    return {
      isShowBack: false, // 是否显示返回按钮
      isShowTabBar: true, // 是否显示TabBar
      shoppingCount:0,  // 购物车默认值
    };
  },
  //
  created() {
    this.isShowOrHidden(this.$route.path);
    // 接收添加购物车传过来的值
    // 接收方通过创建的Vue对象 . $on("自定义事件名",处理函数)接收,处理函数的参数为发送方传过来的值
    // bus.$on('addShopping', (goodsCount)=> {
    //   this.shoppingCount +=goodsCount
    // })
  },
  // 声明周期钩子 updates 更新后
  updated(){
    // 从仓库中取出加入购物车的总数中,然后赋值给角标显示
    this.shoppingCount = this.$store.getters.getGoodsTotalCount
  },
  methods: {
    // 返回
    goBack() {
      this.$router.go(-1);
    },
    isShowOrHidden(path) {
      if (path != "/home") {
        this.isShowBack = true;
        this.isShowTabBar = false;
      } else {
        this.isShowBack = false;
        this.isShowTabBar = true;
      }
    }

  },
  watch: {
    // 属性名称 : 代表要监控的对象
    // 值 : 是处理函数 , 但是不能写箭头函数 , 箭头函数没有this
    // $route 只有路由发生变化的时候 , 才会触发该处理函数
    // $route:function(newValue,oldValue){
    //   console.log(newValue);
    // }

    // es6 写法
    $route(newValue, oldValue) {
      this.isShowOrHidden(newValue.path);
    }
  }
};
</script>


