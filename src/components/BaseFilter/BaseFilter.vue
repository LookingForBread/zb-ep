<script setup>
import { reactive } from 'vue'
  const props = defineProps({
    filterOptions: Array,
    showRest: {
      type: Boolean,
      default: false,
    },
  })
  const doFilter = ()=>{
      let filterRes = {};
      props.filterOptions.map(item=>{
        filterRes[item.key] = item.customFormatter?item.customFormatter(item.value):item.value
      })
      context.emit('doFilter',filterRes)
    }
    const clearFilter = ()=>{
      props.filterOptions.map(item=>{
        item.value =  item.default || ''
      })
    }
    defineExpose({
      doFilter,
      clearFilter
    })


</script>

<template>
  <el-row v-if="props.filterOptions && props.filterOptions.length > 0" :gutter="20" justify="start" align="middle" class="fliter-box">
     <div v-for="(item,index) in props.filterOptions" :key="item.key" style="padding:10px;display: flex;align-items: center;">
        <label class="lebel">{{item.label}}</label>
        <component :is="item.tag" v-model="props.filterOptions[index].value" v-bind="item.attribute" v-on="item.event||{}" ></component>
     </div>
     <el-button @click="doFilter" type="primary">搜索</el-button>
     <el-button v-show="props.showRest" @click="clearFilter" type="primary">重置</el-button>
  </el-row>
</template>

<style scoped>
.fliter-box{
  /* border: 1px solid #ebeef5; */
  margin: 0 !important;
  padding: 10px;
}
.lebel{
margin-right:5px;
min-width: 80px;
}
</style>
