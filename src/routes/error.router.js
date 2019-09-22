export default {
  path:'*',
  name:'404',
  meta:{
    title:'页面不存在'
  },
  component:() => import('../views/error/NotFound'),
};