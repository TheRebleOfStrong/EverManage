/* 管理员 */
export default {
  path:'/admin',
  redirect:{
    name:'admin',
  },
  component:() => import('~/admin/index'),
  meta:{
    authority:['admin'],
    title:'首页',
  },
  children:[
    {
      path:'index',
      name:'admin',
      meta:{
        title:'工作台'
      },
      component:() => import('~/admin/main'),
    },{
      path:'file',
      redirect:{
        name:'selfFile',
      },
      meta:{
        title:'文件管理',
      },
      component:() => import('~/admin/file'),
      children:[
        {
          path:'self',
          name:'selfFile',
          meta:{
            title:'我的文件',
          },
          component:() => import('~/admin/file'),
        },{
          path:'public',
          name:'publicFile',
          meta:{
            title:'公共文件',
          },
          component:() => import('~/admin/file'),
        }
      ]
    },{
      path:'system',
      redirect:{
        name:'selfSystem',
      },
      meta:{
        title:'系统管理',
      },
      component:() => import('~/admin/system'),
      children:[
        {
          path:'self',
          name:'selfSystem',
          meta:{
            title:'菜单配置',
          },
          component:() => import('~/admin/system'),
        }
      ]
    }
  ]
};