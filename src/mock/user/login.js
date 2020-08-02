export function login () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'asdfasdfsadfasd',
        username: '张杰',
        img: '',
        routes: ['admin'] // 后台返回的权限，例：['super','admin','editor','kefu']
      })
    }, 1000)
  })
}
