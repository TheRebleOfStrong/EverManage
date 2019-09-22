<template>
  <a-layout style='height: 100%;'>
    <a-layout-header style='color: #fff;'>
      <a-row>
        <a-col :span='12' style='font-size: 24px;font-weight: 800;cursor: pointer;'>
          <span @click='menuChange("/")' class='logo'>EVER MANAGE</span>
        </a-col>
        <a-col :span='12' style='text-align: right;height: 64px;'>
          <a-menu v-model='current' mode='horizontal' theme="dark" style='height:100%;line-height: 64px;'>
            <a-menu-item v-for='item in menu' :key='item.key' @click='menuChange(item.key)'>{{item.name}}</a-menu-item>
          </a-menu>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content>
      <router-view />
    </a-layout-content>
    <PublicFooter />
  </a-layout>
</template>

<script>
import PublicFooter from '@/components/PublicModule/footer.vue';
export default {
  data() {
    return {
      menu:[
        {key:'/home',name:'首页'},
        {key:'/case',name:'经典案例'},
        {key:'/news',name:'最新资讯'},
        {key:'/about',name:'关于我们'}
      ],
      current:[],
    }
  },
  methods:{
    menuChange(e) {
      this.current = [e];
      this.$router.push(e);
    },
    //权限验证
    checkAuthority(authority) {
      let power = localStorage.getItem('authority');
      if(typeof power !== 'string'){
        this.$router.push('/');
        return;
      };
      power = JSON.parse(power);
      this.$store.commit('saveInfo',{authority:power});
      if(authority.indexOf(power[0]) < 0){
        this.$router.push('/404');
      };
    }
  },
  components:{
    PublicFooter,
  },
  created() {
    this.current = [this.$route.path];
    const power = this.$route.meta.authority || this.$route.matched[0].meta.authority;
    this.checkAuthority(power);
  },
  watch:{
    '$route'(to,from) {
      this.current = [to.path];
      const power = to.meta.authority || to.matched[0].meta.authority;
      this.checkAuthority(power);
    }
  }
}
</script>

<style scoped="scoped" lang="less">
.logo{
  animation:flash 4s infinite;
  display:inline-block;
}

@keyframes flash{
  0%{
    transform:rotateY(0deg);
  }
  100%{
    transform:rotateY(360deg);
  }
}

</style>
