# BaseTable-表格

```html
<!-- 封装了el-table + pagination -->
<BaseTable
  @pageChange="pageChange"
  :data="tableData"
  :hidePagenation="props.tableOptions.hidePagenation"
  :pageInfo="props.tableOptions.pageInfo"
>
  <el-table-column align="center" prop="dictName" label="字典名称" />
  <el-table-column align="center" prop="dictType" label="字典类型" />
</BaseTable>
```

## 属性

| 名称           |       描述        |                                   可选值 |
| -------------- | :---------------: | ---------------------------------------: |
| data           |      列表值       |                                 [列表值] |
| pageInfo       |   分页信息对象    | { total: 0, base:{limit: 8,current: 1} } |
| hidePagenation |   是否隐藏分页    |                               true/false |

## 事件

| 名称       |     描述     |             可选值 |
| ---------- | :----------: | -----------------: |
| pageChange | 页码发生改变 | Function(pageInfo) |