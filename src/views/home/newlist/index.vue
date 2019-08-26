<template>
  <div class="newslist">
    <van-card :title="item.title" :thumb="item.img_url" v-for="item in newslist" :key="item.id">
      >
      <div slot="footer">
        <!-- <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>-->
      </div>
    </van-card>
  </div>
</template>

<script>
export default {
  name: '',
  data: () => ({
    newslist: []
  }),
  created() {
    this.getnewslist()
  },
  methods: {
    async getnewslist() {
      const {
        data: { message, status }
      } = await this.$http.get('http://localhost:5000/api/getnewslist')
      if (status !== 0) return this.$toast('获取图片失败')
      this.newslist = message
      console.log(message)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
