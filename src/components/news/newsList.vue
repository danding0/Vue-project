<template>
  <div>
      <ul class="mui-table-view">
          <li v-for="(item ,index) in newsList" v-bind:key="item.id" class="mui-table-view-cell mui-media">
              <a href="javascript:;">
                  <img class="mui-media-object mui-pull-left" v-bind:src="item.img_url">
                  <div class="mui-media-body">
                      <p class='mui-ellipsis'>{{item.zhaiyao}}</p>
                      <p class="mui-clearfix">
                        <span class="mui-pull-left">{{item.add_time}}</span>
                        <span class="mui-pull-right">点击数{{item.click}}次</span>
                      </p>
                  </div>
              </a>
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
    height:65px;
  }
  .mui-media-body p:last-of-type {
    margin-top: 20px;
    color: #0094ff;
    font-size: 12px;
  }
</style>


<script>
  export default {
    data() {
      return {
        newsList: []
      }
    },
    created() {
      this.getnewsListData()
    },
    methods: {
      // 获取新闻列表数据的方法
      getnewsListData() {
        const url = "http://vue.studyit.io/api/getnewslist"
        this.$http.get(url).then(Response => {
          this.newsList = Response.body.message
          console.log(Response);
        })
      }
    }
  }
</script>