<template>
  <div class="newsinfo">
    <van-card :title="news.title">
      <div slot="price">
        <span class="add_time">发表时间: {{news.add_time}}</span>
      </div>
      <div slot="num">点击{{news.click}}次</div>
    </van-card>
    <hr />
    <div class="newsinfo-body">{{news.content}}</div>
    <comment :comments="comments" @postcomment="postcomment"></comment>
    <van-button plain type="danger" class="more" @click="getmore">{{hasflag?'被掏空了':'加载更多'}}</van-button>
  </div>
</template>

<script>
import comment from '@/components/comment'
export default {
  name: '',
  data: () => ({
    id: '',
    news: {},
    pageindex: 0,
    limit: 2,
    comments: [],
    hasflag: false
  }),
  components: {
    comment
  },
  created() {
    this.id = this.$route.params.id
    this.getnewsinfo()
    this.getcomments()
  },
  methods: {
    async getnewsinfo() {
      const {
        data: { message, status }
      } = await this.$http.get(`api/getnew/${this.id}`)
      if (status !== 0) return this.$toast(message)
      this.news = message
    },
    async getcomments() {
      if (this.hasflag !== false) return
      this.pageindex++
      const {
        data: { message, status, count }
      } = await this.$http.get(`api/getcomments/${this.id}?pageindex=${this.pageindex}&limit=${this.limit}`)
      if (status !== 0) return this.$toast(message)
      this.comments = this.comments.concat(message)
      console.log(count)
      this.hasflag = this.pageindex * this.limit > count
    },
    getmore() {
      console.log(1111)
      this.getcomments()
    },
    async postcomment(data) {
      const {
        data: { message, status }
      } = await this.$http.post(`/api/postcomment/${this.id}`, { content: data })
      if (status !== 0) return this.$toast('发表评论失败')
      console.log(message)
      this.comments.unshift({
        user_name: '匿名用户',
        content: data,
        add_time: Date.now()
      })
    }
  }
}
</script>

<style lang="less" scoped>
.newsinfo {
  padding: 0 4px;
  .van-card {
    background-color: #fff;
  }
  .van-card__thumb {
    height: 55px;
  }
  .van-card__content {
    min-height: 55px;
    .van-card__title {
      margin-bottom: 20px;
      text-align: center;
      color: red;
      font-size: 16px;
    }
    .add_time {
      color: blue;
    }
  }
  .more {
    width: 100%;
  }
}
</style>
