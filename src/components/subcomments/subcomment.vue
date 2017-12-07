<template>
  <div>
    <div class="subcomment">
      <h4>提交评论</h4>
      <textarea v-model="commentsinfo" name="" id="" cols="30" rows="8"></textarea>
      <mt-button @click="postComment()" type="primary" size="large">提交评论</mt-button>
    </div>
    <div class="commentList">
      <h4>评论列表</h4>
      <div v-for="(item,index) in commentList" :key="index" class="commentItem">
        <p class='mui-ellipsis-2'>{{item.content}}</p>
        <p>
          <span>{{item.user_name}}</span>
          <span>{{item.add_time | fmtDate}}</span>
        </p>
      </div>
      <mt-button @click="getLoadCommentData()" type="danger" size="large">加载更多</mt-button>
    </div>
  </div>
</template>

<style scoped>
  .subcomment,
  .commentList {
    padding: 10px;
  }

  h4 {
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }

  .commentItem {
    height: 100px;
    border-bottom: 1px solid #ccc;
    padding-top: 5px;
    margin-bottom: 15px;
  }

  .commentItem p:first-of-type {
    height: 45px;
    color: black;
    overflow: auto;
  }

  .commentItem p:last-of-type {
    color: #0094ff;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
</style>

<script>
  // 导入公共样式
  import common from "../../common/common.js";
  import {
    Indicator
  } from "mint-ui";
  import {
    Toast
  } from 'mint-ui';
  export default {
    data() {
      return {
        commentList: [],
        pageIndex: 1,
        commentsinfo: ''
      };
    },
    // 获取父组件传过来的值
    props: ["commentId"],
    created() {
      this.getCommentData();
    },
    methods: {
      // 获取第一页数据渲染页面
      getCommentData() {
        const url = common.apihost + "api/getcomments/" + this.commentId + "?pageindex=" + this.pageIndex;
        // console.log(this.commentId);
        // console.log(this.pageIndex);
        this.$http.get(url).then(Response => {
          // console.log(Response);
          if (this.pageIndex == 1) {
            // console.log(Response.body.message);
            this.commentList = Response.body.message;
          } else {
            this.commentList = this.commentList.concat(Response.body.message);
          }
          Indicator.close();
        });
      },
      // 加载更多
      getLoadCommentData() {
        this.pageIndex++;
        Indicator.open("加载中");
        this.getCommentData();
      },
      //  提交评论
      postComment() {
        // 获取输入的内容
        if (this.commentsinfo.trim() == '' || this.commentsinfo.trim().lenght == 0) {
          this.commentsinfo = '';
          Toast({
            message: '内容不能为空',
            position: 'middle',
            duration: 3000
          });
          return
        }
        // console.log(this.commentsinfo);
        // 发送post请求 , 提交评论
        const url = common.apihost + "api/postcomment/" + this.commentId;
        // console.log(url);
        this.$http.post(url, {content: this.commentsinfo}, {emulateJSON: true}).then(Response => {
          // console.log(Response)
          // 清空内容
          this.commentsinfo = '';
          Toast({
            message: Response.body.message,
            position: 'middle',
            duration: 3000
          });
          // 回到第一页
          this.pageIndex = 1;
          // 再次调用函数,渲染页面
          this.getCommentData()
        })
      }
    }
  };
</script>