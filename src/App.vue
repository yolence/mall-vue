<template>
  <div class="app">
    <van-nav-bar title="是你的idol" left-text="返回" left-arrow @click-left="onClickLeft" />
    <transition name="sky">
      <router-view></router-view>
    </transition>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">home</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/friends">friends</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" info="20" to="/cart">cart</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">search</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>

export default {
  data: () => ({
    active: 0
  }),
  created () {},
  methods: {
    onClickLeft () {
      console.log('left')
    }
  },
  components: {

  }
}
</script>
<style lang="less" scoped>
.app{
  overflow-x: hidden;
.sky-enter{
  transform: translateX(100%)

}
.sky-leave-to{
  transform: translateX(-100%);
  position: absolute;
  left: -300%;
}

.sky-enter-active,
.sky-leave-active{
  transition: all .5s ease;
}
}
</style>
