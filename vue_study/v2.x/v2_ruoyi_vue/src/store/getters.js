const getters = {
  roles: (state) => state.user.roles,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  permissions: state => state.user.permissions,
  sidebar: state => state.app.sidebar
}

export default getters
