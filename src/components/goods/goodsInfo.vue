
<template>
   <div>
       <!-- 轮播子组件 -->
       <div class="carousel">
            <subswipe :lunbo_url="'api/getthumimages/'+this.$route.params.goodsId" :lunbo_time="1000"></subswipe>
       </div>
     
        <!-- 商品信息 -->
        <div class="goodsList">
            <h5>{{goodsInfo.title}}</h5>
            <p>市场价:<del>&yen;{{goodsInfo.market_price}}</del>&nbsp;&nbsp;销售价:<span>&yen;{{goodsInfo.sell_price}}</span></p>
        <!-- 商品加减组件 -->
        <!-- 接收方(父组件)使用v-on动态绑定自定义的事件,监听改变 -->
        <subgoodsnum v-on:addShopping="getsubgoodscountchange" v-if="goodsInfo.stock_quantity" :stock_quantity="goodsInfo.stock_quantity"></subgoodsnum>


            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button @click="addShoppingCart()" type="danger" size="small">加入购物车</mt-button>
        </div>
        <!-- 商品参数 -->
        <div class="goodsParameter">
            <h6>商品参数</h6>
            <p>商品货号:{{goodsInfo.goods_no}}</p>
            <p>库存情况:剩余{{goodsInfo.stock_quantity}}件</p>
            <p>上架时间:{{goodsInfo.add_time | fmtDate}}</p>
        </div>
        <!-- 商品评论 -->
        <div class="goodScomment">
            <mt-button @click="goToPicAndText()" type="primary" size="large" plain>图文介绍</mt-button>
            <mt-button @click="goToComment()" class="btnComment" type="danger" size="large" plain>商品评论</mt-button>
        </div>
   </div>
</template>
   
<style scoped>
.carousel,
.goodsList,
.goodsParameter,
.goodScomment {
  margin: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.carousel {
  margin-top: 45px;
}
.goodsList h5 {
  color: #0094ff;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
}
.goodsList p span {
  color: red;
  font-size: 16px;
}
.goodsParameter h6 {
  color: #ccc;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
}
.goodsParameter p {
  color: #333;
  font-size: 12px;
  margin-bottom: 2px;
}
.goodScomment .btnComment {
  margin-top: 15px;
}
</style>
   
<script>
import common from "../../common/common.js";
import subswipe from "../subcomments/subswipe.vue";
import subgoodsnum from "../subcomments/subGoodsNum.vue";
// import bus from "../../common/commonargument .js";
import { Toast } from 'mint-ui';

export default {
  data() {
    return {
      goodsInfo: {}, // 商品详情
      goodsCount: 1 // 记录数量
    };
  },
  created() {
    this.getGoodsInfoData();
  },
  methods: {
    // 获取商品详情页面
    getGoodsInfoData() {
      const url = `${common.apihost}api/goods/getinfo/${this.$route.params
        .goodsId}`;
    //   console.log(url);
      this.$http.get(url).then(Response => {
        this.goodsInfo = Response.body.message[0];
        // console.log(Response.body.message);
      });
    },
    // 点击跳转到图文介绍
    goToPicAndText() {
      this.$router.push({
        path: `/goods/picAndText/${this.$route.params.goodsId}`
      });
    },
    // 点击跳转到商品评论页面
    goToComment() {
      // 带查询参数，变成 /goods/goodsComment/?plan=private
      this.$router.push({
        path: "/goods/goodsComment",
        query: { goodsId: this.$route.params.goodsId }
      });
    },
    // 记录子组件传过来的值
    getsubgoodscountchange(goodsCount) {
      this.goodsCount = goodsCount;
      //   console.log(this.goodsCount);
    },
    // 添加到购物车
    // 发送方通过创建的Vue对象 . $emit("自定义事件名" , 值)传值,值作为接收方处理函数的参数
    addShoppingCart() {
      // 提示添加成功信息
      Toast({
        message: "加入购物车成功",
        position: "middle",
        duration: 2000
      });
      // 非父子组件传值方传值
      // bus.$emit('addShopping', this.goodsCount)

      // 把用户点击加入购物车的商品信息存储到仓库中,
      const goods = {
        // 商品Id
        goodsId: this.$route.params.goodsId,
        // 商品数量
        count: this.goodsCount
      };
      this.$store.commit("addGoods", goods);
    }
  },
  components: {
    subswipe,
    subgoodsnum
  }
};
</script>