import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import CommonLayout from '@/layout/commonLayout'

const constantRoter = [{
  path: '/login',
  component: () => import('@/views/login'),
  name: 'login',
}, {
  path: '/',
  component: CommonLayout,
  redirect: '/home',
  children: [
    {
      path: 'home',
      component: () => import('@/views/home'),
      name: 'home',
      meta: { title: '首页', icon: 'el-icon-s-home' }
    }
  ]
}
]

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoter
})

export default router