import Vue from 'vue';
import Vuex from 'vuex';
import loginStore from './login.store.js';
import adminStore from './admin.store.js';
import menuStore from './menu.store.js';

Vue.use(Vuex);

const store = (params) => {
  const initStore = {
    state:{},
    getters:{},
    mutations:{},
    actions:{}
  };
  const paramsArray = Object.keys(params);
  paramsArray.forEach(item => {
    const keys = Object.keys(params[item]);
    keys.forEach(key => {
      initStore[key] = {...initStore[key],...params[item][key]};
    });
  });
  return initStore;
};

export default new Vuex.Store({
  ...store({
    loginStore,
    adminStore,
    menuStore,
  })
});