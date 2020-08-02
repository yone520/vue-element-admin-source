import Cookies from 'js-cookie'

const languageKey = 'language'
export const getLanguage = () => Cookies.get(languageKey)
export const setLanguage = (language) => Cookies.set(languageKey, language)

const tokenKey = 'token'
export const getToken = () => Cookies.get(tokenKey)
export const setToken = (value) => Cookies.set(tokenKey, value)
export const removeToken = () => Cookies.remove(tokenKey)

const roleKey = 'rolename'
export const getRole = () => Cookies.get(roleKey)
export const setRole = (value) => Cookies.set(roleKey, value)
export const removeRole = () => Cookies.remove(roleKey)

const isAddRouteKey = 'isaddroute'
export const getAddRoute = () => Cookies.get(isAddRouteKey)
export const setAddRoute = (value) => Cookies.set(isAddRouteKey, value)
export const removeAddRoute = () => Cookies.remove(isAddRouteKey)

