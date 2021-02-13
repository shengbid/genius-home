<template>
  <div>
    <div class="login-content bg-white">
      <header class="header-container com-container">
        <div class="he-content clearfix">
          <div class="he-logo left-f" @click="$router.push('/home')">
            <img src="@assets/imgs/logo/logo.png" alt="">
          </div>
          <span class="line left-f">/</span>
          <div class="wellcome left-f">欢迎登录</div>
        </div>
      </header>
      <section class="login-container">
        <div class="login-box com-container">
          <div class="login-ad">
            <el-carousel height="600px">
              <el-carousel-item v-for="item in loginAdList" :key="item.id">
                <img :src="item.fileUrl" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="login-info bg-white">
            <ul class="login-tab">
              <li
                class="tab-item left-f" 
                :class="{'tab-active': activeName===1}"
                @click="activeName=1"
              >
                登录
              </li>
              <li 
                class="tab-item left-f" 
                :class="{'tab-active': activeName===2}"
                @click="activeName=2"
              >
                注册
              </li>
            </ul>
            <div v-show="activeName===1">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item prop="email">
                  <el-input
                  v-model="ruleForm.email"
                  :maxlength="50"
                  placeholder="账号/邮箱"
                  >
                    <template slot="prepend" icon="el-icon-user-solid"></template>
                  </el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input 
                  v-model="ruleForm.password" 
                  :maxlength="30"
                  placeholder="密码"
                  auto-complete="new-password"
                  show-password
                  >
                  <template slot="prepend" icon="el-icon-lock"></template>
                </el-input>
                </el-form-item>
                <div class="forget">
                  <el-button class="fo-bt" type="text" @click="forgetPass.visible=true">忘记密码?</el-button>
                </div>
                <el-form-item>
                  <el-button class="login-bt" type="primary" @click="submitForm('ruleForm')">登陆</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div v-show="activeName===2">
              <el-form 
                :model="register.registerForm" 
                :rules="register.rules" 
                ref="registerForm" 
                class="demo-ruleForm"
              >
                <el-form-item prop="email">
                  <el-input
                  v-model="register.registerForm.email"
                  :maxlength="50"
                  placeholder="邮箱"
                  >
                    <template slot="prepend" icon="el-icon-user-solid"></template>
                  </el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input 
                  v-model="register.registerForm.password" 
                  :maxlength="30"
                  placeholder="密码"
                  auto-complete="new-password"
                  show-password
                  >
                  <template slot="prepend" icon="el-icon-lock"></template>
                </el-input>
                </el-form-item>
                <el-form-item prop="code">
                  <el-input 
                  v-model="register.registerForm.code" 
                  :maxlength="6"
                  placeholder="验证码"
                  >
                   <el-button slot="append" @click="sendRegisterCode">{{register.disabledTips}}</el-button>
                  </el-input>
                </el-form-item>
                <div class="type">
                  <el-radio v-model="register.registerForm.type" label="0">成为牛人</el-radio>
                  <el-radio v-model="register.registerForm.type" label="1">成为商户</el-radio>
                </div>
                <div class="agreement">
                  <el-checkbox v-model="register.agree">
                    我已阅读并接受
                    <a class="register" href="javascript:viod(0)">《注册协议》</a>
                  </el-checkbox>
                </div>
                <el-form-item>
                  <el-button class="login-bt" type="primary" @click="submitRegister('registerForm')">注册</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>

      </section>

      <footer class="copyright">
        ©CopyRight 2006-2020 JB51.Net Inc All Rights Reserved. G商汇 版权所有
      </footer>
    </div>

  <!-- 滑动验证码弹框 -->
  <el-dialog
      append-to-body
      :visible.sync="puzzePass.visible"
      :show-close="false"
      :close-on-click-modal="false"
      width="450px">
      <slideverify 
        :l="42"  ref="dialogopen"
        :r="10"
        :w="410"
        :h="200"
        :block_y="puzzePass.block_y"
        :imgurl="puzzePass.imgurl"
        :miniimgurl="puzzePass.miniimgurl"
        @success="onSuccess"
        @fail="onFail"
        @refresh="onRefresh"
        :slider-text="puzzePass.text"
      ></slideverify>
    </el-dialog>
  <!-- 忘记密码弹框 -->
  <el-dialog
      :visible.sync="forgetPass.visible"
      title="忘记密码"
      :close-on-click-modal="false"
      width="450px">
       <el-form :model="forgetPass.ruleForm" :rules="forgetPass.rules" ref="forgetruleForm" class="demo-ruleForm">
          <el-form-item  prop="email">
            <el-input
            v-model="forgetPass.ruleForm.email"
            :maxlength="50"
            placeholder="账号"
            />
          </el-form-item>
          <el-form-item  prop="phone">
            <el-input 
            v-model="forgetPass.ruleForm.phone" 
            :maxlength="30"
            placeholder="邮箱"
            >
             <el-button slot="append" @click="sendCode" type="text">{{forgetPass.disabledTips}}</el-button>
            </el-input>
          </el-form-item>
          <el-form-item prop="verificationCode">
            <el-input 
            v-model="forgetPass.ruleForm.verificationCode" 
            :maxlength="6"
            placeholder="验证码"
            />
          </el-form-item>
          <el-form-item prop="newPass">
            <el-input 
            v-model="forgetPass.ruleForm.newPass" 
            :maxlength="30"
            placeholder="新密码"
            auto-complete="new-password"
            show-password
            />
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button class="forget" @click="resetForm('ruleForm')">重置</el-button>
          <el-button type="primary" @click="submitPass('forgetruleForm')">修改</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
  import slideverify from '@/components/Newcap.vue'
  import { getAdLoginList, getRegister, getCode,
  login } from '@/service/login'
  import common from '@/utils/common'
  import { setToken } from '@/utils/utils'
  import img1 from '@assets/imgs/rotate1.jpg'
  import img2 from '@assets/imgs/rotate2.jpg'
  import img3 from '@assets/imgs/rotate3.jpg'
  import img4 from '@assets/imgs/rotate4.jpg'
  import { mapMutations } from 'vuex'

  export default {
    name: 'Login',
    components: {
      slideverify
    },
    data() {
      return {
        ruleForm: {
          email: '',
          password: ''
        },
        forgetPass: {
          visible: false,
          count: 60,
          disabledTips: '获取验证码',
          ruleForm: {
            email: '',
            phone: '',
            verificationCode: '',
            newPass: ''
          },
          rules: {
            email: [{ required: true, message: '请输入账号', trigger: 'blur' }],
            verificationCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
            phone: [{
              required: true,
              validator: (rule, value, callback) => {
                if (!value) {
                  callback('请输入电话号码')
                } else if (common.phoneReg.test(value)) {
                  callback()
                } else {
                  callback('电话号码格式不正确')
                }
              },
              trigger: 'change'
            }],
            newPass: [{ 
              required: true,
              validator: (rule, value, callback) => {
                if (!value) {
                  callback('请输入新密码')
                } else if (common.pwdReg.test(value)) {
                  callback()
                } else {
                  callback('密码需要6-20位任意字符')
                }
              },
              trigger: 'blur'
            }],
          }
        }, // 忘记密码字段
        puzzePass: {
          visible: false,
          block_y: 20,
          imgurl: img1,
          miniimgurl: img2,
          text: '右滑',
        }, // 滑块字段
        rules: {
          email: [{ required: true, validator: (rule, value, callback) => {
              if (!value) {
                callback('请输入邮箱')
              } else if (common.mailReg.test(value)) {
                callback()
              } else {
                callback('邮箱格式不正确')
              }
            }, trigger: 'blur' }],
          password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
        },
        loginAdList: [],
        activeName: 1,
        register: {
          registerForm: {
            email: '',
            password: '',
            code: '',
            type: '0',
          },
          agree: false,
          disabledTips: '获取验证码',
          count: 60,
          rules: {
            email: [{ required: true, validator: (rule, value, callback) => {
              if (!value) {
                callback('请输入邮箱')
              } else if (common.mailReg.test(value)) {
                callback()
              } else {
                callback('邮箱格式不正确')
              }
            }, trigger: 'blur' }],
            password: [{ required: true, validator: (rule, value, callback) => {
              if (!value) {
                callback('请输入密码')
              } else if (common.pwdReg.test(value)) {
                callback()
              } else {
                callback('密码需要6-20位任意字符')
              }
            }, trigger: 'blur' }],
            code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
          }
        } // 忘记密码
      }
    },
    created() {
      this.getAddata()
      const {type} = this.$route.params
      this.activeName = type ? type : 1
      console.log(type)
    },
    methods: {
      ...mapMutations(['updateType']),

      // 获取登录广告图片
      getAddata() {
        getAdLoginList().then(res => {
          this.loginAdList = res.data
        })
      },

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              login(this.ruleForm).then(res => {
                if (res.data) {
                  const { data } = res
                  setToken(data.token)
                  this.$message.success('登陆成功')
                  const login = JSON.stringify(data)
                  sessionStorage.setItem('login', login)
                  this.$router.push({
                    name: data.type === '0' ? 'User' : 'Business',
                    params: {
                      type: data.type === '0' ? 1 : 2
                    }
                  })
                  this.updateType({type: data.type})
                }
              })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },

      getImageVerifyCode () {
        const imgobj = {
          // bigImage: 'https://picsum.photos/300/150/?image=248',
          // smallImage: 'https://picsum.photos/300/150/?image=198'
          bigImage: img3, // 大图
          smallImage: img4, // 小图
          yHeight: 100 // 初始y坐标
        }
        this.puzzePass.block_y = imgobj.yHeight
        this.puzzePass.imgurl = imgobj.bigImage
        this.puzzePass.miniimgurl = imgobj.smallImage
         this.$refs.dialogopen && this.$refs.dialogopen.reset(this.puzzePass.block_y)
        // 如果图标是后台获取,base64图片赋值
        // this.imgurl =  'data:image/png;base64,' + imgobj.bigImage
        // this.miniimgurl = 'data:image/png;base64,' + imgobj.smallImage
      },
      onFail () {
        console.log('fail')
      },
      // 验证码拉动距离返回
      onSuccess (left) {
        console.log('succss', left)
        if (left > 20 && left < 160) {
          this.$refs.dialogopen.handleSuccess()
          setTimeout(() => {
            this.puzzePass.visible = false
          }, 1000)
        } else {
          this.$refs.dialogopen.handleFail()
        }
      },
      
      // 刷新验证码
      onRefresh() {
        this.puzzePass.imgurl = ''
        this.puzzePass.miniimgurl = ''
        this.getImageVerifyCode()
      },

      // 修改密码
      submitPass(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message.success('注册成功,请登录')
            
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      // 忘记密码重置
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      // 发送验证码
      sendCode() {
        // 防止重复点击
        if (this.forgetPass.count !== 60) {
          return
        }
        this.forgetPass.count--
        this.forgetPass.disabledTips = `${this.forgetPass.count}秒后重试`
         const interval = setInterval(() => {
          this.forgetPass.count--
          this.forgetPass.disabledTips = `${this.forgetPass.count}秒后重试`
          if (this.forgetPass.count < 0) {
            clearInterval(interval)
            this.forgetPass.count = 60
            this.forgetPass.disabledTips = '获取验证码'
          }
        }, 1000)
      },
      // 注册
      submitRegister(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (this.register.agree) {
              getRegister(this.register.registerForm).then(res => {
                this.$message.success('注册成功')
                this.activeName = 1
                this.ruleForm.email = this.register.registerForm.email
                this.ruleForm.password = this.register.registerForm.password
              })
            } else {
              this.$message({
                type: 'warning',
                message: '选择同意协议才能进行注册'
              })
            }
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },

      // 发送注册验证码
      sendRegisterCode() {
        if (!this.register.registerForm.email) {
          this.$message({
            type: 'warning',
            message: '请先输入邮箱'
          })
          return
        }
        // 防止重复点击
        if (this.register.count !== 60) {
          return
        }
        this.register.count--
        this.register.disabledTips = `${this.register.count}秒后重试`
         const interval = setInterval(() => {
          this.register.count--
          this.register.disabledTips = `${this.register.count}秒后重试`
          if (this.register.count < 0) {
            clearInterval(interval)
            this.register.count = 60
            this.register.disabledTips = '获取验证码'
          }
        }, 1000)
        getCode({toEmail: this.register.registerForm.email}).then(res => {
          this.$message.success('发送成功!')
        })
      }
    }
  }
