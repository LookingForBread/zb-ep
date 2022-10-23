# BaseTablePage-table 页面

column 配置项参考 [el-table](https://element-plus.gitee.io/zh-CN/component/table.html "https://element-plus.gitee.io/zh-CN/component/table.html")

```javascript
const state = reactive({
  baseModelOptions: baseModelOptions, //新增、修改弹窗  动态组件数组
  baseFilterOptions: baseFilterOptions, //上方搜索  动态组件数组
  title: "用户管理", //页面标题,不设置则隐藏标题区域
  getTableFn: getUser, //查询接口 --Promise
  pageInfo: { total: 0, base: { limit: 8, current: 1 } }, //分页信息
});
```

```html
<BaseTablePage :tableOptions="state">
  <template v-slot:addButton>
    <!-- 添加按钮内部插槽 -->
  </template>
  <template #column>
    <!-- 表格column插槽,不包含操作按钮 -->
    <el-table-column align="center" prop="username" label="用户名" />
    <el-table-column align="center" prop="gender" label="性别">
      <template #default="scope">
        <span style="margin-left: 10px"
          >{{ scope.row.gender==1?'男':scope.row.gender==2?'女':'未知' }}</span
        >
      </template>
    </el-table-column>
  </template>
  <template #control="baseScope">
  <!-- 表格control插槽，重写操作按钮区域 -->
    <el-table-column  label="操作" width="350">
      <template #default="scope">
        <template v-if="scope.row.status != 2">
            <el-button type="warning" :disabled="scope.row.status == 2"  @click="doSometing(scope.$index, scope.row)"
            >修改</el-button
          >
          <el-popconfirm @confirm="baseScope.control.deleteTableData(scope.$index, scope.row)" title="确定删除该条数据?">
            <template #reference>
              <el-button
                :disabled="scope.row.status == 2"
                type="danger"
                >删除</el-button
              >
            </template>
          </el-popconfirm>
        </template>
    </el-table-column>
  </template>
</BaseTablePage>
```

## 调用组件方法
```html
<BaseTablePage :tableOptions="state" ref="table"></BaseTablePage>
```
```javascript
const table = ref();
onMounted(() => {
  const {
    doFilter, //点击搜索后执行的函数
    getTableData, //查询表格数据执行的函数
    editTableData, //修改弹窗，点击确定执行的函数
    deleteTableData, //删除弹窗，点击确定执行的函数
  } = table.value;
  //示例：3s后主动执行一次查询
  setTimeout(() => {
    getTableData();
  }, 3000);
});
```



## tableOptions 属性
### function相关
| 名称              |            描述             | 必填 | 参数类型 | 默认值 |
| ----------------- | :-------------------------: | ---: | -------: | -----: |
| handleAdd | 添加按钮执行的 func(覆盖默认的调用 function) | 否 | Function | null |
| handleAdd | 添加按钮执行的 func(覆盖默认的调用 function) | 否 | Function | null |
| handleEdit | 点击编辑按钮执行的 func(覆盖默认的调用 function) | 否 | Function(index,row) | null |
| handleDelete | 点击删除按钮执行的 func(覆盖默认的调用 function) | 否 | Function(index,row) | null |
| beforeSubmit | 提交修改前事件，F(params) | 是 | Function | null |
| beforeShowEdit | 点击编辑按钮事件,弹窗显示前执行(同步) F(params) | 否 | Function | null |
| beforeEdit | 与 beforeShowEdit 执行时机一致(异步) | 否 | (Promise)Function(row) | null |
| beforeDelete | 执行删除前调用 | 否 | Function(row) | null |
| afterSubmit | 表单提交后调用(支持普通 fn 与 return Promise) | 否 | (Promise)Function(row) | null |
| afterDelete | 数据删除后调用(支持普通 fn 与 return Promise) | 否 | (Promise)Function(row) | null |
### 配置属性
| 名称              |            描述             | 必填 | 参数类型 | 默认值 |
| ----------------- | :-------------------------: | ---: | -------: | -----: |
| baseModelOptions  | 新增、修改弹窗 动态组件数组 |   是 |    Array |   null |
| baseFilterOptions |    上方搜索 动态组件数组    |   是 |    Array |   null |
| showRest | 是否显示重置搜索按钮 | 否 | Boolean | false |
| autoQuery | 是否页面初始化自动进行查询 table | 是 | Boolean | true |
| title | 页面标题,不设置则隐藏标题区域 | 否 | String | null |
| showLoading | 是否显示加载动画，默认 true，且只有值为 false 不显示 | 否 | Boolan | true |
| rowKey | 当 row 中包含 children 字段时，被视为树形数据，指定 row-key,开启树形数据展示 | 否 | String | null |
| showBack | 是否显示返回按钮 | 否 | Boolean | false |
| baseModelName | 弹窗标题 | 否 | String | null |
| hideControl | 隐藏操作列 | 否 | Boolean | null |
| showAddBtn | 是否显示添加按钮，仅为 false 不显示 | 否 | Boolean | null |
| addBtnName | 添加操作 按钮名称 ,为空则不显示按钮 | 否 | String | null |
| addBtnIcon | 添加按钮的 icon | 否 | String | null |
| showEditBtn | 是否显示修改按钮，仅为 false 不显示 | 否 | Boolean | null |
| editBtnName | 修改操作 按钮名称 | 否 | String | null |
| showDelBtn | 是否显示删除按钮，仅为 false 不显示 | 否 | Boolean | null |
| delBtnName | 删除操作 按钮名称 | 否 | String | null |
| primaryKey | 修改、删除操作 主键名称 | 否 | String | null |
| baseQuery | 查询接口默认参数 | 否 | Object | null |
| baseAdd | 添加接口默认参数 | 否 | Object | null |
| baseUpdate | 修改接口默认参数 | 否 | Object | null |
| getTableFn | 查询接口 | 是 | (Promise) Function | null |
| addFn | 新增接口 | 否 | (Promise) Function | null |
| editFn | 修改接口 | 否 | (Promise) Function | null |
| detailFn | 查询详情接口,点击修改触发，为 null 时，使用 table-row 的数据 | 否 | (Promise) Function | null |
| deleteFn | 删除接口 | 否 | (Promise) Function | null |
| multipleDelete | 是否批量删除 --批量删除会自动将 id 包裹在数组中，并未支持批量选择 | 否 | Boolean | false |
| pageInfo | 分页信息 | 否 | Object | { total: 0, base:{limit: 10,current: 1} } |


## 插槽

| 名称      |          描述          |                              scope |
| --------- | :--------------------: | ---------------------------------: |
| addButton | 顶部添加按钮的内部插槽 |                               none |
| column    |   table-column 内容    |                                    |
| control   |     操作(操作按钮)     | scope.control.'table 相关 methods' |
