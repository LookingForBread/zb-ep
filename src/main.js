import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@vueup/vue-quill/dist/vue-quill.snow.css';


import BaseFilter from '@/components/BaseFilter'
import BaseTable from '@/components/BaseTable'
import BaseModel from '@/components/BaseModel'
import TagInput from '@/components/TagInput'
import BaseSelect from '@/components/BaseSelect'
import BaseControl from '@/components/BaseControl'
import BaseTablePage from '@/components/BaseTablePage'
import BaseChildrenPage from '@/components/BaseChildrenPage'
import BaseRadioGroup from '@/components/BaseRadioGroup'
import BaseUpload from '@/components/BaseUpload'
import BaseTree from '@/components/BaseTree'
import Editor from '@/components/Editor'

const app = createApp(App)

app.use(ElementPlus, {
    locale: zhCn,
})
app.use(router)
app.use(store)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
app.component(key, component)
}
app.component('BaseFilter', BaseFilter);
app.component('BaseTable', BaseTable);
app.component('BaseModel', BaseModel);
app.component('TagInput', TagInput);
app.component('BaseSelect', BaseSelect);
app.component('BaseControl', BaseControl);
app.component('BaseTablePage', BaseTablePage);
app.component('BaseChildrenPage', BaseChildrenPage);
app.component('Editor', Editor);
app.component('BaseRadioGroup', BaseRadioGroup);
app.component('BaseUpload', BaseUpload);
app.component('BaseTree', BaseTree);


//全局函数-> 格式化时间
app.config.globalProperties.$formateDate = function (time, format_type) {
    let date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let res = "";
    switch (format_type) {
      case "yyyy-mm-dd":
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;
        res = year + "-" + month + "-" + day;
        break;
      case "yyyy-mm-dd hh:mm:ss":
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;
        res =
          year +
          "-" +
          month +
          "-" +
          day +
          " " +
          hour +
          ":" +
          minute +
          ":" +
          second;
        break;
      default:
        break;
    }
    return res;
  };

app.mount('#app')
