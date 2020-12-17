<template>
  <!-- 广告 -->
  <div class="ad-container" :style="{width: width}">
    <div class="ad-content bg-white">
      <div class="ad-title">商汇推荐</div>
      <div class="ad-img">
        <img :src="adImg" alt="">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AdContainer',
  props: {
    width: {
      type: String,
      default: '400px'
    },
    adImg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang='less' scoped>
.ad-container {
  flex-basis: 400px;
  margin-left: 10px;
  margin-top: 5px;
  .ad-content {
    padding: 15px;
  }
  .ad-title {
    font-size: 16px;
    padding-bottom: 10px;
  }
}
</style>