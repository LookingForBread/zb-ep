
import BaseFilter from '../src/components/BaseFilter'
import BaseTable from '../src/components/BaseTable'
import BaseModel from '../src/components/BaseModel'
import TagInput from '../src/components/TagInput'
import BaseSelect from '../src/components/BaseSelect'
import BaseControl from '../src/components/BaseControl'
import BaseTablePage from '../src/components/BaseTablePage'
import BaseChildrenPage from '../src/components/BaseChildrenPage'
import BaseRadioGroup from '../src/components/BaseRadioGroup'
import BaseUpload from '../src/components/BaseUpload'
import BaseTree from '../src/components/BaseTree'
import Editor from '../src/components/Editor'
import util from '../src/util/util.js'

const components = [ 
    {
        name: 'BaseRadioGroup',
        component: BaseRadioGroup
    },
    {
        name: 'BaseUpload',
        component: BaseUpload

    },
    {
        name: 'BaseTree',
        component: BaseTree
    },
    {
        name: 'BaseSelect',
        component: BaseSelect
    },
    {
        name: 'BaseFilter',
        component: BaseFilter
    },
    {
        name: 'BaseTable', 
        component: BaseTable
    },
    {
        name: 'BaseModel',
        component: BaseModel
    },
    {
        name: 'BaseControl',
        component: BaseControl
    },
    {
        name: 'BaseTablePage',
        component: BaseTablePage
    },
    {
        name: 'BaseChildrenPage',
        component: BaseChildrenPage
    },
    {
        name: 'TagInput',
        component: TagInput
    },
    {
        name: 'Editor',
        component: Editor
    }
 ]
const install = function (Vue,options) {
    components.forEach(item => {
        Vue.component(item.name, item.component)
    })
    Vue.config.globalProperties.$util = util;
}

export default {
    install,
    BaseFilter,
    BaseTable,
    BaseModel,
    BaseSelect,
    BaseControl,
    BaseTablePage,
    BaseChildrenPage,
    BaseRadioGroup,
    BaseUpload,
    BaseTree,
    TagInput,
    Editor
}


