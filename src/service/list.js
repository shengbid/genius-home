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