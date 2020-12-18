<template>
  <div class="resume-container">
    <div class="resume-content">
      <div class="he-title bg-white clearfix">
        <span class="he-my left-f">我的简历</span>
        <div class="he-op right-f">
          
        </div>
      </div>

      <div class="user-info bg-white">
        <ul class="user-list">
          <li class="user-item">
            <span class="tit">姓名:</span>
            <span class="txt">张三</span>
          </li>
          <li class="user-item">
            <span class="tit">性别:</span>
            <span class="txt">女</span>
          </li>
          <li class="user-item">
            <span class="tit">联系电话:</span>
            <span class="txt">181-5589-6936</span>
          </li>
          <li class="user-item">
            <span class="tit">微信号:</span>
            <span class="txt">18155896936</span>
          </li>
          <li class="user-item">
            <span class="tit">QQ:</span>
            <span class="txt">589666222</span>
          </li>
        </ul>
        <div class="send">
          <el-upload
            class="upload-demo"
            action="/upload/file"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :before-upload="beforeUpload"
            multiple
            :limit="20"
            :file-list="fileList">
            <el-button size="small" type="primary">上传简历</el-button>
            <div slot="tip" class="el-upload__tip">文件大小不超过4M</div>
          </el-upload>
        </div>
      </div>
    </div>

    <!-- 广告 -->
    <AdContainer :adImg="adImg"></AdContainer>
  </div>
</template>

<script>
  import AdContainer from '@/components/AdContainer'
  import commom from '@utils/common'

  export default {
    name: 'Resume',
    components: {AdContainer},
    data() {
      return {
        adImg: 'https://dummyimage.com/400x300/79bef2/FFF&text=faxpx',
        fileList: []
      }
    },
    created() {

    },
    methods: {
      // 上传简历
      apply() {},

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
          const url = file.response.data.file
          window.open(url)
        }
      },

      handleSuccess(res, file, fileList) {
        console.log(file, fileList)
        this.fileList = fileList
      },

      handleRemove(file, fileList) {
        this.fileList = fileList
      }
    }
  }
</script>

<style lang='less' scoped>
.resume-container {
  display: flex;
  .resume-content {
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

    .user-info {
      margin-top: 5px;
      min-height: 480px;
      .user-list {
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        font-size: 14px;
      }
      .user-item {
        width: 330px;
        margin: 10px;
        .tit {
          font-weight: bold;
          margin-right: 5px;
        }
      }

      .send {
        padding: 20px;
        padding-bottom: 40px;
        width: 60%;
      }
    }
  }
}
</style>