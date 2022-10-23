<script>
import { reactive } from 'vue'
export default{
  props: ['showModel','modelOptions'],
  setup(props,context){
    
  },
  methods: {
    close(){
      this.$emit('dialogClose')
    },
    submit(){
      this.$emit('dialogSubmit')
    }
  }
}


</script>

<template>
  <div class="control-box">
    <slot></slot>
  </div>
</template>

<style scoped>
.control-box{
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */
  margin: 10px 15px 10px 5px;
}
</style>
