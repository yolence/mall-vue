<template>
  <div class="newslist">
    <router-link  v-for="item in newlist" :key="item.id" :to="'/home/newsinfo/'+item.id">
      <van-card :title="item.title" :thumb="item.img_url">
        <div slot="price">
          <span class="add_time">发表时间:{{item.add_time}}</span>
        </div>
        <div slot="num">点击{{item.click}}次</div>
      </van-card>
    </router-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    newlist: []
  }),
  created() {
    this.getnewlist()
  },
  methods: {
    async getnewlist() {
      const {
        data: { message, status }
      } = await this.$http.get('http://localhost:5000/api/getnewslist')
      if (status !== 0) return this.$toast('获取图片失败')
      this.newlist = message
      console.log(message)
    }
  }
}
</script>

<style lang="less" scoped>
.newslist {
  .van-card__thumb {
    height: 55px;
  }
  .van-card__content {
    min-height: 55px;
    .van-card__title {
      margin-bottom: 20px;
    }
    .add_time {
      color: red;
    }
  }
}
</style>
