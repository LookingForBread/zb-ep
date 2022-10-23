# BaseFilter-搜索区域

```html
<BaseFilter
  :filterOptions="props.tableOptions.baseFilterOptions"
  :showFilter="true"
  @doFilter="doFilter"
></BaseFilter>
```

## 属性

| 名称         |     描述     |                可选值 |                      默认值 |   
| ------------ | :----------: | --------------------: | --------------------------: |
| filterOptions |   动态组件内容   |     [组件数组] | [] |
| showRest    |     是否显示重置按钮  |                   Boolean | false |

## 方法

| 名称         |   描述   |         参数类型 |
| ------------ | :------: | -------------: |
| doFilter  |   执行搜索   |            null |
| clearFilter | 清空搜索条件 | null |
```javascript
//添加ref
<BaseFilter ref="filter"></BaseFilter>
//js
const filter = ref()
filter.value.doFilter()
filter.value.clearFilter()
```


## 事件

| 名称     |     描述     |         可选值 |
| -------- | :----------: | -------------: |
| doFilter | 点击搜索触发 | Function(data) |