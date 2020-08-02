import Vue                        from 'vue'
import VueRouter                  from 'vue-router'
import { publicRoutes as routes } from './modules/publicRoute.js'

Vue.use(VueRouter)

const createRouter = () => new VueRouter({
  routes: [
    ...routes
  ]
})

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
