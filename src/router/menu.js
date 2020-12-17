const menus = [
  {
    path: '/user/home',
    component: 'user/user',
    name: 'User',
    meta: { title: '牛人首页', icon: 'el-icon-s-home' }
  },
  {
    path: '/user/identity',
    component: 'user/identity',
    name: 'Identity',
    meta: { title: '身份认证', icon: 'el-icon-s-custom' }
  },
  {
    path: '/user/issue',
    component: 'user/issue',
    name: 'Issue',
    meta: { title: '发布商汇', icon: 'el-icon-s-grid' }
  },
  {
    path: '/user/dynamic',
    component: 'user/dynamic',
    name: 'Dynamic',
    meta: { title: '我的动态', icon: 'el-icon-news' }
  },
  {
    path: '/user/friend',
    component: 'user/friend',
    name: 'Friend',
    meta: { title: '我的好友', icon: 'el-icon-user-solid' }
  },
  {
    path: '/user/photo',
    component: 'user/photo',
    name: 'Photo',
    meta: { title: '我的相册', icon: 'el-icon-picture' }
  },
  {
    path: '/user/resume',
    component: 'user/resume',
    name: 'Resume',
    meta: { title: '我的简历', icon: 'el-icon-tickets' }
  }
]

export default menus