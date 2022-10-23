import { ref, onMounted} from "vue";
import { ElMessage } from 'element-plus'
export default function pageManager(tableOptions,modelType,loading,isInit) {
  let searchParams = {};
  const doFilter = (params) => {
    searchParams = params;
    getTableData();
  };
  const pageChange = () => {
    getTableData();
  };
  let tableData = ref([]);
  const getTableData = () => {
    loading.value = true;
    tableOptions.getTableFn({...tableOptions.baseQuery,...searchParams,page: tableOptions.pageInfo.base.current,limit: tableOptions.pageInfo.base.limit}).then((res) => {
      loading.value = false;
      if (res.data.code == 0) {
        let resData = res.data.data.list || res.data.data;
        tableData.value = tableOptions.tableDataFormatter?tableOptions.tableDataFormatter(resData):(resData);
        tableOptions.pageInfo.total = res.data.data.total ?? res.data.data.length;
      }else{
        ElMessage.error(res.data.msg)
      }
    });
  };

  const showModel = ref(false);
  let editId = null;
  const editTableData = (data,callback) => {
    if (editId) {
      data[tableOptions.primaryKey] = editId;
      let params = {...tableOptions.baseUpdate,...data};
      if(tableOptions.beforeSubmit){
        params = tableOptions.beforeSubmit(params) || params;
      }
      tableOptions.editFn(params).then((res) => {
        if (res.data.code == 0) {
          ElMessage({
            message: "修改成功",
            type: "success",
          });
          if(tableOptions.afterSubmit){
            let returnValue = tableOptions.afterSubmit()
            if(returnValue && returnValue instanceof Promise){
              returnValue.then(()=>{
                getTableData();
              })
            }else{
              getTableData();
            }
          }else{
            getTableData();
          }
          showModel.value = false;
        } else {
          ElMessage({
            message: res.data.msg,
            type: "error",
          });
        }
        callback();
      });
    } else {
      let params = {...tableOptions.baseAdd,...data};
      if(tableOptions.beforeSubmit){
        params = tableOptions.beforeSubmit(params) || params;
      }
      tableOptions.addFn(params).then((res) => {
        if (res.data.code == 0) {
          ElMessage({
            message: "添加成功",
            type: "success",
          });
          if(tableOptions.afterSubmit){
            let returnValue = tableOptions.afterSubmit()
            if(returnValue && returnValue instanceof Promise){
              returnValue.then(()=>{
                getTableData();
              })
            }else{
              getTableData();
            }
          }else{
            getTableData();
          }
          showModel.value = false;
        } else {
          ElMessage({
            message: res.data.msg,
            type: "error",
          });
        }
        callback();
      });
    }
  };
  const handleAdd = () => {
    editId = null;
    tableOptions.baseModelOptions.map((item) => {
      if(item.tag == 'BaseTree'){
        return item.attribute.defaultCheckedKey = []
      }else{
        return item.value = item.default;
      }
    });
    modelType.value = "add";
    isInit.value = true;
    showModel.value = true;
  };
  const handleEdit = async (index, row) => {
    let data;
    if(tableOptions.detailFn){
      let res = await tableOptions.detailFn(row[tableOptions.primaryKey])
      if(res.data.code == 0){
        data = res.data.data;
      }else{
        ElMessage({
          message: res.data.msg,
          type: "error",
        });
        return;
      }
    }else{
      data = row;
    }
    if(tableOptions.beforeShowEdit){
      data = tableOptions.beforeShowEdit(data)
    }
    const doShow = ()=>{
      tableOptions.baseModelOptions.map((item) => {
        if(item.tag == 'BaseTree'){
          item.attribute.defaultCheckedKey = data[item.key]
        }
        else if(item.tag == 'BaseUpload'){
          let value = data[item.aliasKey || item.key] ?? item.value;
          if(value instanceof Array){
            item.value = value.map(item1=>{
              let url = item1[item.resKey?item.resKey[urlKey]:'url']
              let name = item1[item.resKey?item.resKey[nameKey]:'name']
              return {
                name: name,
                url: item.baseUrl + url,
                status: 'success',
                uid: url,
                response: {
                  url,
                  name
                }
              }
            })
          }else if(value instanceof Object){
            let url = value[item.resKey?item.resKey[urlKey]:'url']
            let name = value[item.resKey?item.resKey[nameKey]:'name']
            item.value = [
              {
                name: name,
                url: item.baseUrl + url,
                status: 'success',
                uid: url,
                response: {
                  url,
                  name
                }
              }
            ]
          }else{
            item.value = [
              {
                name: data[item.aliasKey || item.key],
                url: item.baseUrl + data[item.aliasKey || item.key],
                status: 'success',
                uid: data[item.aliasKey || item.key],
                response: {
                  url: data[item.aliasKey || item.key],
                  name: data[item.aliasKey || item.key]
                }
              }
            ]
          }
        }
        else{
          item.value = data[item.aliasKey || item.key] ?? item.value
        }
        
      });
      editId = data[tableOptions.primaryKey];
      modelType.value = "edit";
      showModel.value = true;
      isInit.value = true;
      
    }
    if(tableOptions.beforeEdit){
      tableOptions.beforeEdit(row).then(()=>{
        doShow();
      })
    }else{
      doShow()
    }
  };
  const deleteTableData = (index, row) => {
    let data = row;
    if(tableOptions.beforeDelete){
      data = tableOptions.beforeDelete(data)
    }else{
      data = tableOptions.multipleDelete?[row[tableOptions.primaryKey]]:{ [tableOptions.primaryKey]: row[tableOptions.primaryKey] }
    }
    tableOptions.deleteFn(data).then((res) => {
      if (res.data.code == 0) {
        ElMessage({
          message: "删除成功",
          type: "success",
        });
        if(tableOptions.afterDelete){
          let returnValue = tableOptions.afterDelete()
          if(returnValue && returnValue instanceof Promise){
            returnValue.then(()=>{
              getTableData();
            })
          }else{
            getTableData();
          }
        }else{
          getTableData();
        }
      }else{
        ElMessage({
          message: res.data.msg,
          type: "error",
        });
      }
    });
  };
  
  onMounted(()=>{
    if(tableOptions.autoQuery === false || tableOptions.waitingCallback){
      tableOptions.getTableData = getTableData;
    }else{
      getTableData();
    }
    
  });

  return {
    tableData,
    showModel,
    handleAdd,
    handleEdit,
    getTableData,
    editTableData,
    deleteTableData,
    pageChange,
    doFilter,
  };
}
