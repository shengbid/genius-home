<template>
  <div class="home-container">
    <header>
      <div class="header-ad">
        <img src="@assets/imgs/home-ad/top-ad.jpg" alt="">
      </div>
    </header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
    <footer>Footer</footer>
  </div>
</template>

<script>
  export default {

  }
</script>
<style lang="less" scoped>
  .home-container {
    header {
      height: 80px;
    }
    footer {
      height: 60px;
    }
  }
</style>