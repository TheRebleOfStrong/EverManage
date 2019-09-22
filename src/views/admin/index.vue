<template>
  <a-layout style="height:100%">
    <a-layout-sider :width='240' style='box-shadow:5px 0 5px rgba(0,0,0,.3);z-index:3' v-model='collapsed'>
      <div class='logo' @click='() => this.$router.push("/admin")'>
        {{logo}}
      </div>
      <AdminMenu />
    </a-layout-sider>
    <a-layout style='height:100%;'>
      <a-layout-header style='background:#fff;padding-left:0;box-shadow:0 5px 5px rgba(0,0,0,.1);z-index:2;'>
        <a-row>
          <a-col :span='6'>
            <a-icon :type='collapsed ? "menu-unfold" : "menu-fold"' class='trigger' @click='collapsed = !collapsed'></a-icon>
          </a-col>
          <a-col :span='18' style='text-align:right;'>
            {{username}}
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout>
        <div style='overflow-y:auto;height:100%;box-sizing:border-box;overflow-x:hidden'>
          <a-layout-content style='padding:24px;min-height:calc(100% - 69px);'>
            <BreadCrumb />
            <router-view />
          </a-layout-content>
          <PublicFooter />
        </div>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import PublicFooter from '@/components/PublicModule/footer';
import AdminMenu from '@/components/BaseModule/AdminMenu';
import BreadCrumb from '@/components/BaseModule/BreadCrumb';
export default {
  data() {
    return {
      logo:'EVER MANAGE',
      collapsed:false,
      username:this.$store.state.username,
    };
  },
  components:{
    PublicFooter,
    AdminMenu,
    BreadCrumb,
  },
  methods:{
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
  mounted() {
    const power = this.$route.meta.authority || this.$route.matched[0].meta.authority;
    this.checkAuthority(power);
  },
  watch:{
    '$route'(to,from) {
      const power = to.meta.authority || to.matched[0].meta.authority;
      this.checkAuthority(power);
    }
  }
}
</script>

<style lang='less' scoped='scoped'>
.logo{
  width:100%;
  height:64px;
  color:#fff;
  text-align:center;
  line-height:64px;
  font-size:20px;
  font-weight: 800;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  box-sizing:border-box;
  padding:0 20px;
  cursor: pointer;
}
.trigger{
  font-size:18px;padding:23px;cursor:pointer;
  &:hover{
    color:#1890ff;
  }
}

</style>
