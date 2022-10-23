import Cookies from 'js-cookie'
import { useRoute } from 'vue-router'
import routes from '@/router/routes'
import {getPermissionsDt,getNav} from '@/api/user'

const route = useRoute()


export function localGet (key) {
  return Cookies.get(key)
}

export function localSet (key, value) {
  Cookies.set(key, value)
}

export function localRemove (key) {
  Cookies.remove(key)
  window.SITE_CONFIG = {}
  // window.localStorage.removeItem(key)
}

//对object进行赋值
export function setObjectValue(source, arg) {
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
};

//通过key更改值
export function setValueByKey(source, key,newValue) {
  //遍历form表单，赋值
  for (let index = 0; index < source.length;index++) {
    if(source[index].key == key || source[index]?.aliasKey == key){
      source[index].value = newValue
      break;
    }
  }
};

//动态设置options
export function setOptions ({
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
    let item = {...data};
    item[relation.key ?? 'value'] = data[relation.resKey];
    item[relation.name ?? 'label'] = data[relation.resName];
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
            ...item,
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
}

/**
 * 获取uuid
 */
 export function getUUID () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
  })
}

// 判断内容是否含有表情字符，现有数据库不支持。
export function hasEmoji (str = '') {
  const reg = /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g;
  return str.match(reg) && str.match(reg).length
}

export async function hasPrimission (to){
  let primissions = window.SITE_CONFIG?.routes;
  if(!primissions){
    primissions = await getRoutes();
  }
  return primissions.includes(to.name)
}

//获取路由
const getRoutes = async () => {
  let res = await getNav()
  let nav = res.data.data;
  let routes = []
  nav.forEach(item => {
    if(item.url) routes.push(item.url)
    if(item.children.length > 0){
      item.children.forEach(child => {
        if(child.url) routes.push(child.url)
      })
    }
  })
  if(!window.SITE_CONFIG) window.SITE_CONFIG = {};
  window.SITE_CONFIG.routes = routes
  

  return routes 
}

// 获取权限
const getPermissions = function() {
  return new Promise(( resolve,reject)=>{
    getPermissionsDt().then(({ data: res }) => {
      if (res.code !== 0) {
        return ElMessage({
              showClose: true,
              message: res.msg,
              type: 'error',
            })
      }
      if(!window.SITE_CONFIG) window.SITE_CONFIG = {};
      window.SITE_CONFIG['permissions'] = res.data
      // store.commit('setPermission', res.data)
      resolve(res.data)
  
    }).catch((error) => {
      reject(error)
    })
  })
}

