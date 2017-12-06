<template>
  <div>
    <!-- 标题 -->
    <div class="photoTitle">
      <h5>{{photoInfo.title}}</h5>
      <p>{{photoInfo.add_time | fmtDate('YYYY-MM-DD')}}&nbsp;&nbsp;{{photoInfo.click}}次浏览</p>
    </div>

    <!-- 缩略图 ,九宫格布局 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li v-for="(item,index) in photoImgList" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <img class="preview-img" @click="$preview.open(index,photoImgList)" :src="item.src" alt="" height='100'>
      </li>
    </ul>
    <!-- 内容 -->
    <div class="content">
      <p v-html="photoInfo.content"></p>
    </div>


    <!-- 评论子组件 -->
    <subcomment :commentId="this.$route.params.photoId"> </subcomment>
  </div>
</template>

<style scoped>
  .photoTitle {
    padding: 5px;
  }

  .photoTitle h5 {
    font-size: 16px;
    color: #0094ff;
  }

  .content {
    padding: 0px 10px 0px 5px;
  }
</style>

<script>
  import common from "../../common/common.js";
  import subcomment from "../subcomments/subcomment.vue";
  
  export default {
    data() {
      return {
        photoInfo: {}, // 分类详情
        photoImgList: []  // 缩略图
      };
    },
    created() {
      this.getPhotoInfo();
      this.getImgData();
    },
    methods: {
      getPhotoInfo() {
        const url = `${common.apihost}api/getimageInfo/${this.$route.params
        .photoId}`;
        // console.log(url);
        this.$http.get(url).then(Response => {
          this.photoInfo = Response.body.message[0];
        });
      },
      // 获取缩略图数据
      getImgData() {
        const url = `${common.apihost}api/getthumimages/${this.$route.params
        .photoId}`;
        this.$http.get(url).then(Response => {
          // console.log(Response);
          Response.body.message.forEach(item=>{
            item.w = 500,
            item.h = 500
          })
          this.photoImgList = Response.body.message
        });
      }
    },
    components: {
      subcomment: subcomment
    }
  };
</script>