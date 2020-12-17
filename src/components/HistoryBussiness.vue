<template>
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
</template>

<script>
  import { getConcatList } from '@/service/user'
  export default {
    name: 'History',
    data() {
      return {
        historyList: []
      }
    },
    created() {
      this.getHistoryData()
    },
    methods: {
      getHistoryData() {
        getConcatList().then(res => {
          const data = res.data
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

<style lang="less">
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
</style>