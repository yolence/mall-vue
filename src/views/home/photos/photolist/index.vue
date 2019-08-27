<template>
  <div class="photolist">
    <van-tabs @change="getImgs" animated>
      <van-tab v-for="cate in cates" :title="cate.title" :key="cate.id" >
      <template v-if="imgs.length!==0">
        <div v-for="img in imgs" :key="img.id" class="img-box">
          <img v-lazy="img.img_url" alt="" />
        </div>
      </template>
      <div v-else>暂无数据</div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: '',
  data: () => ({
    cates: [],
    imgs: []
  }),
  created() {
    this.getImgCategory()
    this.getImgs(0)
  },
  methods: {
    async getImgCategory() {
      const {
        data: { message, status }
      } = await this.$http.get('api/getimgcategory')
      if (status !== 0) this.$toast('获取分类类失败')
      message.unshift({ id: 0, title: '全部' })
      this.cates = message
      console.log(message)
    },
    async getImgs(index) {
      const {
        data: { message, status }
      } = await this.$http.get(`/api/getimages/${index}`)
      if (status !== 0) this.$toast('获取失败')
      this.imgs = message
      console.log(message)
    }
  }

}
</script>

<style lang="less" scoped>
  .img-box{
    padding: 8px;
    img{
      width: 100%;
      height: 100%;
      display: block;
    }
  }
</style>
