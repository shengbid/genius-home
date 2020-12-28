import router from './router'
import { isLogin } from '@/utils/utils'

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && to.path !== '/home' && to.path !== '/') {
    if (isLogin()) {
      next()
    } else {
      router.push('login')
    }
  } else next()
})