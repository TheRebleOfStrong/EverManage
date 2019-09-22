<template>
  <a-layout style='height:100%;min-height: 600px;'>
    <a-layout-header style='background-color: transparent;'></a-layout-header>
    <a-layout-content>
      <div class="login_wrap">
        <div class="logo">{{logo}}</div>
        <a-form :form='loginInfo' @submit.prevent='submitInfo'>
          <a-form-item style='margin-bottom:24px;'>
            <a-input
             v-decorator="['userName',{rules:[
               {required:true,message:'请输入用户名'}
             ]}]"
             size='large' placeholder='请输入用户名'>
              <a-icon slot="prefix" type="user" style='color: #999;font-size: 16px;' />
            </a-input>
          </a-form-item>
          <a-form-item style='margin-bottom:24px;'>
            <a-input
             v-decorator="['password',{rules:[
               {required:true,message:'请输入密码'}
             ]}]"
             size='large' placeholder='请输入密码' type='password'>
              <a-icon slot="prefix" type="lock" style='color: #999;font-size: 16px;' />
            </a-input>
          </a-form-item>
          <a-button type='primary' style='width:100%' size='large' :loading='loading' htmlType='submit'>登录</a-button>
        </a-form>
      </div>
    </a-layout-content>
    <PublicFooter />
  </a-layout>
</template>

<script>
import PublicFooter from '@/components/PublicModule/footer';
import {loginApi} from '@/services/login/api';

export default {
  data() {
    return {
      logo:'Ever Manage',
      loginInfo:this.$form.createForm(this),
      loading:false,
    }
  },
  components:{
    PublicFooter,
  },
  methods:{
    //提交登录信息
    submitInfo() {
      if(this.loading){
        return;
      };
      this.loginInfo.validateFields((err, values) => {
        if(!err){
          const params = values;
          //密码加密
          params.password = btoa(params.password);
          this.loading = true;
          //提交登录接口
          loginApi(params).then(res => {
            this.loading = false;
            if(res.data.success){
              this.$message.success(res.data.message,1,() => {
                //跳转首页
                this.$router.push('/');
              });
              //获取token
              const token = res.headers['token'];
              //获取用户ID
              const userId = res.data.result['userId'];
              const username = res.data.result['username'];
              //存储store
              this.$store.commit('saveInfo',{
                userId,token,username
              });
            }else{
              this.$message.error(res.data.message,3);
            };
          }).catch(err => {
            this.$message.error(err,3);
          });
        };
      });
    },
  },
  mounted() {
    
  }
}
</script>

<style scoped="scoped" lang="less">
.login_wrap{
  width: 364px;
  margin: auto;
  .logo{
    font-size: 40px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 40px;
  }
}
</style>
