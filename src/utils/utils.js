export const isLogin = () => {
  const res = sessionStorage.getItem('login')
  return res
}

export const isBuyer = () => {
  let res = sessionStorage.getItem('login')
  if (res && typeof res === 'string') {
    res = JSON.parse(res)
  }
  if (res && res.type === 1) {
    return true
  }
  return false
}