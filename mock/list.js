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
          fileUrl: Random.image('320x220', Random.color(), '广告'),
          time: Random.time('HH:mm'),
          name: Random.cname(),
          message: Random.title()
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
    url: '/get/main/adlogin/list',
    type: 'get',
    response: () => {
      let data = []
      for (let i = 0; i < 5; i++) {
        const obj = {
          id: Random.increment(),
          fileUrl: Random.image('900x600', Random.color(), '广告')
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
    url: '/get/main/concat/list',
    type: 'get',
    response: () => {
      let data = []
      for (let i = 0; i < 7; i++) {
        const obj = {
          id: Random.increment(),
          count: Random.natural(0, 20),
          fileUrl: Random.image('190x205', Random.color(), 'user')
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
    url: '/get/main/dynamic/list',
    type: 'get',
    response: () => {
      let data = []
      for (let i = 0; i < 7; i++) {
        const obj = {
          id: Random.increment(),
          star: Random.natural(0, 20),
          comment: Random.word(3, 5),
          text: Random.title(5, 10),
          time: Random.datetime(),
          fileList: loop()
        }
        data.push(obj)
      }

      function loop() {
        let arr = []
        for (let i = 0; i < Random.natural(1, 9); i++) {
          const element = {
            id: Random.increment(),
            fileUrl: Random.image('150x180', Random.color(), 'user')
          }
          arr.push(element)
        }
        return arr
      }
      return {
        code: 200,
        message: 'success',
        data
      }
    }
  },
  {
    url: '/get/main/message/list',
    type: 'get',
    response: () => {
      let data = []
      for (let i = 0; i < Random.natural(3, 15); i++) {
        const element = {
          id: Random.increment(),
          user: loop2(1),
          fuser: loop2(2)
        }
        data.push(element)
      }

      function loop2(type) {
        let arr = []
        for (let i = 0; i < Random.natural(0, 5); i++) {
          const element = {
            id: Random.increment(),
            type,
            msg: Random.sentence()
          }
          arr.push(element)
        }
        return arr
      }
      return {
        code: 200,
        message: 'success',
        avactor: Random.image('55x55', Random.color(), 'user'),
        data
      }
    }
  },
]