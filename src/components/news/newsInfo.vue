<template>
  <div>
    <!-- 标题部分 -->
    <div class="titleStyle">
      <h4>{{this.newsInfo.title}}</h4>
      <p>{{newsInfo.add_time | fmtDate}}&nbsp;&nbsp;{{newsInfo.click}}次浏览&nbsp;&nbsp; 分类:民生经济</p>
    </div>
    <!-- 内容部分 -->
    <div class="contentStyle">
      <p v-html="newsInfo.content"></p>
    </div>
    <!-- 评论子组件 -->
    <!-- 动态绑定参数传值给子组件 -->
    <subcomment v-bind:commentId="this.$route.params.newsId"> </subcomment>
  </div>

</template>

<style scoped>
  .titleStyle,.contentStyle{
    padding: 6px;
  }

  .titleStyle{
    border-bottom: 1px solid rgba(92,92,92,0.3);
  }

  h4{
    font-size: 16px;
    color:#0094ff
  }
</style>

<script>
  // 导入公共样式
  import common from '../../common/common.js'
  import subcomment from '../subcomments/subcomment.vue'

  export default {
    data(){
      return {
        newsInfo:{}
      }
    },
    created(){
      this.getnewsInfoData()
    },
    methods:{
      // 获取新闻详情数据
      getnewsInfoData(){
        const url = common.apihost + "api/getnew/"+this.$route.params.newsId
        this.$http.get(url).then(response=>{
          this.newsInfo = response.body.message[0]
        })
      }
    },
      // 注册子组件
    components:{
      subcomment:subcomment
    }
  }
</script>