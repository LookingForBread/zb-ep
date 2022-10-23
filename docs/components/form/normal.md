# 通用配置


```javascript
// 通用配置
{
    tag: '组件名称',
    label: '示例:',
    key: 'videoUrl',
    value: '当前值',
    default: '默认值',
    rules: [//校验规则
        { required: true, message: '示例规则', trigger: 'change' },
    ],
    attribute: {//属性
        limit: 1,
    },
    event: {
        'change': (data)=>{//参数内容，见使用的组件的事件
            //doSomething
        }
    },
    customFormatter: function(data){
        if(data.length > 0) return data[0].response.url
    }
}
```
## 属性
|   属性    |                                      描述                                      | 是否必填 |  类型  | 默认值 |
| :-------: | :----------------------------------------------------------------------------: | :------: | :----: | :----: |
|    tag    |                                    组件名称                                    |    是    | String |   无   |
|   label   |                                  标签描述文本                                  |    是    | String |   无   |
|    key    |                              键名(取值/赋值使用)                               |    是    | String |   无   |
|   value   |                             当前值(v-model 绑定值)                             |    是    |  Any   |   ''   |
|  default  |                    默认值(取值时，若 value 为空取 default)                     |    是    |  Any   |   ''   |
|  width  |                        宽度                     |    否    |  String   |   70%   |
|  hide  |                        隐藏控件                     |    否    |  Boolean   |   false   |
|  disabled  |                    禁用控件                     |    否    |  Boolean   |   false   |
|  disEdit  |                    不进行修改([modelType](../module/dialog.md)=edit &&disEdit=true)自动进行隐藏         |    否    |  Boolean   |   false   |
|  rules  |                    form表单校验规则(提交表单时校验) [规则](https://element-plus.gitee.io/zh-CN/component/form.html#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C "https://element-plus.gitee.io/zh-CN/component/form.html#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C")                     |    否    |  Array   |   ''   |
| attribute |              组件属性(绑定到组件上的属性，等同于:attr="父子传值")              |    否    | Object |   无   |
|   event   | 组件事件(绑定到组件上的属性，若为 event:{click:()=>{}}等同于@click="function") |    否    | Object |   无   |
|   customFormatter   | 自定义格式化(点击确定按钮后-调用提交接口前，触发) |    否    | Object |   无   |

## event
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
## customFormatter
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
