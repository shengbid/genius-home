const menus = [
  {
    path: '/user/home',
    component: 'user/user',
    name: 'User',
    meta: { title: '牛人首页', icon: 'el-icon-menu' }
  },
  {
    path: '/user/identity',
    component: 'user/identity',
    name: 'Identity',
    meta: { title: '身份认证', icon: 'el-icon-refresh' }
  },
  {
    path: '/user/photo',
    component: 'user/photo',
    name: 'Photo',
    meta: { title: '我的相册', icon: 'el-icon-search' }
  },
  {
    path: '/user/resume',
    component: 'user/resume',
    name: 'Resume',
    meta: { title: '我的简历', icon: 'el-icon-s-grid' }
  }
]

export default menus