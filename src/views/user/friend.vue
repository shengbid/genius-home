<template>
  <div class="friend-container">
    <div class="friend-content">
      <div class="he-title bg-white clearfix">
        <span class="he-my left-f">我的好友</span>
        <div class="he-op right-f">
          <el-badge :value="12" class="item">
            <el-button size="small" @click="apply">好友申请</el-button>
          </el-badge>
        </div>
      </div>

      <div class="friend-box bg-white">
        <ul class="friend-list">
          <li
            v-for="item in friendList"
            :key="item.id"
            class="f-item"
          >
            <div class="logo">
              <img :src="item.fileUrl" alt="">
            </div>
            <div class="concat clearfix">
              <div class="left-f name">{{ item.name }}</div>
              <div class="right-f time">{{ item.time }}</div>
            </div>
            <div class="message">{{ item.message }}</div>
          </li>
        </ul>
        <div class="chart-box">
          <div class="c-title">{{ item.name }}</div>
          <div class="c-content"></div>
        </div>
      </div>

    </div>
    <!-- 广告 -->
    <AdContainer :adImg="adImg"></AdContainer>
  </div>
</template>

<script>
  import AdContainer from '@/components/AdContainer'
  import { getAdList } from '@/service/list'

  export default {
    name: 'Friend',
    components: {AdContainer},
    data() {
      return {
        friendList: [],
        adImg: ''
      }
    },
    created() {
      this.getFriendData()
    },
    methods: {
      // 获取好友列表
      getFriendData() {
        getAdList().then(res => {
          this.friendList = res.data
        })
      },

      // 好友申请点击
      apply() {}
    }
  }
</script>

<style lang='less' scoped>
.friend-container {
  display: flex;
  .friend-content {
    flex: 1;
    .he-title {
      height: 50px;
      margin-top: 5px;
      padding: 10px 15px;
      border: 1px solid #e3e3e3;
      .he-my {
        font-size: 16px;
        margin-top: 15px;
      }
      .he-op {
        margin-top: 5px;
        margin-right: 15px;
      }
    }

    .friend-box {
      display: flex;
      margin-top: 5px;
      .friend-list {
        flex-basis: 150px;
        .f-item {
          display: flex;
        }
      }
      .chart-box {
        flex: 1;
      }
    }
  }
}
</style>