import axios from '@/libs/api.request'

// 查询用户数据：
export const getRoles = (arg) => {
  return axios.request({
    url: '/sys/role/list',
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}

// 查询用户数据：
export const getUser = (arg) => {
  return axios.request({
    url: '/sys/user/page',
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}
// 查询用户详情数据：
export const getUserDetail = (arg) => {
  return axios.request({
    url: `/sys/user/${arg}`,
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}

// 添加用户：
export const addUser = (arg) => {
  return axios.request({
    url: '/sys/user',
    method: 'post',
    data: arg,
    dataType: 'json'
  })
}

// 修改用户：
export const updateUser = (arg) => {
  return axios.request({
    url: '/sys/user',
    method: 'put',
    data: arg,
    dataType: 'json'
  })
}

// 删除用户:
export const deleteUser = (arg) => {
  return axios.request({
    url: '/sys/user',
    method: 'delete',
    data: arg,
    dataType: 'json'
  })
}

// 查询角色列表：
export const getRole = (arg) => {
  return axios.request({
    url: '/sys/role/page',
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}
// 查询角色详情数据：
export const getRoleDetail = (arg) => {
  return axios.request({
    url: `/sys/role/${arg}`,
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}

// 添加角色：
export const addRole = (arg) => {
  return axios.request({
    url: '/sys/role',
    method: 'post',
    data: arg,
    dataType: 'json'
  })
}

// 修改角色：
export const updateRole = (arg) => {
  return axios.request({
    url: '/sys/role',
    method: 'put',
    data: arg,
    dataType: 'json'
  })
}

// 删除角色:
export const deleteRole = (arg) => {
  return axios.request({
    url: '/sys/role',
    method: 'delete',
    data: arg,
    dataType: 'json'
  })
}

// 查询部门列表：
export const getDepartment = (arg) => {
  return axios.request({
    url: '/sys/dept/list',
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}
// 查询部门详情数据：
export const getDepartmentDetail = (arg) => {
  return axios.request({
    url: `/sys/dept/${arg}`,
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}

// 添加部门：
export const addDepartment = (arg) => {
  return axios.request({
    url: '/sys/dept',
    method: 'post',
    data: arg,
    dataType: 'json'
  })
}

// 修改部门：
export const updateDepartment = (arg) => {
  return axios.request({
    url: '/sys/dept',
    method: 'put',
    data: arg,
    dataType: 'json'
  })
}

// 删除部门:
export const deleteDepartment = (arg) => {
  return axios.request({
    url: `/sys/dept/${arg.id}`,
    method: 'delete',
    data: arg,
    dataType: 'json'
  })
}

// 获取菜单列表：:
export const getMenuList = (arg) => {
  return axios.request({
    url: '/sys/menu/select',
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}


// 上传文件:
export const upload = (arg) => {
  return axios.request({
    url: '/base/upload',
    method: 'post',
    headers:{
      'Content-Type': 'multipart/form-data'
    },
    data: arg,
    dataType: 'json'
  })
}

// 获取导航:
export const getNav = (arg) => {
  return axios.request({
    url: '/sys/menu/nav',
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}

// 菜单列表：
export const getMenu = (arg) => {
  return axios.request({
    url: '/sys/menu/list',
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}
// 查询菜单详情数据：
export const getMenuDetail = (arg) => {
  return axios.request({
    url: `/sys/menu/${arg}`,
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}

// 添加菜单：
export const addMenu = (arg) => {
  return axios.request({
    url: '/sys/menu',
    method: 'post',
    data: arg,
    dataType: 'json'
  })
}

// 修改菜单：
export const updateMenu = (arg) => {
  return axios.request({
    url: '/sys/menu',
    method: 'put',
    data: arg,
    dataType: 'json'
  })
}

// 删除菜单:
export const deleteMenu = (arg) => {
  return axios.request({
    url: '/sys/menu/'+ arg[0],
    method: 'delete',
    data: arg,
    dataType: 'json'
  })
}


// 字典列表：
export const getDict = (arg) => {
    return axios.request({
      url: '/sys/dict/data/page',
      method: 'get',
      params: arg,
      dataType: 'json'
    })
  }
  // 查询字典详情数据：
  export const getDictDetail = (arg) => {
    return axios.request({
      url: `/sys/dict/data/${arg}`,
      method: 'get',
      params: arg,
      dataType: 'json'
    })
  }
  
  // 添加字典：
  export const addDict = (arg) => {
    return axios.request({
      url: '/sys/dict/data',
      method: 'post',
      data: arg,
      dataType: 'json'
    })
  }
  
  // 修改字典：
  export const updateDict = (arg) => {
    return axios.request({
      url: `/sys/dict/data`,
      method: 'put',
      data: arg,
      dataType: 'json'
    })
  }
  
  // 删除字典:
  export const deleteDict = (arg) => {
    return axios.request({
      url: `sys/dict/data`,
      method: 'delete',
      data: arg,
      dataType: 'json'
    })
  }
  
  
  // 字典类型列表：
  export const getDictType = (arg) => {
    return axios.request({
      url: '/sys/dict/type/page',
      method: 'get',
      params: arg,
      dataType: 'json'
    })
  }
  // 查询字典类型详情数据：
  export const getDictTypeDetail = (arg) => {
    return axios.request({
      url: `/sys/dict/type/${arg}`,
      method: 'get',
      params: arg,
      dataType: 'json'
    })
  }
  
  // 添加字典类型：
  export const addDictType = (arg) => {
    return axios.request({
      url: '/sys/dict/type',
      method: 'post',
      data: arg,
      dataType: 'json'
    })
  }
  
  // 修改字典类型：
  export const updateDictType = (arg) => {
    return axios.request({
      url: `/sys/dict/type`,
      method: 'put',
      data: arg,
      dataType: 'json'
    })
  }
  
  // 删除字典类型:
  export const deleteDictType = (arg) => {
    return axios.request({
      url: `sys/dict/type`,
      method: 'delete',
      data: arg,
      dataType: 'json'
    })
  }
  
  // 全部字典：
  export const getAllDict = (arg) => {
    return axios.request({
      url: '/sys/dict/type/all',
      method: 'get',
      params: arg,
      dataType: 'json'
    })
  }
