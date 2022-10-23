import DateFormatter  from "./Formatter"
export default {
  dateFormatter: new DateFormatter(),
  //对object进行赋值
  setObjectValue(source, arg) {
    //遍历form表单，赋值
    for (let index in source) {
      let aliasKey = source[index].aliasKey;
      let data = source[index].key;
      delete source[index].isError;
      delete source[index].errorMsg;
      let val;
      if (aliasKey) {
        //是否有不一致的key
        val = arg[aliasKey];
      } else {
        val = arg[data];
      }
      if (val && val instanceof Object && !val instanceof Array) {
        //参数为对象即 赋值内容为多个字段
        //遍历参数的字段
        for (let label in val) {
          source[index][label] = val[label];
        }
      } else {
        // if (Number.isFinite(val)) val = val.toString(); //数字转字符串
        let defaultVal = source[index]["default"];
        source[index].value = val ? val : defaultVal ? defaultVal : "";
      }
    }
  },
  //通过key更改值
  setValueByKey(source, key,newValue) {
    //遍历form表单，赋值
    for (let index = 0; index < source.length;index++) {
      if(source[index].key == key || source[index]?.aliasKey == key){
        source[index].value = newValue
        break;
      }
    }
  },
  setOptions ({
    data,
    path="res.data.data",
    key,
    res,
    hasChildren=false,
    everClear=false,
    baseOptions=[],
    setDefault,
    relation= {
      key: 'value',
      name: 'label',
      resKey: 'id',
      resName: 'name'
    },
    query,
    attrName="options",
    event
  }) {
    function deepFormat(data){
      let item = {};
      item[relation.key] = data[relation.resKey];
      item[relation.name] = data[relation.resName];
      if(data.children && data.children.length > 0){
        item.children = data.children.map(item => deepFormat(item));
      }
      return item
    }
  
    return data.map(item=>{
      if(item.key === key){
        let options = eval(path).map(item=>{
          if(hasChildren){
            return deepFormat(item)
          }else{
            return {
              [relation.key]: item[relation.resKey],
              [relation.name]: item[relation.resName]
            }
          }
        })
        if(query) query[key] = options[0][relation.key];
        return {
          ...item,
          attribute: {
            ...item.attribute,
            [attrName]: (
              ()=>{
                if(everClear){
                  return [...baseOptions,...options]
                }else{
                  return [...baseOptions,...item.attribute[attrName],...options]
                }
              }
            )()
          },
          value: setDefault ? options[0][relation.key] : item.value,
          event
        }
      }else{
        return item
      }
    })
  },
  getUUID () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
    })
  },
  hasEmoji (str = '') {
    const reg = /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g;
    return str.match(reg) && str.match(reg).length
  }
}