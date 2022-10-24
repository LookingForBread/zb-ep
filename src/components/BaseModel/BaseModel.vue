<script>
  export default{
    props: {
      showModel: {
        type: Boolean,
        default: false,
      },
      modelOptions: {
        type: Array,
        default: () => [],
      },
      title: {
        type: String,
        default: "",
      },
      width: {
        type: String,
        default: "70%",
      },
      modelType: {
        type: String,
        default: "edit",
      },
      labelWidth: {
        type: String,
        default: "30%",
      },
      isInit: {
        type: Boolean,
        default: false,
      },
    },
    data(){
      return {
        loading: false,
        rules: {},
        formData: {},
        indexMap: {},
      }
    },
    created(){
      this.modelOptions.map((item,index)=>{
        if(item?.rules?.length > 0){
          this.rules[item.key] = item.rules
        }
        this.formData[item.key] = item.value ?? item.default;
        this.indexMap[item.key] = index
      })
    },
    watch: {
      showModel(newVal){
        this.loading = false
      },
      formData: {
        deep: true,
        handler: function(newVal){
          if(this.isInit) return;
          this.modelOptions.map(item=>{
            item.value = newVal[item.key]
          })
        }
      },
      modelOptions: {
        deep: true,
        handler: function(newVal){
          if(this.isInit){
            this.modelOptions.map(item=>{
              this.formData[item.key] = item.value || item.default;
            })
            this.$emit('changeInit',false)
          }
        }
      },
      isInit(newVal){
        this.modelOptions.map(item=>{
          this.formData[item.key] = item.value || item.default;
        })
        this.$emit('changeInit',false)
      },
    },
    methods: {
      close(){
        this.clearForm();
        this.$emit('dialogClose')
      },
      setValueByKey(key,value){
        this.formData[key] = value || '';
        this.modelOptions[this.indexMap[key]].value = value || '';
      },
      setObjectValue(data){
        for (let key in data) {
          this.setValueByKey(key,data[key])
        }
      },
      clearForm(){
        this.modelOptions.map(item=>{
          item.value = item.default || '';
          this.formData[item.key] = item.default || '';
        })
      },
      doLoading(state){
        this.loading = state;
      },
      async submit(){
        await this.$refs.form.validate((valid, fields) => {
          if (valid) {
            this.loading = true;
            let res = {};
            this.modelOptions.map(item=>{
              if(this.modelType == 'add'){
                res[item.key] = item.customFormatter?item.customFormatter.call(this,item.value):item.value
              }else if(this.modelType == 'edit' && !item.disEdit){
                res[item.key] = item.customFormatter?item.customFormatter.call(this,item.value):item.value
              }
            })
            this.$emit('dialogSubmit',res,()=>{
              this.loading = false;
            })
          } else {
            console.log('error submit!', fields)
          }
        })
      }
    }
  }
  
  
  </script>
  
  <template>
    <div>
      <el-dialog :close-on-click-modal="false" :width="width" @close="close" v-model="showModel" :title="title">
      <el-form ref="form" :label-width="labelWidth || '30%'" :model="formData" :rules="rules">
        <el-form-item v-show="!item.hide && !(modelType=='edit'&& item.disEdit) " :key="item.key" v-for="item in modelOptions" :prop="`${item.key}`" :label="item.label">
          <component @doLoading="doLoading" :disabled="item.disabled || modelType == 'view'" :style="{width: item.width || '70%'}" :is="item.tag" v-model="formData[item.key]" v-bind="item.attribute" v-on="item.event||{}" ></component>
        </el-form-item>
      </el-form>
      <template v-if="modelType != 'view'" #footer>
        <span class="dialog-footer">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" :loading="loading" @click="submit"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
    </div>
  </template>
  
  <style scoped>
  
  </style>
  