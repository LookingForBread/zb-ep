# setValueByKey 动态数组赋值(key)

```javascript
//向动态数组赋值
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
proxy.$util.setValueByKey(state.baseModelOptions, "key", "newValue");
```
