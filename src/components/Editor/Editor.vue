<script setup>
import { reactive,ref ,onMounted,watch} from 'vue'
import ImageUploader from 'quill-image-uploader';
import ImageResize from 'quill-image-resize-module';
Quill.register('modules/ImageResize', ImageResize);

const props = defineProps({
    modelValue: String,
    className: String,
    contentType: {
        type: String,
        default: ()=> 'html'
    },
    uploadFn: Function,
    toolbar: Array,
    modules: Array,
    placeholder: {
        type: String,
        default: ()=> '请输入内容'
    }
})

const state = reactive({
    content: props.modelValue ?? '',
    toolbar: props.toolbar ?? 
        [
            ["bold", "italic", "underline", "image"], // toggled buttons
            // [{ indent: "-1" }, { indent: "+1" }],
            [{ header: 1 }, { header: 2 }],
            [{ color: [] }],
            // ["bold", "italic", "underline", "strike", "indent"], // toggled buttons
            // ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            //             // outdent/indent
            [{ direction: "rtl" }], // text direction

            [{ size: ["small", false, "large", "huge"] }][ // custom dropdown
                { header: [1, 2, 3, 4, 5, 6, false] }
            ],
            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            [{ align: [] }],
            ["clean"] // remove formatting button
        ],
    modules: props.modules ??[
      {
          name: 'imageUploader',
          module: ImageUploader,
          options: {
              upload: file => {
                  return new Promise((resolve, reject) => {
                      if(props.uploadFn && props.uploadFn instanceof Function){
                          props.uploadFn(file,(url)=>{
                              resolve(url);
                          })
                      }else{
                        const reader = new FileReader();
                        reader.readAsDataURL(file)
                        reader.onload = function(){
                            resolve(this.result);
                        }   
                      }
                  })
              }
          }
      },
      {
          name: 'ImageResize',
          module: ImageResize,
      }
  ]
})

const emit = defineEmits()
watch(()=>state.content,(newVal)=>{
    emit('update:modelValue',newVal)
})



</script>

<template>
    <div :class="['tag-box',props.className??'']">
        <QuillEditor 
        v-model:content="state.content" 
        :contentType="props.contentType" 
        :toolbar="state.toolbar" 
        :modules="state.modules" 
        style="padding-bottom:100px;"
        ></QuillEditor>
    </div>
</template>

<style scoped>
.tag-item{margin: 5px;}
.tag-box{text-align: left;}
</style>
        