## TagInput - 输入标签

配置项参考 [el-tag](https://element-plus.gitee.io/zh-CN/component/tag.html "https://element-plus.gitee.io/zh-CN/component/tag.html")<br>
<br/>

```javascript
动态组件配置示例：
{
    tag: 'TagInput',
    label: '标签:',
    keys: {//示例为默认值，可不填写
        value: 'id',
        label: 'name'
    },
    value: [{id: 1,name: '张三'},{id: 2,name: '李四'}],
    default: [],
    size: 'large',//示例为默认值，可不填写
    type: '',//示例为默认值，可不填写
    closable: 'true',//示例为默认值，可不填写
}
```