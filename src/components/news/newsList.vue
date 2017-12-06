<template>
  <div>
    <ul class="mui-table-view">
      <li v-for="item in newsList" v-bind:key="item.id" class="mui-table-view-cell mui-media">
        <router-link :to="'/news/newsInfo/'+item.id">
          <img class="mui-media-object mui-pull-left" v-bind:src="item.img_url">
          <div class="mui-media-body">
            <p class='mui-ellipsis'>{{item.title}}</p>
            <p class="mui-clearfix">
              <span class="mui-pull-left">{{item.add_time | fmtDate('YYYY-MM-DD HH:mm:ss')}}</span>
              <span class="mui-pull-right">点击数{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .mui-table-view-cell {
    height: 80px;
  }

  .mui-table-view-cell a {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
  }

  .mui-table-view-cell a .mui-media-object {
    display: inline;
    max-width: 65px;
    height: 65px;
  }

  .mui-media-body p:last-of-type {
    margin-top: 20px;
    color: #0094ff;
    font-size: 12px;
  }
</style>


<script>
  // 导入公共对象
  import common from "../../common/common.js";

  // 导出
  export default {
    data() {
      return {
        newsList: []
      };
    },
    created() {
      this.getnewsListData();
    },
    methods: {
      // 获取新闻列表数据的方法
      getnewsListData() {
        const url = common.apihost + "api/getnewslist";
        this.$http.get(url).then(Response => {
          this.newsList = Response.body.message;
        });
      }
    }
  };
</script>