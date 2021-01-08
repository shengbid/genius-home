<template>
  <div class="user-container">
    <section>
      <div class="ct-container">
        <!-- 商汇列表 -->
        <Require :mianCompanyList="mianCompanyList">
          <template slot="detail" slot-scope="scope">
            <div class="oprate">
              <el-button type="primary" @click="getConcatType">获取联系方式</el-button>
              <el-button type="info" @click="deleteConcat">踢出商汇</el-button>
              <el-button type="text" @click="toDetail(scope.item)" class="de-button">详情</el-button>
            </div>
            <div class="de-text">
              <span class="de-title">业务简介:</span>
              {{ scope.item.detail }}
            </div>
          </template>
        </Require>

        <!-- 联系人 -->
        <div class="concat-container">
          <div class="concat-content bg-white">
            <div class="co-title">
              <div class="replace">
                <span class="left-f m-title">牛人联手</span>
                <el-button class="right-f" type="text" @click="replaceData">换一批</el-button>
              </div>
              <div class="clearfix">
                <div class="right-f">
                  <el-radio v-model="loginStatus" label="1">在线</el-radio>
                  <el-radio v-model="loginStatus" label="2">离线</el-radio>
                </div>
              </div>
            </div>
            <ul class="co-list">
              <li 
                class="co-item"
                v-for="item in concatList"
                :key="item.id"
              >
                <el-badge :hidden="item.count < 1" :max="99" :value="item.count" class="item">
                  <div class="co-img">
                    <img :src="item.fileUrl" alt="">
                    <!-- <div class="add">
                      <span class="el-icon-plus"></span>
                    </div> -->
                  </div>
                </el-badge>
                <div class="co-detail">
                  <el-button 
                    type="primary" 
                    style="margin-right:50px;" 
                    icon="el-icon-plus" 
                    size="mini"
                    @click="addConcat"
                    circle></el-button>
                  <el-button type="text" @click="handleDetail(item.id)">详情信息>></el-button>
                </div>
              </li>
            </ul>
          </div>

          <div class="ad-container bg-white">
            <div class="ad-title">商汇推荐</div>
            <div class="ad-img">
              <img :src="adImg" alt="">
            </div>
          </div>
        </div>

      </div>
      <!-- 历史商汇 -->
      <History />
    </section>
    <!-- 联系人信息 -->
    <el-dialog
      title="个人信息"
      :visible.sync="conact.visible"
      :close-on-click-modal="false"
      width="40%">
      <ul class="concat-detail">
        <li class="title">
          {{ conact.info.name }}
        </li>
        <li class="co-item">
          <span class="tit">性别:</span>{{ conact.info.sex }}
        </li>
        <li class="co-item">
          <span class="tit">年龄:</span>{{ conact.info.age }}
        </li>
        <li class="co-item">
          <span class="tit">个人签名:</span>{{ conact.info.remark }}
        </li>
      </ul>
    </el-dialog>
    <!-- 商汇详情 -->
    <DetailDialog 
      :visible="detailInfo.visible"
      :detailForm="detailInfo.detailForm"
      :fileList="detailInfo.fileList"
      :isPush="false"
      @cancel="handleClose"
    ></DetailDialog>

    <!-- 获取联系人方式弹框 -->
    <LinkDialog
      :visible="linklInfo.visible"
      :detailForm="linklInfo.detailForm"
      @cancelLink="closeLink"
    />
  </div>
</template>

