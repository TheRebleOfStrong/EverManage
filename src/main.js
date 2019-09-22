import Vue from 'vue';
import router from './routes';
import store from './stores';
import App from './App.vue';
import Antd from 'ant-design-vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'ant-design-vue/dist/antd.css';
import '@/assets/css/reset.css';

Vue.use(Antd);
Vue.config.productionTip = false;

NProgress.configure({     
  easing: 'ease',  // 动画方式    
  speed: 500,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3, // 初始化时的最小百分比
  background:'#ff0000'
});

router.beforeEach((to, from, next) => {
  //每次切换页面时，调用进度条
  NProgress.start()

  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = `${to.meta.title} - Ever Manage`;
  };
  
  //获取本地token
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  const username = localStorage.getItem('username');
  
  if((!token || !userId || !username) && !to.meta.chekLogin){
    //若没有token，同时需要校验登录信息时，直接跳转登录页
    store.commit('clearInfo');
    next({
      path:'/login',
    });
  }else if(token && userId && username && !to.meta.chekLogin){
    store.commit('saveInfo',{token,userId,username});
    next();
  }else{
    next();
  };
});

//当路由进入后：关闭进度条
router.afterEach((to,from) => {  
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done();
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
