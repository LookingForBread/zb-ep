<script setup>
import { ref, reactive} from 'vue'
import tableMethod from '../../composables/table.js'

const props = defineProps({
    tableOptions: Object,
})
let modelType = ref('add');
const loading = ref(false);
const {
  showModel,
  doFilter,
  pageChange,
  tableData,
  getTableData,
  handleAdd,
  handleEdit,
  editTableData,
  deleteTableData,
} = tableMethod(props.tableOptions,modelType,loading)
</script>

<template>
  <div 
  v-loading="loading"
  element-loading-text="Loading..."
  element-loading-background="rgb(34, 58, 106, 0.5)"
  >
    <div class="title">
      {{props.tableOptions.title}}
    </div>
    <BaseModel :title="`${modelType=='add'?'添加':'修改'}${props.tableOptions.baseModelName}`" :modelType="modelType" :showModel="showModel" :width="'35%'" @dialogClose="showModel=false" @dialogSubmit="editTableData" :modelOptions="tableOptions.baseModelOptions"></BaseModel>
    <BaseFilter @doFilter="doFilter" :filterOptions="props.tableOptions.baseFilterOptions"></BaseFilter>
    <BaseControl>
      <el-button v-if="!(props.tableOptions.showAddBtn===false) && props.tableOptions.addBtnName" type="primary" @click="props.tableOptions.handleAdd?props.tableOptions.handleAdd():handleAdd()">{{props.tableOptions.addBtnName||'添加'}}</el-button>
    </BaseControl>
    <BaseTable 
      @pageChange="pageChange" 
      :data="tableData" 
      :rowKey="'id'"
      :hidePagenation="props.tableOptions.hidePagenation"
      :pageInfo="props.tableOptions.pageInfo"
    >
        <slot name="column"></slot>
        <slot name="control" :control="{
          showModel,
          doFilter,
          getTableData,
          pageChange,
          tableData,
          handleAdd,
          handleEdit,
          editTableData,
          deleteTableData,
          }">
          <el-table-column v-if="!props.tableOptions.hideControl" width="200"  label="操作" >
            <template #default="scope">
              <slot :scope="scope" name="before"></slot>
              <el-button v-if="props.tableOptions.showEditBtn!==false" type="primary" @click="props.tableOptions.handleEdit?props.tableOptions.handleEdit(scope.$index, scope.row):handleEdit(scope.$index, scope.row)"
                >{{props.tableOptions.showEditBtn}}{{props.tableOptions.editBtnName||'修改'}}</el-button
              >
              <el-popconfirm @confirm="deleteTableData(scope.$index, scope.row)" title="确定删除该条数据?">
                <template #reference>
                  <el-button
                    v-if="props.tableOptions.showDelBtn!==false"
                    type="danger"
                    >{{props.tableOptions.delBtnName||'删除'}}</el-button
                  >
                </template>
              </el-popconfirm>
            </template>
          </el-table-column>
        </slot>

    </BaseTable>
  </div>
</template>

<style scoped>
.title{
  text-align: left;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 16px;
  border-bottom: 1px solid #FFFFFF;
}
.title:before{
  content: '';
  display: inline-block;
  width: 4px;
  height: 12px;
  background: #286AED;
  margin: 0 9px;
}
</style>
