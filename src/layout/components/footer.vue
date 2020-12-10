<template>
  <footer class="footer-container clearfix">
      <div class="footer-content com-container clearfix">
        <ul class="footer-ul">
          <li class="fo-title">
            关于我们
          </li>
          <li class="fo-item">
            <a href="javascript:void(0)">企业简介</a>
          </li>
          <li class="fo-item">
            <a href="javascript:void(0)">平台公告</a>
          </li>
          <li class="fo-item">
            <a href="javascript:void(0)">企业文化</a>
          </li>
        </ul>
        <ul class="footer-ul">
          <li class="fo-title">
            交易保障
          </li>
          <li class="fo-item">
            <a href="javascript:void(0)">担保交易</a>
          </li>
          <li class="fo-item">
            <a href="javascript:void(0)">网站协议</a>
          </li>
          <li class="fo-item">
            <a href="javascript:void(0)">支付方式</a>
          </li>
        </ul>
        <ul class="footer-ul">
          <li class="fo-title">
            帮助中心
          </li>
          <li class="fo-item">
            <a href="javascript:void(0)">意见反馈</a>
          </li>
          <li class="fo-item">
            <a href="javascript:void(0)">投诉举报</a>
          </li>
        </ul>
        <ul class="footer-ul">
          <li class="fo-title">
          联系我们
          </li>
          <li class="fo-item">
            400-008-8182
          </li>
          <li class="fo-item">
            官方微信
            <div class="wechart">
              <img src="@assets/imgs/logo/weChat.jpg" alt="">
            </div>
          </li>
        </ul>
      </div>
      <div class="copyright">
        ©CopyRight 2006-2020 JB51.Net Inc All Rights Reserved. G商汇 版权所有
      </div>
    </footer>
</template>
<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="less">
.footer-container {
  background-color: #333;
  padding-top: 15px;
  height: 260px;

  .footer-content {
    height: 220px;
  }
  .footer-ul {
    width: 25%;
    float: left;
    .fo-title {
      height: 40px;
      font-size: 16px;
      color: #fff;
      line-height: 40px;
    }
    .fo-item {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      color: #b2b2b2;
      .wechart {
        width: 100px;
        height: 100px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .copyright {
    text-align: center;
    color: #ccc;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }
}
</style>