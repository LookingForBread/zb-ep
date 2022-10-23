<script setup>
  import { reactive , ref } from 'vue'
  import {getDict,addDict,updateDict,deleteDict,getDictDetail,getDictType} from '@/api/system'
  import {baseModelOptions,baseFilterOptions} from './options'
  import BaseTablePage from '@/components/BaseTablePage'
  
  const state = reactive({
    baseModelOptions: baseModelOptions,
    baseFilterOptions: baseFilterOptions,
    title: "字典管理",
    baseModelName: '字典信息',
    addBtnName: '添加字典',
    editBtnName: '',
    delBtnName: '',
    primaryKey: 'id',
    getTableFn: getDict,
    addFn: addDict,
    editFn: updateDict,
    deleteFn: deleteDict,
    detailFn: getDictDetail,
    pageInfo: { total: 0, base:{limit: 8,current: 1} },
    baseQuery: {},
    autoQuery: false,
  })
  
  </script>
  
  <template>
    <BaseTablePage 
      :tableOptions="state" 
      ref="table"
    >
      <template v-slot:column>
        <el-table-column align="center" prop="dictLabel" label="字典标签" />
        <el-table-column align="center" prop="dictValue" label="字典值" />
        <el-table-column align="center" prop="remark" label="备注" />
        <el-table-column align="center" prop="updateDate" label="更新时间" />
      </template>
    </BaseTablePage>
  </template>
  
  <style scoped>
  
  </style>
  