const Layout = () => import('@/layout/index')

export const authRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Index',
    meta: {
      roles: 'canAdmin',
      title: '首页',
      icon: 'el-icon-tickets'
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Index'),
        meta: {
          title: '欢迎页'
        }
      }
    ]
  },
  {
    path: '/editor',
    component: Layout,
    redirect: '/editor/a',
    // component: () => import('@/views/Editor/'),
    name: 'Editor',
    meta: {
      roles: 'canEditor',
      title: '编辑',
      icon: 'el-icon-edit-outline'
    },
    children: [
      {
        path: 'a',
        component: () => import('@/views/Editor/a'),
        name: 'EditorA',
        meta: {
          roles: 'canEditorA',
          title: '编辑A'
        }
      },
      {
        path: 'b',
        component: () => import('@/views/Editor/b'),
        name: 'EditorB',
        meta: {
          roles: 'canEditorB',
          title: '编辑B'
        }
      },
      {
        path: 'c',
        component: () => import('@/views/Editor/c'),
        name: 'EditorC',
        children: [
          {
            path: 'cccc/:id',
            component: () => import('@/views/Editor/cc'),
            name: 'EditorCcccc',
            meta: {
              title: '编辑C的儿子'
            }
          }
        ],
        meta: {
          title: '编辑C'
        }
      }
    ]
  },
  {
    path: '/public',
    component: Layout,
    redirect: '/public/index',
    name: 'Public',
    children: [
      {
        path: 'index',
        name: 'PublicIndex',
        component: () => import('@/views/PublicPage/'),
        meta: {
          title: '公共首页'
        }
      }
    ],
    meta: {
      title: '公共页面',
      icon: 'el-icon-printer',
    }
  },
  {
    path: '/table',
    component: Layout,
    redirect: '/table/index',
    name: 'Table',
    children: [
      {
        path: 'index',
        name: 'TableIndex',
        component: () => import('@/views/PublicPage/'),
        meta: {
          title: '表格'
        }
      },
      {
        path: 'abc',
        name: 'TableAbc',
        component: () => import('@/views/PublicPage/'),
        meta: {
          title: '表格2'
        }
      }
    ],
    meta: {
      roles: 'table',
      title: '基础表格',
      icon: 'el-icon-edit-outline',
    }
  }
]
