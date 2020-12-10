<template>
  <div class="home-container com-container">
    <header>
      <div class="header-ad">
        <img src="@assets/imgs/home-ad/top-ad.jpg" alt="">
      </div>
    </header>
    <div class="search-container">
      <div class="left-logo left-f">
        <img src="@assets/imgs/logo/logo.png" alt="">
      </div>
      <div class="right-search right-f">
        <el-input placeholder="请输入内容" v-model="search">
          <div class="search-text" slot="append">搜索</div>
        </el-input>
      </div>
    </div>
    <div class="classify-title">
      <ul class="cl-content">
        <li
          class="cl-item left-f" 
          :class="{active: isActive === i}"
          :key="i"
          v-for="(item, i) in classifyList"
          @click="selectClassify(i)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <el-container>
      <el-aside width="200px">
        <ul
          class="classify-content"
          :key="item.id"
          v-for="item in classifyInfo"
        >
          <li class="co-title">{{ item.name }}</li>
          <li
            class="co-item"
            :key="subItem.id"
            v-for="subItem in item.children"
          >
            {{ subItem.name }}
          </li>
        </ul>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
  import { getClassify } from '@/service/list'
  export default {
    name: 'Home',
    data(){
      return {
        search: '',
        isActive: 0,
        classifyList: ['产品分类', 'Mine 商会圈', '企业查询', '花花世界'],
        classifyInfo: []
      }
    },
    created() {
      this.getClassifyData()
    },
    methods: {
      getClassifyData() {
        getClassify().then(res => {
          console.log(res)
          this.classifyInfo = res.data
        })
      },
      selectClassify(i) {
        // this.isActive = i
        console.log(i)
      }
    }

  }
</script>
<style lang="less">
  .home-container {
    header {
      height: 80px;
    }
    .search-container {
      height: 90px;
      padding: 20px 0;
      .right-search {
        margin-top: 10px;
        margin-right: 30px;
        width: 400px;
        .el-input__inner {
          border: 1px solid #e61717;
        }
        .el-input-group__append {
          background-color: #e61717;
          border: 1px solid #e61717;
          cursor: pointer;
        }
        .search-text {
          color: #fff;
          font-size: 16px;
        }
      }
    }

    .classify-title {
      height: 40px;
      border-bottom: 2px solid #e61717;
      .cl-content {
        .cl-item {
          width: 150px;
          cursor: pointer;
          font-size: 16px;
          text-align: center;
          line-height: 40px;
          border-radius: 0 5px 0 0;
          &.active {
            background-color: #e61717;
            color: #fff;
            width: 200px;
          }
        }
      }
    }

    .classify-content {
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      background-color: #3d404d;
      border-bottom: 1px solid #999;
      .co-title {
        height: 40px;
        font-size: 16px;
        color: #fff;
        width: 190px;
        padding-left: 10px;
        line-height: 40px;
      }
      .co-item {
        width: 90px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: #999;
      }
    }

  }
</style>