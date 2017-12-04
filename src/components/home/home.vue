<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="(item,index) in lunboArray" v-bind:key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格布局 -->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/news/newList">
            <span class="mui-icon news"></span>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon shared">
              <span class="mui-badge">5</span>
            </span>
            <div class="mui-media-body">图片分享</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon products"></span>
            <div class="mui-media-body">商品购买</div>
          </a>
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
  /* 轮播图样式 */
  .mint-swipe {
    width: 100%;
    height: 260px;
  }

  .mint-swipe img {
    width: 100%;
    height: 100%;
  }
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
import commmon from '../../common/common.js'

  export default {
    data() {
      return {
        lunboArray: [] // 设置录播图所需要的模型
      };
    },
    // 这个方法时Vue的声明周期方法之一 , 当我们实现了之后, 当home.vue被创建出来的时候就会自动调用
    created() {
      this.getLunboArrayData();
    },
    methods: {
      // 定义一个方法 , 用来获取录播图需要的数据
      getLunboArrayData() {
        const url = commmon.apihost + "api/getlunbo";
        this.$http.get(url).then(response => {
          this.lunboArray = response.body.message;
        });
      }
    }
  };
</script>