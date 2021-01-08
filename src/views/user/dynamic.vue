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

    <!-- 发布动态 -->
    <el-dialog
      title="发布动态"
      :visible.sync="dynamicInfo.visible"
      :before-close="handleCancel"
      :close-on-click-modal="false"
      width="800px">
      <el-form 
        :model="dynamicInfo.ruleForm" 
        :rules="dynamicInfo.rules" 
        ref="ruleForm" 
        label-width="110px" 
        class="demo-ruleForm">
        <el-form-item label="发布内容" prop="desc">
          <el-input 
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5}"
            maxlength="500"
            show-word-limit
            v-model="dynamicInfo.ruleForm.desc"
          ></el-input>
        </el-form-item>
        <el-form-item label="图片" prop="fileUrl">
          <el-upload
            list-type="picture-card"
            action="/upload/file"
            :limit="9"
            multiple
            accept="image/png, image/jpeg"
            :file-list="dynamicInfo.fileList"
            :on-success="handleSuccess"
            :on-remove="handleRemove"
            :on-preview="handlePreview"
            :before-upload="beforeUpload">
            <i class="el-icon-plus"></i>
          </el-upload>
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
  import { getDynamicList } from '@/service/list'
  import AdContainer from '@/components/AdContainer'
  import commom from '@utils/common'

  export default {
    name: 'Dynamic',
    components: {AdContainer},
    data() {
      return {
        dynamicList: [],
        count: 7,
        adImg: '',
        imgVisible: false,
        imageUrl: '',
        dynamicInfo: {
          visible: false,
          ruleForm: {
            desc: ''
          },
          fileList: [],
          rules: {
            desc: [{ required: true, message: '请填写发布内容', trigger: 'blur' }]
          }
        }
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
      issueNew() {
        this.dynamicInfo.visible = true
      },

      beforeUpload(file) {
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

      handleSuccess(res, file, fileList) {
        console.log(res)
        this.dynamicInfo.fileList = fileList
      },

      handleRemove(file, fileList) {
        this.dynamicInfo.fileList = fileList
      },

      // 发布动态
      submitForm() {
        this.$refs['ruleForm'].validate((valid) => {
          if (valid) {

            console.log(1, this.dynamicInfo)
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },

      // 取消
      handleCancel() {
        this.dynamicInfo.visible = false
        this.$refs['ruleForm'] && this.$refs['ruleForm'].resetFields()
        this.resetForm()
      },

      resetForm() {
        this.dynamicInfo.ruleForm = {
          desc: ''
        }
        this.dynamicInfo.fileList = []
      }
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