# Editor - 富文本编辑器

基于 QuillEditor 封装，配置项参考 [quill](https://quilljs.com/docs/quickstart/ "https://quilljs.com/docs/quickstart/")<br>
<br/>

```javascript
动态组件配置示例：
{
    tag: 'Editor',
    label: '富文本:',
    className: 'className',
    value: '',
    default: '',
    contentType: 'html',//默认值，可不填写
    uploadFn: (file,callback)=>{//自行实现上传图片，上传后调用callback(url)}
    //toolbar: [],//工具栏，默认不需要传递
    //modules: [],//模块，默认不需要传递
}
```