<template>
  <div class="detial-dialog">
    <!-- 商汇详情 -->
    <el-dialog
      title="商汇详情"
      :visible="visible"
      :before-close="closeDetail"
      width="800px">
      <div class="detail-box">
        <ul class="concat-detail">
          <li class="logo">
            <img :src="detailForm.logo" alt="">
          </li>
          <li class="name">
            {{ detailForm.name }}
          </li>
          <li class="co-item">
            {{ detailForm.text }}
          </li>
          <li class="co-item">
            <span class="tit">报价:</span>{{ detailForm.price }}
          </li>
          <li class="remark">
            <span class="tit">业务备注:</span>
            <div class="mark">{{ detailForm.detail }}</div>
          </li>
        </ul>
        <ul class="file-box clearfix">
          <li class="title">附件</li>
          <li
            class="file"
            v-for="item in fileList"
            :key="item.id"
          >
            <img :src="item.fileUrl" alt="">
          </li>
        </ul>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="forget" type="primary" v-if="isPush" @click="pushBussiness">加入商汇</el-button>
        <el-button class="forget" type="info" v-if="!isPush" @click="pullBussiness">踢出商汇</el-button>
        <el-button type="primary" @click="tooffice">进入官网</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import { isBuyer } from '@/utils/utils'

  export default {
    name: 'DetailDialog',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      detailForm: {
        type: Object,
        default: () => {return {}}
      },
      fileList: {
        type: Array,
        default: () => {return []}
      },
      isPush: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
      }
    },

    methods: {
      // 拉入商汇
      pushBussiness() {
        let info = this.detailForm
        console.log(info)
        this.$confirm('已将需求拉入商汇.请到【Mine商会圈】获取对方联系方式', '提示', {
          confirmButtonText: '进入My商汇圈查看',
          type: 'success',
          showCancelButton: false
        }).then(() => {
          this.$router.push({
            name: isBuyer() ? 'User' : 'Business',
            params: isBuyer() ? 1 : 2
          })
        }).catch(() => {         
        });
      },

      // 踢出商汇
      pullBussiness() {
        this.$confirm('确认踢出商汇?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '已踢出我的商汇!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      },

      // 进入官网
      tooffice() {console.log(8999)},

      // 关闭弹框
      closeDetail() {
        console.log(888)
        this.$emit('cancel')
      }
    }
  }
</script>

<style lang="less">
.detial-dialog {

  .detail-box {
    display: flex;
    .concat-detail {
      flex: 1;
      .logo {
        width: 120px;
        height: 100px;
      }
      .name {
        font-size: 14px;
        font-weight: bold;
        padding: 10px 0 20px 0;
      }
      .co-item {
        color: #ff6900;
        font-size: 14px;
        padding: 6px 0;
      }
      .remark {
        padding: 10px 0;
        .tit {
          line-height: 30px;
        }
      }
      .mark {
        border: 1px solid #e3e3e3;
        line-height: 28px;
      }
    }
    .file-box {
      flex: 1;
      padding-left: 15px;
      .title {
        line-height: 30px;
        font-size: 14px;
      }
      .file {
        width: 110px;
        padding: 5px;
        float: left;
      }
    }
  }
}
</style>