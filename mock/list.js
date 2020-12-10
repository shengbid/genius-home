import Mock from 'mockjs'
const Random = Mock.Random

export default [
  {
    url: '/get/classify/list',
    type: 'get',
    response: () => {
      // 创建树形数据
      let data = []
      // const number = Random.natural(1, 10)
      const loop = (data, count = 4, l = 0) => {
        const level = l + 1
        for (let i = 0; i < count; i++) {
          const item = {
            id: Random.id(),
            level,
            name: Random.word(3, 5), 
          }
          if (level >2) {
            return
            // 方法2
            // return data
          }

          const number =  Mock.mock({
            "number|1-10": 6
          })
          item.children = loop([], number.number, level)
          
          // 方法2
          // const childrens = Mock.mock({
          //   "array|1-6": [
          //     "Mock.js"
          //   ]
          // })
          // childrens.array.forEach(() => {
          //   item.childs = []
          //   const number =  Mock.mock({
          //     "number|1-6": 6
          //   })
          //   return loop(item.childs, number.number, level)
          // })
          data.push(item)
        }

        // 方法2不需要return
        return data
      }
      loop(data)
      return {
        code: 200,
        message: 'success',
        data,
      }
    }
  },
  {
    url: '/get/main/company/list',
    type: 'get',
    response: (config) => {
      const count = config.body ? (JSON.parse(config.body)).count : 1
      let data = []
      for (let i = 0; i < count; i++) {
        const obj = {
          id: Random.increment(),
          name: '科技公司' + i,
          text: '设计公司LOGO',
          time: Random.date(),
          status: Random.natural(0, 2),
          price: Random.natural(500, 50000),
          logo: Random.image('150x180', Random.color()),
          credit: Random.natural(0, 5),
          detail: Random.paragraph(1, 3)
        }
        data.push(obj)
      }
      return {
        code: 200,
        message: 'success',
        data
      }
    }
  },
  {
    url: '/get/main/ad/list',
    type: 'get',
    response: () => {
      let data = []
      for (let i = 0; i < 5; i++) {
        const obj = {
          id: Random.increment(),
          fileUrl: Random.image('320x220', Random.color(), '广告')
        }
        data.push(obj)
      }
      return {
        code: 200,
        message: 'success',
        data
      }
    }
  }
]