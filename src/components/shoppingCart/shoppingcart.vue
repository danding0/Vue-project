<template>
   <div>
     <!--商品列表 -->
     <div v-for="(item,index) in shoppingGoodsList" :key="item.id" class="shoppingCartList">
        <mt-switch v-model="item.isSelect" @change="statisticsGoods()"></mt-switch>
        <div class="goodsPic">
          <img :src="item.thumb_path" alt="">
        </div>
        <div class="goodsInfo">
          <h4>{{item.title}}</h4>
          <p>
            <span>&yen;{{item.sell_price}}</span>
            <span>商品数量为:{{item.count}}</span>
          </p>
        </div>
        <mt-button @click="deleteGoods(index)" :disabled="!item.isSelect" size="small" type="danger">删除</mt-button>
     </div>
     <!-- 总计 -->
     <div class="aggregate">
       <div>
         <h4>总计(不含运费)</h4>
         <p>已经选择的商品<span>{{goodsTotal}}</span>件,总价:<span>&yen;{{priceTotal}}</span></p>
       </div>
       <mt-button size="normal" type="danger">去结算</mt-button>
     </div>
   </div>
</template>
   
<style scoped>
   .shoppingCartList{
     height: 100px;
     display: flex;
     align-items:center;
     border-bottom: 1px solid #ccc; 
     padding: 5px;
   }
   .goodsPic {
     width: 70px;
     height: 70px;
     border: 1px solid #ccc;
     border-radius: 8px;
     padding:3px;
     margin: 0px 5px;
   }
   .goodsPic img {
     width: 100%;
   }
   .goodsInfo{
     flex: 1
   }
   .goodsInfo h4 {
     height: 34px;
     font-size: 17px;
     color: #0094ff;
     font-weight: 500;
     word-break: break-all;
     text-overflow: ellipsis;
     display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
     -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: 2; /** 显示的行数 **/
    overflow: hidden;  /** 隐藏超出的内容 **/
   }
   .goodsInfo p span:first-of-type {
     color: red;
     font-size: 16px;
   }

   .aggregate{
     height: 100px;
     background-color: #eee;
     padding: 5px;
     /* 开启弹性布局 */
     display: flex;  
     /* 左右两边分布,两边无间隙 */
     justify-content : space-between;
     /* 垂直居中 */
     align-items:center;
   }
   .aggregate p span {
     color: red;
     font-size: 18px
   }
</style>
   
<script>
   import common from '../../common/common.js'
   import { MessageBox } from 'mint-ui';
   export default {
       data() {
           return {
             shoppingGoodsList:[],  // 商品列表
             goodsTotal:0,  // 总商品数
             priceTotal:0  // 总价
           }
       },
       created() {
           this.getShopCartListData()
       },
       methods: {
           // 获取购物车展示信息
           getShopCartListData(){
             // 仓库中取出存在里面的是数组[{goodsId:87,count:2},{goodsId:88,count:3}, {goodsId:87,count:3}]
             // 取出仓库存的值
             const goodsList = this.$store.getters.getGoodsList

             
            //  console.log(goodsList);
            // 此时取出来的值为[{goodsId:87,count:2},{goodsId:88,count:3}, {goodsId:87,count:3}] 但是后台需要的的 api/goods/getshopcarlist/87,88,89 变成临时的对象
               //最终应该变成 const tempObj = {87:5,88:3}
               const tempObj = {}
               goodsList.forEach(goods => {
                //  console.log(tempObj[goods.goodsId]);
                //  console.log(goods.count);
                 if(tempObj[goods.goodsId]){
                   tempObj[goods.goodsId] += goods.count
                 }else{
                   tempObj[goods.goodsId] = goods.count
                 }
                //  console.log(tempObj);
               });

               // 把{87:5,88:3}属性名称取出来放在一个临时的数组中[87,88]
               const tempArr = []
               for(var key in tempObj){
                 tempArr.push(key)
               }

               // 再将上述得到的数组转换成87,88,,,符合发送网络请求的需要
               const idsString = tempArr.join(',')

               // 发送网络请求
               const url  = `${common.apihost}api/goods/getshopcarlist/${idsString}`
               this.$http.get(url).then(Response=>{
                  // console.log(Response);
                  // 商品数量为自己选择的数量,返回的数据中没有,所以遍历获取的数据,添加属性count,并且赋值,值为 tempObj[item.id]
                  Response.body.message.forEach(item=>{
                    item.count = tempObj[item.id]
                    // 选择按键的属性
                    item.isSelect = true
                  })
                  this.shoppingGoodsList = Response.body.message

                  // 重新渲染
                  this.statisticsGoods()
               })
           },

           // 选中时统计商品信息,价格,数量,设置改变事件
           statisticsGoods(){
            //  声明价格和数量的变量
            let tempGoodsTotal = 0
            let tempPriceTotal = 0
            // 遍历数据 获取自定义的count商品数量值,sell_price商品价格
            this.shoppingGoodsList.forEach(item=>{
              if(item.isSelect){
                tempGoodsTotal += item.count
                tempPriceTotal += item.count*item.sell_price
                // console.log(tempGoodsTotal);
                // console.log(tempPriceTotal);
              }
            })
            this.goodsTotal = tempGoodsTotal
            this.priceTotal = tempPriceTotal
           },
           // 删除
           deleteGoods(index){
             MessageBox.confirm('确定删除吗').then(action=>{
               const id = this.shoppingGoodsList[index].id
               //1.根据id去删除仓库里面的数据
                 this.$store.commit('deleteGoodsByGoodsId',id)
                 //2.干掉选中的那个
                 this.shoppingGoodsList.splice(index,1);
                 //3.重新渲染
                 this.statisticsGoods()
               // 取消执行
             },cancel=>{
               
             })
           }
       }
   }
</script>



