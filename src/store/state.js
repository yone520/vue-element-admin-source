import { getLanguage, getToken, getRole, getAddRoute } from '@/utils/cookies'
import { getUserinfo } from '@/utils/storage'

const state = {
  lang: getLanguage() || 'zh',
  token: getToken(),
  role: getRole(),
  routes: '',
  isAddRouteFn: getAddRoute(),
  isCollapse: true,
  userinfo: (typeof getUserinfo() === 'string' ? JSON.parse(getUserinfo()) : getUserinfo()) || {}
}

export default state
