# BaseRadioGroup - 单选

配置项参考 [el-radio-group](https://element-plus.gitee.io/zh-CN/component/radio.html "https://element-plus.gitee.io/zh-CN/component/radio.html")

```javascript
动态组件配置示例：
{
    tag: 'BaseRadioGroup',
    label: '性别:',
    key: 'gender',
    value: 1,
    default: 1,
    attribute: {//配置项内容
        options:[
            {label: '男',value: 1},
            {label: '女',value: 2},
            {label: '未知',value: 3},
        ]
    }
}
```