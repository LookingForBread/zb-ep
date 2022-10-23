# 使用方式
插件在app.use 注入后，会自动注入到 vue3 全局方法中
```javascript
//使用示例：
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
console.log(proxy.$util);
```