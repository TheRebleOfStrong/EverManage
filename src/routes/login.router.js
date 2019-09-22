export default {
  path:'/login',
  name:'login',
  meta:{
    title:'登录',
    chekLogin:true,//不需校验登录状态
  },
  component:() => import('~/login/login'),
}