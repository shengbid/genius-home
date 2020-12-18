import request from '@/utils/request'

// 获取联系人数据
export const getConcatList = () => {
  return request({
    url: '/get/main/concat/list',
    method: 'get'
  })
}

// 获取商汇数据
export const getIssueInfo = (data) => {
  return request({
    url: '/get/main/issue/info',
    method: 'get',
    data
  })
}