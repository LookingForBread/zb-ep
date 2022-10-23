# BaseTree - 树形控件

配置项参考 [el-tree](https://element-plus.gitee.io/zh-CN/component/tree.html "https://element-plus.gitee.io/zh-CN/component/tree.html")
<br/>
获取结果时，默认携带了父级 id(即使 children 并未全部选中)
<br/>
回显时，默认进行了匹配过滤，即便默认选中值中包含了父级 id，但其 children 的 id 若未全部包含，父节点仍不会被选中
<br/>
BaseSelect/BaseTree 选项赋值，参考 util.js -> [setOptions](./../method/setOptions.md)

```javascript
动态组件配置示例：
{
    tag: 'BaseTree',
    label: '菜单:',
    key: 'menuIdList',
    value: [],
    default: [],
    attribute: {//配置项内容
        defaultCheckedKey: [],
        nodeKey: "id",
        showCheckbox: true,
        props: {label:'name'},
        data: []
    }
}
```