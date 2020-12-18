<template>
  <div class="friend-container">
    <div class="friend-content">
      <div class="he-title bg-white clearfix">
        <span class="he-my left-f">我的好友</span>
        <div class="he-op right-f">
          <el-badge :value="12" class="item">
            <el-button size="small" type="primary" @click="apply">好友申请</el-button>
          </el-badge>
        </div>
      </div>

      <div class="friend-box bg-white">
        <ul class="friend-list">
          <li class="search">
            <el-input
              placeholder="搜索"
              clearable
              size="mini"
              @input="searchName"
              v-model="search">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </li>
          <li
            v-for="item in friendList"
            :key="item.id"
            class="f-item"
            :class="{active: activeId === item.id}"
            @click="clickFriend(item)"
          >
            <div class="logo">
              <img :src="item.fileUrl" alt="">
            </div>
            <div class="ms-info">
              <div class="concat clearfix">
                <div class="left-f name">{{ item.name }}</div>
                <div class="right-f time">{{ item.time }}</div>
              </div>
              <div class="message">{{ item.message }}</div>
            </div>
          </li>
        </ul>
        <div class="chart-box">
          <div class="c-title">{{ activeName }}</div>
          <div class="c-content">
            <ul class="chart-list">
              <li
                class="ch-item"
                v-for="item in messageList"
                :key="item.id"
              >
                <div class="sentence clearfix" :class="{user: item.type===1, fuser: item.type===2}">
                  <div class="logo">
                    <img :src="avactor" alt="">
                  </div>
                  <div class="info">
                    {{item.msg}}
                    <div class="angle"></div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="send-box bg-white">

            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- 广告 -->
    <AdContainer :adImg="adImg"></AdContainer>
  </div>
</template>

<script>
  import AdContainer from '@/components/AdContainer'
  import { getAdList, getMessageList } from '@/service/list'

  export default {
    name: 'Friend',
    components: {AdContainer},
    data() {
      return {
        friendList: [],
        adImg: '',
        activeName: '',
        search: '',
        messageList: [],
        avactor: '',
        activeId: null
      }
    },
    created() {
      this.getFriendData()
      this.getMessageData()
    },
    methods: {
      // 获取好友列表
      getFriendData() {
        getAdList().then(res => {
          this.friendList = res.data
          this.activeName = res.data[0].name
          this.activeId = res.data[0].id
        })
      },

      // 获取聊天列表
      getMessageData() {
        getMessageList().then(res => {
          const data = res.data
          this.avactor = res.avactor
          this.adImg = res.avactor
          let arr = []
          data.some(item => {
            arr = arr.concat(item.user, item.fuser)
          })
          console.log(data, arr)
          this.messageList = arr
        })
      },

      // 点击好友
      clickFriend(item) {
        this.activeId = item.id
        this.activeName = item.name
        this.getMessageData()
      },

      // 搜索好友
      searchName() {

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
      min-height: 500px;
      max-height: 700px;
      overflow: hidden;
      .friend-list {
        flex-basis: 250px;
        background-color: #eceae8;
        .search {
          padding: 15px;
          padding-bottom: 5px;
        }
        .f-item {
          display: flex;
          padding: 15px;
          &:hover {
            background-color:#dcdada;
          }
          &.active {
            background-color: #c5c4c4;
          }
          .logo {
            flex-basis: 55px;
            margin-right: 8px;
          }
          .ms-info {
            flex: 1;
            .name {
              font-weight: bold;
              max-width: 150px;
              text-overflow: ellipsis;
              overflow: hidden;
              color: rgba(0, 0, 0, .7);
            }
            .time {
              color: #999;
            }
            .message {
              margin-top: 10px;
              max-width: 150px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #666;
            }
          }
        }
      }
      .chart-box {
        flex: 1;
        background-color: #f5f5f5;
        .c-title {
          padding: 10px 0 10px 20px;
          font-size: 14px;
          border-bottom: 1px solid #e3e3e3;
        }
        .c-content {
          height: 100%;
          
          .chart-list {
            padding: 10px;
            height: calc(100% - 200px);
            overflow: scroll;
            .ch-item {
              margin-bottom: 10px;
              .sentence {

                .logo {
                  width: 55px;
                  height: 55px;
                }
                .info {
                  max-width: 300px;
                  padding: 5px;
                  background-color: #fff;
                  border: 1px solid #e3e3e3;
                  position: relative;
                  .angle {
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    background-color: #fff;
                    border: 1px solid #e3e3e3;
                    top: 10px;
                    border-bottom: none;
                  }
                }
              }
              .user {
                .logo, .info {
                  float: left;
                }
                .info {
                  margin-left: 6px;
                  .angle {
                    left: -5px;
                    transform: rotate(-45deg);
                    border-right: none;
                  }
                }
              }
              .fuser {
                .logo, .info {
                  float: right;
                }
                .info {
                  margin-right: 6px;
                  .angle {
                    transform: rotate(45deg);
                    right: -5px;
                    border-left: none;
                  }
                }
              }
            }
          }
          .send-box {
            height: 200px;
          }
        }
      }
    }
  }
}
</style>