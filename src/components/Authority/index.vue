<template>
  <a-spin :spin='loading' />  
</template>

<script>
import {getRoleApi} from '@/services/login/api';
export default {
  data() {
    return {
      loading:false,
    }
  },
  methods:{
    //获取用户身份
    getRole(userId) {
      const power = ['user','admin'];
      const authority = localStorage.getItem('authority');
      const authorityJSON = JSON.parse(authority);
      if(typeof authority === 'string' && Array.isArray(authorityJSON) && power.indexOf(authorityJSON[0]) >= 0){
        this.$store.commit('saveInfo',{
          authority,
        });
        this.loading = false;
        //已有权限
        JSON.parse(authority)[0] === 'user' ? this.$router.replace('/home') : this.$router.replace('/admin');
      }else{
        getRoleApi({userId}).then(res => {
          this.loading = false;
          if(res.data.success){
           this.$store.commit('saveInfo',{
             authority:[res.data.result.authority]
           });
           if(res.data.result.authority === 'user'){
              this.$router.replace('/home');
           }else{
              this.$router.replace('/admin');
           };
         }else{
           //出错，清除数据，重新登录
           this.$message.error(err.message,3,() => {
             this.$store.commit('clearInfo');
             this.$router.replace('/login');
           });
         };
        }).catch(err => {
          this.loading = false;
          this.$message.error(err.message,3);
        })
      };
    },
  },
  mounted() {
    this.loading = true;
    const userId = localStorage.getItem('userId');
    if(userId){
      //获取用户身份：管理员||普通用户
      this.getRole(userId);
    }else{
      this.$router.push('/login');
    };
  }
}
</script>

<style>

</style>