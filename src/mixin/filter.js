/* 公用的filter集合，使用mixin的方式 */
import common from '@/utils/common'

export default {
  filters: {
    // 格式化金钱
    formatUSD (val, currency) {
      return common.formatUSD(val, currency)
    },

    // 过滤是否为空
    isEmptyVal (val) {
      return common.isEmptyVal(val)
    },

    // 格式化时间
    formatYMD (val) {
      return common.formatYMD(val)
    },

    // 格式化时间
    formatDate (val) {
      return common.formatDate(val)
    },

    // 格式化数量
    formatAmount (val) {
      return common.formatAmount(val)
    },

    // 格式化数量
    formatNumber (val) {
      return common.formatAmount(val)
    },

    // 处理商圈状态
    handleStatus(val) {
      let text = ''
      switch (val) {
        case 0:
          text = '有效'
          break;
        case 1:
          text = '加急'
          break;
        case 2:
          text = '失效'
          break;
      
        default:
          break;
      }
      return text
    }
  }
}
