<template>
  <div class="user-container">
    <section>
      <div class="ct-container">
        <ul class="ct-list">
          <li
            :key="item.id"
            v-for="item in mianCompanyList" 
            class="infinite-list-item clearfix main-box bg-white"
            >
            <div class="ct-logo">
              <img :src="item.logo" alt="">
            </div>
            <div class="ct-content">
              <div class="ct-title">{{item.name}}</div>
              <div class="ct-text">{{item.text}}</div>
              <div class="ct-time">拉入时间: <span class="m-tit">{{item.time}}</span></div>
              <div class="ct-status">
                发布状态: 
                <span 
                  class="normal"
                  :class="{urgent: item.status === 1, lose: item.status === 2 }"
                >{{item.status | handleStatus()}}</span>
              </div>
              <div class="ct-price">价格: ￥{{item.price}}</div>
              <div class="ct-credit">
                <span>信誉度:</span>
                <el-rate
                  v-model="item.credit"
                  disabled
                  text-color="#ff9900"/>
                </div>
            </div>
            <div class="ct-detail">
              <div class="oprate">
                <el-button type="primary">获取联系方式</el-button>
                <el-button type="info">踢出我的商汇</el-button>
                <el-button type="text" class="de-button">详情</el-button>
              </div>
              <div class="de-text">
                <span class="de-title">业务简介:</span>
                {{ item.detail }}
              </div>
            </div>
          </li>
        </ul>
        <!-- 联系人 -->
        <div class="concat-container">
          <div class="concat-content bg-white">
            <div class="co-title">
              <div class="replace">
                <span class="left-f m-title">牛人联手</span>
                <el-button class="right-f" type="text" @click="replaceData">换一批</el-button>
              </div>
              <div class="clearfix">
                <div class="right-f">
                  <el-radio v-model="loginStatus" label="1">在线</el-radio>
                  <el-radio v-model="loginStatus" label="2">离线</el-radio>
                </div>
              </div>
            </div>
            <ul class="co-list">
              <li 
                class="co-item"
                v-for="item in concatList"
                :key="item.id"
              >
                <el-badge :hidden="item.count < 1" :max="99" :value="item.count" class="item">
                  <div class="co-img">
                    <img :src="item.fileUrl" alt="">
                    <div class="add">
                      <span class="el-icon-plus"></span>
                    </div>
                  </div>
                </el-badge>
                <div class="co-detail">
                  <el-button type="text" @click="replaceData">详情信息>></el-button>
                </div>
              </li>
            </ul>
          </div>

          <div class="ad-container bg-white">
            <div class="ad-title">商汇推荐</div>
            <div class="ad-img">
              <img :src="adImg" alt="">
            </div>
          </div>
        </div>

      </div>
      <!-- 历史商汇 -->
      <div class="history-container bg-white">
        <div class="hi-title">历史商汇</div>
        <div>
          <el-carousel indicator-position="outside">
            <el-carousel-item
              v-for="(item, i) in historyList"
              :key="i"
            >
              <ul class="ca-list">
                <li 
                  class="ca-item"
                  v-for="subItem in item"
                  :key="subItem.id"
                  @click="histiryClick(subItem)"
                >
                  <img :src="subItem.fileUrl" alt="">
                </li>
              </ul>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { getMainCompanyList } from '@/service/list'
  import { getConcatList } from '@/service/user'

  export default {
    name: 'User',
    data() {
      return {
        mianCompanyList: [],
        count: 7,
        loginStatus: '1',
        concatList: [],
        historyList: [],
        adImg: ''
      }
    },
    created() {
      this.getMainCompanyData()
      this.getConcatData()
    },
    methods: {
      // 获取商圈信息
      getMainCompanyData() {
        getMainCompanyList({count: this.count}).then(res => {
          this.mianCompanyList = res.data
        })
      },

      // 更换联系人
      replaceData() {},

      // 获取联系人
      getConcatData() {
        getConcatList().then(res => {
          const data = res.data
          this.concatList = JSON.parse(JSON.stringify(res.data))
          this.concatList = this.concatList.splice(0, 6)
          this.adImg = this.concatList[0].fileUrl
          const arr = []
          const loop = (info) => {
            if (info.length > 5) {
              arr.push(info.splice(0, 5))
              loop(info)
            } else {
              arr.push(info)
            }
          }
          loop(data)
          this.historyList = arr
        })
      },

      // 点击历史商汇
      histiryClick(item) {
        console.log(item)
      }
    }
  }
</script>

<style lang='less'>
.user-container {
  .ct-container {
    display: flex;
    .ct-list {
      flex: 1;
    }
    .main-box {
      padding: 10px;
      border: 1px solid #e3e3e3;
      display: flex;
      margin-top: 5px;
      .ct-logo {
        flex-basis: 150px;
        height: 180px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .ct-content {
        padding-left: 30px;
        flex-basis: 215px;
        .ct-title {
          font-size: 16px;
          height: 30px;
          line-height: 30px;
          font-weight: bold;
        }
        .ct-text {
          color: #666;
          font-size: 14px;
          line-height: 40px;
        }
        .ct-status {
          line-height: 28px;
        }
        .ct-credit {
          line-height: 28px;
        }
        .el-rate {
          display: inline-block;
          line-height: 12px;
          margin-left: 5px;
        }
        .m-tit {
          margin-left: 5px;
        }
        .normal {
          color: #009943;
          margin-left: 5px;
          font-size: 14px;
        }
        .urgent {
          color: #e61717;
        }
        .lose {
          color: #999;
        }
        .ct-price {
          color: #ff6900;
          font-size: 14px;
          line-height: 20px;
        }
      }
      .ct-detail {
        padding-left: 30px;
        flex: 1;
        .de-button {
          margin-left: 70px;
        }
        .de-text {
          margin-top: 30px;
        }
      }
    }
    .concat-container {
      flex-basis: 400px;
      margin-left: 10px;
      margin-top: 5px;
      .concat-content {
        padding: 15px;
      }
      .co-title {
        padding-bottom: 15px;
        border-bottom: 1px solid #e3e3e3;
        .replace {
          text-align: right;
        }
        .m-title {
          font-size: 14px;
          color: #e61717;
        }
      }
      .co-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 15px;
        .co-item {
          width: 178px;
          .el-badge__content.is-fixed {
            z-index: 99;
          }
        }
        .co-img {
          position: relative;
          &:hover {
            .add {
              display: block;
            }
          }
          .add {
            display: none;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, .7);
            text-align: center;
            line-height: 210px;
            font-size: 40px;
            color: #fff;
            cursor: pointer;
          }
        }
        .co-detail {
          text-align: right;
        }
      }
    }
    .ad-container {
      margin-top: 15px;
      padding: 15px;
      .ad-title {
        font-size: 16px;
        padding-bottom: 10px;
      }
      .ad-img {
        width: 100%;
      }
    }
  }

  .history-container {
    margin-top: 15px;
    .hi-title {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      padding-left: 20px;
    }
    .ca-list {
      display: flex;
      padding-left: 15px;
      padding-right: 15px;
      .ca-item {
        width: 225px;
        margin: 0 8px;
      }
    }
  }
}
</style>