<template>
  <div>
    <Editor v-model="data"></Editor>
  </div>
</template>

<script setup>
import Editor from '@/components/Editor'
import {reactive,ref,onMounted} from 'vue'

const data = ref('aaaaaaaaaa')
const show = ref(false)
</script>

<style scoped>

</style>