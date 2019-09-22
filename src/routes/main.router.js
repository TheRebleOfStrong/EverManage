/* 普通用户 */
export default {
  path:'/home',
  component:() => import('~/home/index'),
  meta:{
    authority:['user']
  },
  children:[
    {
      path:'/home',
      name:'home',
      meta:{
        title:'首页'
      },
      component:() => import('~/home/main'),
    },{
      path:'/case',
      name:'case',
      meta:{
        title:'经典案例',
        power:['admin','user']
      },
      component:() => import('~/home/case'),
    },{
      path:'/news',
      name:'news',
      meta:{
        title:'最新资讯'
      },
      component:() => import('~/home/news'),
    },{
      path:'/about',
      name:'about',
      meta:{
        title:'关于我们'
      },
      component:() => import('~/home/about'),
    }
  ]
};