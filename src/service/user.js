import request from '@/utils/request'

// 获取联系人数据
export const getConcatList = () => {
  return request({
    url: '/get/main/concat/list',
    method: 'get'
  })
}