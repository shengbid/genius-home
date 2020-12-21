import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'
import CommonLayout from '@/layout/commonLayout'

const constantRoter = [{
  path: '/login',
  component: () => import('@/views/login'),
  name: 'Login',
}, {
  path: '/',
  component: CommonLayout,
  redirect: '/home',
  children: [
    {
      path: 'home',
      component: () => import('@/views/home'),
      name: 'Home',
      meta: { title: '首页', icon: 'el-icon-s-home' }
    }
  ]
}, {
  path: '/user',
  component: Layout,
  redirect: '/user/home',
  children: [
    {
      path: 'home',
      component: () => import('@/views/user/user'),
      name: 'User'
    },
    {
      path: 'identity',
      component: () => import('@/views/user/identity'),
      name: 'Identity'
    },
    {
      path: 'photo',
      component: () => import('@/views/user/photo'),
      name: 'Photo'
    },
    {
      path: 'resume',
      component: () => import('@/views/user/resume'),
      name: 'Resume'
    },
    {
      path: 'issue',
      component: () => import('@/views/user/issue'),
      name: 'Issue'
    },
    {
      path: 'dynamic',
      component: () => import('@/views/user/dynamic'),
      name: 'Dynamic'
    },
    {
      path: 'friend',
      component: () => import('@/views/user/friend'),
      name: 'Friend'
    },
    {
      path: 'message',
      component: () => import('@/views/business/message'),
      name: 'Message1'
    }
  ]
}, {
  path: '/business',
  component: Layout,
  redirect: '/business/cultrue',
  children: [
    {
      path: 'home',
      component: () => import('@/views/user/user'),
      name: 'Business'
    },
    {
      path: 'cultrue',
      component: () => import('@/views/business/cultrue'),
      name: 'Cultrue'
    },
    {
      path: 'partner1',
      component: () => import('@/views/business/partner'),
      name: 'Partner1'
    },
    {
      path: 'partner',
      component: () => import('@/views/business/partner'),
      name: 'Partner'
    },
    {
      path: 'message',
      component: () => import('@/views/business/message'),
      name: 'Message'
    },
  ]
}
]

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoter
})

export default router