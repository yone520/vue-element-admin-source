import { getFilterRoutes, getPublicRoutePath } from '@/utils/common'
import { setStorageAuthRoutesKey }             from '@/utils/storage'
import ElementUI                               from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import NProgress                               from 'nprogress'
import 'nprogress/nprogress.css'
import Vue                                     from 'vue'
import App                                     from './App'
import i18n                                    from './i18n/i18n'
import router                                  from './router'
import store                                   from './store'
import { getAddRoute, setAddRoute }            from './utils/cookies'

// 配置 nprogress 效果
NProgress.configure({
  easing: 'ease',
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if ( !store.getters.token) { // 没有登陆
    if (getPublicRoutePath(to.path)) { // 访问的是公共的页面
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  } else {
    const storageAuthRoutes = [
      ...getFilterRoutes(),
      {
        path: '*',
        redirect: '/404',
        meta: { hidden: true }
      }
    ]
    if (getAddRoute()) { // 是否执行过添加路由操作
      if (to.matched.length) { // 说明路由存在
        if (to.path === '/login') {
          next(from.path)
        } else {
          next()
        }
        NProgress.done()
      } else {
        router.addRoutes(storageAuthRoutes)
        next({ ...to, replace: true })
        NProgress.done()
      }
    } else {
      // 根据role获取权限
      setStorageAuthRoutesKey(storageAuthRoutes)
      router.addRoutes(storageAuthRoutes)
      setAddRoute(1)
      next({ ...to, replace: true })
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

Vue.use(ElementUI, { size: 'small', zIndex: 2000 })

new Vue({
  el: '#app',
  i18n,
  store,
  router,
  render: (h) => h(App)
})