<script>
  import { getMainCompanyList } from '@/service/list'
  import { getConcatList } from '@/service/user'
  import History from '@/components/HistoryBussiness'
  import Require from '@/components/BussinessReqiure'
  import DetailDialog from '@/components/DetailDialog'
  import LinkDialog from '@/components/ConcatinfoDialog'

  export default {
    name: 'User',
    components: {History, Require, DetailDialog, LinkDialog},
    data() {
      return {
        mianCompanyList: [],
        count: 7,
        loginStatus: '1',
        concatList: [],
        adImg: '',
        conact: {
          visible: false,
          info: {
            name: '',
            sex: '',
            age: '',
            remark: ''
          }
        },
        detailInfo: {
          visible: false,
          detailForm: {
            logo: '',
            name: '',
            text: '',
            price: '',
            detail: ''
          },
          fileList: []
        },
        linklInfo: {
          visible: false,
          detailForm: {
            logo: '',
            name: '',
            tel: '',
            phone: '',
            wechart: '',
            qq: '',
            email: '',
            wxImg: '',
            qqImg: ''
          }
        }
      }
    },
    created() {
      this.getMainCompanyData()
      this.getConcatData()
    },
    methods: {
      // 获取商圈信息
      getMainCompanyData() {
        getMainCompanyList({count: this.count}).then(res => {
          this.mianCompanyList = res.data
        })
      },

      // 切换联系人列表
      replaceData() {},

      // 点击查看
      handleDetail() {
        this.conact.visible = true
        this.conact.info = {
          name: '张三',
          sex: '男',
          age: '34',
          remark: '个性签名'
        }
      },

      // 添加联系人
      addConcat() {
        this.$confirm('添加到我的好友', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '添加成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      },

      // 踢出商汇
      deleteConcat() {
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

      // 获取联系方式
      getConcatType() {
        this.linklInfo.visible = true
        this.linklInfo.detailForm = {
          logo: 'http://dummyimage.com/190x205/f28179&text=logo',
          name: '信息科技有限公司',
          tel: '032-5966633',
          phone: '18055669636',
          wechart: '18055669636',
          qq: '258663555',
          email: '25566666@163.com',
          wxImg: 'http://dummyimage.com/190x205/f28179&text=user',
          qqImg: 'http://dummyimage.com/190x205/f28179&text=user'
        }
      },

      // 获取详情
      toDetail(item) {
        console.log(item)
        this.detailInfo.visible = true
        this.detailInfo.detailForm = item
      },

      // 关闭弹框重置数据
      handleClose() {
        this.resetForm()
        this.detailInfo.visible = false
      },

      // 关闭联系信息弹框
      closeLink() {
        this.resetForm(1)
        this.linklInfo.visible = false
      },
      // 重置商汇详情数据
      resetForm(type) {
        if (type) {
          this.linklInfo.detailForm = {
            logo: '',
            name: '',
            tel: '',
            phone: '',
            wechart: '',
            qq: '',
            email: '',
            wxImg: '',
            qqImg: ''
          }
        } else {
          this.detailInfo.detailForm = {
            logo: '',
            name: '',
            text: '',
            price: '',
            detail: ''
          }
        }
      },

      // 获取联系人
      getConcatData() {
        getConcatList().then(res => {
          const data = res.data
          this.concatList = JSON.parse(JSON.stringify(data))
          this.concatList = this.concatList.splice(0, 6)
          this.adImg = this.concatList[0].fileUrl
          this.detailInfo.fileList = this.concatList
        })
      }
    }
  }
</script>

<style lang='less'>
.user-container {
  .ct-container {
    display: flex;
    .concat-container {
      flex-basis: 400px;
      margin-left: 10px;
      margin-top: 5px;
      .concat-content {
        padding: 15px;
      }
      .co-title {
        padding-bottom: 15px;
        border-bottom: 1px solid #e3e3e3;
        .replace {
          text-align: right;
        }
        .m-title {
          font-size: 14px;
          color: #e61717;
        }
      }
      .co-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 15px;
        .co-item {
          width: 178px;
          .el-badge__content.is-fixed {
            z-index: 99;
          }
        }
        .co-img {
          position: relative;
          &:hover {
            .add {
              display: block;
            }
          }
          .add {
            display: none;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, .7);
            text-align: center;
            line-height: 210px;
            font-size: 40px;
            color: #fff;
            cursor: pointer;
          }
        }
        .co-detail {
          // text-align: right;
          padding: 5px 0;
        }
      }
    }
    .ad-container {
      margin-top: 15px;
      padding: 15px;
      .ad-title {
        font-size: 16px;
        padding-bottom: 10px;
      }
      .ad-img {
        width: 100%;
      }
    }
  }

  .concat-detail {
    padding-left: 20px;
    .title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .co-item {
      padding: 10px 0;
      .tit {
        font-size: 14px;
        margin-right: 5px;
      }
    }
  }

}
</style>