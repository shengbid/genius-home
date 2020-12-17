<template>
  <div class="identity-container">
    <div class="form-container bg-white">
      <div class="id-title">
        <span class="el-icon-s-custom"></span>
        完善身份信息
      </div>
      <el-form 
        :model="ruleForm" 
        :inline="true"
        :rules="rules" 
        ref="ruleForm" 
        label-width="110px" 
        class="demo-ruleForm">
        <el-form-item label="商汇名称" prop="bussinessName">
          <el-input v-model="ruleForm.bussinessName" maxlength="50"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="ruleForm.age" maxlength="3"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="ruleForm.sex" placeholder="请选择">
            <el-option
              v-for="item in sexOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="专业" prop="profession">
          <el-input v-model="ruleForm.profession" maxlength="50"></el-input>
        </el-form-item>
        <el-form-item label="经验年限" prop="experience">
          <el-input v-model="ruleForm.experience" maxlength="3"></el-input>
        </el-form-item>
        <el-form-item label="身份证号码" prop="identity">
          <el-input v-model="ruleForm.identity" maxlength="20"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name" maxlength="50"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="ruleForm.phone" maxlength="15"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="telephone">
          <el-input v-model="ruleForm.telephone" maxlength="11"></el-input>
        </el-form-item>
        <el-form-item label="微信" prop="wechart">
          <el-input v-model="ruleForm.wechart" maxlength="20"></el-input>
        </el-form-item>
        <el-form-item label="QQ" prop="qq">
          <el-input v-model="ruleForm.qq" maxlength="20"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email" maxlength="50"></el-input>
        </el-form-item>
        <el-form-item label="广告网址" prop="website">
          <el-input v-model="ruleForm.website" maxlength="100"></el-input>
        </el-form-item>
        <div class="sw-list">
          <el-form-item label="是否开放动态" prop="isStatus">
            <el-switch
              v-model="ruleForm.isStatus">
            </el-switch>
          </el-form-item>
          <el-form-item label="是否开放相册" prop="isPhoto">
            <el-switch
              v-model="ruleForm.isPhoto">
            </el-switch>
          </el-form-item>
          <el-form-item label="允许牛人联手" prop="isRelaction">
            <el-switch
              v-model="ruleForm.isRelaction">
            </el-switch>
          </el-form-item>
          <el-form-item label="简历公开" prop="isResume">
            <el-switch
              v-model="ruleForm.isResume">
            </el-switch>
          </el-form-item>
        </div>
        <el-form-item label="头像" prop="avatar">
          <el-upload
            class="avatar-uploader"
            action="/upload/file"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :on-remove="handlAvatareRemove"
            :on-preview="handlePreview"
            :before-upload="beforeUpload">
            <img v-if="ruleForm.avatar" :src="ruleForm.avatar" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="微信" prop="wechartImg">
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
        <el-form-item label="QQ" prop="qqImg">
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
        <div class="up-list">
          <el-form-item label="广告" prop="ad">
            <el-upload
              action="/upload/file"
              :limit="5"
              list-type="picture-card"
              :file-list="file.adList"
              :on-success="handleAdSuccess"
              :on-preview="handlePreview"
              :before-upload="beforeUpload"
              :on-remove="handleAdRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="个人介绍" prop="desc">
            <el-input 
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              maxlength="500"
              show-word-limit
              v-model="ruleForm.desc"
            ></el-input>
          </el-form-item>
        </div>
        <div class="submit">
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>

    <!-- 历史商汇 -->
    <History />

    <!-- 图片预览 -->
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
  import commom from '@utils/common'
  import History from '@/components/HistoryBussiness'

  export default {
    name: 'Identity',
    components: {History},
    data() {
      return {
        ruleForm: {
          bussinessName: '',
          age: '',
          sex: null,
          profession: '',
          experience: '',
          identity: '',
          name: '',
          phone: null,
          telephone: null,
          wechart: null,
          qq: null,
          email: '',
          website: '',
          isStatus: false,
          isPhoto: false,
          isRelaction: false,
          isResume: false,
          desc: '',
          avatar: '',
          wechartImg: '',
          qqImg: '',
          ad: null
        },
        file: {
          avatarList: [],
          wechartList: [],
          qqList: [],
          adList: []
        },
        dialogVisible: false,
        dialogImageUrl: '',
        rules: {
          bussinessName: [
            { required: true, message: '请输入商汇名称', trigger: 'blur' },
          ],
          age: [
            { required: true, message: '请输入年龄', trigger: 'blur' },
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' },
          ],
          profession: [
            { required: false, message: '请输入专业', trigger: 'blur' },
          ],
          experience: [
            { required: false, message: '请输入经验年限', trigger: 'blur' },
          ],
          identity: [
            { required: true, message: '请输入身份证号码', trigger: 'blur' },
          ],
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
          ],
          phone: [
            { required: false, message: '请输入电话', trigger: 'blur' },
          ],
          telephone: [
            { required: true, message: '请输入手机号码', trigger: 'blur' },
          ],
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
          ]
        },
        sexOptions: [
          {label: '男', value: 0},
          {label: '女', value: 1}
        ]
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (this.file.adList.length) {
              const files = this.file.adList.map(item => {
                return item.response.data.file
              })
              this.ruleForm.ad = files
            }
            console.log(1, this.ruleForm)
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },

      // 上传头像
      /** -------------------------- */
      handleAvatarSuccess(res) {
        console.log(res)
        this.ruleForm.avatar = res.data.file
      },

      handlAvatareRemove() {
        this.ruleForm.avatar = ''
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
          this.dialogImageUrl = file.response.data.file
          this.dialogVisible = true
        }
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

      // 上传广告
      /** -------------------------- */
      handleAdSuccess(res, file, fileList) {
        console.log(file, fileList)
        this.file.adList = fileList
      },

      handleAdRemove(file, fileList) {
        this.file.adList = fileList
      }
      /** -------------------------- */

    }
  }
</script>

<style lang='less'>
.identity-container {
  margin-top: 10px;
  .form-container {
    padding: 20px;
  }
  .id-title {
    font-size: 16px;
    color: #666;
    line-height: 40px;
    font-weight: bold;
    padding-bottom: 20px;
  }
  .el-form-item__content {
    width: 275px;
  }
  .up-list {
    .el-form-item__content {
      width: 900px;
    }
  }
  .sw-list {
    .el-form-item__content {
      width: 180px;
    }
  }

  .el-input {
    width: 275px;
  }
  .el-textarea {
    width: 900px;
  }
  .submit {
    margin-top: 20px;
    padding-left: 102px;
  }
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