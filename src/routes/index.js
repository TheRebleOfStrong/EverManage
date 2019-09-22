import Vue from 'vue';
import VueRouter from 'vue-router';
import MainRouter from './main.router';
import AdminRouter from './admin.router';
import LoginRouter from './login.router';
import ErrorRouter from './error.router';

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    {
      path:'/',
      component:() => import('@/components/Authority/index'),
    },
    LoginRouter,
    MainRouter,
    AdminRouter,
    ErrorRouter,
  ]
});

export default router;