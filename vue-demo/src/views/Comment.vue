<template>
  <div class="article-page">
    <div class="user-info" v-if="isLogined">
      <span>{{ userInfo.uname }}</span>
      <span>{{ userInfo.email }}</span>
      <span style="cursor: pointer;" @click="logOut">退出</span>
    </div>
    <div class="article">
      <div class="article-title">This is an test article.</div>
      <div class="article-content">
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi officiis iusto, sed consequatur
          eveniet iure repellat numquam possimus consectetur libero quasi? Ipsam sunt pariatur perferendis odit,
          doloribus eius natus! </p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi officiis iusto, sed consequatur
          eveniet iure repellat numquam possimus consectetur libero quasi? Ipsam sunt pariatur perferendis odit,
          doloribus eius natus! </p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi officiis iusto, sed consequatur
          eveniet iure repellat numquam possimus consectetur libero quasi? Ipsam sunt pariatur perferendis odit,
          doloribus eius natus! </p>
      </div>
      <div class="post-comment">
        <div class="cmt-top flex">
          <div class="uavatar"></div>
          <div class="cmt-input">
            <el-input type="textarea" ref="commentArea" class="cmt-textarea" v-model="cmt_desc"
              :placeholder="cmtPlaceholder"></el-input>
          </div>
        </div>
        <el-row class="opt-area">
          <el-button type="primary" @click="sendCmt">发送</el-button>
          <el-button @click="clearCmt">取消</el-button>
        </el-row>
      </div>

      <div class="comment-list">

        <p class="title">评论列表({{this.comment_list.length}})</p>
        <!-- 评论列表 -->
        <el-card class="box-card">
          <div v-for="item in comment_list" :key="item.id">
            <cmtItem :nickname="item.comment_user_name" :ctime="item.create_time" :cmt="item.content"
              @replyCmt="replyCmt"></cmtItem>
            <div v-if="item.children_list.length != 0" class="pl-50">
              <cmtItem v-for="item2 in item.children_list" :key="item2.id" :nickname="item2.comment_user_name"
                :ctime="item2.create_time" :cmt="item2.content" :target_user="item2.target_user" @replyCmt="replyCmt">
              </cmtItem>
            </div>
          </div>
        </el-card>

      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import axios from 'axios'
import cmtItem from '@/components/CommentItem.vue'

export default {
  name: 'Comment',
  components: {
    cmtItem
  },
  data () {
    return {
      isLogined: false,
      userInfo: {},
      comment_list: [],
      cmtPlaceholder: '',
      cmt_desc: '',
      receive_cmt_obj: ''
    }
  },
  mounted () {
    // 从本地获取登录信息
    const localUser = localStorage.getItem('user')

    if (localUser) {
      const userInfo = JSON.parse(localUser)
      //  有登陆信息，展示 页面头部
      this.isLogined = true
      this.userInfo = userInfo
    }

    // 获取目前所有评论
    this.getComments()
  },
  methods: {
    // 退出登录，清楚本地信息
    logOut () {
      this.userInfo = {}
      this.isLogined = false
      localStorage.setItem('user', '')
    },
    open () {
      this.$message.error('这是一条消息提示')
    },
    getComments () {
      // 发送 注册请求
      axios.get('/data/comment.json').then(res => {
        console.log(res)
        console.log(res.data)
        this.comment_list = res.data.comment_list
      })
    },
    // 发送 评论请求
    sendCmt () {
      const isTest = 1
      if (isTest) {
        // 发送请求，真实情况走下面else  这里是 测试
        console.log(123)
      } else {
        axios({
          method: 'post',
          url: '/comment/post',
          data: {
            uname: this.formLabelAlign.uname,
            password: this.formLabelAlign.password,
            email: this.formLabelAlign.email
          }
        }).then(res => {
          console.log(res)
          if (res.error_code) {
            //  注册失败 ， 弹窗提示 错误信息
            this.$message.error(' 注册失败， 错误信息')
          } else {
            //  注册成功， 跳转 登录页面 页面
            this.$router.push('/login')
          }
        })
      }
    },
    // 取消发送，清空输入信息
    clearCmt () {
      this.cmt_desc = ''
    },
    replyCmt (receivedName) {
      console.log(receivedName)
      this.$refs.commentArea.focus()
      this.cmtPlaceholder = '@' + receivedName
    }
  }
}
</script>
<style>
.article-page {
  width: 60%;
  margin: 0 auto;
  text-align: left;
  padding: 80px 0 0;
  position: relative;
}

.user-info {
  width: 100%;
  height: 40px;
  line-height: 40px;
  position: absolute;
  top: 0;
  background-color: #f1f3f4;
  text-align: right;
  padding: 5px;
}

.user-info span {
  margin-left: 10px;
}

.article-title {
  margin-bottom: 20px;
  text-align: center;
}

.article-content {
  text-align: left;
  line-height: 1.5;
}

.article-content p {
  margin-bottom: 20px;
}

.flex {
  display: flex;
}

/* 评论输入 */
.post-comment {}

.cmt-top {
  justify-content: space-between;
  min-height: 100px;
}

.cmt-input {
  width: 95%;
}

.cmt-input .cmt-textarea textarea {
  height: 120px;
}

.uavatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eee;
  margin-right: 10px;
}

.opt-area {
  text-align: right;
  margin-top: 20px;
}

/* 评论列表 */
.comment-list {
  margin-bottom: 100px;
}

.comment-list .title {
  margin-bottom: 20px;
}

.pl-50 {
  padding-left: 50px;
}
</style>
