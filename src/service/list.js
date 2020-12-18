import request from '@/utils/request'

export const getClassify = () => {
  return request({
    url: '/get/classify/list',
    method: 'get'
  })
}
// 获取平台数据
export const getMainCompanyList = (data) => {
  return request({
    url: '/get/main/company/list',
    method: 'get',
    data
  })
}
// 获取平台广告数据
export const getAdList = (data) => {
  return request({
    url: '/get/main/ad/list',
    method: 'get',
    data
  })
}
// 获取动态数据
export const getDynamicList = (data) => {
  return request({
    url: '/get/main/dynamic/list',
    method: 'get',
    data
  })
}
// 获取聊天数据
export const getMessageList = (data) => {
  return request({
    url: '/get/main/message/list',
    method: 'get',
    data
  })
}