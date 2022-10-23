<script setup>
import { reactive,ref ,onMounted,watch} from 'vue'
const props = defineProps({
    modelValue: Array,
    keys: {
        type: Object,
        default: ()=>{
            return {
                value: 'id',
                label: 'name'
            }
        }
    },
    size: {
        type: String,
        default: ()=> 'large'
    },
    type: {
        type: String,
        default: ()=> ''
    },
    closable: {
        type: Boolean,
        default: ()=> true
    },
    placeholder: {
        type: String,
        default: ()=> '请输入标签'
    }
})
const state = reactive({
    inputVal: ''
})
const addTag = ()=>{
    if(state.inputVal){
        props.modelValue.push({
            [props.keys.label]: state.inputVal,
        })
        state.inputVal = '';
    }
}
const closeTag = (index)=>{
    props.modelValue.splice(index,1);
}
</script>

<template>
    <div class="tag-box">
        <el-tag
        v-for="(item,index) in props.modelValue"
        :key="item[keys.value]"
        :type="props.type"
        :size="props.size"
        :closable="props.closable"
        @close="closeTag(index)"
        class="tag-item"
        effect="dark"
        >
        {{ item[keys.label]}}
        </el-tag>
        <el-input v-model="state.inputVal" @blur="addTag" style="width:150px;" :placeholder="props.placeholder" type="text"></el-input>
    </div>
</template>

<style scoped>
.tag-item{margin: 5px;}
.tag-box{text-align: left;}
</style>
