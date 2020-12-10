<template>
  <div class="commom-layout">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
  import Footer from './components/footer'
  export default {
    components: {
      Footer
    }
  }
</script>

<style lang="less">
  .com-container {
    width: 1240px;
    margin: 0 auto;
  }
</style>