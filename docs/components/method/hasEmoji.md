# hasEmoji Emoji 判断

```javascript
//判断是否包含emoji表情
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
let hasEmoji = proxy.$util.hasEmoji(String);
```