<template>
  <div class="issue-container">
    <div class="ct-container">
      <!-- 商汇列表 -->
      <Require :mianCompanyList="mianCompanyList">
        <template v-slot:header>
          <li class="he-title clearfix">
            <span class="he-my left-f">我发布的商汇需求</span>
            <div class="right-f">
              <el-button type="primary" @click="issueNew">发布新商汇需求</el-button>
            </div>
          </li>
        </template>
        <template v-slot:detail="scope">
          <div class="oprate">
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </div>
          <div class="de-text">
            <span class="de-title">描述:</span>
            {{ scope.item.detail }}
          </div>
        </template>
      </Require>

      <!-- 广告 -->
      <AdContainer :adImg="adImg"></AdContainer>
    </div>
  </div>
</template>

<script>
  import { getMainCompanyList } from '@/service/list'
  import Require from '@/components/BussinessReqiure'
    import AdContainer from '@/components/AdContainer'

  export default {
    name: 'Issue',
    components: {Require, AdContainer},
    data() {
      return {
        count: 8,
        mianCompanyList: [],
        adImg: '',
        business: {
          title: '发布商汇'
        }
      }
    },
    created() {
      this.getMainCompanyData()
    },
    methods: {
      // 获取商圈信息
      getMainCompanyData() {
        getMainCompanyList({count: this.count}).then(res => {
          this.mianCompanyList = res.data
          this.adImg = this.mianCompanyList[0].logo
        })
      },

      // 发布新商汇需求
      issueNew() {}
    }
  }
</script>

<style lang='less' scoped>
.issue-container {
  .ct-container {
    display: flex;
    // .ad-container {
    //   flex-basis: 400px;
    //   margin-left: 10px;
    //   margin-top: 5px;
    //   .ad-content {
    //     padding: 15px;
    //   }
    //   .ad-title {
    //     font-size: 16px;
    //     padding-bottom: 10px;
    //   }
    // }
  }
}
</style>