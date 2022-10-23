# setObjectValue 动态数组赋值(object)

```javascript
//向动态组件中填充值
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
proxy.$util.setObjectValue(source, arg);
```

## 参数

|  名称  |      描述      | 必填 | 默认值 | 类型   |
| :----: | :------------: | ---- | :----: | ------ |
| source | 待赋值的数据源 | 是   |   无   | Array  |
|  arg   |  取值的数据源  | 是   |   无   | Object |