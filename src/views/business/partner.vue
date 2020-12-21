<template>
  <div class="partner-container">
    <div class="pr-content">
      <div class="pr-info">
        <div class="he-title clearfix bg-white">
          <span class="he-my left-f">{{ title }}</span>
        </div>

        <ul class="pr-list bg-white">
          <li 
            class="pr-item"
            v-for="item in fileList"
            :key="item.id"
          >
            <img :src="item.fileUrl" alt="">
          </li>
        </ul>
      </div>

      <!-- 广告 -->
      <AdContainer :adImg="adImg"></AdContainer>
    </div>
  </div>
</template>

<script>
  import AdContainer from '@/components/AdContainer'
  import { getConcatList } from '@/service/user'

  export default {
    name: 'Partner',
    components: {AdContainer},
    data() {
      return {
        adImg: '',
        title: '我的商业伙伴',
        fileList: []
      }
    },
    watch: {
      '$route': function(val) {
        if (val && val.path.indexOf('partner1') > -1) {
          this.title = '合作牛人'
        } else {
          this.title = '我的商业伙伴'
        }
      }
    },
    created() {
      if (this.$route.path.indexOf('partner1') > -1) {
        this.title = '合作牛人'
      }
      this.getConcatData()
    },

    methods: {
      // 获取伙伴列表
      getConcatData() {
        getConcatList().then(res => {
          this.fileList = res.data
        })
      }
    }
  }
</script>

<style lang="less">
.partner-container {
  .pr-content {
    display: flex;
    .pr-info {
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
      .pr-list {
        display: flex;
        margin-top: 10px;
        padding: 10px;
        flex-wrap: wrap;
        .pr-item {
          width: 192px;
          margin: 5px;
        }
      }
    }
  }
}
</style>