import request from '@/utils/request'

// 获取登录广告数据
export const getAdLoginList = (params) => {
  return request({
    url: '/get/main/adlogin/list',
    method: 'get',
    params
  })
}

// 注册
export const getRegister = (data) => {
  return request({
    url: '/TGshUser/saveTGshUser',
    method: 'post',
    data
  })
}

// 获取验证码
export const getCode = (params) => {
  return request({
    url: '/email/sendSimpleEmail',
    method: 'get',
    params
  })
}

// 登陆
export const login = (data) => {
  return request({
    url: '/TGshUser/login',
    method: 'post',
    data: {
      userAccount: data.email,
      userPwd: data.password
    }
  })
}
