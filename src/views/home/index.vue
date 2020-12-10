<template>
  <div class="home-container">
    <div class="bg-white">
      <div class="com-container">
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
      </div>
    </div>
    <div class="classify-title bg-white">
      <ul class="cl-content com-container">
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
    <el-container class="com-container">
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
      <el-main class="main-container">
        <div class="ct-container">
          <ul class="infinite-list" v-infinite-scroll="loadCompany">
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
                <div class="ct-time">发布时间: <span class="m-tit">{{item.time}}</span></div>
                <div class="ct-status">
                  发布状态: 
                  <span 
                    class="normal"
                    :class="{urgent: item.status === 1, lose: item.status === 2 }"
                  >{{handleStatus(item.status)}}</span>
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
                  <el-button type="primary">拉入商汇</el-button>
                  <el-button type="text" class="de-button">详情</el-button>
                </div>
                <div class="de-text">
                  <span class="de-title">业务简介:</span>
                  {{ item.detail }}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="ad-container">
          <div class="board">
            <div class="bo-title">公告栏</div>
            <div class="bo-content bg-white">
              <ul class="bo-total">
                <li class="bo-item">
                  今日成交量:
                  <span class="m-tit">{{ companyToal.deal }}单</span>
                </li>
                <li class="bo-item">
                  今日发布数:
                  <span class="m-tit">{{ companyToal.issue }}单</span>
                </li>
                <li class="bo-item">
                  今日新用户:
                  <span class="m-tit">{{ companyToal.newUser }}户</span>
                </li>
              </ul>
              <ul class="bo-total">
                <li class="bo-item">
                  今日新商户:
                  <span class="m-tit">{{ companyToal.newBussiness }}户</span>
                </li>
                <li class="bo-item">
                  今日浏览量:
                  <span class="m-tit">{{ companyToal.view }}</span>
                </li>
              </ul>
            </div>
            <div class="bo-ad bg-white">
              <div class="ad-title">平台招商广告</div>
              <div class="ad-text">
                企业网站建设 html5 响应式 自适应 设计制作 网站开发
              </div>
            </div>
            <ul class="ad-list">
              <li 
                class="ad-item"
                :key="item.id"
                v-for="item in adList"
              >
                <img :src="item.fileUrl" alt="">
              </li>
            </ul>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import { getClassify, getMainCompanyList, getAdList } from '@/service/list'
  export default {
    name: 'Home',
    data(){
      return {
        search: '',
        isActive: 0,
        classifyList: ['产品分类', 'Mine 商会圈', '企业查询', '花花世界'],
        classifyInfo: [],
        count: 7,
        mianCompanyList: [],
        companyToal: {
          deal: 2000,
          issue: 400,
          newUser: 20,
          newBussiness: 20,
          view: 999
        },
        adList: []
      }
    },
    created() {
      this.getClassifyData()
      this.getMainCompanyData()
      this.getAdData()
    },
    methods: {
      // 获取分类信息
      getClassifyData() {
        getClassify().then(res => {
          this.classifyInfo = res.data
        })
      },
      // 获取商圈信息
      getMainCompanyData() {
        getMainCompanyList({count: this.count}).then(res => {
          this.mianCompanyList = res.data
        })
      },

      // 获取广告位数据
      getAdData() {
        getAdList().then(res => {
          console.log(res)
          this.adList = res.data
        })
      },

      // 循环商圈数据
      loadCompany() {
        this.count += 2
        // this.getMainCompanyData()
      },

      // 处理商圈状态
      handleStatus(val) {
        let text = ''
        switch (val) {
          case 0:
            text = '有效'
            break;
          case 1:
            text = '加急'
            break;
          case 2:
            text = '失效'
            break;
        
          default:
            break;
        }
        return text
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
        cursor: pointer;
        color: #999;
      }
    }

    .main-container {
      display: flex;
      padding: 0;
      .ct-container {
        flex: 1;
        padding-top: 10px;
        padding-left: 10px;
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
      }
      .ad-container {
        flex-basis: 320px;
        padding-left: 10px;
        .board {
          .bo-title {
            text-align: center;
            height: 50px;
            line-height: 50px;
            font-size: 16px;
            font-weight: bold;
          }
          .bo-content {
            display: flex;
            font-size: 14px;
            border: 1px solid #e3e3e3;
            .bo-total {
              padding: 10px;
              flex: 1;
              &:first-child {
                border-right: 1px solid #e3e3e3;
              }
              .bo-item {
                height: 30px;
                line-height: 30px;
              }
              .m-tit {
                color:#ff6900;
              }
            }
          }
          .bo-ad {
            padding: 10px;
            border: 1px solid #e3e3e3;
            border-top: none;
            .ad-title {
              line-height: 30px;
              font-size: 14px;
              color: #ff6900;
              .ad-text {
                line-height: 20px;
              }
            }
          }
          .ad-list {
            margin-top: 10px;
            .ad-item {
              width: 320px;
              height: 220px;
              margin-bottom: 10px;
            }
          }
        }
      }
    }

  }
</style>