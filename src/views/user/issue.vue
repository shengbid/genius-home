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
            <el-button type="primary" @click="editIssue" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" @click="deleteIssue" icon="el-icon-delete" circle></el-button>
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
    <!-- 发布新商汇 -->
    <BusinessDialog 
      :title="title" 
      :dialogVisible="dialogVisible"
      :editId="editId"
      @cancel="handleCancel"
      @submit="handleSubmit" />
  </div>
</template>

<script>
  import { getMainCompanyList } from '@/service/list'
  import Require from '@/components/BussinessReqiure'
  import AdContainer from '@/components/AdContainer'
  import BusinessDialog from '@/components/BusinessDialog'

  export default {
    name: 'Issue',
    components: {Require, AdContainer, BusinessDialog},
    data() {
      return {
        count: 8,
        mianCompanyList: [],
        adImg: '',
        dialogVisible: false,
        title: '发布商汇',
        editId: ''
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
      issueNew() {
        this.title = '发布商汇'
        this.dialogVisible = true
      },

      // 编辑商汇
      editIssue() {
        this.title = '修改商汇'
        this.editId = 12
        this.dialogVisible = true
      },

      // 删除商汇
      deleteIssue() {
        this.$confirm('是否确认删除', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })         
        })
      },

      // 提交商汇
      handleSubmit(form) {
        console.log(2, form)
        this.dialogVisible = false
        this.editId = null
      },
      // 取消
      handleCancel() {
        this.dialogVisible = false
        this.editId = null
      }
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