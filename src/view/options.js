export const baseModelOptions = [
  {
    tag: 'el-input',
    label: '档案编号:',
    key: 'codes',
    value: '',
    default: '',
    disabled:true,
    attribute: {//属性
      type: 'text',
      placeholder: '请输入档案编号',
    },
    // rules: [
    //   { required: true, message: '请输入档案编号', trigger: 'blur' },
    // ],
  },
  {
    tag: 'el-input',
    label: '借阅人姓名:',
    key: 'name',
    value: '',
    default: '',
    attribute: {//属性
      type: 'text',
      placeholder: '请输入借阅人姓名',
    },
    rules: [
      { required: true, message: '请输入借阅人姓名', trigger: 'blur' },
    ],
  },
  {
    tag: 'el-input',
    label: '借阅人电话:',
    key: 'phone',
    value: '',
    default: '',
    attribute: {//属性
      type: 'text',
      placeholder: '请输入借阅人电话',
    },
    rules: [
      { required: true, message: '请输入借阅人电话', trigger: 'blur' },
    ],
  },
  {
    tag: 'el-input',
    label: '身份证号:',
    key: 'num',
    value: '',
    default: '',
    attribute: {//属性
      type: 'text',
      placeholder: '请输入身份证号',
    },
    rules: [
      { required: true, message: '请输入身份证号', trigger: 'blur' },
    ],
  },
  
  {
    tag: 'el-input',
    label: '现住址:',
    key: 'address',
    value: '',
    default: '',
    attribute: {//属性
      type: 'text',
      placeholder: '请输入现住址',
    },
    // rules: [
    //   { required: true, message: '请输入现住址', trigger: 'blur' },
    // ],
  },
  {
    tag: 'el-date-picker',
    label: '借阅时间:',
    key: 'borrowDate',
    value: '',
    default: '',
    attribute: {//属性
      type: 'datetime',
      placeholder: '请选择借阅时间',
    },
    rules: [
      { required: true, message: '请选择借阅时间', trigger: 'blur' },
    ],
  },
  {
    tag: 'el-date-picker',
    label: '归还时间:',
    key: 'returnDate',
    value: '',
    default: '',
    attribute: {//属性
      type: 'datetime',
      placeholder: '请选择归还时间',
    },
    rules: [
      { required: true, message: '请选择归还时间', trigger: 'blur' },
    ],
  },
 
]

export const baseFilterOptions = [
  {
    tag: 'el-input',
    label: '姓名:',
    key: 'name',
    value: '',
    default: '',
    attribute: {//属性
      type: 'text',
      placeholder: '请输入姓名',
    },
    rules: [
      { required: true, message: '请输入姓名', trigger: 'blur' },
    ],
  },
  {
    tag: 'el-input',
    label: '身份证号:',
    key: 'num',
    value: '',
    default: '',
    attribute: {//属性
      type: 'text',
      placeholder: '请输入身份证号',
    },
    rules: [
      { required: true, message: '请输入身份证号', trigger: 'blur' },
    ],
  },
  {
    tag: 'el-tree-select',
    label: '档案类别:',
    key: 'categoryId',
    value: '',
    default: '',
    attribute: {//属性
      placeholder: '请选择档案类别',
      checkStrictly: true,
      data: [
        {
          label: '全部',value: ''
        }
      ]
    },
    rules: [
      { required: true, message: '请选择档案类别', trigger: 'blur' },
    ],
  },
  {
    tag: 'el-input',
    label: '档案编号:',
    key: 'codes',
    value: '',
    default: '',
    attribute: {//属性
      type: 'text',
      placeholder: '请输入档案编号',
    },
    rules: [
      { required: true, message: '请输入档案编号', trigger: 'blur' },
    ],
  },
]