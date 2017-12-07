<template>
  <div>
    <!-- 轮播图子组件 -->
    <subswipe lunbo_url="api/getlunbo" :luobo_time="3000"></subswipe>
    <!-- 九宫格布局 -->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/news/newList">
            <span class="mui-icon news"></span>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/photo/photoList">
            <span class="mui-icon shared">
              <span class="mui-badge">5</span>
            </span>
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/goods/goodsList">
            <span class="mui-icon products"></span>
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon videos"></span>
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon  feedbacks">
              <span class="mui-badge">666</span>
            </span>
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon connection"></span>
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
  </div>

</template>

<style scoped>

  /* 九宫格布局样式 */
  .mui-icon {
    width: 50px;
    height: 50px;
  }

  .news {
    background-image: url("../../statics/images/menu3.png");
    background-size: cover;
  }
  .feedbacks {
    background-image: url("../../statics/images/menu4.png");
    background-size: cover;
  }
  .products {
    background-image: url("../../statics/images/menu5.png");
    background-size: cover;
  }
  .connection {
    background-image: url("../../statics/images/menu6.png");
    background-size: cover;
  }
  .videos {
    background-image: url("../../statics/images/menu9.png");
    background-size: cover;
  }
  .shared {
    background-image: url("../../statics/images/menu10.png");
    background-size: cover;
  }
  .mui-grid-9 {
    background-color: #ffffff;
    border: none;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
  }
</style>


<script>
// 导入公共样式
import subswipe from '../subcomments/subswipe.vue'

  export default {
    components:{
      subswipe
    }
  };
</script>