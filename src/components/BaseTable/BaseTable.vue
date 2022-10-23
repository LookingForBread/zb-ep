<script>
import { reactive , watch} from 'vue'
export default{
  props: ['data','rowKey','pageInfo','filterOptions','showFilter','hidePagenation'],
  setup(props,context){
    let page = reactive(props.pageInfo)
    watch(page.base,(newVal,oldVal)=>{
      context.emit('pageChange',newVal)
    })
    const doFilter = (searchData) => {
      context.emit('doFilter',searchData)
    }
    return {
      page,
      doFilter
    }
  },
}


</script>

<template>
  <div>
    <el-table :row-key="rowKey" :data="data" stripe style="width: 100%;margin-top:20px;">
      <slot></slot>
    </el-table>
    <el-pagination v-if="!hidePagenation" style="margin-top:10px;" v-model:currentPage="page.base.current" background layout="total,sizes,prev, pager, next" :page-sizes="[8,10, 20,30, 40, 50]" v-model:page-size="page.base.limit" :total="page.total" />

  </div>
</template>

<style scoped>
.fliter-box{
  border: 1px solid;
  min-height: 100px;
}
</style>
