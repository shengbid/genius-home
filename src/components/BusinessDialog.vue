<template>
  <div class="business-dialog">
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="800px">
      <el-form 
        :model="ruleForm" 
        :rules="rules" 
        ref="ruleForm" 
        label-width="110px" 
        class="demo-ruleForm">
        <el-row :gutter="20">
          <el-col :span="12"><div class="grid-content bg-purple">
            <el-form-item label="公司名" prop="bussinessName">
              <el-input v-model="ruleForm.bussinessName" maxlength="50"></el-input>
            </el-form-item>
            <el-form-item label="标题" prop="title">
              <el-input v-model="ruleForm.title" maxlength="150"></el-input>
            </el-form-item>
            <el-form-item label="行业" prop="industry">
              <el-input v-model="ruleForm.industry" maxlength="50"></el-input>
            </el-form-item>
            <el-form-item label="报价" prop="quote">
              <el-input v-model="ruleForm.quote" maxlength="50"></el-input>
            </el-form-item>
            <el-form-item label="宣传页地址" prop="website">
              <el-input v-model="ruleForm.website" maxlength="150"></el-input>
            </el-form-item>
          </div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple">
            <el-form-item label="联系邮箱" prop="email">
              <el-input v-model="ruleForm.email" maxlength="50"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" prop="phone">
              <el-input v-model="ruleForm.phone" maxlength="50"></el-input>
            </el-form-item>
            <el-form-item label="联系微信号" prop="wechart">
              <el-input v-model="ruleForm.wechart" maxlength="50"></el-input>
            </el-form-item>
            <el-form-item label="联系QQ" prop="qq">
              <el-input v-model="ruleForm.qq" maxlength="50"></el-input>
            </el-form-item>
            <el-form-item label="其他联系方式" prop="otherConcat">
              <el-input v-model="ruleForm.otherConcat" maxlength="50"></el-input>
            </el-form-item>
          </div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"><div class="grid-content bg-purple">
            <el-form-item label-width="80px" label="公司logo" prop="LogoImg">
              <el-upload
                class="avatar-uploader"
                action="/upload/file"
                :show-file-list="false"
                :on-success="handleLogoSuccess"
                :on-remove="handleLogoRemove"
                :on-preview="handlePreview"
                :before-upload="beforeUpload">
                <img v-if="ruleForm.LogoImg" :src="ruleForm.LogoImg" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">
            <el-form-item label-width="80px" label="微信" prop="wechartImg">
              <el-upload
                class="avatar-uploader"
                action="/upload/file"
                :show-file-list="false"
                :on-success="handleWechartSuccess"
                :on-remove="handleWechartRemove"
                :on-preview="handlePreview"
                :before-upload="beforeUpload">
                <img v-if="ruleForm.wechartImg" :src="ruleForm.wechartImg" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">
            <el-form-item label-width="80px" label="QQ" prop="qqImg">
              <el-upload
                class="avatar-uploader"
                action="/upload/file"
                :show-file-list="false"
                :on-success="handleQQSuccess"
                :on-remove="handleQQRemove"
                :on-preview="handlePreview"
                :before-upload="beforeUpload">
                <img v-if="ruleForm.qqImg" :src="ruleForm.qqImg" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </div></el-col>
        </el-row>
        <el-form-item label="业务描述" prop="desc">
          <el-input 
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            maxlength="500"
            show-word-limit
            v-model="ruleForm.desc"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 图片预览 -->
    <el-dialog :visible.sync="imgVisible">
      <img width="100%" :src="imageUrl" alt="">
    </el-dialog>
  </div>

</template>

<script>
  import commom from '@utils/common'
  import { getIssueInfo } from '@/service/user'

export default {
  name: 'BusinessDialog',
  props: {
    title: {
      type: String,
      default: '发布商汇'
    },
    editId: {
      type: [Number, String],
      default: ''
    },
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      ruleForm: {
        bussinessName: '',
        title: '',
        industry: '',
        quote: '',
        website: '',
        email: '',
        phone: '',
        wechart: '',
        qq: '',
        otherConcat: '',
        LogoImg: '',
        wechartImg: '',
        qqImg: '',
        desc: ''
      },
      rules: {
        bussinessName: [
          { required: true, message: '请输入公司名', trigger: 'blur' }
        ],
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        industry: [
          { required: true, message: '请输入行业', trigger: 'blur' }
        ],
        quote: [
          { required: true, message: '请输入报价', trigger: 'blur' }
        ],
        website: [
          { required: false, message: '请输入宣传页地址', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入联系邮箱', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入联系电话', trigger: 'blur' }
        ],
        wechart: [
          { required: false, message: '请输入联系微信号', trigger: 'blur' }
        ],
        qq: [
          { required: false, message: '请输入联系QQ', trigger: 'blur' }
        ]
      },
      imgVisible: false,
      imageUrl: ''
    }
  },
  watch: {
    editId: function(val) {
      if (val) {
        this.getBusinessInfo()
      }
    }
  },
  created() {
  },

  methods: {
    // 编辑获取商汇信息
    getBusinessInfo() {
      getIssueInfo({id: this.editId}).then(res => {
        this.ruleForm = res.data
      })
    },

    // 提交商汇
    submitForm() {
      this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            this.$emit('submit', this.ruleForm)
            console.log(1, this.ruleForm)
            this.resetForm()
          } else {
            console.log('error submit!!')
            return false
          }
        })
    },

    // 取消商汇
    handleCancel() {
      this.$emit('submit', this.ruleForm)
      this.resetForm()
    },

    beforeUpload(file) {
      console.log(file)
      const type = commom.isPictureType(file)
      const limit = commom.isLimitFile(file)
      if (!type) {
        this.$message({
          message: '必须上传图片类型',
          type: 'warning'
        })
      }
      if (!limit) {
        this.$message({
          message: '图片大小不能超过4M',
          type: 'warning'
        })
      }

      return type && limit
    },

    handlePreview(file) {
      console.log(file)
      if (file.response && file.response.data) {
        this.imageUrl = file.response.data.file
        this.imgVisible = true
      }
    },

    // 上传logo
    /** -------------------------- */
    handleLogoSuccess(res) {
      console.log(res)
      this.ruleForm.LogoImg = res.data.file
    },

    handleLogoRemove() {
      this.ruleForm.LogoImg = ''
    },

    /** -------------------------- */

    // 上传微信
    /** -------------------------- */
    handleWechartSuccess(res) {
      console.log(res)
      this.ruleForm.wechartImg = res.data.file
    },

    handleWechartRemove() {
      this.ruleForm.wechartImg = ''
    },

    /** -------------------------- */

    // 上传QQ
    /** -------------------------- */
    handleQQSuccess(res) {
      console.log(res)
      this.ruleForm.qqImg = res.data.file
    },

    handleQQRemove() {
      this.ruleForm.qqImg = ''
    },
    /** -------------------------- */

    // 重置form表单
    resetForm() {
      this.ruleForm = {
        bussinessName: '',
        title: '',
        industry: '',
        quote: '',
        website: '',
        email: '',
        phone: '',
        wechart: '',
        qq: '',
        otherConcat: '',
        LogoImg: '',
        wechartImg: '',
        qqImg: '',
        desc: ''
      }
    }
  }
}
</script>

<style lang="less">
.business-dialog {
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 148px;
    height: 148px;
    line-height: 148px;
    text-align: center;
  }
  .avatar {
    width: 148px;
    height: 148px;
    display: block;
  }
}
</style>