# 动态Form
以配置数组的方式，动态生成相应form表单。
常用在模块组件中的BaseModel和BaseFilter。
通常情况,上述2个组件被封装在BaseTablePage中
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

### 属性
| 名称              |                                     描述                                     | 必填 | 参数类型 | 默认值 |
| ----------------- | :--------------------------------------------------------------------------: | ---: | ------: | ----: |
| tag               |                                组件名称                                   |   是 |    String | 无 |
| label             |                                标签名称                                   |   是 |    String | 无 |
| key               |                                提交的key值                                 |   是 |    String | 无 |
| value             |                                当前值                                      |   是 |    String | 无 |
| default           |              默认值，取值时，若value为空，则取default的值                     |   是 |    String | 无 |
| attribute         |              组件的属性，等同于直接组件中<组件 :属性="something" />            |   否 |   Object | {} |
| rules             |              form表单校验规则，仅支持默认校验，详情参考element-plus            |   否 |   Array  | 无 |
| event             |              组件的事件，等同于直接组件中<组件 @事件="something" />,见下方示例  |   否 |   Object | null |
| customFormatter   |              自定义格式化,在form表单点击提交取值时会触发,见下方示例             |   否 |   Object | null |


### event
为组件绑定事件
```javascript
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
    event: {
        'change': (data)=>{//参数内容，见使用的组件的事件
            //doSomething
        }
    }
}
```
### customFormatter
自定义格式化函数
```javascript
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
    customFormatter: function(data){
        //data 为v-model的值
        //this 指向当前vue组件
        return data[0].response.url
    }
}
```