<script>
  import { reactive,ref } from 'vue'
  import util from '../../util/util'
  import md5 from 'js-md5'
  export default{
    props: ['accept','value','modelValue','baseUrl','pieceUpload','resKey'],
    setup(props,context){
      const state = reactive({
        urls: props.modelValue || [],
        accept: props.accept || '',
        baseUrl: props.baseUrl,
      })
      const uploadInfo = reactive({
        finish: false,
        uploading: false,
        allChunks: [],
        waiting: [],
        fileMd5: '',
      })
      const handlePreview = (info)=>{
        window.open(info.url)
      }
      const handleSuccess = (data)=>{
        if(data && props.pieceUpload){//普通文件上传，不需要手动添加文件信息
          let urlKey = props?.resKey?.urlKey || 'url'
          let nameKey = props?.resKey?.nameKey || 'name'
          state.urls.push({
            name: data[nameKey],
            url: data[urlKey],
            status: 'success',
            uid: data[nameKey],
            response: data
          })
        }
        console.log(`文件上传完成，上传结果：${JSON.stringify(state.urls)}`);
        console.log(state.urls);
        context.emit('update:modelValue',state.urls)
        context.emit('doLoading',false)
      }
      //创建xhrrequest
      const request = function(){
        let options = arguments[0];
        return new Promise((resolve,reject)=>{
          const xhr = new XMLHttpRequest()
          if(options.params){
            let params = ''
            for(let key in options.params){
              params += `${key}=${options.params[key]}&`
            }
            options.url += `?${params}`
          }
          xhr.open(options.method || 'post',options.url)
          xhr.responseType = 'json';
          //设置请求头
          if(options.headers){
            for(let key in options.headers){
              if(key == 'Content-Type' && options.headers[key] != 'multipart/form-data'){
                xhr.setRequestHeader(key,options.headers[key])
              }else if(key != 'Content-Type'){
                xhr.setRequestHeader(key,options.headers[key])
              }
            }
          }
          xhr.onload = ()=>{
            if(xhr.status === 200){
              resolve({
                status: 200,
                data: xhr.response
              })
            }else{
              reject(xhr.response)
            }
          }
          xhr.onerror = ()=>{
            reject(xhr.response)
          }
          //根据Content-Type类型设置请求体
          if(options.data){
            if((!options.headers || !options.headers['Content-Type']) && !(options.data instanceof FormData)){
              xhr.setRequestHeader('Content-Type','application/json')
              xhr.send(JSON.stringify(options.data))
            } else if(options.headers && options.headers['Content-Type'] === 'application/json'){
              xhr.send(JSON.stringify(options.data))
            }else if( options.headers && options.headers['Content-Type'] === 'multipart/form-data'){
              xhr.send(options.data)
            }else if( options.headers && options.headers['Content-Type'] === 'application/x-www-form-urlencoded'){
              let params = []
              for(let key in options.data){
                params.push(`${key}=${options.data[key]}`)
              }
              xhr.send(params.join('&'))
            }else{
              xhr.send(options.data)
            }
          }else{
            xhr.send()
          }
        })
      }

      const hasFinished = ()=>{
        return uploadInfo.uploadTimes == uploadInfo.waiting.length ? true : false
      }

      const doMerge = ()=>{
        request({
          ...props.pieceUpload.mergetFile,
          data: {
            uuid: uploadInfo.uid,
            UUID: uploadInfo.uid,
            fileMd5: uploadInfo.fileMd5,
            type: uploadInfo.type
          },
        }).then(res=>{
          state.urls.push({
            name: uploadInfo.name,
            status: 'success',
            url: res.data.url,
            uid: uploadInfo.uid,
            response: {
              name: uploadInfo.name,
              url: res.data.url
            }
          })
          handleSuccess();
        })
      }
      const taskQueue = ref([])
      let t,uploadingCount = 0;
      
      const uploadFile = (chunkInfo)=>{
        let formdata = new FormData();
        formdata.append('UUID',uploadInfo.uid)//文件唯一标识
        formdata.append('uuid',uploadInfo.uid)//文件唯一标识
        formdata.append('fileMd5',uploadInfo.fileMd5)//文件唯一标识
        formdata.append('chunk',chunkInfo.chunk)//当前分片下标
        formdata.append('chunks',uploadInfo.chunks)//总片数
        formdata.append('file',chunkInfo.chunkBlob)//文件二进制流
        formdata.append('chunkMd5',chunkInfo.chunkMd5)//分片md5
        formdata.append('chunkSize',chunkInfo.chunkBlob.size)//分片大小
        // formdata.append('lastModified',uploadInfo.file.lastModified)
        // formdata.append('lastModifiedDate',uploadInfo.file.lastModifiedDate)
        formdata.append('size',uploadInfo.fileSize)
        formdata.append('name',uploadInfo.name)
        formdata.append('type',uploadInfo.type)

        request({
          ...props.pieceUpload.upload,
          data: formdata,
        }).then(res=>{
          uploadInfo.uploadTimes++;
          uploadingCount--;
          if(hasFinished()){
            clearInterval(t)
            uploadInfo.uploading = false;
            taskQueue.value = [];
            uploadInfo.allChunks = [];
            uploadInfo.waiting = [];
            doMerge()
          }
        })
      }
      
      const start = ()=>{
        t = setInterval(()=>{
          //当前为上传状态且任务队列有内容且正在上传的数量不超过5
          if(uploadInfo.uploading && taskQueue.value.length > 0 && uploadingCount <= 5){
            uploadingCount++;
            let chunkInfo = taskQueue.value.shift();
            uploadFile(chunkInfo)
          }
        },1)
      }

      const upload = ()=>{
        uploadInfo.uploading = true;
        uploadInfo.uploadTimes = 0;
        if(uploadInfo.waiting.length > 0 ){
          start();
          for(let i = 0;i < uploadInfo.waiting.length;i++){
            let index = uploadInfo.waiting[i];
            getChunkData(index).then(chunkInfo=>{
              taskQueue.value.push({...chunkInfo,chunk: index})
              // uploadFile(chunkInfo,index)
            });
          }
        }else{
          doMerge()
        }

      }

      //计算Mdf
      const calculateMd5 = (blob, callback)=> {
        let fileReader = new FileReader();
        fileReader.onload = function(e){
          callback(md5(fileReader.result))
        }
        fileReader.readAsArrayBuffer(blob);
      }

      const getChunkData = (index)=>{
        return new Promise((resolve,reject)=>{
          let chunkBlob;
          if(index < uploadInfo.chunks){
            chunkBlob = uploadInfo.file.slice((index - 1) * uploadInfo.shardSize,index * uploadInfo.shardSize)
            calculateMd5(chunkBlob,(res)=>{
              resolve({
                chunkBlob,
                chunkMd5: res
              })
            })
          }else if(index == uploadInfo.chunks){
            chunkBlob = uploadInfo.file.slice((index - 1) * uploadInfo.shardSize,uploadInfo.fileSize)
            calculateMd5(chunkBlob,(res)=>{
              resolve({
                chunkBlob,
                chunkMd5: res
              })
            })
          }
        })
      }

      const checkFile = async ()=>{
        let formdata = new FormData();
        formdata.append('uuid',uploadInfo.uid)
        formdata.append('UUID',uploadInfo.uid)
        formdata.append('fileMd5',uploadInfo.fileMd5)
        let res = await request({
          ...props.pieceUpload.checkFile,
          data: formdata,
        })
        return res
      }
      const makeFileMd5 = (file)=>{//计算文件md5
          return new Promise((resolve,reject)=>{
            const fileReader = new FileReader();
            fileReader.readAsBinaryString(file)
            fileReader.onload = e=>{
              uploadInfo.fileMd5 = md5(e.target.result)
              if(props.pieceUpload.unique) uploadInfo.uid = md5(props.pieceUpload.unique+ e.target.result)
              resolve()
            }
            fileReader.onerror = error =>{
              reject(error)
            }
          })

      }

      const handleBefore = (file)=>{
        context.emit('doLoading',true)
        if(props.pieceUpload){//切片上传
          if(props?.pieceUpload?.handleBefore){//自定义切片上传方法
            props.pieceUpload.handleBefore.call(this,file)
          }else{
            uploadInfo.file = file
            uploadInfo.uid = util.getUUID();
            uploadInfo.shardSize = shard();//指定默认切片大小
            uploadInfo.fileSize = file.size;//文件大小
            uploadInfo.chunks = Math.ceil(file.size / uploadInfo.shardSize);//需要上传的次数
            uploadInfo.currentChunk = 1;
            let lastIndex = file.name.lastIndexOf('.')
            uploadInfo.name = file.name.substring(0,lastIndex)
            uploadInfo.type = file.name.substring(lastIndex)

            for(let i = 1;i <= uploadInfo.chunks;i++){//保存所有分块index
              uploadInfo.allChunks.push(i);
              uploadInfo.waiting.push(i);//默认所有块都待上传
            }
            makeFileMd5(file).then(async ()=>{
              //检查文件是否已经上传过
              let checkRes = await checkFile();
              if(checkRes.data.exist){//文件已存在
                state.urls.push({
                  name: file.name,
                  status: 'success',
                  url: checkRes.data.url,
                  uid: uploadInfo.uid,
                  response: {
                    name: uploadInfo.uid,
                    url: checkRes.data.url
                  }
                })
                handleSuccess();
              }else if(checkRes.data.uploaded){//文件未传完
                let unUploadChunks = [];
                for(let i = 1;i <= uploadInfo.chunks;i++){
                  if(!checkRes.data.chunkInfo[i]){//未上传的块
                    unUploadChunks.push(i)
                  }
                }
                uploadInfo.waiting = unUploadChunks;
                upload();
              }else{//未上传
                upload();
              }
            })

            function shard(){//计算切片大小
              let fileSize = file.size;
              if(props.pieceUpload.autoShard === false){//不需要计算切片大小
                return (props?.pieceUpload?.size||100)*1024*1024;
              }else{//默认自动进行计算切片大小
                let size = 1024*1024*100;
                if(fileSize < 1024*1024*10){//小于10M
                  size = 1024*1024*2;
                }else if(fileSize < 1024*1024*50){//小于50M
                  size = 1024*1024*5;
                }else if(fileSize < 1024*1024*100){//小于100M
                  size = 1024*1024*10;
                }else{//大于100M
                  size = 1024*1024*20;
                }
                return size;
              }
            }
          }
          return false;
        }
      }
      return {
        state,
        handlePreview,
        handleBefore,
        handleSuccess
      }
    },
    methods: {
  
    }
  }
  
  
  </script>
  
  <template>
    <el-upload
      class="upload-demo"
      :action="`${state.baseUrl}`"
      :headers="state.headers"
      :accept="state.accept"
      list-type="text"
      v-model:file-list="state.urls"
      :before-upload="handleBefore"
      :on-preview="handlePreview"
      :on-success="handleSuccess"
      >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
  </template>
  
  <style scoped>
  .upload-demo{text-align: left;}
  /* :deep(.el-upload-list__item-name){color:white} */
  /* :deep(.el-upload-list__item-name .el-icon){color:white} */
  </style>
  