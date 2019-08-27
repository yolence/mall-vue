<template>
  <div class="comment">
    <h2>发表评论</h2>
    <hr />
    <textarea class="text" v-model="text" cols="30" rows="10" placeholder="请输入bibi的内容"></textarea>
    <van-button type="danger" class="btn" @click="addcomment">发表评论</van-button>

    <div class="comment-list" v-for="(comment,index) in comments" :key="comment.id">

      <div class="comment-title">
        <span>第{{index+1}}楼</span>
        <span>用户:{{comment.user_name}}</span>
        <span>发表时间:{{comment.add_time | datefmt}}</span>
      </div>
      <div class="comment-item">{{comment.content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: ''
  }),
  created() {},
  props: {
    comments: {
      type: Array
    }
  },
  methods: {
    addcomment() {
      if (this.text.length === 0) return this.$toast('请输入内容再发表')
      this.$emit('postcomment', this.text)
      this.text = ''
    }
  },
  component: {}
}
</script>

<style lang="less" scoped>
.text {
  width: 100%;
  height: 85px;
  border: none;
  font-size: 16px;
}
.btn {
  width: 100%;
}
.comment-list {
  margin-top: 6px;
  font-size: 12px;
  .comment-title {
    background-color: #ccc;
    line-height: 30px;
    span {
      margin-right: 12px;
    }
  }
}
</style>
