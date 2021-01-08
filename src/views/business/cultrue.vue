<template>
  <div class="cultrue-container">
    <div class="cu-content">
      <div class="cu-info">
        <div class="item link">
          <el-button  @click="handleLink(0)" v-if="!links.name" type="primary">添加链接地址</el-button>
          <div v-else>
            <span class="link-label">链接地址</span>
            <el-button @click="handleLink(1)" type="primary">{{links.name}}</el-button>
          </div>
        </div>
        <div class="item brief">
          <div class="title"><div class="line"></div>公司简介</div>
          <div class="content">
            <el-input
              type="textarea"
              maxlength="1000"
              placeholder="请输入内容"
              show-word-limit
              :autosize="{minRows: 3}"
              v-model="companyInfo.brief">
            </el-input>
          </div>
        </div>
        <div class="item">
          <div class="title"><div class="line"></div>公司文化</div>
          <div class="content">
          </div>
        </div>
        <div class="item">
          <div class="title"><div class="line"></div>公司活动</div>
          <div class="content">
          </div>
        </div>
        <div class="item">
          <div class="title"><div class="line"></div>公司动态</div>
          <div class="content">
          </div>
        </div>
      </div>

      <!-- 广告 -->
      <AdContainer :adImg="adImg"></AdContainer>
    </div>
    <el-dialog
      title="编辑链接地址"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="50%">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="110px">
        <el-form-item label="按钮名称" prop="name">
          <el-input maxlength="50" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="跳转网页地址" prop="web">
          <el-input maxlength="200" v-model="ruleForm.web"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitLink">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import AdContainer from '@/components/AdContainer'

  export default {
    name: 'Cultrue',
    components: {AdContainer},
    data() {
      return {
        adImg: '',
        links: {
          name: '444',
          web: '44455'
        },
        dialogVisible: false,
        ruleForm: {
          name: '',
          web: ''
        },
        rules: {
          name: [{ required: true, message: '请输入按钮名称', trigger: 'blur' }],
          web: [{ required: true, message: '请输入跳转网页地址', trigger: 'blur' }]
        },
        companyInfo: {
          brief: ''
        }
      }
    },

    methods: {
      // 点击添加链接地址
      handleLink(type) {
        this.ruleForm = {
          name: '',
          web: ''
        }
        this.$refs['ruleForm'] && this.$refs['ruleForm'].resetFields()
        if (type) {
          this.ruleForm = this.links
        }
        this.dialogVisible = true
      },
      // 提交链接
      submitLink() {
         this.$refs['ruleForm'].validate((valid) => {
           if (valid) {
             console.log(this.ruleForm)
           }
         })
      }
    }
  }
</script>

<style lang="less">
.cultrue-container {
  .cu-content {
    display: flex;
    .cu-info {
      flex: 1;
      margin-top: 5px;
      .item {
        padding: 30px;
        background-color: #fff;
        margin-bottom: 10px;
      }
      .link {
        .link-label {
          font-size: 14px;
          margin-right: 15px;
        }
      }
      .title {
        font-size: 16px;
        color: rgba(0, 0, 0, .7);
        padding-bottom: 35px;
        font-weight: bold;
        .line {
          display: inline-block;
          width: 3px;
          height: 17px;
          margin-right: 8px;
          background-color: #e61717;
        }
      }
    }
  }
}
</style>