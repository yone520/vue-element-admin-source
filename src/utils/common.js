import {
  publicRoutes
} from '@/router/modules/publicRoute'
import {
  authRoutes
} from '@/router/modules/authRoute'
import store from '@/store'

export function getPublicRoutePath(toPath) {
  return publicRoutes.filter(item => {
    return item.path === toPath
  }).length ? true : false
}

export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function isArray(arr) {
  return Array.isArray(arr)
}

/**
 * 通过递归移除对象数组中不符合规矩的对象
 * @param {*} arrObj 对象数组
 * @param {*} cd 条件
 */
export function gt(arrObj, cd = [], cdName = 'roles') {
  const arr = []
  let obj = {}
  arrObj.forEach(router => {
    const tmp = {
      ...router
    }
    if (cd.includes(tmp['meta'][cdName]) || tmp['meta'][cdName] === undefined || tmp['meta'][cdName] === '') {
      if (tmp.children) {
        tmp.children = gt(tmp.children, cd, cdName)
      }
      obj = {
        ...tmp
      }
      arr.push(obj)
    }
  })
  return arr
}

/**
 * 获取筛选权限后的路由
 */
export function getFilterRoutes() {
  return gt(authRoutes, JSON.parse(store.state.role))
}
