const isLogin = () => {
  const res = sessionStorage.getItem('login')
  return res
}

// 设置token
const getToken = (name="login") => {
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(name + '=')
    if (cStart !== -1) {
      cStart = cStart + name.length + 1
      let cEnd = document.cookie.indexOf(';', cStart)
      if (cEnd === -1) cEnd = document.cookie.length
      return unescape(document.cookie.substring(cStart, cEnd))
    }
  }
  return ''
}
// 删除cookie
const delToken = (name="login") => {
  let exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getToken(name)
  if (cval !== null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() + ';path=/'
  }
}
// 设置token
const setToken = (value, name="login") => {
  let getValue = getToken()
  if (getValue !== null && getValue !== '') {
    delToken(name)
  }
  let exdate = new Date()
  let expiredays = 60
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = name + '=' + escape(value) + ((expiredays === null) ? '' : ';expires=' + exdate.toGMTString() + ';path=/')
}

const isBuyer = () => {
  let res = sessionStorage.getItem('login')
  if (res && typeof res === 'string') {
    res = JSON.parse(res)
  }
  if (res && res.type === '1') {
    return true
  }
  return false
}

export {
  isLogin,
  setToken,
  getToken,
  delToken,
  isBuyer
}