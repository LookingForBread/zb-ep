<template>
  <div>
    <BaseModel ref="bm" :title="'查看资料'" :modelType="'edit'" :showModel="state.showModel" :width="'35%'"
      :modelOptions="state.baseModelOptions" @dialogClose="state.showModel=false" @dialogSubmit="editFile">
    </BaseModel>
    <el-button @click="state.showModel=true">xianshi</el-button>
    <!-- <BaseTablePage 
      :tableOptions="state" 
    >
      <template #column>
        <el-table-column align="center" prop="username" label="用户名" />
      </template>
    </BaseTablePage> -->
    <!-- 普通上传：<BaseUpload
    
    baseUrl='http://192.168.101.181:8083/base/upload'
    >
    </BaseUpload>
    秒传：<BaseUpload
    :pieceUpload="{
        unique: 2,
        checkFile:{
          method: 'post',
          url: 'http://localhost:3000/api/base/check',
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        },
        upload:{
          method: 'post',
          url: 'http://localhost:3000/api/base/slice',
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        },
        mergetFile:{
          method: 'post',
          url: 'http://localhost:3000/api/base/compose',
          headers: {
            'Content-Type': 'application/json'
          },
        },
      }" 
    >
    </BaseUpload> -->
    <!-- <BaseFilter
      ref="filter"
      :filterOptions="state.baseFilterOptions"
      :showRest="false"
      ></BaseFilter> -->
  </div>
</template>

<script setup>
import {reactive,ref,onMounted} from 'vue'
import {baseModelOptions,baseFilterOptions} from './options'

import BaseModel from '@/components/BaseModel'
// import BaseFilter from '@/components/BaseFilter'
const state = reactive({
  showModel: false,
  baseFilterOptions,
  baseModelOptions
})
const filter = ref()
onMounted(()=>{
  console.log(filter.value)
})

</script>

<style scoped>

</style>