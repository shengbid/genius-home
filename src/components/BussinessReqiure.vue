<template>
    <ul class="ct-list">
      <slot name="header"></slot>
      <li
        :key="item.id"
        v-for="item in mianCompanyList" 
        class="infinite-list-item clearfix main-box bg-white"
        >
        <div class="ct-logo">
          <img :src="item.logo" alt="">
        </div>
        <div class="ct-content">
          <div class="ct-title">{{item.name}}</div>
          <div class="ct-text">{{item.text}}</div>
          <div class="ct-time">拉入时间: <span class="m-tit">{{item.time}}</span></div>
          <div class="ct-status">
            发布状态: 
            <span 
              class="normal"
              :class="{urgent: item.status === 1, lose: item.status === 2 }"
            >{{item.status | handleStatus()}}</span>
          </div>
          <div class="ct-price">价格: ￥{{item.price}}</div>
          <div class="ct-credit">
            <span>信誉度:</span>
            <el-rate
              v-model="item.credit"
              disabled
              text-color="#ff9900"/>
            </div>
        </div>
        <div class="ct-detail">
          <slot name="detail" :item="item"></slot>
        </div>
      </li>
    </ul>
</template>

<script>

export default {
  name: 'BussinessReqiure',
  props: {
    mianCompanyList: {
      type: Array,
      default: ()=> {return []}
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="less">
  .ct-list {
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
    .main-box {
      padding: 10px;
      border: 1px solid #e3e3e3;
      display: flex;
      margin-top: 5px;
      .ct-logo {
        flex-basis: 150px;
        height: 180px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .ct-content {
        padding-left: 30px;
        flex-basis: 215px;
        .ct-title {
          font-size: 16px;
          height: 30px;
          line-height: 30px;
          font-weight: bold;
        }
        .ct-text {
          color: #666;
          font-size: 14px;
          line-height: 40px;
        }
        .ct-status {
          line-height: 28px;
        }
        .ct-credit {
          line-height: 28px;
        }
        .el-rate {
          display: inline-block;
          line-height: 12px;
          margin-left: 5px;
        }
        .m-tit {
          margin-left: 5px;
        }
        .normal {
          color: #009943;
          margin-left: 5px;
          font-size: 14px;
        }
        .urgent {
          color: #e61717;
        }
        .lose {
          color: #999;
        }
        .ct-price {
          color: #ff6900;
          font-size: 14px;
          line-height: 20px;
        }
      }
      .ct-detail {
        padding-left: 30px;
        flex: 1;
        .de-button {
          margin-left: 70px;
        }
        .de-text {
          margin-top: 30px;
        }
      }
    }
  }
</style>