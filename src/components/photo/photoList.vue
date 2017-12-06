<template>
  <div>
    <!-- 分类标题 -->
    <div class="title">
      <ul>
        <li @click="getPhotoListData(0)">全部</li>
        <li @click="getPhotoListData(item.id)" v-for="item in photoCategory" :key="item.id">{{item.title}}</li>
      </ul>
    </div>
    <!-- 图片区 -->
    <div class="imgList">
      <ul>
        
        <li v-for="item in photoList" :key="item.id">
          <router-link :to="'/photo/photoInfo'+item.id">
          <img :src="item.img_url" alt="">
          <p>
            <span>{{item.title}}</span>
            {{item.zhaiyao}}
          </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.title {
  height: 42px;
}
.title ul {
  padding: 0px 10px;
  padding-bottom: 15px;
  margin: 0px;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}
.title ul li {
  display: inline-block;
  list-style: none;
  margin: 5px;
  font-size: 20px;
  color: #0094ff;
}

.imgList ul {
  padding: 5px;
}
.imgList ul li {
  list-style: none;
  position: relative;
}
.imgList ul li img {
  width: 100%;
  height: 100%;
}
.imgList ul li p {
  position: absolute;
  bottom: 10px;
  color: #ffffff;
  background-color: rgba(0,0,0,0.3);
}
</style>

<script>
// 导入公共样式
import commen from "../../common/common.js";

export default {
  data() {
    return {
      photoCategory: [],  // 分类数组
      photoList: []   // 图片列表
    };
  },
  created() {
    this.getPhotoCategoryData();  // 分类函数
    this.getPhotoListData(0)   // 图片函数
  },
  methods: {
    // 获取分类
    getPhotoCategoryData() {
      const url = commen.apihost + "api/getimgcategory";
      this.$http.get(url).then(Response => {
        // console.log(Response);
        this.photoCategory = Response.body.message;
      });
    },
    // 获取图片渲染数据
    getPhotoListData(categoryId){
     const url = `${commen.apihost}api/getimages/${categoryId}`
        //  console.log(url);
     this.$http.get(url).then(Response=>{
        // console.log(Response);
        this.photoList = Response.body.message
     })
    }
  }
};
</script>

