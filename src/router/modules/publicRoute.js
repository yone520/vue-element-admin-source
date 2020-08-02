export const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/Login/'),
    name: 'login'
  },
  {
    path: '/404',
    component: () => import('@/views/ErrorPage/404.vue'),
    name: '404'
  }
]
