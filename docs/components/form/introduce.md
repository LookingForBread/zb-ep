# 动态Form
以配置数组的方式，动态生成相应form表单。
常用在模块组件中的BaseModel和BaseFilter。<br/>
通常情况,上述2个组件被封装在[BaseTablePage](../module/page.md)中。示例如下：
```javascript
//新增、修改弹窗配置项
export const baseModelOptions = [
  {
    tag: 'el-input',
    label: '标题:',
    key: 'name',
    value: '',
    default: '',
    rules: [
      { required: true, message: '请输入标题', trigger: 'blur' },
    ],
    attribute: {//属性
      type: 'text',
      placeholder: '请输入标题',
    },
  },
  {
    tag: 'BaseUpload',
    label: '视频:',
    key: 'videoUrl',
    baseUrl,
    value: [],
    default: [],
    width: '60%',
    rules: [
      { required: true, message: '请上传视频', trigger: 'change' },
    ],
    attribute: {//属性
      limit: 1,
      ref: 'uploadRef',
      accept: '.wmv,.asf,.asx,.mp4,.m4v',
      headers: {token: localGet('token')},
      baseUrl: baseUrl+'/base/upload'//图片提交接口
    },
    
  }
]

//搜索区域配置项
export const baseFilterOptions = [
  {
    tag: 'el-input',
    label: '标题:',
    key: 'title',
    value: '',
    default: '',
    attribute: {//属性
      type: 'text',
      placeholder: '请输入标题',
    },
  },
  {
    tag: 'BaseSelect',
    label: '提案类别:',
    key: 'type',
    value: '',
    default: '',
    attribute: {//属性
      placeholder: '请选择提案类别',
      options: []
    },
  },
]
```