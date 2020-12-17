<template>
  <div class="dynamic-container">
    <div class="ct-container">
      <!-- 动态列表 -->
      <ul class="dy-list">
        <li class="he-title clearfix bg-white">
          <span class="he-my left-f">我的动态</span>
          <div class="right-f">
            <el-button type="primary" @click="issueNew">发布新动态</el-button>
          </div>
        </li>
        <li 
          v-for="item in dynamicList"
          :key="item.id"
        >
          <div class="dy-item bg-white">
            <div class="text">{{ item.text }}</div>
            <ul class="img-list">
              <li
                v-for="subItem in item.fileList"
                :key="subItem.id"
                class="img-item"
              >
                <img :src="subItem.fileUrl" alt="">
              </li>
            </ul>
            <div class="clearfix detail">
              <span class="left-f time">{{item.time}}</span>
              <div class="right-f more">
                <el-popover
                  placement="left-end"
                  trigger="click"
                 >
                  <div class="clearfix">
                    <span style="cursor:pointer;margin-left:10px;" class="left-f el-icon-star-off">
                      <i style="padding-left:5px;">赞</i>
                    </span>
                    <span style="cursor:pointer;margin-right:10px;" class="right-f el-icon-chat-square">
                      <i style="padding-left:5px;">评论</i>
                    </span>
                  </div>
                  <el-button 
                    slot="reference" 
                    type="text"
                    style="font-size:18px;color:#999;"
                    round 
                    icon="el-icon-more"></el-button>
                </el-popover>
              </div>
            </div>
          </div>

          <div class="comment bg-white">
            {{item.comment}}
          </div>
        </li>
      </ul>

      <!-- 广告 -->
      <AdContainer :adImg="adImg"></AdContainer>
    </div>
  </div>
</template>

<script>
  import { getDynamicList } from '@/service/list'
  import AdContainer from '@/components/AdContainer'

  export default {
    name: 'Dynamic',
    components: {AdContainer},
    data() {
      return {
        dynamicList: [],
        count: 7,
        adImg: ''
      }
    },
    created() {
      this.getDynamicData()
    },
    methods: {
      // 获取动态列表信息
      getDynamicData() {
        getDynamicList({count: this.count}).then(res => {
          this.dynamicList = res.data
          this.adImg = res.data[0].fileList[0].fileUrl
        })
      },

      // 发布新动态
      issueNew() {}
    }
  }
</script>

<style lang='less' scoped>
.dynamic-container {
  .ct-container {
    display: flex;
    margin-top: 5px;
    .dy-list {
      flex: 1;
      .he-title {
        height: 50px;
        background-color: #fff;
        line-height: 50px;
        margin-top: 5px;
        padding: 10px 15px;
        border: 1px solid #e3e3e3;
        .he-my {
          font-size: 16px;
        }
      }
      .dy-item {
        padding: 10px;
        border: 1px solid #e3e3e3;
        margin-top: 5px;
        .text {
          font-size: 14px;
          color: #666;
          padding: 10px;
          line-height: 20px;
        }
        .img-list {
          display: flex;
          flex-wrap: wrap;
          .img-item {
            width: 150px;
            margin: 5px;
          }
        }
        .detail {
          .time {
            margin-top: 15px;
          }
        }
      }
      .comment {
        margin: 5px 0;
        border: 1px solid #e3e3e3;
        line-height: 25px;
        color: #999;
        padding: 5px 10px;
      }
    }
    
  }
}
</style>