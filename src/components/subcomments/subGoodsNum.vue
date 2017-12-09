<template>
   <div>
       <div class="count">
                <span @click="minus()">-</span>
                <span>{{goodsCount}}</span>
                <span @click="add()">+</span>
            </div>
   </div>
</template>
   
<style scoped>
.count {
  height: 40px;
}
.count span {
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
}
</style>
   
<script>
import common from "../../common/common.js";

export default {
  props: ["goodsId", "stock_quantity"],
  data() {
    return {
      goodsCount: 1
    };
  },
  created() {},
  methods: {
    // 选择数量点击减少函数
    minus() {
      if (this.goodsCount <= 1) {
        return;
      }
      this.goodsCount--;
      this.notify();
    },
    // 选择数量点击加一函数
    add() {
      // console.log(this.stock_quantity);
      if (this.goodsCount >= this.stock_quantity) {
        return;
      }
      this.goodsCount++;
      this.notify();
    },
    // 添加商品到购物车
    // 发送方(子组件)使用this.$emit("自定义事件名",值)触发改事件
    notify() {
      this.$emit("addShopping", this.goodsCount);
    }
  }
};
</script>