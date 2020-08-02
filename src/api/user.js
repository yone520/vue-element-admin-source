export const Login = ({
  username,
  password
}) => {
  return new Promise((resolve) => {
    let role = ''
    if (username === 'admin') {
      role = JSON.stringify(['canAdmin', 'canEditor', 'canEditorA', 'canEditorB', 'table']);
    } else if (username === 'editor') {
      role = JSON.stringify(['canAdmin', 'canEditor', 'canEditorA']);
    } else {
      role = JSON.stringify([])
    }
    setTimeout(() => {
      resolve({
        userInfo: {
          username
        },
        token: 'fdaksfahsudfoajfjasd;flk',
        role: role
      })
    }, 1000)
  })
}
