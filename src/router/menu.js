
const getMenus = (type) => {
  const isHidden = type === '1'
  const menus = [
    {
      path: '/user/home',
      component: 'user/user',
      name: 'User',
      hidden: isHidden,
      meta: { title: '牛人首页', icon: 'el-icon-s-home' }
    },
    {
      path: '/business/home',
      component: 'user/user',
      name: 'Business',
      hidden: !isHidden,
      meta: { title: '商户首页', icon: 'el-icon-s-home' }
    },
    {
      path: '/user/identity',
      component: 'user/identity',
      name: 'Identity',
      hidden: false,
      meta: { title: '身份认证', icon: 'el-icon-s-custom' }
    },
    {
      path: '/user/issue',
      component: 'user/issue',
      name: 'Issue',
      hidden: false,
      meta: { title: '发布商汇', icon: 'el-icon-s-grid' }
    },
    {
      path: '/user/dynamic',
      component: 'user/dynamic',
      name: 'Dynamic',
      hidden: false,
      meta: { title: '我的动态', icon: 'el-icon-news' }
    },
    {
      path: '/user/friend',
      component: 'user/friend',
      name: 'Friend',
      hidden: isHidden,
      meta: { title: '我的好友', icon: 'el-icon-user-solid' }
    },
    {
      path: '/user/photo',
      component: 'user/photo',
      name: 'Photo',
      hidden: isHidden,
      meta: { title: '我的相册', icon: 'el-icon-picture' }
    },
    {
      path: '/user/resume',
      component: 'user/resume',
      name: 'Resume',
      hidden: isHidden,
      meta: { title: '我的简历', icon: 'el-icon-tickets' }
    },
    {
      path: '/user/message',
      component: 'user/message',
      name: 'Message1',
      hidden: isHidden,
      meta: { title: '我的留言', icon: 'el-icon-chat-line-round' }
    },
    {
      path: '/business/cultrue',
      component: '/business/cultrue',
      name: 'Cultrue',
      hidden: !isHidden,
      meta: { title: '企业文化', icon: 'el-icon-s-flag' }
    },
    {
      path: '/business/partner1',
      component: '/business/partner',
      name: 'Partner1',
      hidden: !isHidden,
      meta: { title: '合作牛人', icon: 'el-icon-user' }
    },
    {
      path: '/business/partner',
      component: '/business/partner',
      name: 'Partner',
      hidden: !isHidden,
      meta: { title: '商业伙伴', icon: 'el-icon-connection' }
    },
    {
      path: '/business/message',
      component: '/business/message',
      name: 'Message',
      hidden: !isHidden,
      meta: { title: '商业留言', icon: 'el-icon-chat-line-square' }
    }
  ]
  return menus
}

export default getMenus