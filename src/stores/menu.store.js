//需要存入本地的字段
export default {
  state:{
    menu:[
      {
        key:'/admin/index',
        icon:'home',
        name:'工作台'
      },{
        key:'/admin/system',
        icon:'setting',
        name:'系统管理',
        child:[
          {
            key:'/admin/system/self',
            icon:null,
            name:'菜单配置',
          }
        ]
      },{
        key:'/admin/file',
        icon:'folder',
        name:'文件管理',
        child:[
          {
            key:'/admin/file/self',
            icon:null,
            name:'我的文件',
          },{
            key:'/admin/file/public',
            icon:null,
            name:'公共文件',
          }
        ]
      }
    ],
  },
  getters:{
    
  },
  mutations:{
    
  },
  actions:{
    
  }
};