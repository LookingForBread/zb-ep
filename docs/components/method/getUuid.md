# getUUID 获取 UUID

```javascript
//生成UUID
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
let uuid = proxy.$util.getUUID();
```