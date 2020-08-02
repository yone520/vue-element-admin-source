import { isArray, isObject } from '@/utils/common'

const storageAuthRoutesKey = 'storageAuthRoutesKey'
export const getStorageAuthRoutesKey = () => localStorage.getItem(storageAuthRoutesKey)
export const setStorageAuthRoutesKey = (value) => {
  const val = (isObject(value) || isArray(value)) ? JSON.stringify(value) : value
  localStorage.setItem(storageAuthRoutesKey, val)
}
export const removeStorageAuthRoutesKey = () => localStorage.removeItem(storageAuthRoutesKey)

// 用户信息
const userinfoKey = 'userinfo'
export const getUserinfo = () => localStorage.getItem(userinfoKey)
export const setUserinfo = (value) => {
  if (isObject(value)) {
    localStorage.setItem(userinfoKey, JSON.stringify(value))
  } else {
    throw new Error("UserInfo应该是一个对象")
  }
}
export const removeUserinfo = () => localStorage.removeItem(userinfoKey)

// 清除所有 Storage
export const clearStorage = () => localStorage.clear()