import sha1 from 'js-sha1'
export const baseModelOptions = [
    {
      tag: 'el-input',
      label: '用户名:',
      key: 'username',
      value: '',
      default: '',
      attribute: {//属性
        type: 'text',
        placeholder: '请输入用户名',
      },
    },
    {
      tag: 'BaseSelect',
      label: '所属部门:',
      key: 'deptId',
      value: '',
      default: '',
      attribute: {//属性
        placeholder: '请选择部门',
        options: []
      },
    },
    {
      tag: 'el-input',
      label: '密码:',
      key: 'password',
      disEdit: true,
      value: '',
      default: '',
      attribute: {//属性
        type: 'password',
        placeholder: '请输入密码',
      },
      customFormatter: function(value){
        return sha1(value)
      }
    },
    {
      tag: 'el-input',
      label: '真实姓名:',
      key: 'realName',
      value: '',
      default: '',
      attribute: {//属性
        type: 'text',
        placeholder: '请输入真实姓名',
      },
    },
    {
      tag: 'BaseRadioGroup',
      label: '性别:',
      key: 'gender',
      value: 1,
      default: 1,
      attribute: {//属性
        options:[
          {label: '男',value: 1},
          {label: '女',value: 2},
          {label: '未知',value: 3},
        ]

      },
    },
    {
      tag: 'el-input',
      label: '邮箱:',
      key: 'email',
      value: '',
      default: '',
      attribute: {//属性
        type: 'text',
        placeholder: '请输入邮箱',
      },
    },
    {
      tag: 'el-input',
      label: '手机号:',
      key: 'mobile',
      value: '',
      default: '',
      attribute: {//属性
        type: 'text',
        placeholder: '请输入手机号',
      },
    },
    {
      tag: 'BaseSelect',
      label: '角色:',
      key: 'roleIdList',
      value: '',
      default: '',
      attribute: {//属性
        multiple: true,
        placeholder: '请选择角色',
        options: []
      },
    },
    {
      tag: 'BaseSelect',
      label: '状态:',
      key: 'status',
      value: 1,
      default: 1,
      attribute: {//属性
        options: [
          {
            value: 1,
            label: '启用',
          },
          {
            value: 0,
            label: '停用',
          },
        ]
      },
    },
  ]
  
  export const baseFilterOptions = [
    {
      tag: 'el-input',
      label: '用户名:',
      key: 'username',
      value: '',
      attribute: {//属性
        type: 'text',
        placeholder: '请输入用户名'
      },
    },
    // {
    //   tag: 'el-input',
    //   label: '姓名:',
    //   key: 'name',
    //   value: '',
    //   attribute: {//属性
    //     type: 'text',
    //     placeholder: '请输入姓名'
    //   },
    // },
    // {
  ]