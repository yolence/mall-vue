<template>
  <!-- <van-swipe :autoplay="3000" indicator-color="red">
    <van-swipe-item >
      <img   :src="item" alt="" style="width:100%;height:200px;">
    </van-swipe-item>
  </van-swipe>-->
  <van-swipe :autoplay="3000" indicator-color="red" class="myswipe">
    <van-swipe-item v-for="item in lunbolist" :key="item.id" class="item">
      <img :src="item.img" alt="">
    </van-swipe-item>
  </van-swipe>
</template>

<script>

export default {
  data: () => ({
    lunbolist: []
  }),
  created() {
    this.getlunbo()
  },
  methods: {
    async getlunbo() {
      const {
        data: { message, status }
      } = await this.$http.get('http://localhost:5000/api/getlunbo')
      if (status !== 0) return this.$toast('获取图片失败')
      this.lunbolist = message
    }
  }
}
</script>

<style lang="less" scoped>
.myswipe {
  height: 200px;
  background-color: pink;
}
.item img{
  width: 100%;
  height: 100%;
}
</style>
