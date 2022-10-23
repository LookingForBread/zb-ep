<script>
import { reactive } from 'vue'
export default{
  props: ['data','options'],
  setup(props,context){
  },
  methods: {
  }
}


</script>

<template>
    <el-radio-group class="ml-4">
      <el-radio v-for="item in options" :key="item.value" :label="item.value" size="large">{{item.label}}</el-radio>
    </el-radio-group>
</template>

<style scoped>

</style>
