# setOptions 选项赋值

```javascript
//向动态组件中填充选项
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
state.baseModelOptions = proxy.$util.setOptions({
  //attrName: 下拉选?'options':'data'  默认为options
  data: state.baseModelOptions, //待赋值数据源
  key: "station", //配置项的key
  res, //返回结果
});
```

## 参数

|    名称     |                                                            描述                                                             | 必填 |                         默认值                          | 类型    |
| :---------: | :-------------------------------------------------------------------------------------------------------------------------: | ---- | :-----------------------------------------------------: | ------- |
| baseOptions |                                                          默认选项                                                           | 否   |                           []                            | Array   |
|  attrName   |                                   数据格式化后，赋值的属性名(select: options,tree: data)                                    | 否   |                        'options'                        | String  |
|    data     |                                                      目标(待赋值)数据                                                       | 是   |                           无                            | Object  |
|     res     |                                                           数据源                                                            | 是   |                           无                            | Object  |
|    path     |                                                          取值路径                                                           | 否   |                     "res.data.data"                     | String  |
|     key     |                                                      data 中对应的 key                                                      | 是   |                           无                            | String  |
|  relation   | \{key:'格式化后值对应的 key',name:'格式化后名称对应的 key',resKey:'格式化前值对应的 key',resName:'格式化前名称对应的 key'\} | 否   | \{key:'value',name:'label',resKey:'id',resName:'name'\} | Object  |
| hasChildren |                                                是否需要格式化 children 内容                                                 | 否   |                          null                           | Boolean |
|    event    |                                                        自定义 event                                                         | 否   |                          null                           | Object  |
|  everClear  |                                                         清空已有值                                                          | 否   |                          false                          | Boolean |
| setDefault  |                                                    取第一项的值为默认值                                                     | 否   |                   data 配置项的 value                   | Boolean |
|    query    |                                查询数据源(state.baseQuery) ,将选项的第一个值赋给查询 object                                 | 否   |                          null                           | Object  |
