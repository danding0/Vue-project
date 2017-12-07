<template>
   <div>
     <!-- 评论子组件 -->
       <subcomment :commentId="this.$route.query.goodsId"></subcomment>
   </div>
</template>
   
<style scoped>
   
</style>
   
<script>
// 导入评论子组件
   import subcomment from '../subcomments/subcomment.vue'
   
   export default {
      // 注册评论子组件
        components: {
             subcomment
           }
   }
</script>