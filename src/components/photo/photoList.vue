<template>
  <div>
    <!-- 分类标题 -->
    <div class="title">
      <ul>
        <li>全部</li>
        <li v-for="item in photoCategory" :key="item.id">{{item.title}}</li>
      </ul>
    </div>
    <!-- 图片区 -->
    <div class="imgList">
      <ul>
        <li>
          <img src="../../statics/images/menu10.png" alt="">
          <p>huihugughuvuhvuivuvuvibuvhjvuhubibiiuihjhbhjjhbbh</p>
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
}
</style>

<script>
// 导入公共样式
import commen from "../../common/common.js";

export default {
  data() {
    return {
      photoCategory: []
    };
  },
  created() {
    this.getPhotoCategoryData();
    // this.getPhotoListData()
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
    // 获取渲染数据
    getPhotoListData(){
     
    }
  }
};
</script>
