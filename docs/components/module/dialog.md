# BaseModel-弹出框

```html
<BaseModel
  :title="'查看资料'"
  :modelType="'view'"
  :showModel="state.showModel"
  :width="'35%'"
  :modelOptions="state.baseModelOptions"
  @dialogClose="state.showModel=false"
  @dialogSubmit="editFile"
>
</BaseModel>
```

## 属性

| 名称         |     描述     |                可选值 |
| ------------ | :----------: | --------------------: |
| title        |     标题     |                   any |
| width        |     窗口宽度     |                   String |
| labelWidth   |     label宽度     |                   String |
| modelType    |   查看类型   | view(只读)/edit(编辑) |
| showModel    |   是否显示   |            true/false |
| modelOptions | 动态组件内容 |            [组件数组] |

## 方法

| 名称         |   描述   |         参数类型 |
| ------------ | :------: | -------------: |
| setValueByKey  |   通过key赋值   |            (key,value) |
| setObjectValue | 通过Object赋值(根据key进行取值) | Object |
| clearForm | 清空表单值(取modelOptions中default值) | null |
```javascript
//添加ref
<BaseModel ref="bm"></BaseModel>
//js
const bm = ref()
bm.value.setValueByKey('name','张三')
bm.value.setObjectValue({name:'张三',age:18})
```

## 事件

| 名称         |   描述   |         可选值 |
| ------------ | :------: | -------------: |
| dialogClose  |   关闭弹窗   |            any |
| dialogSubmit | 点击确认按钮 | Function(data:Object,callback:Function) 调用callback(),主动将loading状态改为false |