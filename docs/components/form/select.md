# BaseSelect - 下拉选

配置项参考 [el-select](https://element-plus.gitee.io/zh-CN/component/select.html "https://element-plus.gitee.io/zh-CN/component/select.html")
<br/>
BaseSelect/BaseTree 选项赋值，参考 util.js -> [setOptions](./../method/setOptions.md)

```javascript
动态组件配置示例：
{
    tag: 'BaseSelect',
    label: '部门:',
    key: 'deptId',
    value: '',
    default: '',
    attribute: {//配置项内容
        placeholder: '请选择公司',
        options: [
            {
                label: '产品部',
                value: 1
            }
        ]
    }
}
```