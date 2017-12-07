<template>
   <div>
       <!-- 轮播图 -->
    <mt-swipe :auto="lunbo_time">
      <mt-swipe-item v-for="(item,index) in lunboArray" v-bind:key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
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
</style>
   
<script>
import common from "../../common/common.js";

export default {
  props:['lunbo_url','lunbo_time'],
  data() {
    return {
      lunboArray:[]
    };
  },
  created() {
    this.getLunboArrayData()
  },
  methods: {
    // 定义一个方法 , 用来获取录播图需要的数据
    getLunboArrayData() {
      const url = `${common.apihost}${this.lunbo_url}`;
      this.$http.get(url).then(response => {
        response.body.message.forEach(item => {
          if(item.src){
            item.img = item.src
          }
        });
        this.lunboArray = response.body.message;
        // console.log( response.body.message);
      });
    }
  }
};
</script>