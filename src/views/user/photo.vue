<template>
  <div class="photo-container">
    <ul class="photo-list">
      <li class="he-title clearfix bg-white">
        <span class="he-my left-f">我的相册</span>
        <div class="right-f">
          <el-button 
            size="small" 
            type="primary" 
            @click="deleteMore">批量删除</el-button>
          <el-button v-show="cancel" size="small" type="info" @click="cancelDelete">取消</el-button>
        </div>
      </li>
      <li
        class="photo-item bg-white"
        v-for="item in photoList"
        :key="item.id"
      >
        <div class="time clearfix">
          <span class="left-f tx">{{ item.time }}</span>
        </div>
        <ul class="img-list">
          <li
            class="img-item"
            v-for="subItem in item.fileList"
            :key="subItem.id"
          >
            <div class="select" v-show="isCheck">
              <el-checkbox v-model="subItem.check" @change="changeSelect(subItem)"></el-checkbox>
            </div>
            <div class="img-box">
              <img :src="subItem.fileUrl" alt="">
              <div class="shade">
                <i class="i-icon el-icon-zoom-in" @click="handlePreview(subItem)"></i>
                <i class="i-icon el-icon-delete" @click="handleRemove(subItem)"></i>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>

    <!-- 广告 -->
    <AdContainer :adImg="adImg"></AdContainer>

    <!-- 图片预览 -->
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
  import AdContainer from '@/components/AdContainer'
  import { getDynamicList } from '@/service/list'

  export default {
    name: 'Photo',
    components: {AdContainer},
    data() {
      return {
        photoList: [],
        count: 7,
        adImg: '',
        isCheck: false,
        cancel: false,
        selectList: [],
        dialogVisible: false,
        dialogImageUrl: ''
      }
    },
    created() {
      this.getPhotoData()
    },
    methods: {
      // 获取照片列表
      getPhotoData() {
        getDynamicList().then(res => {
          this.photoList = res.data.map(item => {
            if (item.fileList && item.fileList.length) {
              item.fileList.forEach(ss => {
                ss.check = false
              })
            }
            return item
          })
          this.adImg = res.data[0].fileList[0].fileUrl
        })
      },

      // 点击批量删除
      deleteMore() {
        if (this.isCheck) {
          console.log(this.selectList)
        } else {
          this.isCheck = true
          this.cancel = true
        }
      },

      // 取消删除
      cancelDelete() {
        this.isCheck = false
        this.cancel = false
      },

      // 选择图片
      changeSelect(item) {
        console.log(77, item)
        if (item.check) {
          this.selectList.push(item)
        }
      },

      // 预览图片
      handlePreview(item) {
        console.log(item)
        this.dialogImageUrl = item.fileUrl
        this.dialogVisible = true
      },

      // 单张删除图片
      handleRemove(item) {
        console.log(item)
      }
    }
  }
</script>

<style lang='less' scoped>
.photo-container {
  display: flex;
  .photo-list {
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
    .photo-item {
      padding: 10px;
      border: 1px solid #e3e3e3;
      margin-top: 5px;

      .time {
        font-size: 14px;
        padding: 10px;
        padding-bottom: 15px;
        color: #666;
        .tx {
          margin-top: 5px;
        }
      }
      .img-list {
        display: flex;
        flex-wrap: wrap;
        .img-item {
          width: 150px;
          margin: 5px;
          .select {
            text-align: right;
          }
          .img-box {
            position: relative;
            &:hover {
              .shade {
                display: block;
              }
            }
            .shade {
              display: none;
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              font-size: 24px;
              line-height: 180px;
              text-align: center;
              background-color: rgba(0, 0, 0, .7);
              color: #fff;
              .i-icon {
                cursor: pointer;
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>