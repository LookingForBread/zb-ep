import { createStore } from 'vuex' // 引入useStore 方法
import { getAllDict } from '@/api/data'
export default createStore({
    state: {
        user: {
            id: '',
            name: '',
            superAdmin: '',
        },
        permission: [],
        menuList: [],
        isCollapse: false,
        dict: null
    },
    mutations: {
        setValue(state,val){
            state.test = val;
        },
        setUser(state,data){
            state.user = {...state.user,...data};
        },
        setPermission(state,data){
            state.permission = data;
        },
        setMenu(state,data){
            state.menuList = data
        },
        setMenuExpand(state){
            state.isCollapse = !state.isCollapse
        },
        setDict(state,data){
            state.dict = data
        }
    },
    actions: {
        getDict({ commit }){
            return new Promise((resolve,reject)=>{
                getAllDict().then(res=>{
                    let dictData = {};
                    res.data.data.map(item=>{
                      dictData[item.dictType] = item.dataList.map(item1=>{
                        return {
                          label: item1.dictLabel,
                          value: isNaN(item1.dictValue) ? item1.dictValue: +item1.dictValue
                        }
                      })
                    })
                    commit('setDict',dictData)
                    resolve()
                  })
            })
        }
    }
})