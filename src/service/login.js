import request from '@/utils/request'

// 获取登录广告数据
export const getAdLoginList = (data) => {
  return request({
    url: '/get/main/adlogin/list',
    method: 'get',
    data
  })
}