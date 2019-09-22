import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {message} from 'ant-design-vue';
import store from '@/stores';

Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = '/api';
Vue.axios.headers = {};
Vue.axios.defaults.headers['Content-Type']= 'application/json;charset=UTF-8';
Vue.axios.defaults.timeout = 300000;

/* headers参数设置 */
export const setAjaxHeaders = (options) => {
  if(typeof options === 'object'){
    const keys = Object.keys(options);
    keys.length > 0 && keys.forEach(item => {
      Vue.axios.defaults.headers[item] = options[item];
    });
  };
};

/* axios拦截 */
Vue.axios.interceptors.response.use(
  response => {
    //更新token
    const token = response.headers.token;
    if(token){
      store.commit('saveInfo',{token});
    };
    return response;
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误(400)';
          break;
        case 401:
          err.message = '未授权，请重新登录(401)';
          break;
        case 403:
          err.message = '拒绝访问(403)';
          break;
        case 404:
          err.message = '请求出错(404)';
          break;
        case 408:
          err.message = '请求超时(408)';
          break;
        case 500:
          err.message = '服务器错误(500)';
          break;
        case 501:
          err.message = '服务未实现(501)';
          break;
        case 502:
          err.message = '网络错误(502)';
          break;
        case 503:
          err.message = '服务不可用(503)';
          break;
        case 504:
          err.message = '网络超时(504)';
          break;
        case 505:
          err.message = 'HTTP版本不受支持(505)';
          break;
        default:
          err.message = `连接出错(${err.response.status})!`;
      };
    }else{
      err.message='服务器服务器失败';
    };
    //提示错误信息
    // message.error(err.message,3);
    return Promise.reject(err);
  }
);

const http = {
  /* get */
  get:(url,params,options) => {
    return new Promise((resolve,reject) => {
      Vue.axios.get(url,{params,...options}).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  },
  /* post */
  post:(url,params,options={}) => {
    return new Promise((resolve,reject) => {
      Vue.axios.post(url,params,options).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  },
  /* put */
  put:(url,params,options={}) => {
    return new Promise((resolve,reject) => {
      Vue.axios.post(url,params,options).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  },
  /* delete */
  delete:(url,params,options={}) => {
    return new Promise((resolve,reject) => {
      Vue.axios.post(url,params,options).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }
};

export default http;