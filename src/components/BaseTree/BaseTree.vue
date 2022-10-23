<script>
  import { reactive,watch,ref } from 'vue'
  export default{
    props: ['nodeKey','data','props','showCheckbox','defaultCheckedKey','defaultExpandAll','modelValue','checkStrictly'],
    setup(props,context){
      const treeRef = ref()
  
      const getChildrenIds = (idMap,data)=>{
        let ids = []
        data.forEach(item=>{
          ids.push(item.id)
          if(item.children && item.children.length>0){
            idMap[item.id] = getChildrenIds(idMap,item.children)
          }
        })
        return ids
      }
      let idMap = null
      const setCheckedKeys = (newVal)=>{
        if(props.checkStrictly){//精确模式
          if(newVal && newVal.length > 0) treeRef.value.setCheckedKeys(newVal)
        }else{
          if(!idMap){
            idMap = {};
            props.data.map(item=>{
              if(item.children && item.children.length>0){
                idMap[item.id] = getChildrenIds(idMap,item.children)
              }
            })
          }
          let needCheckIds = []
          newVal.map(item=>{
            if(idMap[item]){//此id包含子节点
              let hasAll = true;
              for(let i = 0;i < idMap[item].length;i++){
                if(!props.defaultCheckedKey.includes(idMap[item][i])){
                  hasAll = false;
                  break;
                }
              }
              if(hasAll){
                needCheckIds.push(item)
              }
            }else{
              needCheckIds.push(item)
            }
          })
          if(newVal && newVal.length > 0) {
            setTimeout(() => {
              treeRef.value.setCheckedKeys(needCheckIds)
            }, 10);
          }
        }
      }
  
      if(props.defaultCheckedKey?.length > 0){
        setCheckedKeys(props.defaultCheckedKey)
      }
      watch(()=>props.defaultCheckedKey,(newVal)=>{
        setCheckedKeys(newVal)
      })
      const handlerCurrentChange = (current,{checkedNodes,checkedKeys,halfCheckedNodes,halfCheckedKeys})=>{
        let ids = new Set();
        //整合数据，若选中部分子节点，在数据中仍然把父节点选中
        checkedNodes.map(item=>{
          ids.add(item.id)
          if(item.pid) ids.add(item.pid)
        })
        context.emit('update:modelValue',[...ids])
      } 
      return {
        treeRef,
        handlerCurrentChange
      }
    },
  }
  
  
  </script>
  
  <template>
  <div>
   <el-tree
      ref="treeRef"
      :default-checked-keys="defaultCheckedKey"
      :default-expand-all="defaultExpandAll"
      :check-strictly="checkStrictly||false"
      :node-key="nodeKey"
      :data="data"
      :props="props"
      @check="handlerCurrentChange"
      :show-checkbox="showCheckbox"
    />
  </div>
   
  </template>
  
  <style scoped>
  .control-box{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  /* :deep(.el-tree){
    background: none;
    color: white;
  }
  :deep(.el-tree-node__content:hover){
    background: none;
  }
  :deep(.el-tree-node:focus>.el-tree-node__content){
    background: none;
  } */
  </style>
  