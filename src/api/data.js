import axios from '@/libs/api.request'

// 登录
export const login = (arg) => {
  return axios.request({
    url: '/login',
    method: 'post',
    data: arg,
    dataType: 'json',
  })
}

// 获取验证码
export const getCaptcha = (arg) => {
  return axios.request({
    url: '/captcha',
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}

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



// 查询职务列表：
export const getLeader = (arg) => {
  return axios.request({
    url: '/leader/list',
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}
// 查询职务详情数据：
export const getLeaderDetail = (arg) => {
  return axios.request({
    url: `/leader/${arg}`,
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}

// 添加职务：
export const addLeader = (arg) => {
  return axios.request({
    url: '/leader',
    method: 'post',
    data: arg,
    dataType: 'json'
  })
}

// 修改职务：
export const updateLeader = (arg) => {
  return axios.request({
    url: `/leader/${arg.id}`,
    method: 'put',
    data: arg,
    dataType: 'json'
  })
}

// 删除职务:
export const deleteLeader = (arg) => {
  return axios.request({
    url: `/leader`,
    method: 'delete',
    params: arg,
    dataType: 'json'
  })
}

// 添加职务-领导：
export const addLeaderUser = (arg) => {
  console.log(arg);
  return axios.request({
    url: '/leader_user/' + arg.id,
    method: 'post',
    data: arg.dto,
    dataType: 'json'
  })
}


// 查询职务列表：
export const getOrganization = (arg) => {
  return axios.request({
    url: '/organization/list',
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}
// 查询职务详情数据：
export const getOrganizationDetail = (arg) => {
  return axios.request({
    url: `/organization/${arg}`,
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}

// 添加职务：
export const addOrganization = (arg) => {
  return axios.request({
    url: '/organization',
    method: 'post',
    data: arg,
    dataType: 'json'
  })
}

// 修改职务：
export const updateOrganization = (arg) => {
  return axios.request({
    url: `/organization/${arg.id}`,
    method: 'put',
    data: arg,
    dataType: 'json'
  })
}

// 删除职务:
export const deleteOrganization = (arg) => {
  return axios.request({
    url: `/organization`,
    method: 'delete',
    params: arg,
    dataType: 'json'
  })
}

// 查询新闻列表：
export const getNews = (arg) => {
  return axios.request({
    url: '/news/page',
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}
// 查询新闻详情数据：
export const getNewsDetail = (arg) => {
  return axios.request({
    url: `/news/${arg}`,
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}

// 添加新闻：
export const addNews = (arg) => {
  return axios.request({
    url: '/news',
    method: 'post',
    data: arg,
    dataType: 'json'
  })
}

// 修改新闻：
export const updateNews = (arg) => {
  return axios.request({
    url: `/news/${arg.id}`,
    method: 'put',
    data: arg,
    dataType: 'json'
  })
}

// 删除新闻:
export const deleteNews = (arg) => {
  return axios.request({
    url: `/news`,
    method: 'delete',
    params: arg,
    dataType: 'json'
  })
}

// 查询提案列表：
export const getProposal = (arg) => {
  return axios.request({
    url: '/proposal/page',
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}
// 查询提案详情数据：
export const getProposalDetail = (arg) => {
  return axios.request({
    url: `/proposal/${arg}`,
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}

// 添加提案：
export const addProposal = (arg) => {
  return axios.request({
    url: '/proposal',
    method: 'post',
    data: arg,
    dataType: 'json'
  })
}

// 修改提案：
export const updateProposal = (arg) => {
  return axios.request({
    url: `/proposal/${arg.id}`,
    method: 'put',
    data: arg,
    dataType: 'json'
  })
}

// 删除提案:
export const deleteProposal = (arg) => {
  return axios.request({
    url: `/proposal`,
    method: 'delete',
    params: arg,
    dataType: 'json'
  })
}


// app端用户：
export const getCUser = (arg) => {
  return axios.request({
    url: '/tb/user/page',
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}
// 查询app端用户详情数据：
export const getCUserDetail = (arg) => {
  return axios.request({
    url: `/tb/user/${arg}`,
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}

// 添加app端用户：
export const addCUser = (arg) => {
  return axios.request({
    url: '/tb/user',
    method: 'post',
    data: arg,
    dataType: 'json'
  })
}

// 修改app端用户：
export const updateCUser = (arg) => {
  return axios.request({
    url: `/tb/user/update`,
    method: 'put',
    data: arg,
    dataType: 'json'
  })
}

// 删除app端用户:
export const deleteCUser = (arg) => {
  return axios.request({
    url: `/tb/user`,
    method: 'delete',
    params: arg,
    dataType: 'json'
  })
}
// 修改密码:
export const editPassword = (arg) => {
  return axios.request({
    url: `/tb/user/password`,
    method: 'put',
    data: arg,
    dataType: 'json'
  })
}


// 活动列表：
export const getActivity = (arg) => {
  return axios.request({
    url: '/activity/page',
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}
// 查询活动详情数据：
export const getActivityDetail = (arg) => {
  return axios.request({
    url: `/activity/${arg}`,
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}

// 添加活动：
export const addActivity = (arg) => {
  return axios.request({
    url: '/activity',
    method: 'post',
    data: arg,
    dataType: 'json'
  })
}

// 修改活动：
export const updateActivity = (arg) => {
  return axios.request({
    url: `/activity/${arg.id}`,
    method: 'put',
    data: arg,
    dataType: 'json'
  })
}

// 删除活动:
export const deleteActivity = (arg) => {
  return axios.request({
    url: `/activity`,
    method: 'delete',
    params: arg,
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



// 查询全部课程频道列表：
export const getAllCourseType = (arg) => {
  return axios.request({
    url: '/course/type/list',
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}
// 查询课程频道列表：
export const getCourseType = (arg) => {
  return axios.request({
    url: '/course/type/page',
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}

// 添加课程频道：
export const addCourseType = (arg) => {
  return axios.request({
    url: '/course/type/add',
    method: 'post',
    params: arg,
    dataType: 'json'
  })
}

// 修改课程频道：
export const updateCourseType = (arg) => {
  return axios.request({
    url: `/course/type/update`,
    method: 'put',
    data: arg,
    dataType: 'json'
  })
}

// 删除课程频道:
export const deleteCourseType = (arg) => {
  return axios.request({
    url: `/course/type/del`,
    method: 'delete',
    params: arg,
    dataType: 'json'
  })
}


// 查询视频类别列表：
export const getAllVideoType = (arg) => {
  return axios.request({
    url: `/course/category/${arg.pid}`,
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}
// 查询视频类别列表：
export const getVideoType = (arg) => {
  return axios.request({
    url: '/course/category/page',
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}

// 添加视频类别：
export const addVideoType = (arg) => {
  return axios.request({
    url: '/course/category/add',
    method: 'post',
    data: arg,
    dataType: 'json'
  })
}

// 修改视频类别：
export const updateVideoType = (arg) => {
  return axios.request({
    url: `/course/category/update`,
    method: 'put',
    data: arg,
    dataType: 'json'
  })
}

// 删除视频类别:
export const deleteVideoType = (arg) => {
  return axios.request({
    url: `/course/category/delete`,
    method: 'delete',
    params: arg,
    dataType: 'json'
  })
}




// 查询课程列表：
export const getCourse = (arg) => {
  return axios.request({
    url: '/course/list',
    method: 'get',
    params: arg,
    dataType: 'json'
  })
}
// 查询课程详情数据：
export const getCourseDetail = (arg) => {
  return axios.request({
    url: `/course/get`,
    method: 'get',
    params: {id:arg},
    dataType: 'json'
  })
}

// 添加课程：
export const addCourse = (arg) => {
  return axios.request({
    url: '/course/add',
    method: 'post',
    data: arg,
    dataType: 'json'
  })
}

// 修改课程：
export const updateCourse = (arg) => {
  return axios.request({
    url: `/course/add`,
    method: 'put',
    data: arg,
    dataType: 'json'
  })
}

// 删除课程:
export const deleteCourse = (arg) => {
  return axios.request({
    url: `/course/delete/${arg.id}`,
    method: 'delete',
    // params: arg,
    dataType: 'json'
  })
}
