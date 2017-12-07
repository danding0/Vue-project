<template>
   <div>
       <div class="picAndText">
         <h4>{{picAndText.title}}</h4>
         <p v-html="picAndText.content"></p>
       </div>
   </div>
</template>
   
<style scoped>
   .picAndText {
     padding: 5px;
   }
   .picAndText h4 {
     color: #0094ff;
     font-weight: 600;
     font-size: 16px;
     border-bottom: 1px solid #ccc;
     padding-bottom: 8px;
   }
</style>
   
<script>
   import common from '../../common/common.js'
   
   export default {
       data() {
           return {
             picAndText:{}
           }
       },
       created() {
           this.getPicAndTextData()
       },
       methods: {
           getPicAndTextData(){
             const url = `${common.apihost}api/goods/getdesc/${this.$route.params.goodsId}`
             console.log(url);
              this.$http.get(url).then(Response=>{
            // console.log(Response.body.message);
            this.picAndText = Response.body.message[0]
        })
           }
       }
   }
</script>