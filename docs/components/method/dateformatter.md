# dateFormatter 日期格式化

```javascript
//日期格式化
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
proxy.$util.dateFormatter.formate("2022/09/08", "yyyy-mm-dd hh:mm");
```

## formateType

| 名称                | 示例                |
| :------------------ | :------------------ |
| yyyy-m              | 2022-1              |
| yyyy-m-d            | 2022-1-1            |
| yyyy-m-d h:m        | 2022-01-01 1:1      |
| yyyy-m-d h:m:s      | 2022-01-01 1:1:1    |
| yyyy-mm             | 2022-01             |
| yyyy-mm-dd          | 2022-01-01          |
| yyyy-mm-dd hh:mm    | 2022-01-01 01:01    |
| yyyy-mm-dd hh:mm:ss | 2022-01-01 01:01:01 |
| date                | 2022-01-01          |
| datetime            | 2022-01-01 01:01:01 |

## methods

|      名称      |         描述         |                          参数                           |
| :------------: | :------------------: | :-----------------------------------------------------: |
|    formate     |      格式化时间      |                   (日期,formateType)                    |
|      now       | 获取当前时间并格式化 |                       formateType                       |
| getMonthLength |     获取月份天数     |                      (year,month)                       |
| calculateDate  |       计算日期       | (日期, type 增减类型 年:1,月:2,日:3, 数量 ,formateType) |
