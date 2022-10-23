<script>
import { reactive } from 'vue'
export default{
  props: ['options','value','multiple','width'],
  setup(props,context){
    
  },
  methods: {

  }
}


</script>

<template>
  <el-select v-model="value" :multiple="multiple" :style="{width: (width ? width : 192) + 'px' }" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<style scoped>

</style>
