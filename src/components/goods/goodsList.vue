<template>
  <div>
    <div class="goodsList">
      <ul>
        
        <li v-for="item in goodsList" :key="item.id">
          <router-link :to="'/goods/goodsInfo/'+item.id">
          <img :src="item.img_url" alt="">
          <p>{{item.title}}</p>
          <p class="price">
            <span>&yen;{{item.sell_price}}</span>
            <del>&yen;{{item.market_price}}</del>
          </p>
          <p>
            <span>热卖中</span>
            <span>剩余{{item.stock_quantity}}件</span>
          </p>
          </router-link>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .goodsList ul{
    padding: 3px;
  }
  .goodsList ul li {
    padding: 5px;
    width: 48%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    list-style: none;
    float: left;
    height: 300px;
    margin: 4px 1%;
    border-radius: 8px;
    
  }
  .goodsList ul li img{
    width: 100%;
  }
  .goodsList ul li p:first-of-type{
    overflow:hidden; 
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    color: black;
  }
  .price span {
    font-size: 16px;
    color: red;
    margin-right:5px;
  }
  .goodsList ul li p:last-of-type{
    display: flex;
    justify-content: space-between;
  }
</style>


<script>
import common from '../../common/common.js'
export default {
  data() {
    return {
      goodsList: []
    };
  },
  created(){
    this.getGoodsList()
  },
  methods: {
    getGoodsList(){
      const url = `${common.apihost}api/getgoods`
      this.$http.get(url).then(Response=>{
        // console.log(Response.body.message);
        this.goodsList = Response.body.message
      })
    }
  }
};
</script>