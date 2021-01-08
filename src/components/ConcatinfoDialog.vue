<template>
  <div class="concat-dialog">
    <el-dialog
      title="联系人信息"
      :visible.sync="visible"
      :before-close="handleCancel"
      :close-on-click-modal="false"
      width="800px">
      <div class="detail-box">
        <div class="tip">
          <span class="tip-tit">温馨提示:</span>
          <span>商汇数据仅为了大家方便线下交易,请勿用于其他用途,请遵守平台条约</span>
        </div>
        <ul class="comapny-info clearfix">
          <li class="logo left-f">
            <img :src="detailForm.logo" alt="">
          </li>
          <li class="name left-f">
            {{ detailForm.name }}
          </li>
        </ul>
        <ul class="concat-info">
          <li class="co-item">
            <span class="tit">联系电话:</span>
            <span class="txt">{{ detailForm.tel }}</span>
          </li>
          <li class="co-item">
            <span class="tit">联系手机:</span>
            <span class="txt">{{ detailForm.phone }}</span>
          </li>
          <li class="co-item">
            <span class="tit">微信:</span>
            <span class="txt">{{ detailForm.wechart }}</span>
          </li>
          <li class="co-item">
            <span class="tit">QQ:</span>
            <span class="txt">{{ detailForm.qq }}</span>
          </li>
          <li class="co-item">
            <span class="tit">邮箱:</span>
            <span class="txt">{{ detailForm.email }}</span>
          </li>
        </ul>
        <ul class="img-info">
          <li class="img-item">
            <span class="tit">微信二维码:</span>
            <div class="img">
              <img :src="detailForm.wxImg" alt="">
            </div>
          </li>
          <li class="img-item">
            <span class="tit">qq二维码:</span>
            <div class="img">
              <img :src="detailForm.qqImg" alt="">
            </div>
          </li>
        </ul>

      </div>
    </el-dialog>
  </div>
</template>

<script>

  export default {
    name: 'LinkDialog',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      detailForm: {
        type: Object,
        default: () => {return {}}
      }
    },

    methods: {
      handleCancel() {
        console.log(999)
        this.$emit('cancelLink')
      }
    }
  }
</script>

<style lang="less">

  .detail-box {
    .tip {
      margin-bottom: 10px;
      .tip-tit {
        color:#ff6900;
      }
    }
    .comapny-info {
      margin: 20px 0;
      .logo {
        width: 130px;
        height: 100px;
      }
      .name {
        font-size: 16px;
        font-weight: bold;
        padding: 20px;
      }
    }
    .concat-info {
      display: flex;
      flex-wrap: wrap;
      .co-item {
        width: 250px;
        padding: 10px 0;
        .tit {
          font-weight: bold;
          margin-right: 5px;
        }
      }
    }
    .img-info {
      display: flex;
      margin: 20px 0;
      .img-item {
        width: 260px;
        .tit {
          font-weight: bold;
          line-height: 28px;
        }
        .img {
          width: 140px;
          height: 140px;
        }
      }
    }
  }
</style>