export default{
  state:{
    count:0,
  },
  getters:{
    
  },
  mutations:{
    add(state) {
      state.count ++;
    },
    clear(state) {
      state.count = 0;
    }
  },
  actions:{
    
  }
};