<template>
  <div>
    <!-- 顶部通栏 -->
   <mt-header fixed title="Vue"></mt-header>
    <!-- 中间部分 -->
    <!-- 占位符 -->
   <router-view class="router-view-style"></router-view>
   <!-- 底部通栏 -->
   <mt-tabbar class="is-fixed  hideTabBarStyle">
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
    <router-link to="/shoppingCart">
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

</style>



