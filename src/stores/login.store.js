import {setAjaxHeaders} from '@/utils/http';

//需要存入本地的字段
export default {
  state:{
    userId:null,
    token:null,
    username:null,
    authority:null,
    userInfo:null,
  },
  getters:{
    
  },
  mutations:{
    saveInfo (state,info) {
      const storage = ['userId','token','username','authority'];
      //获取传递过来的全部字段
      const keys = Object.keys(info);setAjaxHeaders
      //存储store中
      keys.forEach(item => {
        state[item] = info[item];
        if(storage.indexOf(item) >= 0){
          localStorage.setItem(item,typeof info[item] === 'string' ? info[item] : JSON.stringify(info[item]) );
        };
      });
      setAjaxHeaders({
        token:state.token,
        userId:state.userId
      });
    },
    clearInfo (state) {
      //清空本地数据
      localStorage.clear();
      //清除store数据
      state['userId'] = null;
      state['token'] = null;
      state['username'] = null;
      state['authority'] = null;
      state['userInfo'] = null;
      
    }
  },
  actions:{
    
  }
};