# BaseUpload - 上传

配置项参考 [el-upload](https://element-plus.gitee.io/zh-CN/component/upload.html "https://element-plus.gitee.io/zh-CN/component/upload.html")<br>
默认 list-type 为 text

## 普通上传配置示例：
```javascript
{
    tag: 'BaseUpload',
    label: '图片:',
    key: 'videoUrl',
    value: [],
    default: [],
    width: '60%',
    rules: [
        { required: true, message: '请上传图片', trigger: 'change' },
    ],
    attribute: {//属性
        limit: 1,
        ref: 'uploadRef', //仅支持命名uploadRef，可通过table的ref调用，  table.value.uploadRef
        accept: '.wmv,.asf,.asx,.mp4,.m4v', //支持的格式
        headers: {token: 'something'}, //定义请求头
        baseUrl: baseUrl+'/base/upload',//图片提交接口
        resKey: {//当前value数组[{}]中，对应的url/name
          urlKey: 'url',//默认值url，相同则可不传
          nameKey: 'name'//默认值name，相同则可不传
        },
    },
    customFormatter: function(data){//自定义提交表单时，格式化videoUrl字段
        if(data.length > 0) return data[0].response.url
    }
}
```
## 切片上传配置示例：
```javascript
{
    tag: 'BaseUpload',
    label: '视频:',
    key: 'videoUrl',
    value: [],
    default: [],
    width: '60%',
    rules: [
        { required: true, message: '请上传视频', trigger: 'change' },
    ],
    attribute: {//属性
        limit: 1,
        ref: 'uploadRef', //仅支持命名uploadRef，可通过table的ref调用，  table.value.uploadRef
        accept: '.wmv,.asf,.asx,.mp4,.m4v', //支持的格式
        resKey: {//当前文件数组[{}]中，对应的url/name
          urlKey: 'url',//默认值，url，name相同则可不传
          nameKey: 'name'
        },
        pieceUpload: {//切片上传， 不传则不切片
          unique: 'userId or others',//唯一id,
          checkFile:{//检查文件接口
            // method: 'post', //默认post
            url: 'http://localhost:3000/api/base/check',
            // headers: {//选填参数
            //   token: localGet('token'),
            // },
          },
          upload:{//上传文件接口，同检查接口
            url: 'http://localhost:3000/api/base/slice',
          },
          mergetFile:{//合并文件接口，同检查接口
            url: 'http://localhost:3000/api/base/compose',
          },
          autoShard: true,//是否自动进行分片大小计算，默认true
          size: 20,//autoShard=false,生效
        },
    },
    customFormatter: function(data){
        if(data.length > 0) return data[0].response.url
    }
}
```
## 上传视频，获取视频长度demo
```javascript
const table = ref();
//监听Upload组件的值
watch(()=>state.baseModelOptions[6].value,(newVal)=>{
  if(newVal.length > 0 && (newVal[0].percentage === undefined || newVal[0].percentage === 0 || newVal[0].percentage === 100)){
    var audioElement;
    if(newVal[0]?.response){//后台返回的值
      audioElement = new Audio(baseUrl + newVal[0]?.response.url);
    }else{
      var url = URL.createObjectURL(newVal[0].raw);//获取录音时长
      audioElement = new Audio(url);//audio也可获取视频的时长
    }
    setTimeout(()=>{
      table.value.modelRef.loading = true;
    })
    getAudioLength(audioElement).then(res=>{
      state.baseAdd.videoLength = res;
      state.baseUpdate.videoLength = res;
      if(newVal[0]?.response) table.value.modelRef.loading = false;
    }).catch(error=>{
      console.log(55555555,error);
      ElMessage.error('获取音频信息失败');
      table.value.modelRef.loading = false;
    })
  }else if(newVal.length == 0){
    table.value.modelRef.loading = false;
  }
},{deep:true})
```
## upload组件的赋值过程
```javascript
//修改操作时，upload组件的赋值过程，以确保upload组件回显正确
if (value instanceof Array) {
  //如果value为数组，自动格式化，并返回数组
  //resKey:{urlKey,nameKey} 对应了取值的key，默认为value[index].url
  item.value = value.map((item1) => {
    let url = item1[item.resKey ? item.resKey[urlKey] : "url"];
    let name = item1[item.resKey ? item.resKey[nameKey] : "name"];
    return {
      name: name,
      url: item.baseUrl + url,
      status: "success",
      uid: url,
      response: {
        url,
        name,
      },
    };
  });
} else if (value instanceof Object) {
  //如果是object，格式化并返回单记录数组
  let url = value[item.resKey ? item.resKey[urlKey] : "url"];
  let name = value[item.resKey ? item.resKey[nameKey] : "name"];
  item.value = [
    {
      name: name,
      url: item.baseUrl + url,
      status: "success",
      uid: url,
      response: {
        url,
        name,
      },
    },
  ];
} else {
  //如果是字符串，格式化并返回单记录数组
  item.value = [
    {
      name: data[item.aliasKey || item.key],
      url: item.baseUrl + data[item.aliasKey || item.key],
      status: "success",
      uid: data[item.aliasKey || item.key],
      response: {
        url: data[item.aliasKey || item.key],
        name: data[item.aliasKey || item.key],
      },
    },
  ];
}
```