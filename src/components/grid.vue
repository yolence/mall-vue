<template>
  <van-grid :column-num="3" class="mygrid">
    <van-grid-item v-for="grid in grids" :key="grid.id" props='grids' :text="grid.title" :to="grid.to" >
      <template slot="icon">
        <img :src="grid.src" alt="" >
      </template>
    </van-grid-item>
  </van-grid>
</template>

<script>
export default {
  data: () => ({
    grids: []
  }),
  created() {
    this.getgrids()
  },
  methods: {
    async getgrids() {
      const {
        data: { message, status }
      } = await this.$http.get('http://localhost:5000/api/grids')
      if (status !== 0) return this.$toast('获取失败')
      console.log(message)
      this.grids = message
    }
  }
}
</script>

<style lang="less" scoped>
.mygrid img{
  width: 60px;
  height: 60px;
  display: block;
  margin-bottom: 10px;
}

</style>
