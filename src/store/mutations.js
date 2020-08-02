import { removeRole, removeToken, removeAddRoute, setLanguage, setToken, setRole } from '@/utils/cookies'
import { removeStorageAuthRoutesKey, setUserinfo, clearStorage } from '@/utils/storage'
import state from './state'

const mutations = {
  SWITCHLANG (state, lang) {
    state.lang = lang
    setLanguage(lang)
  },
  SIGN_OUT (state) {
    state.role = null
    state.token = null
    clearStorage()
    removeRole()
    removeToken()
    removeAddRoute()
    removeStorageAuthRoutesKey()
  },
  SET_ROLE (state, role) {
    setRole(role)
    state.role = role
  },
  SET_TOKEN (state, token) {
    setToken(token)
    state.token = token
  },
  SET_USERINFO(state, userinfo) {
    setUserinfo(userinfo)
    state.userinfo = userinfo
  },
  SET_ADD_ROUTE (state, isAddRouteFn) {
    state.isAddRouteFn = isAddRouteFn
  },
  CHANGE_COLLAPSE(state, collapse) {
    state.isCollapse = collapse
  }
}

export default mutations