</script>

<style scoped lang='less'>
.login-content {
  .header-container {
    padding: 30px 0;
    .he-logo {
      width: 280px;
      height: 60px;
      cursor: pointer;
    }
    .line {
      font-size: 30px;
      color: #eee;
      padding-left: 15px;
      padding-top: 5px;
    }
    .wellcome {
      width: 45px;
      font-size: 16px;
      line-height: 20px;
      margin-top: 8px;
      margin-left: 15px;
    }
  }

  .login-container {
    // background-image: url("https://img11.weikeimg.com/data/uploads/sys/campaign/6368162085dc13d586bac6.jpg");
    background-color: #2fbb40;
    height: 600px;
    padding-top: 30px;
    padding-bottom: 60px;
    .login-box {
      display: flex;
    }
    .login-ad {
      flex: 1;
    }
    .login-info {
      flex-basis: 300px;
      padding: 30px;
      .login-tab {
        display: flex;
        margin-bottom: 25px;
        .tab-item {
          flex: 1;
          line-height: 30px;
          padding-bottom: 10px;
          font-size: 18px;
          border-bottom: 1px solid #e9e9e9; 
          color: #666;
          text-align: center;
          cursor: pointer;
          &.tab-active {
            border-bottom: 2px solid #e61717;
            color: #e61717;
          }
        }
      }
      .forget {
        text-align: right;
        margin-top: -15px;
        margin-bottom: 10px;
      }
      .login-bt {
        width: 100%;
        background-color: #e61717;
        border-color: #e61717;
      }
      .agreement {
        margin: 20px 0;
        .register {
          color: #409eff;
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
    padding-top: 20px;
    background-color: #f7f7f7;
  } 
}
</style>