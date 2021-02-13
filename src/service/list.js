import request from '@/utils/request'

export const getClassify = () => {
  return request({
    url: '/get/classify/list',
    method: 'get'
  })
}
// 获取平台数据
export const getMainCompanyList = (params) => {
  return request({
    url: '/TMainPage/listByTMainPage',
    method: 'get',
    params
  })
}
// 获取平台广告数据
export const getAdList = (params) => {
  return request({
    url: '/get/main/ad/list',
    method: 'get',
    params
  })
}
// 获取动态数据
export const getDynamicList = (params) => {
  return request({
    url: '/get/main/dynamic/list',
    method: 'get',
    params
  })
}
// 获取聊天数据
export const getMessageList = (params) => {
  return request({
    url: '/get/main/message/list',
    method: 'get',
    params
  })
}
// 获取留言数据
export const getNoteList = (params) => {
  return request({
    url: '/get/main/note/list',
    method: 'get',
    params
  })
}