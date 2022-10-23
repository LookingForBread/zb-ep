import axios from '@/libs/api.request'

// 获取用户信息
export const getUserInfoDt = (arg) => {
    return axios.request({
      url: '/sys/user/info',
      method: 'get',
      params: arg,
      dataType: 'json',
    })
}
// 修改密码
export const updatePassword = (arg) => {
    return axios.request({
      url: 'sys/user/password',
      method: 'put',
      data: arg,
      dataType: 'json',
    })
}
// 获取用户权限
export const getPermissionsDt = (arg) => {
    return axios.request({
      url: '/sys/menu/permissions',
      method: 'get',
      params: arg,
      dataType: 'json',
    })
}
// 获取用户菜单
export const getNav = (arg) => {
    return axios.request({
      url: '/sys/menu/nav',
      method: 'get',
      params: arg,
      dataType: 'json',
    })
}
// 登出
export const logoutApi = (arg) => {
  return axios.request({
    url: '/logout',
    method: 'post',
    data: arg,
    dataType: 'json',
  })
}