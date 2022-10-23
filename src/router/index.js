import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { localGet,hasPrimission } from '@/utils'
import store from '@/store'
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes
})

// router.beforeEach((to, from, next) => {
//   let token = localGet('token')
//   let whiteNames = ['login','error_401','error_404','error_500']
  
//   if(!token && to.name !== 'login'){
//     next({
//       name: 'login'
//     })
//   }else if(to.matched.length == 0){
//     next({
//       name: 'error_404'
//     })
//   }else if(whiteNames.includes(to.name)){
//     next()
//   }else if(!hasPrimission(to)){
//     next({
//       name: 'error_401'
//     })
//   }else if(!store?.state?.dict){
//     store.dispatch('getDict').then(user=>{
//       next()
//     }).catch(()=>{
//       next({
//         name: 'login'
//       })
//     })
//   }else{
//     next()
//   }
// })

export default router