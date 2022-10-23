export default [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        hideInMenu: true,
      },
      title: '首页',
      component: () => import('../view/home.vue'),
    },
  ]