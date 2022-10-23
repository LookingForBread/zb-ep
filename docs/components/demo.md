# 示例
## option.js
```javascript
export const baseModelOptions = [
    {
      tag: 'el-input',
      label: '角色名称:',
      key: 'name',
      value: '',
      default: '',
      attribute: {//属性
        type: 'text',
        placeholder: '请输入角色名称',
      },
    },
    {
      tag: 'el-input',
      label: '备注:',
      key: 'remark',
      value: '',
      default: '',
      attribute: {//属性
        type: 'text',
        placeholder: '请输入备注',
      },
    },
    {
      tag: 'BaseTree',
      label: '菜单:',
      key: 'menuIdList',
      value: [],
      default: [],
      attribute: {//属性
        defaultCheckedKey: [],
        nodeKey: "id",
        showCheckbox: true,
        props: {label:'name'},
        data: []
      }
    },
  ]
  
  export const baseFilterOptions = [
    {
      tag: 'el-input',
      label: '角色名称:',
      key: 'name',
      value: '',
      attribute: {//属性
        type: 'text',
        placeholder: '请输入角色名称'
      },
    },
  ]
```
## role.vue
```html
<script setup>
import { reactive,ref,getCurrentInstance } from 'vue'
import {getRole,addRole,updateRole,deleteRole,getRoleDetail,getMenuList} from '@/api/data'
import {setOptions} from '@/utils'
import {baseModelOptions,baseFilterOptions} from './options'

const { proxy } = getCurrentInstance();
const state = reactive({
  baseModelOptions: baseModelOptions,
  baseFilterOptions: baseFilterOptions,
  title: "角色管理",
  baseModelName: '角色信息',
  addBtnName: '添加角色',
  primaryKey: 'id',
  getTableFn: getRole,
  addFn: addRole,
  editFn: updateRole,
  deleteFn: deleteRole,
  detailFn: getRoleDetail,
  multipleDelete: true,
  pageInfo: { total: 0, base:{limit: 8,current: 1} }
})

getMenuList().then(res=>{
  state.baseModelOptions = proxy.$util.setOptions({
    data: state.baseModelOptions,//待赋值数据源
    key:'station',//配置项的key
    res//返回结果
  })
})
</script>

<template>
  <BaseTablePage 
    :tableOptions="state" 
  >
    <template v-slot:column>
      <el-table-column align="center" prop="name" label="名称" />
      <el-table-column align="center" prop="remark" label="备注" />
  	</template>
  </BaseTablePage>
</template>

<style scoped>

</style>

```