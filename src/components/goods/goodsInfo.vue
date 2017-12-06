
<template>
   <div>
       我是商品详情页面
   </div>
</template>
   
<style scoped>
   
</style>
   
<script>
   import common from '../../common/common.js'
   
   export default {
       data() {
           return {
             goodsInfo:[]
           }
       },
       created() {
           this.getGoodsInfo()
       },
       methods: {
           getGoodsInfo(){
             const url = `${common.apihost}api/goods/getinfo/${this.$route.params.goodsId}`
             console.log(url);
           }
       }
   }
</script>