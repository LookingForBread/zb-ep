<script setup>
import { ref } from "vue";
import tableMethod from "../../composables/table";

const props = defineProps({
  tableOptions: Object,
});
if (!props.tableOptions.pageInfo) {
  props.tableOptions.pageInfo = { total: 0, base: { limit: 10, current: 1 } };
}

let modelType = ref("add");
let isInit = ref(false);
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
} = tableMethod(props.tableOptions, modelType, loading, isInit);
const modelRef = ref();
defineExpose({
  doFilter,
  getTableData,
  editTableData,
  deleteTableData,
  modelRef,
});
</script>

<template>
  <div
    v-loading="props.tableOptions.showLoading === false ? false : loading"
    element-loading-text="Loading..."
    element-loading-background="rgb(34, 58, 106, 0.5)"
  >
    <div v-if="props.tableOptions.title" class="title">
      {{ props.tableOptions.title }}
      <span
        v-if="props.tableOptions.showBack"
        class="title-back"
        @click="$router.go(-1)"
        >返回</span
      >
    </div>
    <BaseModel
      ref="modelRef"
      v-if="props.tableOptions?.baseModelOptions?.length > 0"
      :title="`${
        (props.tableOptions?.model?.modelType || modelType) == 'add'
          ? '添加'
          : '修改'
      }${props.tableOptions.baseModelName}`"
      :modelType="props.tableOptions?.model?.modelType || modelType"
      :isInit="isInit"
      :showModel="props.tableOptions?.model?.showModel || showModel"
      :width="props.tableOptions?.model?.modelWidth || '35%'"
      :labelWidth="props.tableOptions?.model?.labelWidth || '30%'"
      @dialogClose="
        props.tableOptions?.model
          ? (props.tableOptions.model.showModel = false)
          : (showModel = false)
      "
      @dialogSubmit="editTableData"
      @changeInit="isInit = false"
      :modelOptions="props.tableOptions.baseModelOptions"
    ></BaseModel>
    <BaseFilter
      v-if="props.tableOptions?.baseFilterOptions?.length > 0"
      ref="filter"
      :showRest="props.tableOptions?.showRest"
      @doFilter="doFilter"
      :filterOptions="props.tableOptions.baseFilterOptions"
    ></BaseFilter>
    <BaseControl>
      <el-button
        v-if="
          !(props.tableOptions.showAddBtn === false) &&
          props.tableOptions.addBtnName
        "
        :icon="props.tableOptions.addBtnIcon"
        type="primary"
        @click="
          props.tableOptions.handleAdd
            ? props.tableOptions.handleAdd()
            : handleAdd()
        "
      >
        <slot name="addButton">
          {{ props.tableOptions.addBtnName || "添加" }}
        </slot>
      </el-button>
    </BaseControl>
    <BaseTable
      @pageChange="pageChange"
      :data="tableData"
      :rowKey="props.tableOptions.rowKey"
      :hidePagenation="props.tableOptions.hidePagenation"
      :pageInfo="props.tableOptions.pageInfo"
    >
      <slot name="column"></slot>
      <slot
        name="control"
        :control="{
          showModel,
          doFilter,
          getTableData,
          pageChange,
          tableData,
          handleAdd,
          handleEdit,
          editTableData,
          deleteTableData,
        }"
      >
        <el-table-column
          v-if="!props.tableOptions.hideControl"
          min-width="200"
          label="操作"
        >
          <template #default="scope">
            <slot :scope="scope" name="before"></slot>
            <el-button
              v-if="props.tableOptions.showEditBtn !== false"
              type="primary"
              @click="
                props.tableOptions.handleEdit
                  ? props.tableOptions.handleEdit(scope.$index, scope.row)
                  : handleEdit(scope.$index, scope.row)
              "
              >{{ props.tableOptions.showEditBtn
              }}{{ props.tableOptions.editBtnName || "修改" }}</el-button
            >
            <el-popconfirm
              @confirm="
                props.tableOptions.handleDelete
                  ? props.tableOptions.handleDelete(scope.$index, scope.row)
                  : deleteTableData(scope.$index, scope.row)
              "
              title="确定删除该条数据?"
            >
              <template #reference>
                <el-button
                  v-if="props.tableOptions.showDelBtn !== false"
                  type="danger"
                  >{{ props.tableOptions.delBtnName || "删除" }}</el-button
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
.title {
  text-align: left;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 16px;
  border-bottom: 1px solid #ffffff;
}
.title:before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 12px;
  background: #286aed;
  margin: 0 9px;
}
</style>
